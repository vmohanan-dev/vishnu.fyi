---
name: morning-brief
description: >
  Generate a prioritized morning brief by fanning out to parallel subagents that pull your
  calendar, Slack, tasks, and email, then composing a 5-minute read: what happened, today's
  schedule with prep, what needs a decision, and a ranked Top 3. Use when you say "morning
  brief", "what's my day look like", "brief me", or run it on a schedule.
---

# Morning Brief

Assemble a prioritized morning brief from your calendar, Slack, task manager, and email. An orchestrator fans out to parallel subagents that do the heavy pulls; only compact syntheses come back, so the main loop stays light. The output is a 5-minute read that starts the day with a ranked Top 3 and ends with everything that needs attention.

## Architecture (why it's shaped this way)

**Heavy pulls stay in subagents.** This orchestrator reads config, spawns subagents, receives compact syntheses, and composes the brief. Calendar pulls, Slack reads, task-manager queries, and email triage all happen *inside* subagent context and never hit the main loop. Target main-loop tool traffic per run: under ~80KB. If you find yourself reading raw channel dumps or large task payloads here, you're violating the architecture — push it into a subagent.

Subagent files live in `subagents/` next to this file: `signal.md` (Slack), `day-planner.md` (calendar + prep), `tasks.md` (task manager), `inbox.md` (email).

## Step 0: Load config

Read `~/.morning-brief/config.md`. If it doesn't exist, copy `config.example.md` (next to this file) to that path, tell the user where it is, and run with sensible defaults for this pass. Config keys:

- **Timezone** — IANA tz (e.g. `Europe/Dublin`). Used for all calendar parsing.
- **Identity** — your Slack display name / id. If absent, auto-detect via the Slack MCP's identity tool (`auth.test` or equivalent).
- **Key channels** — Slack channels to sweep.
- **Context directory** *(optional)* — your work brain (`~/work-brain/`, see the `work-brain` skill), or any folder of markdown project/context files. Enables project-pulse and negative-space checks, and supplies the VIP list (`context/people.md`). Omit for a pure briefing.
- **Task manager** — `todoist` | `github` | `asana` | `md`, plus the project/list ids or save path.
- **auto_execute** — `false` (default) proposes every task change; `true` enables hands-off auto-add / auto-date / cleanup.
- **Personal calendar** *(optional)* — a secondary calendar to overlay as private time blocks.

## Step 1: Discover capabilities

Inventory which MCPs are available this run: a Slack MCP (search + read), a calendar MCP, an email MCP, a task-manager MCP. **Each source is optional** — a brief with only a calendar still works; it just has fewer sections. Skip any subagent whose capability is absent and note it once in the footer (`ℹ️ No email MCP — inbox section skipped`), never as a per-section failure.

## Step 2: Continuity — read the last brief

Glob `~/.morning-brief/logs/*-brief.md` and read the most recent one dated before today (not necessarily yesterday — runs get missed). Use it four ways:

- **Gap:** days since that brief (normally 1). Subagent lookback window = gap, capped at 7 days. If gap ≥ 3, frame "What happened" as a catch-up.
- **Carry-forward:** unresolved Top 3 items and risks reappear with their age ("3rd day flagged").
- **Dedupe:** don't repeat "what happened" headlines the last brief already carried, unless something moved.
- **Mode:** if today is Monday (or the first working day after a long weekend/holiday), run **WEEKLY MODE** (last week in review + week-ahead look). Otherwise **DAILY MODE**.

## Step 3: Read context (only if a context directory is configured)

Read the project/context markdown files in the configured directory in parallel — they're for cross-reference, not enumeration. They unlock:

- **Project-pulse:** one line per project — documented state vs. observed signal — flagging drift (weekly mode).
- **Negative-space:** if a project or a priority person has been silent unusually long, name it. Read the priority-person list from the context files; never hardcode names here.

Skip this step entirely with no context directory.

## Step 4: Spawn subagents in parallel

Use the Task tool with `subagent_type: "general-purpose"`, all in one message so they run concurrently. Each reads its own prompt file and returns a compact synthesis only.

1. **Signal** — `subagents/signal.md`. Today, lookback (gap, cap 7), your identity, key channels. Returns priority threads, waiting-on-you items, decisions, silences, new tasks surfaced.
2. **Day planner** — `subagents/day-planner.md`. Today, timezone, personal calendar (if any). Returns schedule + key-meeting prep + free-time budget.
3. **Tasks** — `subagents/tasks.md`. Today, task-manager config. Returns due today / overdue / newly-added / stale, plus candidate lists for the auto-execute steps.
4. **Inbox** — `subagents/inbox.md`. Today, email account. Returns must-reply / worth-a-glance / propose-archive with permalinks.

**No silent subagent failures.** Every subagent ends with `STATUS: ok` or `STATUS: failed — [reason]`. If one returns nothing or a failure, render its section as `⚠ [section] failed — [reason]. Section incomplete.` An empty section must mean "nothing to report", never "something broke".

## Step 5: Drafts (compose with slack-er)

If the `slack-er` skill is installed, invoke it with the signal subagent's "waiting on you" + priority-thread targets to draft replies (drafts only, never sends), and fold its drafts-ready list into the brief. If slack-er isn't available, skip the Drafts section — do not reimplement drafting here.

## Step 6: Task actions (propose-only unless auto_execute)

Collect new tasks surfaced by the signal subagent plus time-sensitive actions from meeting context.

- **Default (`auto_execute: false`):** render every task change under "Proposed changes" with stable numbering so the user can reply "apply 1, 3". Nothing is written.
- **`auto_execute: true`:** auto-add new tasks (dedupe against existing by source permalink first), auto-date undated tasks by priority, and clean up to 3 garbled titles per run. Log each action. Completes / moves / drops are *always* proposed, never executed.

If a context directory is configured: cited, factual updates (a decision landed, a date moved) are **proposed** as appends to the relevant context file — shown as a diff, never written or committed automatically.

## Step 7: Compose the brief

Density target: readable in 5 minutes, under ~60 lines. Skip any empty section (except a failed subagent's ⚠ line). If over budget, trim in this order: Around-the-org → reading pile → email worth-a-glance detail → praise items. Never trim Top 3, Risks, or Today's schedule.

```
**MORNING BRIEF — [Date, Day]**   (prefix "WEEKLY " in weekly mode)

**🎯 Top 3 for today**
[Three ranked items from calendar, due/overdue tasks, things waiting on you, time-sensitive risks. One line of reasoning each. Right-size against the day-planner's free-time budget. Carried-forward items show their age.]

**⚠️ Risks & blockers**
[What needs a decision today, what's blocked, what's about to miss a window. Skip if nothing.]

**📅 Today's schedule**
[Chronological. Real meetings + personal time blocks (time only, never named). Prep links for key meetings. Flag conflicts with ⚠.]

**⚡ What happened**
[3–5 single-sentence headlines: **[Headline]** — context. [Source](permalink). Include negative-space callouts.]

**✍️ Drafts ready** *(only if slack-er ran)*
[One line per draft: who | where | what it says. ⚠ items first with their commits-you-to note.]

**✅ Tasks**
[Due today, overdue, stale, near-due look-ahead. If overdue >10, show the 5 most urgent and propose one triage block.]

**Proposed changes** *(or auto-execute log if auto_execute)*
[Numbered, stable across runs. ✅ complete / 🔀 move / 🗑️ drop / ✏️ update — each with evidence.]

**📧 Email** *(only if an email MCP is present)*
[Stats line, then must-reply / worth-a-glance / propose-archive. Skip if inbox is at zero.]

**📊 Project pulse** *(weekly mode + context dir only)*
[One line per project: documented vs observed. Flag drift.]

**🏠 Personal** / **📚 Reading pile** *(Friday)* / **🏢 Around the org**
[Optional. Skip if nothing.]
```

## Step 8: Save and present

Save the full brief to `~/.morning-brief/logs/YYYY-MM-DD-brief.md` (overwrite if it exists). Present the brief text in the conversation. End on the last section — no greeting, sign-off, or meta-commentary.

## Style

- Lead with action. Top 3 first.
- Bold sparingly — action items, risks, headlines, section headers only.
- Headlines over paragraphs in "What happened." Don't duplicate between Top 3 and What happened.
- Cite or omit: every Slack/email callout needs a working permalink.
- No weekend scheduling — never place or propose work on Sat/Sun.

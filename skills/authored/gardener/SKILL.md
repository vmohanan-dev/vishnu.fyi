---
name: gardener
description: >
  End-of-day sweep that tends your work brain. Pulls the day's signal (meeting notes, Slack
  delta, docs, merged PRs), classifies findings into tier-1 facts vs tier-2 judgement, and
  appends or proposes updates to your work brain — never edits or deletes. Use when you say
  "tend my work brain", "run the gardener", "/gardener", or want an end-of-day enrichment pass.
---

# Gardener

An end-of-day sweep that keeps your work brain current. It mines the day's freshest signal for material the morning didn't see, classifies it with strict **tier discipline**, and writes it back. This run produces **writes, not a report** — its deliverables are appends/proposals and a short receipt, not prose.

Requires a work brain (see the `work-brain` skill). Reads its `context/` and `projects/` to know what's already known, and writes back into the right files.

## Tier discipline (the core idea)

Every finding is one of three kinds:

- **Tier 1 — fact.** A decision landed, a date moved, a person changed role/ownership. Must be citable (permalink, meeting + date, or doc + link). → appends to the right file.
- **Tier 2 — judgement / drift.** A priority shift, a scope opinion, or a contradiction with what's already in the brain (a date slipped, an owner changed). → queued as a **proposal**, never written directly.
- **Neither** — noise. Dropped.

**Edits and deletes never happen here.** When in doubt, queue. A fact you can't cite doesn't get appended — queue it flagged `_(unverified)_` or drop it.

## Step 0: Config & write posture

Read the work brain location (default `~/work-brain/`) and these flags (from `~/work-brain/config.md` or the work brain root):
- `auto_append` — default **false**. False: propose tier-1 facts too (confirm before any write). True: tier-1 cited facts append automatically; tier-2 still only proposes.
- `git` — default **off**. If on, commit only the files this run touched (never `-A` outside the brain). Off: write files, leave versioning to the user.

## Step 1: Read the baseline

Read the most recent brief/log in the brain, the project `STATUS.md` files, and `context/people.md` + `context/strategy.md` (for names and project keywords). Everything already in those is **known** — only hunt the delta. Dedupe every candidate against what's already there before proposing or appending.

## Step 2: Sweep the day's signal (capability-based — use whatever MCPs exist)

Run these in parallel; skip any whose tool is absent.

- **Meeting notes** — for today's meetings, pull notes/transcripts from the meeting-notes MCP(s). Extract facts, contradictions, and judgement observations.
- **Slack delta** — activity *after* the last brief's timestamp only, in the key channels. Mining for brain material (facts/drift/judgement) — not replies or tasks; those are other skills' jobs.
- **Docs** — recently updated docs touching the user's projects (by project keywords from strategy). Read a doc only when title/snippet suggests real relevance.
- **Merged PRs** — if the user tracks engineering work, sweep merged PRs for shipped features / stalled work on active commitments.

## Step 3: Classify and route

Sort every finding into the three tiers above. For tier-1 facts, identify the **correct target**: a `projects/<name>/STATUS.md` for project facts, `context/people.md` for personnel facts. Append one dated, cited line into the right section — append-only, never restructure. For tier-2, queue to `log/pending-proposals.md` (one line: `[date] [proposal|drift] [target file] — [sentence] — [citation]`), deduped.

If `auto_append: false`, present tier-1 facts as proposals too rather than writing them.

## Step 4: Commit (only if `git: on`)

Commit only the files this run touched, message `gardener: [YYYY-MM-DD]`. If the files were already dirty before the run, skip and note it. Never stage anything outside the work brain.

## Step 5: Receipt (≤6 lines, nothing else)

```
🌱 Gardener [date]: appended [N] facts ([files]) / proposed [N], queued [M] proposals+drift, [committed | not versioned | skipped — dirty].
Swept: [X] meetings, [Y] channels w/ delta, [Z] docs, [R] PR sources (or "unavailable").
```

Plus at most one ⚠ line, only if something genuinely can't wait for the morning brief.

## Guardrails

- **Writes over prose.** If you're composing more than the receipt, you've drifted into being a briefing. Stop.
- **Cite everything** appended or queued, or don't.
- **Tier discipline.** Facts append (or propose); judgement queues; edits/deletes never happen.
- **Don't re-capture.** No task creation, no reply drafting, no inbox triage — other skills own those.

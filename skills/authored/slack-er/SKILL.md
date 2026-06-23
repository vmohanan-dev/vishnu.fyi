---
name: slack-er
description: >
  Find Slack @mentions, DMs, and active threads that genuinely need a reply from you, and
  create draft responses in your voice (drafts only, never sends). Use when you say "slack-er",
  "draft my slack replies", "anything I need to reply to on slack", "check my mentions and
  draft replies", or "clear my slack backlog".
---

# Slack-er (reply drafter)

You triage the user's Slack and draft replies for the messages that genuinely need one. Drafts sit in Slack for the user to review and send. You discover who the user is, learn their voice, find what's waiting on them, and draft only where a reply is actually warranted.

**CRITICAL: Never send. Only create drafts. No reactions, no posts, no edits, no message sends of any kind.** A sent message is a hard failure of this skill.

## Step 0: Prerequisites — gate before doing anything

This skill needs a Slack MCP server exposing three capabilities:

1. **Message search** across public + private channels and DMs (with sort, time-window, and pagination).
2. **Thread / channel read.**
3. **Draft creation** — a primitive that creates an *unsent* draft in Slack (e.g. a `*_send_message_draft` tool).

The draft primitive is non-negotiable. Many Slack MCP servers can only *post* messages. **If no draft-creation tool is available, stop immediately and tell the user — never fall back to posting.** The whole safety model is "drafts only"; without a draft tool there is no safe action to take.

## Step 1: Identify the user

Call the MCP's identity tool (`auth.test` or equivalent) to get the authenticated user's **Slack ID** and **display name**. Everything downstream keys off these:

- Mention searches use the discovered Slack ID (`<@USERID>`).
- Dedup drops the user's own messages.
- Plain-name disambiguation (Step 2B) compares against the discovered display name.

If the MCP cannot report identity, ask the user once for their Slack ID + name and cache it in `~/.slack-er/identity.md`.

## Step 2: Load voice

Voice fidelity is what makes drafts worth sending. Source it like this:

1. **If a voice profile exists** (prefer `~/work-brain/context/voice.md` if you have a work brain, else `~/.slack-er/voice.md`), it is primary. Follow it exactly (register, banned phrases, get-to-the-ask-in-line-one). Only if a draft needs vocabulary the guide doesn't cover (project shorthand, in-joke register with a specific person) skim recent messages *in that specific conversation* for tone. The guide is primary — no general history trawl.

2. **If it does not exist (first run)**, ask the user: *"Want me to study your last 30 days of Slack messages and build a voice profile? It makes drafts sound like you."* (Honour any window they name instead.)
   - If yes: read a representative sample of the user's own recent sent messages across DMs and channels, extract register, sentence length, openers, sign-offs, banned/over-used phrases, and how formality shifts by audience. Write it to `~/.slack-er/voice.md` as a concise style guide. Confirm the path so they can edit it.
   - If no: derive voice ad hoc from recent messages in each target conversation for this run only, and skip writing the file.

## Step 3: Discover targets

Run searches with `sort: timestamp`, `sort_dir: desc` (newest first), `after` = lookback start, `include_context: true`, `limit: 20`. **Default lookback: 24 hours**, unless the user gave an argument ("3d", "since Monday").

**Paginate.** If a page returns a `next` cursor and the oldest result is still inside the lookback window, fetch the next page (cap 3 pages per search). Never assume one page is everything — a short first page can silently drop a full day of DMs, including direct asks.

### 3A: Mention and DM searches

1. **Channel @mentions:** `query: <@USERID>`, `channel_types: public_channel,private_channel`
2. **DMs / group DMs:** `query: to:<@USERID>`, `channel_types: im,mpim`
3. **DM @mentions:** `query: <@USERID>`, `channel_types: im,mpim`
4. **Threads the user is in:** `query: is:thread from:<@USERID>`, `channel_types: public_channel,private_channel`, 7-day window. Read each thread; keep it only if there are messages inside the lookback window the user hasn't addressed.

Deduplicate by channel + message timestamp across all searches.

### 3B: Plain-name supplement

@-mention searches miss asks by name — e.g. the user is added to a channel and someone writes "hey [name] - wdyt?".

- Search for the user's **first name** (plain text), lookback window, `sort: timestamp`.
- Drop hits already containing `<@USERID>` (covered) and hits from the user themselves.
- **Disambiguation is mandatory — common names have namesakes.** Read the surrounding context. Draft only if it's clearly the user: a channel they're a member of, their known workstreams/projects, or a thread they're already in. If ambiguous: no draft — list it under "Ambiguous" with a permalink.

Deduplicate against 3A.

### 3C: Active-conversation sweep

The `to:` operator misses some group DMs entirely. Sweep conversations the user participates in directly:

- Search `from:<@USERID>`, `channel_types: im,mpim`, last 7 days, `sort_dir: desc`, paginate (cap 2 pages).
- Collect the unique conversation IDs.
- Read each conversation not already covered; keep messages inside the lookback window.

**Known coverage gap (don't pretend otherwise):** a group DM where the user has never posted, with no @-mention and no plain-name hit, is invisible to every search available here (e.g. a new GDM opening with "Hi All"). The fix is for the user to post once in it — that brings it into this sweep permanently. State this gap in the report only when a missed conversation is actually being discussed, not as daily boilerplate.

## Step 4: For each target, decide

- **4a. Read context.** Read the full thread; for DMs/top-level, read recent history.
- **4b. Skip if already replied — and respect closing acks.** The user has posted since the message arrived → skip. If the conversation's latest message is a status or ack ("will report back", "thanks", "sounds good", "ty", emoji-grade replies), the thread is **closed**: a draft requires a *new* ask arriving after the user's last message. If a draft already exists, flag it as a **stale draft to discard** — they handled it elsewhere.
- **4c. Skip if no written reply is needed.** FYI / announcement / status; praise or social (suggest an emoji reaction in the output instead — do NOT add it); self-contained messages; thread noise with no ask directed at them. The test: *would leaving this on read be rude or a dropped ball?* No → skip.
- **4d. Staleness guard.** Message older than 3 days: only draft if the thread is still live or the ask is still open; the draft acknowledges the delay briefly, no grovelling. If the moment has clearly passed, skip and list under "Skipped — stale" as a judgement call for the user.
- **4e. Skip if it's live elsewhere.** If the same topic is already being handled in another thread the user is active in, or is someone else's action to drive, skip the duplicate and note it. Don't draft a parallel response to a conversation resolving somewhere else.

## Step 5: Compose drafts

- The user's voice per Step 2: concise, ask/answer in the first line, match the conversation's energy, no corporate filler. DMs extra short.
- **Substance or skip — no holding replies.** Don't draft "I'll get back to you" / "will send a summary later" / "will give feedback once X lands". If the substance is available, draft the substantive reply. If it isn't, skip the conversation (list under "Skipped" with what's missing) — never draft a deferral to fill a slot.
- **Strip volunteered follow-ups.** Cut self-assigned commitments the message doesn't require — "I'll write it up", "happy to do a one-pager", "let me pull the numbers" — unless the user has already signalled they'll do that work. End on the point, not a volunteered task.
- **Don't assert mechanisms as fact.** Never state how a system, policy, or acronym works unless it's verified. Where the draft would assert a mechanism, phrase it as the question the user would ask instead. Invented confidence reads as authoritative and gets sent.
- **Stakes flag — and on decision threads, tradeoff not conclusion.** If the message is decision-shaped (scope, dates, ownership, money), still draft — but mark it ⚠ in the output with one line on what sending it commits the user to. If a VIP list exists (prefer `~/work-brain/context/people.md`, else `~/.slack-er/vips.md`) and the sender is on it, also mark ⚠. On threads with 3+ stakeholders, lay out the options/tradeoff and leave the call to the user rather than asserting a strong recommendation — a confident drafter conclusion can quietly override the user's own judgement on the highest-stakes threads.
- One draft per conversation per run — consolidate multiple new asks in the same thread into one reply.

## Step 6: Log the run

Before posting any drafts, write a log to `~/.slack-er/logs/YYYY-MM-DD-HHMMSS.md` (timestamp = run start) so a later review can diff drafts against what the user actually sent. One section per draft:

```markdown
# Slack-er run YYYY-MM-DD HH:MM

## Draft: #channel-name (or DM: Person Name)
- **thread_ts:** 1234567890.123456
- **channel_id:** C0123ABC
- **draft_created:** ISO-8601 timestamp
- **target:** who asked / what they asked
- **permalink:** https://...

### Draft text
> the actual draft content

### Outcome
_(filled by a later review)_
```

If the run produced zero drafts, still write the file with the header and `No drafts this run.` — it confirms the run happened. Write the file first; if the write fails, continue to drafts anyway (logging never gates delivery).

## Step 7: Post drafts

Create each draft with the MCP's draft tool (`channel_id`, `thread_ts` if threaded, `message`). Drafts only — see Step 0.

## Step 8: Report

Return only this:

```
## ✍️ Drafts ready (N)

- [Who | where | one-line: what they asked → what the draft says] [permalink]
- ⚠ [Same format, + "sending commits you to X — review properly"]

## Stale drafts to discard
- [Who | where | already handled on (date)] — or "none"

## Suggested emoji-only
- [Who | where | suggested reaction] — or omit section

## Ambiguous (which person?)
- [Where | one line | permalink] — or omit section

## Skipped — stale
- [Who | where | why the moment passed] — or omit section

STATUS: ok | failed — [reason]
```

## Rules

- Drafts only. Any send is a hard failure.
- Cite or omit: every line in the report needs a permalink.
- Full report under 30 lines.

---
name: work-brain
description: >
  Build your work brain — a file-based context substrate (who you are, your people, strategy,
  voice, rituals, projects) that other skills read from. Interviews you section by section and
  scaffolds the directory. Use when you say "set up my work brain", "build my work brain",
  "/work-brain", or want a second brain for your role that your AI skills can use.
---

# Work Brain

A work brain is the **context substrate** your other skills run on. Skills are verbs (draft my Slack, brief me, run capex); the work brain is the nouns they act on — who you are, who your people are, what you're working on, how you write. Build it once and your skills stop guessing: slack-er reads your voice from it, morning-brief reads your VIP list and project state, capex reads your roster, gardener tends it.

This skill **builds** the brain by interviewing you. It does not tend it over time — that's the `gardener` skill's job.

## What it produces

```
~/work-brain/                      # or a path you choose
  context/
    profile.md      # who you are, role, scope of ownership
    people.md       # your network + a VIP / priority list (skills read this)
    strategy.md     # goals, priorities, current bets
    voice.md        # how you write — register, openers, banned phrases
    rituals.md      # recurring cadences / ceremonies
    references.md   # glossary, acronyms, key links
  projects/
    <first-project>/STATUS.md       # living state for one project
  log/                              # run logs + continuity (skills write here)
  outputs/                          # generated artifacts
```

## Step 1: Locate

Default to `~/work-brain/`. If it already exists, switch to **update mode**: don't overwrite — read what's there, and only fill gaps or append to sections the interview surfaces. Otherwise create it fresh.

## Step 2: Interview (grilling pattern)

Run a grilling pass — **one question at a time, with a recommended answer for each**, and explore anything answerable without asking (e.g. infer voice from the user's recent writing if available). Treat "idk" / "TBD" as first-class: capture it as an open line in the file, don't push. Walk the sections in this order, because later ones lean on earlier ones:

1. **Profile** — role, team, scope of ownership, how long, what success looks like for them this quarter.
2. **People** — their manager, peers, key collaborators, and a **VIP list**: who, if they message, should always surface. (slack-er and morning-brief read this to prioritise.) Note how each name is spelled and any namesakes to disambiguate.
3. **Strategy** — the 2–4 bets/priorities they're driving, and what's explicitly *not* a priority.
4. **Voice** — how they write: register (direct? warm?), sentence rhythm, openers, sign-offs, banned phrases. If you can read their recent messages/docs, draft this and have them correct it rather than asking cold.
5. **Rituals** — recurring ceremonies and cadences (standups, sprint boundaries, reviews, 1:1s) with their timing.
6. **References** — glossary of acronyms/jargon, and links to the handful of docs they reference constantly.
7. **First project** — pick the one they're most active on; capture its current status, owner, open threads, and next milestone into `projects/<name>/STATUS.md`.

## Step 3: Scaffold and seed

Create the directory structure. Write each `context/` file from the interview — concise, skimmable, with `_(open)_` markers where the user said "idk" so gaps are visible, not faked. Seed the first project's `STATUS.md`. Leave `log/` and `outputs/` empty with a one-line README each explaining what writes there.

Each file starts with a one-line purpose comment so the brain is self-documenting.

## Step 4: Wire up the apps

Tell the user which installed skills now read from the brain, and confirm the paths exist:

- **slack-er** → `context/voice.md` (drafting voice), `context/people.md` (VIP prioritisation).
- **morning-brief** → set its `context_dir` to this brain: reads `context/people.md` for VIPs and `projects/` for project-pulse + negative-space.
- **capex** → can keep its roster/features here under `context/` if the user wants one home.
- **gardener** → tends this brain (tier-1 facts append, tier-2 proposals).

Each of those skills works without a work brain; pointing them at one makes them sharper. If a skill isn't installed, just note it.

## Step 5: Close

Show the tree you created and a one-line summary of each `context/` file. Point the user at the files to edit directly, and at `gardener` to keep it current. End there — no filler.

## Rules

- Never invent facts to fill a section. "idk" becomes an `_(open)_` line.
- Update mode never overwrites — read, gap-fill, append.
- Keep `context/` files short. A brain you can skim gets maintained; a brain that's an essay rots.

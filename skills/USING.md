# Skills I use

A running list of the Claude Code skills I lean on, beyond the ones I authored. Names and short descriptions only — no implementation detail.

## Authored by me

One system, not separate scripts: **work-brain** is the substrate; the rest are apps that read and write it.

- **work-brain** — The context substrate the other skills read from (profile, people/VIPs, strategy, voice, projects). A grilling interview scaffolds it. ([source](authored/work-brain/SKILL.md))
- **gardener** — End-of-day sweep that tends the work brain: classifies the day's signal into cited facts vs judgement, then appends or proposes updates. Never edits or deletes. ([source](authored/gardener/SKILL.md))
- **slack-er** — Triages my Slack and drafts replies in my voice for messages that genuinely need one. Drafts only, never sends. ([source](authored/slack-er/SKILL.md))
- **morning-brief** — Orchestrator that fans out to parallel subagents (calendar, Slack, tasks, email) and composes a 5-minute brief: ranked Top 3, schedule with prep, and what needs a decision. ([source](authored/morning-brief/SKILL.md))
- **capex** — Monthly CapEx report for an engineering team: pulls merged PRs from GitHub, classifies into capitalizable features, weights by PR size, and proposes per-engineer percentages. ([source](authored/capex/SKILL.md))

## Public skills I use

From [mattpocock/skills](https://github.com/mattpocock/skills) — vendored and kept current via `sync.sh`:

- **grill-me / grilling** — Relentless interview to stress-test a plan before building.
- **grill-with-docs** — Grilling that updates project docs as decisions land.
- **handoff** — Compacts a working session into a handoff for the next agent.
- **tdd** — Red-green-refactor loop for building features test-first.
- **prototype** — Throwaway prototypes to feel out a design before committing.
- **to-prd** — Turns working context into a PRD.
- **writing-beats / writing-fragments / writing-shape** — Assemble an article from raw material, beat by beat.
- **improve-codebase-architecture** — Finds refactoring and consolidation opportunities.

## Team & internal tooling I use

Internal HubSpot skills I use day-to-day (described generically; not published here):

- **prd-builder** — Drafts a PRD through section-by-section intake, treating "idk"/"TBD" as first-class open questions instead of forcing answers.
- **prd-reviewer** — Reviews a draft PRD for structural, logical, and strategic rigor plus handoff-readiness, returning a scored punch list.
- **storytelling** — Narrative-structure frameworks for persuasive business communication: decks, proposals, strategy docs. *(Created by a colleague.)*
- **deslop** — Detects and removes AI writing tropes from prose.

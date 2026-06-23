---
name: capex
description: >
  Generate a monthly CapEx report for an engineering team. Fetches each engineer's merged
  PRs from GitHub, classifies the work into capitalizable features, weights by PR size,
  proposes per-engineer capitalization percentages, and flags new features and status
  changes. Use when the user says /capex, "do capex", "capex for this month", "monthly
  capex", or mentions capital expenditure reporting.
---

# CapEx Report Generator

Generate a structured monthly CapEx submission report for an engineering team. Pulls merged PRs from GitHub, classifies them into capitalizable features, proposes percentages, and flags items that need attention before submission. Nothing is submitted — the output is a report the user reviews.

## Usage

```
/capex <YYYY-MM>
```

Example: `/capex 2026-04`

## Step 0: Load configuration

The skill needs two files describing *your* team. If you keep a work brain (see the `work-brain` skill), it reads them from `~/work-brain/context/` when present; otherwise from `~/.capex/`. On first run, if neither exists, copy the templates in this skill's `references/` folder to `~/.capex/` and tell the user to fill them in:

- `~/.capex/team-roster.md` — engineer names and their GitHub handles.
- `~/.capex/features.md` — the registry of capitalizable features: name, status (In Development / In Beta / In Production), and the keywords/repos that signal each one. Also the rules for what counts as non-capitalizable.

Optional config (top of `team-roster.md` or `~/.capex/config.md`):
- `github_host` — default `github.com` (set to an enterprise host if needed).
- `max_capex` — cap on total CapEx % per engineer (default `90` — no engineer does zero non-capitalizable work; many finance policies require this).
- `output_path` — where reports are saved (default `~/.capex/reports/`).

Read both reference files before doing anything else.

## Step 1: Parse inputs

Read the month argument (`YYYY-MM`) and compute the range: first day to last day of that month. Load the roster into memory.

## Step 2: Fetch PRs for all engineers

For each engineer in the roster, fetch merged PRs:

```bash
GH_HOST=<github_host> gh search prs \
    --author={github_handle} \
    --merged \
    --merged-at={YYYY-MM-01}..{YYYY-MM-DD} \
    --limit=100 \
    --json title,repository,url,number
```

Where `{YYYY-MM-DD}` is the last day of the month. Notes on `gh search prs` (these flags trip people up):
- Use the `GH_HOST` env var, **not** `--hostname` — that flag doesn't exist on `search`.
- Use `--merged-at` for the date range, **not** `--merged` (which is a boolean).
- Available JSON fields: `title, repository, url, number, body, state, createdAt, closedAt, updatedAt, author, labels, assignees, commentsCount` (no additions/deletions here).

For PR size (used in weighting), fetch individually **only for ambiguous cases** to avoid rate limits:

```bash
GH_HOST=<github_host> gh pr view {url} --json additions,deletions
```

Skip size fetching when PR count alone gives a clear enough signal.

## Step 3: Classify each PR

Assign each PR to exactly one category:

- **A. Known CapEx feature** — match against `features.md` using repo name, PR title, and description. The keywords/signals and typical-engineers hints help, but don't rely on them exclusively — an engineer can work on any feature.
- **B. Non-CapEx work** — clearly refactoring, post-production bug fixes, dependency bumps, doc changes, or other non-capitalizable work per the rules in `features.md`.
- **C. Unknown / new feature** — looks like new feature development but matches no known feature. Flag these for the user to map to an existing feature or register a new one.

Classification priority:
1. Repo name is the strongest signal.
2. PR title keywords refine within a repo.
3. PR description body is the tiebreaker for ambiguous cases.
4. The typical-engineers hint is soft, not a hard rule.

## Step 4: Calculate percentages

For each engineer:
1. Count total merged PRs in the month.
2. Weight PRs by size (`additions + deletions`), using buckets:
   - Small (<50 lines): weight 1
   - Medium (50–200): weight 2
   - Large (200–500): weight 3
   - XL (500+): weight 5
3. Weighted % per feature = `(sum of weights for that feature's PRs) / (sum of all weights) × 100`.
4. Non-CapEx PRs reduce the total; the remaining CapEx % is the sum of feature percentages.
5. Cap total CapEx at `max_capex` (default 90%).
6. Round each feature to the nearest 5% (no false precision).
7. If rounding pushes the total over the cap, reduce the largest bucket.

## Step 5: Generate output

Produce the report in the format below and save it to `{output_path}/{YYYY-MM}/report.md`.

```markdown
# CapEx Report — {Team Name}
**Period:** {Month Year} | **Generated:** {today}

## Submission Summary
| Engineer | Total CapEx % | Feature Breakdown |
|----------|--------------|-------------------|
| {Name} | {XX}% | Feature A: XX%, Feature B: XX% |

## Feature Glossary
| Feature | Status | Description |
|---------|--------|-------------|
| {Feature} | {In Development / In Beta / In Production} | {1–2 sentences} |

Include every feature that appears in any breakdown. Descriptions must be **customer-facing** — write them as if explaining the feature to a Finance reviewer or external auditor. Describe what the user can do, not internal implementation. No repo names, no internal tooling names, no acronyms. "What does the customer get?", not "what did the engineer build?"

## Engineer Details
### {Name} (@{handle})
**Merged PRs:** {count} | **Proposed CapEx:** {XX}%
| Feature | PRs | Weighted % | Key PRs |
|---------|-----|-----------|---------|
| {Feature} | {n} | {XX}% | [title](url), [title](url) |
| Non-CapEx | {n} | — | [title](url) |

## ⚠ Action Items
### New Feature Requests
{PRs that map to no known feature — repo, title, URL, suggested feature name.}
### Feature Status Validation
{Features whose status may need updating, with evidence.}
### Roster Notes
{Engineers with zero PRs or other anomalies.}
```

## Step 6: Flag action items

- **New feature requests:** "Unknown / new feature" PRs that don't map to the registry — the user registers these before submission.
- **Feature status validation:** scan for status-change signals —
  - "In Development" with PRs mentioning beta / rollout / gate → maybe ready for "In Beta".
  - "In Beta" with PRs mentioning GA / 100% / production / launch → maybe ready for "In Production".
  - A feature with zero PRs across everyone for 2+ months → maybe needs a sunset review.
- **Roster check:** flag any engineer with zero merged PRs (could be OOO, could be a data issue).

## After generating

1. Present the Submission Summary table first so the user can scan it.
2. Ask whether any percentages need manual adjustment before saving.
3. Surface the feature-status-validation items.
4. Save the final report to the output path.

## Maintenance

When the user confirms team or feature changes, update `~/.capex/team-roster.md` or `~/.capex/features.md` — always confirm before writing.

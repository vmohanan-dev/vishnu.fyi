# skills

My [Claude Code](https://claude.com/claude-code) skills — the ones I author and the ones I vendor from elsewhere. Lives in this repo so it can be showcased on the site; `sync.sh` symlinks every skill into `~/.claude/skills/` so they load in every Claude session, not just when working here.

## Layout

| Path | What |
|---|---|
| `authored/` | Skills I wrote. The source of truth — edit here, commit, PR. |
| `sources.tsv` | Vendored skills: upstream repo + subpath for each. |
| `sync.sh` | Clones/pulls each source and symlinks `authored/*` + vendored skills into `~/.claude/skills/`. |
| `.sources/` | Local clones of upstream repos (gitignored, recreated by `sync.sh`). |

## Usage

```bash
./skills/sync.sh         # relink everything; pull latest for vendored skills
```

Existing real directories at a target are moved to `~/.claude/skills-backup-<timestamp>/` before being replaced with a symlink — nothing is deleted.

## Adding a skill

- **Authored:** drop a `<name>/SKILL.md` under `authored/`, run `./skills/sync.sh`.
- **Vendored:** add a `name <TAB> repo_url <TAB> subpath` row to `sources.tsv`, run `./skills/sync.sh`.

## Vendored sources

- [mattpocock/skills](https://github.com/mattpocock/skills) — `grill-me`, `grill-with-docs`, `handoff`, `tdd`, `teach`, `prototype`, `to-prd`, `writing-beats`, `writing-fragments`, `writing-shape`, `improve-codebase-architecture`. Update all of them with `./skills/sync.sh`.

# pm-peer

A Claude Code skill for the full PM document lifecycle: research, brainstorm, write PRDs, and review them for handoff readiness.

## Requirements

[Claude Code](https://claude.ai/code) CLI (the skill uses bundled template files and won't work as a plain prompt).

## Installation

Copy the `pm-peer` folder into your Claude skills directory:

```bash
cp -r pm-peer ~/.claude/skills/
```

Or, to scope it to a single project:

```bash
cp -r pm-peer /your/project/.claude/skills/
```

Restart Claude Code. The skill loads automatically — trigger it with `/pm-peer`.

## First-time setup

Open `references/voice-and-style.md` and fill in the three placeholders before your first session:

| Placeholder | What to put |
|-------------|-------------|
| `[Your role]` | Your title — e.g. "Senior PM", "Group PM" |
| `[Your primary persona]` | Who you're building for — e.g. "SMB marketing manager trying to automate campaigns" |
| `[Your company's values]` | 2–3 principles that shape your decisions — e.g. "customer obsession, move fast, default to shipping" |

If you skip this, the skill will ask you on first use.

## What it does

| Mode | Trigger |
|------|---------|
| **Research** | "how does X work", "does our product have X" |
| **Plan** | "brainstorm", "challenge this plan", "find the 10-star version" |
| **Write** | "write a PRD", "start a product doc", "help me write a brief" |
| **Review** | "review this PRD", "is this ready for eng?" |

Templates included: Lightweight Problem Brief, Eng-Ready PRD, Classic Product 1-Pager, Growth Experiment, or bring your own.

## Customizing

- **Templates**: edit or replace any file in `references/templates/`
- **Voice**: update `references/voice-and-style.md` to match your writing style
- **Research tools**: the skill lists common tools (Confluence, Gong, Productboard, etc.) as examples — wire in your own MCP tools or skills by following the delegation pattern in the Research section of `SKILL.md`

---

Built by [Vishnu Mohanan](https://vishnu.fyi)

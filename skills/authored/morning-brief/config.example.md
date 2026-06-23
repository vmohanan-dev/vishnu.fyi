# Morning Brief config

Copy this to `~/.morning-brief/config.md` and edit. Everything except timezone is optional — the brief includes only the sections it has tools and config for.

```yaml
# Required
timezone: Europe/Dublin          # IANA timezone for calendar parsing

# Identity (auto-detected via the Slack MCP if omitted)
slack_name: yourname             # your Slack display name / id

# Slack channels to sweep (needs a Slack MCP)
key_channels:
  - team-channel-one
  - team-channel-two

# Optional project-memory layer — a folder of markdown project/context files.
# Enables project-pulse + negative-space. Omit for a pure briefing.
# May contain a VIP list (priority people) the signal + inbox subagents read.
context_dir: ~/work-brain        # your work brain (see the work-brain skill); or leave unset

# Task manager (needs the matching MCP, except md)
task_manager:
  type: todoist                  # todoist | github | asana | md
  projects:                      # ids/lists to read (todoist/asana)
    - "PROJECT_ID_1"
  # github_repo: owner/repo      # if type: github
  # save_path: ~/tasks/          # if type: md

# Write safety
auto_execute: false              # false = propose every task change (default)
                                 # true  = auto-add / auto-date / cleanup hands-off

# Optional secondary calendar, overlaid as private time blocks (never named)
personal_calendar: you@personal.com

# Where brief logs are written (default below)
log_path: ~/.morning-brief/logs/
```

## Notes

- **Meeting notes:** if a meeting-notes MCP is connected, the signal subagent enriches yesterday's meetings automatically. Connect more than one and it queries all of them.
- **Email:** if an email MCP is connected, the inbox section appears; otherwise it's skipped.
- **Drafts:** if the `slack-er` skill is installed, the brief drafts replies (drafts only) for items waiting on you.

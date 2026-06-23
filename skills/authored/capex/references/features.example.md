# CapEx Feature Registry — example template

Copy this to `~/.capex/features.md` and replace with your team's capitalizable features. Use the exact feature names your finance/CapEx process expects.

## Active Features

| Feature | Status | Typical Engineers | Keywords / Signals |
|---------|--------|-------------------|--------------------|
| Billing & Payments | In Production | Engineer One | billing, payment, invoice, checkout, subscription, stripe |
| Search & Relevance | In Beta | Engineer Two | search, ranking, relevance, index, query |
| Notifications | In Development | Engineer Three | notification, push, email digest, alert, webhook |
| Mobile App | In Development | Engineer Three | mobile, ios, android, react-native |
| Platform / Infra | In Production | Engineer Four | infra, pipeline, deploy, observability, migration |

## Non-capitalizable work (category B)

PRs that are clearly the following do **not** count toward CapEx:
- Refactoring with no new user-facing capability
- Post-production bug fixes
- Dependency bumps / version upgrades
- Documentation-only changes
- Test-only changes, CI config, tooling
- Routine maintenance and chores

When a PR mixes feature work and maintenance, classify by its primary intent.

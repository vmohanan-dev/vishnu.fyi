# vishnu.fyi

Personal portfolio. Live at [vishnu.fyi](https://vishnu.fyi).

## Stack

- Next.js 15 (App Router), TypeScript
- Tailwind CSS + shadcn/ui
- Deployed on Vercel

## Dev

```bash
npm_config_registry=https://registry.npmjs.org npm run dev
```

Opens at http://localhost:3000. Always run build before pushing:

```bash
npm_config_registry=https://registry.npmjs.org npm run build
```

## Structure

| Route | Purpose |
|---|---|
| `/` | Hero + project grid |
| `/about` | Bio, experience, skills |
| `/project/[slug]` | Project deep-dive pages |
| `/case-study/[slug]` | Password-gated case studies |

Key data files:

| File | Purpose |
|---|---|
| `src/data/projects.ts` | Project cards for homepage grid |
| `src/data/project-content.tsx` | Full content for deep-dive pages |
| `src/data/case-studies.ts` | Gated case study registry |

## Deploy

Push to `main` → Vercel auto-deploys.

Env vars required in Vercel dashboard: `CASE_STUDY_TINES_PASSWORD`.

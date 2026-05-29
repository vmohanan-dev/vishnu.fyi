# vishnu.fyi

Personal portfolio for Vishnu Mohanan. Live at [vishnu.fyi](https://vishnu.fyi).

## Stack

- **Next.js 15** (App Router), TypeScript
- **Tailwind CSS** + **shadcn/ui** (zinc base, light mode only)
- **Geist** font via `next/font/google` — body and headings
- **Geist Mono** — tech stack badges, monospace labels
- Deployed on **Vercel**, source at `github.com/vmohanan-dev/vishnu.fyi`

## Dev

```bash
npm run dev      # http://localhost:3000
npm run build    # production build (run before pushing)
npm run lint
```

## Adding a project

Edit [src/data/projects.ts](src/data/projects.ts). Add an entry to the `projects` array:

```ts
{
  title: "Project Name",
  description: "One or two sentences. No filler. No AI slop.",
  stack: ["Next.js", "Supabase"],
  url: "https://...",
  featured: true, // optional
}
```

Drop a project image in `/public/projects/[slug].png` if you have one.

## Adding a case study

1. Add an entry to [src/data/case-studies.ts](src/data/case-studies.ts)
2. Set `passwordEnvKey` to a new env var name (e.g. `CASE_STUDY_ACME_PASSWORD`)
3. Add the env var in `.env.local` (local) and Vercel dashboard (production)
4. The route `/case-study/[slug]` is created automatically

## Design rules

- **No AI slop.** No filler phrases: "passionate about", "leveraging AI", "cutting-edge", "seamlessly", "robust", "comprehensive", "transformative".
- **Light mode only.** No dark mode. No `dark:` Tailwind classes.
- **Minimal color.** Near-black (`zinc-900`) on white. `zinc-500` for secondary text. `zinc-400` for labels. No accent colors.
- **Typography hierarchy** via size and weight only — not decorative elements, gradients, or icons as decoration.
- **Geist Mono for badges** — tech stack labels, section headers (`text-xs font-mono uppercase tracking-widest`).

## Env vars

| Variable | Purpose |
|---|---|
| `CASE_STUDY_TINES_PASSWORD` | Password for `/case-study/tines` |

## Deploy

Push to `main` → Vercel auto-deploys. No manual steps.

CV PDF lives at `/public/vishnu-mohanan-cv.pdf`. Update by replacing the file and pushing.

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
npm_config_registry=https://registry.npmjs.org npm run dev    # http://localhost:3000
npm_config_registry=https://registry.npmjs.org npm run build  # always run before pushing
```

Note: always prefix npm/npx with `npm_config_registry=https://registry.npmjs.org` — the machine defaults to the HubSpot internal registry.

## Site structure

| Route | Purpose |
|---|---|
| `/` | Hero + project grid |
| `/about` | Bio, experience, skills |
| `/project/[slug]` | Public project deep-dive pages |
| `/case-study/[slug]` | Password-gated case studies (Tines only) |

## Key data files

| File | Purpose |
|---|---|
| `src/data/projects.ts` | Project card data for the homepage grid |
| `src/data/project-content.tsx` | Full content for project deep-dive pages |
| `src/data/case-studies.ts` | Gated case study registry (Tines) |
| `src/components/ProjectScreenshot.tsx` | Screenshot display components |

## Adding a project card

Edit `src/data/projects.ts`. Add a `slug` field if the project has a deep-dive page:

```ts
{
  title: "Project Name",
  description: "One or two sentences. No filler. No AI slop.",
  stack: ["Next.js", "Supabase"],
  url: "https://...",        // optional external link
  slug: "project-slug",     // optional — links to /project/[slug]
  featured: true,           // optional
}
```

## Adding a project deep-dive page

1. Add a content entry to `src/data/project-content.tsx` — follow the existing pattern (a React component with the narrative, plus a `ProjectPage` entry in the `projectPages` array)
2. Drop screenshots into `/public/projects/[slug]/`
3. Use `Screenshot` (single image with browser chrome) or `BeforeAfter` (stacked before/after) or `MobileScreenshots` (portrait grid, no chrome) from `src/components/ProjectScreenshot.tsx`
4. The route `/project/[slug]` is created automatically

## Screenshot components

```tsx
import { Screenshot, BeforeAfter, MobileScreenshots } from "@/components/ProjectScreenshot";

// Single web screenshot — browser chrome + URL bar
<Screenshot src="/projects/foo/screen.png" alt="..." url="app.hubspot.com/..." caption="..." />

// Before/after pair — stacked, each with browser chrome
<BeforeAfter url="app.hubspot.com/..." before={{ src, alt, caption }} after={{ src, alt, caption }} />

// Mobile portrait screenshots — no chrome, grid layout
<MobileScreenshots screens={[{ src, alt, caption }, ...]} />
```

## Adding a gated case study

1. Add an entry to `src/data/case-studies.ts`
2. Set `passwordEnvKey` to a new env var name (e.g. `CASE_STUDY_ACME_PASSWORD`)
3. Add the env var in `.env.local` (local) and Vercel dashboard (production)
4. The route `/case-study/[slug]` is created automatically

## Design rules

- **No AI slop.** No filler phrases: "passionate about", "leveraging AI", "cutting-edge", "seamlessly", "robust", "comprehensive", "transformative".
- **Light mode only.** No dark mode. No `dark:` Tailwind classes.
- **Minimal color.** Near-black (`zinc-900`) on white. `zinc-500` for secondary text. `zinc-400` for labels. No accent colors.
- **Typography hierarchy** via size and weight only — not decorative elements, gradients, or icons as decoration.
- **Geist Mono for badges** — tech stack labels, section headers (`text-xs font-mono uppercase tracking-widest`).

## Writing voice

- Lead with the thesis, not the setup. First sentence states the argument or problem.
- Em dashes are banned. Use hyphens with spaces ( - ), commas, or restructure.
- Mix short punchy sentences with longer supporting ones. Don't let every sentence be the same length.
- No trailing summaries at the end of sections.
- No hedging: "might", "could", "perhaps". State things plainly.
- No: "Furthermore", "Additionally", "Moreover", "It is important to note".
- Bold sparingly — key data points and critical emphasis only, not in-sentence decoration.
- Call out problems directly. Don't soften with qualifiers.

## Env vars

| Variable | Purpose |
|---|---|
| `CASE_STUDY_TINES_PASSWORD` | Password for `/case-study/tines` |

## Deploy

Push to `main` → Vercel auto-deploys. No manual steps.

CV PDF lives at `/public/vishnu-mohanan-cv.pdf`. Update by replacing the file and pushing.

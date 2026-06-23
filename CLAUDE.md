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
| `/components` | Component library (noindex — internal reference, linked from Footer) |

## Key data files

| File | Purpose |
|---|---|
| `src/data/projects.ts` | Project card data for the homepage grid |
| `src/data/project-content.tsx` | Full content for project deep-dive pages |
| `src/data/case-studies.ts` | Gated case study registry (Tines) |
| `src/components/ProjectScreenshot.tsx` | Screenshot display components |
| `Tines/TINES_CONTEXT.md` | Tines case study planning doc — all decisions, structure, thesis, and prerequisites. Read before working on `/case-study/tines`. Gitignored. |

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
3. Use `Screenshot` (single image with browser chrome) or `BeforeAfter` (side-by-side before/after, click to expand) or `MobileScreenshots` (portrait grid, no chrome) from `src/components/ProjectScreenshot.tsx`
4. The route `/project/[slug]` is created automatically

## Screenshot components

```tsx
import { Screenshot, BeforeAfter, MobileScreenshots, Video } from "@/components/ProjectScreenshot";
import { Metrics } from "@/components/Metrics";

// Single web screenshot — browser chrome + URL bar
<Screenshot src="/projects/foo/screen.png" alt="..." url="app.hubspot.com/..." caption="..." />

// Before/after pair — side by side, each with browser chrome, click to expand
<BeforeAfter url="app.hubspot.com/..." before={{ src, alt, caption }} after={{ src, alt, caption }} />

// Mobile portrait screenshots — no chrome, grid layout
<MobileScreenshots screens={[{ src, alt, caption }, ...]} />

// Inline video player (controls, optional poster) — screen recordings / demos
<Video src="/projects/foo/demo.mp4" caption="..." poster="..." />

// Row of hard numbers (value + mono label, 2–4 items)
<Metrics items={[{ value: "1:09", label: "Time to trace" }, ...]} />
```

## Adding a gated case study

1. Add an entry to `src/data/case-studies.ts` (slug, title, company, `passwordEnvKey`, description)
2. Set `passwordEnvKey` to a new env var name (e.g. `CASE_STUDY_ACME_PASSWORD`)
3. Add the env var in `.env.local` (local) and Vercel dashboard (production)
4. Add the full page content to `src/data/case-study-content.tsx` — a React component plus a `CaseStudyPage` entry in the `caseStudyPages` array (same pattern as `project-content.tsx`). The authed page renders this via `getCaseStudyPage`; without an entry it falls back to a "Content coming soon" stub.
5. The route `/case-study/[slug]` is created automatically

## Workflow rules

**Component system:** Always check `/components` (`src/app/components/page.tsx`) before building any UI. If a pattern or component is needed that isn't documented there, add it to `/components` first, then implement it. This is the single source of truth for every visual pattern on the site.

**Career reference:** Always read `career-reference.md` (gitignored, at project root) before working on any case study, project deep-dive, or adding a new project to the site. This is the single source of truth for career history — metrics, rationale, POV, and impact. It is kept up to date with:
- Metrics and impact for existing projects
- Rationale, approach, and how problems were solved
- New projects shipped, in progress, or with demonstrated impact

Never invent or estimate metrics. If something isn't in `career-reference.md`, ask before writing it.

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

import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Components — vishnu.fyi",
  robots: { index: false, follow: false },
};

const sectionDivider = "border-t border-zinc-200 pt-12 mt-12 mb-4";

export default function ComponentsPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 max-w-4xl mx-auto px-8 py-16">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-2">Component Library</h1>
          <p className="text-zinc-500">All UI components currently in use across the site.</p>
        </div>

        {/* Table of Contents */}
        <nav className="mb-16 p-6 border border-zinc-100 rounded-lg bg-zinc-50">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">Contents</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
            <a href="#typography"         className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Typography</a>
            <a href="#nav"                className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Nav</a>
            <a href="#hero"               className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Hero</a>
            <a href="#footer"             className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Footer</a>
            <a href="#button"             className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Button</a>
            <a href="#badge"              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Badge</a>
            <a href="#input"              className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Input</a>
            <a href="#project-card"       className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">ProjectCard</a>
            <a href="#project-grid"       className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">ProjectGrid</a>
            <a href="#experience-row"     className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Experience row</a>
            <a href="#case-study-gate"    className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">CaseStudyGate</a>
            <a href="#screenshot"         className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Screenshot</a>
            <a href="#before-after"       className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">BeforeAfter</a>
            <a href="#mobile-screenshots" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">MobileScreenshots</a>
            <a href="#card"               className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Card</a>
            <a href="#color-tokens"       className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Color tokens</a>
            <a href="#favicon"            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Favicon</a>
          </div>
        </nav>

        {/* ── Typography ── */}
        <div id="typography" className="mb-4">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Typography</p>
        </div>
        <div className="space-y-6 mb-16 p-8 border border-zinc-100 rounded-lg">
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-2">h1 — text-4xl font-semibold tracking-tight</p>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 leading-tight">I ship product.<br />I also write the code.</h1>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-2">h2 — text-3xl font-semibold tracking-tight</p>
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">About</h2>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-2">Section label — text-xs font-mono uppercase tracking-widest text-zinc-400</p>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Work</p>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-2">Eyebrow — text-sm font-mono text-zinc-500</p>
            <p className="text-sm text-zinc-500 font-mono">Senior PM · Builder</p>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-2">Body large — text-lg text-zinc-500 leading-relaxed</p>
            <p className="text-lg text-zinc-500 leading-relaxed max-w-xl">Nine years in product at HubSpot across AI, mobile, and growth. I use AI-native workflows to go from idea to working product — and I build my own tools in the gaps.</p>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-2">Body — text-sm text-zinc-500 leading-relaxed</p>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xl">Built mobile reporting from scratch, targeting the sales leader persona. Grew to 55k weekly users. Led the React Native migration that cut feature delivery time by 3×.</p>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-2">Label / meta — text-xs font-mono text-zinc-400</p>
            <p className="text-xs font-mono text-zinc-400">2021 – 2024</p>
          </div>
        </div>

        {/* ── Nav ── */}
        <div id="nav" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Nav</p>
        </div>
        <div className="mb-16 border border-zinc-100 rounded-lg overflow-hidden">
          <header className="w-full border-b border-zinc-100">
            <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
              <a href="#" className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">Vishnu Mohanan</a>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">Work</a>
                <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">About</a>
              </div>
            </nav>
          </header>
        </div>

        {/* ── Hero ── */}
        <div id="hero" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Hero</p>
        </div>
        <div className="mb-16 border border-zinc-100 rounded-lg overflow-hidden">
          <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
            <p className="text-sm text-zinc-500 mb-4 font-mono">Senior PM · Builder</p>
            <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-5 leading-tight">
              I ship product.<br />I also write the code.
            </h1>
            <p className="text-lg text-zinc-500 mb-8 max-w-xl leading-relaxed">
              Nine years in product at HubSpot across AI, mobile, and growth. I use AI-native workflows to go from idea to working product — and I build my own tools in the gaps.
            </p>
            <div className="flex items-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium border border-zinc-200 bg-white hover:bg-zinc-50 h-9 px-3 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </button>
              <a href="#" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors">GitHub ↗</a>
            </div>
          </section>
        </div>

        {/* ── Footer ── */}
        <div id="footer" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Footer</p>
        </div>
        <div className="mb-16 border border-zinc-100 rounded-lg overflow-hidden">
          <footer className="border-t border-zinc-100">
            <div className="max-w-3xl mx-auto px-6 py-8">
              <p className="text-sm text-zinc-400">Built with Next.js and Claude Code.</p>
            </div>
          </footer>
        </div>

        {/* ── Button ── */}
        <div id="button" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Button</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg space-y-8">
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-4">Variants</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">Default</button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 transition-colors">Outline</button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 transition-colors">Secondary</button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition-colors">Destructive</button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 hover:bg-zinc-100 text-zinc-900 transition-colors">Ghost</button>
              <button className="inline-flex items-center justify-center text-sm font-medium text-zinc-900 underline-offset-4 hover:underline">Link</button>
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-4">Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">Large</button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">Default</button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-3 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">Small</button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 w-10 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              </button>
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-4">States</p>
            <div className="flex flex-wrap items-center gap-3">
              <button disabled className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-zinc-900 text-white opacity-50 cursor-not-allowed">Disabled</button>
              <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium h-9 px-3 border border-zinc-200 bg-white text-zinc-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download CV
              </button>
            </div>
          </div>
        </div>

        {/* ── Badge ── */}
        <div id="badge" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Badge</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg space-y-6">
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-4">shadcn variants</p>
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center rounded-full border border-transparent bg-zinc-900 text-white px-2.5 py-0.5 text-xs font-semibold">default</div>
              <div className="inline-flex items-center rounded-full border border-transparent bg-zinc-100 text-zinc-900 px-2.5 py-0.5 text-xs font-semibold">secondary</div>
              <div className="inline-flex items-center rounded-full border border-transparent bg-red-600 text-white px-2.5 py-0.5 text-xs font-semibold">destructive</div>
              <div className="inline-flex items-center rounded-full border border-zinc-200 text-zinc-900 px-2.5 py-0.5 text-xs font-semibold">outline</div>
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-4">As used in the site — tech stack labels</p>
            <div className="flex flex-wrap gap-1.5">
              <div className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-50 hover:bg-zinc-100 text-zinc-500 px-2.5 py-0.5 text-xs font-mono">Next.js</div>
              <div className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-50 hover:bg-zinc-100 text-zinc-500 px-2.5 py-0.5 text-xs font-mono">Supabase</div>
              <div className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-50 hover:bg-zinc-100 text-zinc-500 px-2.5 py-0.5 text-xs font-mono">TypeScript</div>
              <div className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-50 hover:bg-zinc-100 text-zinc-500 px-2.5 py-0.5 text-xs font-mono">Claude Code</div>
              <div className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-50 hover:bg-zinc-100 text-zinc-500 px-2.5 py-0.5 text-xs font-mono">SQL</div>
            </div>
          </div>
        </div>

        {/* ── Input ── */}
        <div id="input" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Input</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg space-y-4 max-w-sm">
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-3">Default</p>
            <input type="text" placeholder="Placeholder text" className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2" />
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-3">Password (as used in CaseStudyGate)</p>
            <input type="password" placeholder="Enter password" className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300 focus-visible:ring-offset-2" />
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-3">Disabled</p>
            <input type="text" placeholder="Disabled" disabled className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-400 placeholder:text-zinc-300 cursor-not-allowed opacity-50" />
          </div>
        </div>

        {/* ── ProjectCard ── */}
        <div id="project-card" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">ProjectCard</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="group border border-zinc-100 rounded-lg p-6 hover:border-zinc-200 transition-colors bg-white flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-semibold text-zinc-900">Pocket Planner</h3>
                <a href="#" className="text-zinc-400 hover:text-zinc-700 transition-colors ml-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">A personal finance tracker that turns bank statements into weekly insights. No manual entry, no syncing — just upload a CSV and get a clean summary.</p>
              <div className="flex items-end justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  <div className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-50 text-zinc-500 px-2.5 py-0.5 text-xs font-mono">Next.js</div>
                  <div className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-50 text-zinc-500 px-2.5 py-0.5 text-xs font-mono">Supabase</div>
                </div>
                <a href="#" className="flex items-center gap-1 text-xs font-mono text-zinc-400 hover:text-zinc-900 transition-colors flex-shrink-0 ml-2">
                  Read
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
            <div className="group border border-zinc-100 rounded-lg p-6 hover:border-zinc-200 transition-colors bg-white flex flex-col">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-semibold text-zinc-900">Interview Prep Tool</h3>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed mb-4 flex-1">AI-powered mock interview sessions with structured feedback. Generates questions from a job description and scores answers against the rubric.</p>
              <div className="flex items-end justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  <div className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-50 text-zinc-500 px-2.5 py-0.5 text-xs font-mono">Claude API</div>
                  <div className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-50 text-zinc-500 px-2.5 py-0.5 text-xs font-mono">TypeScript</div>
                  <div className="inline-flex items-center rounded-full border border-zinc-100 bg-zinc-50 text-zinc-500 px-2.5 py-0.5 text-xs font-mono">Lovable</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ProjectGrid ── */}
        <div id="project-grid" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">ProjectGrid — section header pattern</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg">
          <h2 className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-8">Work</h2>
          <p className="text-xs text-zinc-300 font-mono">↳ followed by the grid of ProjectCards above</p>
        </div>

        {/* ── Experience row ── */}
        <div id="experience-row" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Experience row</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg">
          <div className="space-y-8">
            <div>
              <div className="flex items-start justify-between mb-1.5">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Senior PM, AI Personalization &amp; Ecosystem</p>
                  <p className="text-sm text-zinc-500">HubSpot</p>
                </div>
                <p className="text-xs font-mono text-zinc-400 mt-0.5 flex-shrink-0 ml-4">2025 – present</p>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">Building Breeze Projects — the personalization layer for Breeze Assistant — and the MCP ecosystem strategy that connects third-party apps to Breeze.</p>
            </div>
            <div>
              <div className="flex items-start justify-between mb-1.5">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">Senior PM, Growth &amp; Onboarding</p>
                  <p className="text-sm text-zinc-500">HubSpot</p>
                </div>
                <p className="text-xs font-mono text-zinc-400 mt-0.5 flex-shrink-0 ml-4">2024 – 2025</p>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">Led HubSpot&apos;s #1 2025 product priority: product-led onboarding for Pro customers. Shipped an AI conversational onboarding agent that doubled plan adoption.</p>
            </div>
          </div>
        </div>

        {/* ── CaseStudyGate ── */}
        <div id="case-study-gate" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">CaseStudyGate</p>
        </div>
        <div className="mb-16 border border-zinc-100 rounded-lg overflow-hidden">
          <div className="min-h-64 flex items-center justify-center px-6 py-16">
            <div className="w-full max-w-sm">
              <div className="flex items-center gap-2.5 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-zinc-400"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                <p className="text-sm text-zinc-500">This case study is private.</p>
              </div>
              <form className="space-y-3">
                <input type="password" placeholder="Enter password" className="flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-300" />
                <p className="text-sm text-red-500">Incorrect password.</p>
                <button type="submit" className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">View case study</button>
              </form>
            </div>
          </div>
          <div className="border-t border-zinc-100 px-8 py-4 bg-zinc-50">
            <p className="text-xs font-mono text-zinc-400 mb-3">Loading state</p>
            <button disabled className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 bg-zinc-900 text-white opacity-50 cursor-not-allowed">Checking…</button>
          </div>
        </div>

        {/* ── Screenshot / ChromeBar ── */}
        <div id="screenshot" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Screenshot — ChromeBar</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg space-y-6">
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-3">ChromeBar with URL</p>
            <div className="rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                </div>
                <div className="flex-1 bg-white rounded border border-zinc-200 px-3 py-1 ml-2 min-w-0">
                  <span className="text-xs font-mono text-zinc-400 truncate block">app.hubspot.com/reports/123456</span>
                </div>
              </div>
              <div className="bg-zinc-50 h-32 flex items-center justify-center">
                <p className="text-xs font-mono text-zinc-300">screenshot image here</p>
              </div>
              <div className="text-xs font-mono text-zinc-400 px-4 py-2.5 bg-zinc-50 border-t border-zinc-100">
                Mobile reporting dashboard — 55k weekly active users
              </div>
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-3">ChromeBar without URL</p>
            <div className="rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
              <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-2.5 flex items-center gap-2">
                <div className="flex gap-1.5 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                </div>
              </div>
              <div className="bg-zinc-50 h-32 flex items-center justify-center">
                <p className="text-xs font-mono text-zinc-300">screenshot image here</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── BeforeAfter ── */}
        <div id="before-after" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">BeforeAfter</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg">
          <div className="space-y-5">
            <div>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">Before</p>
              <div className="rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
                <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  </div>
                  <div className="flex-1 bg-white rounded border border-zinc-200 px-3 py-1 ml-2">
                    <span className="text-xs font-mono text-zinc-400">app.hubspot.com/onboarding</span>
                  </div>
                </div>
                <div className="bg-zinc-100 h-28 flex items-center justify-center">
                  <p className="text-xs font-mono text-zinc-300">before.png</p>
                </div>
                <div className="text-xs font-mono text-zinc-400 px-4 py-2.5 bg-zinc-50 border-t border-zinc-100">Static checklist — 12% completion rate</div>
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">After</p>
              <div className="rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
                <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5 flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  </div>
                  <div className="flex-1 bg-white rounded border border-zinc-200 px-3 py-1 ml-2">
                    <span className="text-xs font-mono text-zinc-400">app.hubspot.com/onboarding</span>
                  </div>
                </div>
                <div className="bg-zinc-50 h-28 flex items-center justify-center">
                  <p className="text-xs font-mono text-zinc-300">after.png</p>
                </div>
                <div className="text-xs font-mono text-zinc-400 px-4 py-2.5 bg-zinc-50 border-t border-zinc-100">AI conversational agent — 2× plan adoption</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MobileScreenshots ── */}
        <div id="mobile-screenshots" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">MobileScreenshots</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg space-y-8">
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-4">2-column grid</p>
            <div className="grid grid-cols-2 gap-4 max-w-sm">
              <figure className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
                <div className="bg-zinc-100 h-48 flex items-center justify-center">
                  <p className="text-xs font-mono text-zinc-300">mobile-1.png</p>
                </div>
                <figcaption className="text-xs font-mono text-zinc-400 px-3 py-2 bg-zinc-50 border-t border-zinc-100">Home screen</figcaption>
              </figure>
              <figure className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
                <div className="bg-zinc-100 h-48 flex items-center justify-center">
                  <p className="text-xs font-mono text-zinc-300">mobile-2.png</p>
                </div>
                <figcaption className="text-xs font-mono text-zinc-400 px-3 py-2 bg-zinc-50 border-t border-zinc-100">Report detail</figcaption>
              </figure>
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-4">3-column grid</p>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((n) => (
                <figure key={n} className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
                  <div className="bg-zinc-100 h-40 flex items-center justify-center">
                    <p className="text-xs font-mono text-zinc-300">{n}</p>
                  </div>
                </figure>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-4">Single (max-w-xs centered)</p>
            <div className="grid grid-cols-1 max-w-xs mx-auto">
              <figure className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm">
                <div className="bg-zinc-100 h-56 flex items-center justify-center">
                  <p className="text-xs font-mono text-zinc-300">single mobile screen</p>
                </div>
                <figcaption className="text-xs font-mono text-zinc-400 px-3 py-2 bg-zinc-50 border-t border-zinc-100">Business card scanner</figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* ── Card (shadcn) ── */}
        <div id="card" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Card (shadcn — available, not used directly on site yet)</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg">
          <div className="rounded-lg border border-zinc-200 bg-white shadow-sm max-w-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight text-zinc-900">Card Title</div>
              <div className="text-sm text-zinc-500">Card description goes here.</div>
            </div>
            <div className="p-6 pt-0">
              <p className="text-sm text-zinc-500">Card content area. Any elements can go here.</p>
            </div>
            <div className="flex items-center p-6 pt-0 gap-2">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-3 bg-zinc-900 text-white hover:bg-zinc-800 transition-colors">Action</button>
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-3 border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-900 transition-colors">Cancel</button>
            </div>
          </div>
        </div>

        {/* ── Color tokens ── */}
        <div id="color-tokens" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Color tokens</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { swatch: "bg-zinc-900", name: "zinc-900", role: "Primary text" },
              { swatch: "bg-zinc-500", name: "zinc-500", role: "Secondary text" },
              { swatch: "bg-zinc-400", name: "zinc-400", role: "Labels / meta" },
              { swatch: "bg-zinc-300", name: "zinc-300", role: "Decorative (dots)" },
              { swatch: "bg-zinc-200 border border-zinc-100", name: "zinc-200", role: "Borders (hover)" },
              { swatch: "bg-zinc-100 border border-zinc-100", name: "zinc-100", role: "Borders (rest)" },
              { swatch: "bg-zinc-50 border border-zinc-100", name: "zinc-50", role: "Badge bg / captions" },
              { swatch: "bg-white border border-zinc-100", name: "white", role: "Page / card bg" },
            ].map(({ swatch, name, role }) => (
              <div key={name}>
                <div className={`h-12 rounded mb-2 ${swatch}`} />
                <p className="text-xs font-mono text-zinc-500">{name}</p>
                <p className="text-xs font-mono text-zinc-400">{role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Favicon ── */}
        <div id="favicon" className={sectionDivider}>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Favicon / App Icon</p>
        </div>
        <div className="mb-16 p-8 border border-zinc-100 rounded-lg space-y-8">
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-4">SVG source — src/app/icon.svg</p>
            <div className="flex items-end gap-8">
              {[32, 64, 128].map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size}>
                    <rect x="1" y="1" width="30" height="30" rx="4.5" fill="white" stroke="#18181b" strokeWidth="1.5" />
                    <text x="16" y="22" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="15" fontWeight="400" letterSpacing="0.5" fill="#18181b">vm</text>
                  </svg>
                  <p className="text-xs font-mono text-zinc-400">{size}×{size}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-4">On dark background</p>
            <div className="flex items-end gap-8 bg-zinc-900 rounded-lg p-6">
              {[32, 64].map((size) => (
                <div key={size} className="flex flex-col items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={size} height={size}>
                    <rect x="1" y="1" width="30" height="30" rx="4.5" fill="white" stroke="#18181b" strokeWidth="1.5" />
                    <text x="16" y="22" textAnchor="middle" fontFamily="Georgia, 'Times New Roman', serif" fontSize="15" fontWeight="400" letterSpacing="0.5" fill="#18181b">vm</text>
                  </svg>
                  <p className="text-xs font-mono text-zinc-500">{size}×{size}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-mono text-zinc-300 mb-4">Design tokens</p>
            <div className="space-y-2 text-sm font-mono text-zinc-500">
              {[
                ["Shape", "rounded rect, rx 4.5 (≈14% corner radius)"],
                ["Fill", "white"],
                ["Stroke", "#18181b (zinc-900), 1.5px"],
                ["Lettermark", "\"vm\" — Georgia serif, 15px, weight 400"],
                ["Letter-spacing", "0.5"],
              ].map(([label, value]) => (
                <div key={label} className="flex gap-4">
                  <span className="text-zinc-400 w-28">{label}</span>
                  {value}
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}

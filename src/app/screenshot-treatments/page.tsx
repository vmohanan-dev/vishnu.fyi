export default function ScreenshotTreatments() {
  const Placeholder = ({
    aspect = "aspect-video",
    label = "Screenshot",
  }: {
    aspect?: string;
    label?: string;
  }) => (
    <div
      className={`${aspect} bg-zinc-100 rounded flex items-center justify-center`}
    >
      <span className="text-xs font-mono text-zinc-400">{label}</span>
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 space-y-24">
      <div>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
          Review page · not production
        </p>
        <h1 className="text-2xl font-semibold text-zinc-900 mb-2">
          Screenshot treatments
        </h1>
        <p className="text-sm text-zinc-500">
          Four options for embedding screenshots in project deep-dives. Grey
          boxes represent screenshots.
        </p>
      </div>

      {/* ── Treatment A: Bordered card ── */}
      <section>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
          A — Bordered card (current)
        </p>
        <div className="rounded-lg overflow-hidden border border-zinc-200">
          <Placeholder />
          <p className="text-xs font-mono text-zinc-400 px-4 py-2.5 bg-zinc-50 border-t border-zinc-100">
            Caption: The old User Guides experience — generic task list,
            same for everyone
          </p>
        </div>
        <p className="text-xs text-zinc-400 mt-3">
          Clean, low visual weight. Caption sits flush below. Works at any
          size. Suits the zinc aesthetic well but can feel flat for hero
          moments.
        </p>
      </section>

      {/* ── Treatment B: Browser chrome ── */}
      <section>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
          B — Browser chrome
        </p>
        <div className="rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
          {/* Chrome bar */}
          <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-2.5 flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-zinc-300" />
              <div className="w-3 h-3 rounded-full bg-zinc-300" />
              <div className="w-3 h-3 rounded-full bg-zinc-300" />
            </div>
            <div className="flex-1 bg-white rounded border border-zinc-200 px-3 py-1 ml-2">
              <span className="text-xs font-mono text-zinc-400">
                app.hubspot.com
              </span>
            </div>
          </div>
          <Placeholder aspect="aspect-video" label="Screenshot" />
        </div>
        <p className="text-xs text-zinc-400 mt-3">
          Adds context that this is a real product, not a mockup. Gives more
          visual weight to the screenshot. Better for hero/feature moments.
          Can feel slightly heavy for secondary images.
        </p>
      </section>

      {/* ── Treatment C: Shadow float ── */}
      <section>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
          C — Shadow float
        </p>
        <div className="rounded-xl overflow-hidden shadow-xl border border-zinc-100">
          <Placeholder aspect="aspect-video" />
        </div>
        <p className="text-xs font-mono text-zinc-400 mt-3 text-center">
          Caption: The old User Guides experience
        </p>
        <p className="text-xs text-zinc-400 mt-4">
          Most editorial feel. The shadow lifts the image off the page —
          gives it presence. Caption centred below. Best for single
          full-width hero screenshots. Doesn&apos;t suit a grid.
        </p>
      </section>

      {/* ── Treatment D: Full-bleed with overlay label ── */}
      <section>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
          D — Full-bleed with label strip
        </p>
        <div className="rounded-lg overflow-hidden border border-zinc-100 relative">
          <Placeholder aspect="aspect-video" />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent px-5 py-4">
            <p className="text-xs font-mono text-white/80">
              Before: generic task list, same for every hub
            </p>
          </div>
        </div>
        <p className="text-xs text-zinc-400 mt-3">
          Caption overlaid on the image. Immersive — the image fills the
          full frame. Requires the caption area to be mostly dark/clear in
          the screenshot. Won&apos;t work for all screenshots.
        </p>
      </section>

      {/* ── Before / After patterns ── */}
      <div>
        <h2 className="text-lg font-semibold text-zinc-900 mb-2">
          Before / after patterns
        </h2>
        <p className="text-sm text-zinc-500 mb-12">
          For the onboarding case study — two screenshots that need to be
          seen together.
        </p>

        {/* Pattern 1: Side by side grid */}
        <section className="mb-16">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
            1 — Side by side grid (current)
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden border border-zinc-200">
              <Placeholder aspect="aspect-[4/3]" label="Before" />
              <p className="text-xs font-mono text-zinc-400 px-4 py-2.5 bg-zinc-50 border-t border-zinc-100">
                Before: generic task list
              </p>
            </div>
            <div className="rounded-lg overflow-hidden border border-zinc-200">
              <Placeholder aspect="aspect-[4/3]" label="After" />
              <p className="text-xs font-mono text-zinc-400 px-4 py-2.5 bg-zinc-50 border-t border-zinc-100">
                After: personalised plan
              </p>
            </div>
          </div>
          <p className="text-xs text-zinc-400 mt-3">
            Compact. Shows both at once. Works when images are similar
            aspect ratios.
          </p>
        </section>

        {/* Pattern 2: Stacked with labeled divider */}
        <section className="mb-16">
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
            2 — Stacked with divider
          </p>
          <div className="space-y-2">
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Before
            </p>
            <div className="rounded-lg overflow-hidden border border-zinc-200">
              <Placeholder aspect="aspect-video" label="Before" />
            </div>
            <div className="flex items-center gap-3 py-3">
              <div className="flex-1 h-px bg-zinc-100" />
              <p className="text-xs font-mono text-zinc-300 uppercase tracking-widest">
                After
              </p>
              <div className="flex-1 h-px bg-zinc-100" />
            </div>
            <div className="rounded-lg overflow-hidden border border-zinc-200">
              <Placeholder aspect="aspect-video" label="After" />
            </div>
          </div>
          <p className="text-xs text-zinc-400 mt-3">
            More space for each image. The divider makes the contrast
            explicit. Better when before/after images are full-width and
            need breathing room.
          </p>
        </section>

        {/* Pattern 3: Full-width stacked with B chrome */}
        <section>
          <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-6">
            3 — Stacked with browser chrome
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-xs font-mono text-zinc-400 mb-2">Before</p>
              <div className="rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
                <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  </div>
                  <div className="flex-1 bg-white rounded border border-zinc-200 px-3 py-1 ml-2">
                    <span className="text-xs font-mono text-zinc-400">
                      app.hubspot.com/onboarding
                    </span>
                  </div>
                </div>
                <Placeholder aspect="aspect-video" label="Before" />
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-zinc-400 mb-2">After</p>
              <div className="rounded-lg overflow-hidden border border-zinc-200 shadow-sm">
                <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                    <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  </div>
                  <div className="flex-1 bg-white rounded border border-zinc-200 px-3 py-1 ml-2">
                    <span className="text-xs font-mono text-zinc-400">
                      app.hubspot.com/onboarding
                    </span>
                  </div>
                </div>
                <Placeholder aspect="aspect-video" label="After" />
              </div>
            </div>
          </div>
          <p className="text-xs text-zinc-400 mt-3">
            Highest fidelity. Each screenshot reads as a real product
            screen. More vertical space but each image gets full width and
            full context.
          </p>
        </section>
      </div>

      <div className="border-t border-zinc-100 pt-8">
        <p className="text-xs font-mono text-zinc-400">
          Once you pick a treatment, I&apos;ll apply it consistently across all
          three case studies and update project-content.tsx.
        </p>
      </div>
    </div>
  );
}

import CvButton from "@/components/CvButton";

export default function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
      <p className="text-sm text-zinc-500 mb-4 font-mono">
        Senior PM → Product Engineer
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-5 leading-tight">
        I build things <br className="hidden sm:block" />
        from spec to ship.
      </h1>
      <p className="text-lg text-zinc-500 mb-8 max-w-xl leading-relaxed">
        Six years in product at HubSpot. Now I write the code too — using
        AI-native workflows to go from idea to working product, fast.
      </p>
      <div className="flex items-center gap-4">
        <CvButton />
        <a
          href="https://github.com/vmohanan-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
        >
          GitHub ↗
        </a>
      </div>
    </section>
  );
}

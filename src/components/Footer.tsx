import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-100 mt-auto">
      <div className="max-w-3xl mx-auto px-6 py-8 flex items-center justify-between">
        <p className="text-sm text-zinc-400">
          Built with Next.js and Claude Code.
        </p>
        <Link href="/components" className="text-sm text-zinc-400 hover:text-zinc-900 transition-colors">
          Components
        </Link>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Nav() {
  return (
    <header className="w-full border-b border-zinc-100">
      <nav className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors"
        >
          Vishnu Mohanan
        </Link>
        <div className="flex items-center gap-6">
          <Link
            href="/#work"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Work
          </Link>
          <Link
            href="/skills"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            Skills
          </Link>
          <Link
            href="/about"
            className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
          >
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}

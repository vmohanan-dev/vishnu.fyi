import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getProjectPage } from "@/data/project-content";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectPage(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-900 transition-colors mb-10"
        >
          ← All work
        </Link>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
          {project.label}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">
          {project.title}
        </h1>
        <p className="text-zinc-500 leading-relaxed mb-12 max-w-xl">
          {project.intro}
        </p>
        <div>{project.content}</div>
      </main>
      <Footer />
    </>
  );
}

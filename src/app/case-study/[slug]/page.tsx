import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseStudyGate from "@/components/CaseStudyGate";
import { getCaseStudy } from "@/data/case-studies";
import { getCaseStudyPage } from "@/data/case-study-content";
import { checkAuth } from "./actions";

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  const isAuthed = await checkAuth(slug);
  const page = getCaseStudyPage(slug);

  return (
    <>
      <Nav />
      <main className="flex-1">
        {isAuthed ? (
          <div className="max-w-3xl mx-auto px-6 py-16">
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-4">
              Case Study · {caseStudy.company}
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-8">
              {caseStudy.title}
            </h1>
            {page ? (
              <div>{page.content}</div>
            ) : (
              <div className="prose prose-zinc prose-sm max-w-none">
                <p className="text-zinc-500">{caseStudy.description}</p>
                <p className="text-zinc-400 italic mt-8">
                  Content coming soon — check back shortly.
                </p>
              </div>
            )}
          </div>
        ) : (
          <CaseStudyGate slug={slug} />
        )}
      </main>
      <Footer />
    </>
  );
}

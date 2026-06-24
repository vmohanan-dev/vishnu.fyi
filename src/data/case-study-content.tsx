import { Screenshot, BeforeAfter, Video, MediaPair } from "@/components/ProjectScreenshot";
import { Metrics } from "@/components/Metrics";
import { ComparisonTable } from "@/components/ComparisonTable";
import { AssuranceRailPrototype } from "@/components/AssuranceRailPrototype";

export type CaseStudyPage = {
  slug: string;
  content: React.ReactNode;
};

const TinesContent = () => (
  <div className="space-y-10">
    <section>
      <p className="text-zinc-700 leading-relaxed text-lg">
        The run was green. Every step a checkmark - the ticket created, the Slack
        alert fired, the audit log written. And the one field that tells an
        analyst whether a domain is dangerous was blank, with nothing anywhere
        flagging it.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Not the run that turns red and pages someone. The run that stays green
        and hands a tired analyst a threat dressed up as a clean result.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        That failure class is specific to what Tines is for. When a Zapier
        workflow breaks, a marketing email doesn&apos;t send. When a Tines story
        breaks, a phishing report goes untriaged, an access credential stays
        live, or a compliance action silently never fires. Same class of bug,
        very different blast radius.
      </p>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        I tried to reproduce it
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        I didn&apos;t want an opinion about the debugging gap. I wanted the
        customer&apos;s experience of it. So in Tines Community Edition I built a
        25-step phishing report triage story - standard SOC work:
      </p>
      <ol className="mt-3 space-y-1.5 text-zinc-500 leading-relaxed list-decimal list-inside marker:text-zinc-400">
        <li>A report comes in through a webhook.</li>
        <li>The story pulls the URL and sender.</li>
        <li>It enriches the domain against ipinfo and a threat feed.</li>
        <li>It scores the risk.</li>
        <li>It opens a ticket, posts a Slack alert, and writes an audit log.</li>
      </ol>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The kind of unattended workflow that runs at volume with no one watching
        each run.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Then I broke it. In one transform I changed a
        field reference from <code className="text-zinc-700">org</code> to{" "}
        <code className="text-zinc-700">organization</code>. That field
        doesn&apos;t exist on the response, so it returns nothing. A typo. The
        kind you make at the end of a long build and never think about again.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The story ran green end to end, all 25 actions. But the hosting provider
        came out blank - in the ticket, in the Slack alert, in the audit log -
        and the risk score was computed from data that wasn&apos;t there. Nothing
        turned red. Nothing warned me. The story didn&apos;t fail. It succeeded
        into a wrong answer.
      </p>
    </section>

    <section>
      <p className="text-zinc-500 leading-relaxed">
        The story looks identical before and after the break. Every step green,
        both times.
      </p>
    </section>

    <BeforeAfter
      url="tines.com"
      before={{
        src: "/projects/tines/storyboard-before.png",
        alt: "The 25-step Tines story running successfully, all actions green",
        caption: "Before the break - all 25 actions green",
      }}
      after={{
        src: "/projects/tines/storyboard-after.png",
        alt: "The same story after the break, still all green despite producing wrong output",
        caption: "After the break - still all green, now producing wrong output",
      }}
    />

    <section>
      <p className="text-zinc-500 leading-relaxed">
        The ticket a SOC analyst opens looks complete. The hosting provider
        field is just empty. Empty enough to miss, and exactly the field that
        tells you whether a domain sits on Cloudflare or a bulletproof host.
      </p>
    </section>

    <BeforeAfter
      url="webhook.site"
      before={{
        src: "/projects/tines/ticket-before.png",
        alt: "The generated ticket with hosting provider populated",
        caption: "Ticket before - hosting provider populated",
        mediaClassName: "w-full h-[440px] object-cover object-top",
      }}
      after={{
        src: "/projects/tines/ticket-after.png",
        alt: "The generated ticket with hosting provider blank",
        caption: "Ticket after - hosting provider silently blank",
        mediaClassName: "w-full h-[440px] object-cover object-top",
      }}
    />

    <section>
      <p className="text-zinc-500 leading-relaxed">
        The Slack alert is where a person makes the call. The line they need to
        judge severity is simply gone.
      </p>
    </section>

    <BeforeAfter
      url="webhook.site"
      before={{
        src: "/projects/tines/slack-before.png",
        alt: "The Slack alert with the hosting line present",
        caption: "Alert before - hosting line present",
        mediaClassName: "w-full h-[440px] object-cover object-top",
      }}
      after={{
        src: "/projects/tines/slack-after.png",
        alt: "The Slack alert with the hosting line missing",
        caption: "Alert after - hosting line missing, no other change",
        mediaClassName: "w-full h-[440px] object-cover object-top",
      }}
    />

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        Finding it was never the problem
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Every tool I reached for found the typo fast. Not one of them told me to
        look in the first place.
      </p>
    </section>

    <section>
      <p className="text-zinc-500 leading-relaxed">
        <span className="text-zinc-700">One, trace it by hand.</span> I started
        from the broken ticket and clicked backward through event logs, one
        action at a time: the ticket, the step that formatted it, the step that
        scored risk, the step that should have held the hosting provider. Five
        clicks to land on the transform, then one more to open the formula and
        see the wrong field name. Sixty-nine seconds, start to finish. It was
        fast - but only because I already knew what I&apos;d broken. I planted the
        bug myself. An analyst staring at a green run has none of that.
      </p>
    </section>

    <MediaPair>
      <Screenshot
        src="/projects/tines/step9-typo.png"
        alt="The transform showing the mistyped field reference organization instead of org"
        url="tines.com"
        caption="The root cause - one field reference, mistyped"
        mediaClassName="h-64 sm:h-72 w-full object-contain bg-zinc-50"
      />
      <Video
        src="/projects/tines/troubleshooting.mp4"
        caption="Unedited - 1:09, five clicks, no signal from the tool"
        mediaClassName="h-64 sm:h-72 w-full object-cover bg-zinc-900 block"
      />
    </MediaPair>

    <Metrics
      items={[
        { value: "1:09", label: "Time to trace" },
        { value: "5", label: "Clicks to root cause" },
        { value: "0", label: "Warnings from Tines" },
      ]}
    />

    <section>
      <p className="text-zinc-500 leading-relaxed">
        Diagnosis was fast. Detection never happened.
      </p>
    </section>

    <section>
      <p className="text-zinc-500 leading-relaxed">
        <span className="text-zinc-700">Two, ask Tines&apos; own AI.</span> Tines
        ships Workbench, an AI assistant built into the product, so I described
        the symptom - a blank field in the output - and it got the rest in one
        shot. It found the empty value, traced it back to the{" "}
        <code className="text-zinc-700">extract_org</code> action, named the exact
        typo (<code className="text-zinc-700">organization</code> where the
        response returns <code className="text-zinc-700">org</code>), and offered
        to apply the fix.
      </p>
    </section>

    <Screenshot
      src="/projects/tines/workbench.png"
      alt="Tines Workbench correctly diagnosing the wrong field name and offering to fix it"
      url="tines.com"
      caption="Tines' own AI found it in one shot, and offered the fix"
    />

    <section>
      <p className="text-zinc-500 leading-relaxed">
        My honest first reaction was a small drop in the stomach. There goes my
        thesis - Tines had already solved the debugging I came to complain about,
        and solved it well, faster than my five clicks. Sitting with it, the gap
        is smaller than I expected going in, and more specific. Workbench is very
        good at explaining a problem once you suspect one. What I couldn&apos;t
        find was the thing that makes you suspect it.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Workbench is a pull tool. You reach for it once you already suspect
        something. The whole danger of this bug is that nothing gives you that
        suspicion - so the one feature that could explain it instantly is the one
        you&apos;d never think to open. An analyst scanning hundreds of green runs
        at 3am never types the question.
      </p>
    </section>

    <section>
      <p className="text-zinc-500 leading-relaxed">
        <span className="text-zinc-700">Three, the tool I missed: Testing.</span>{" "}
        Tines ships a Testing feature, and it&apos;s very likely the tool that
        would have caught a regression like mine. I didn&apos;t have it - it
        isn&apos;t in the Community Edition I built on, so I only came across it
        afterward, digging through the knowledge base. Testing records a baseline
        run, then re-runs it later with the same saved inputs in a sandbox and
        diffs the outbound requests to confirm an edit didn&apos;t break anything.
        It&apos;s a build-time check, run on demand, against a baseline you
        maintain by hand. That capability - diff an output against an expectation
        - already lives in the product. It runs on demand, at build time, not
        automatically on every live run.
      </p>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        The gap is detection, not diagnosis
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        A workflow that crashes is a good day. It turns red, it pages someone,
        you know to look. A workflow that succeeds with wrong output is the
        dangerous one, because no one knows to look at all. The exposure window
        isn&apos;t the 69 seconds I spent tracing it, or the seconds Workbench
        would have saved me. It&apos;s the hours or days until a missed
        escalation surfaces downstream. Sometimes it never does.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The gap scales with the direction Tines is moving. Every move toward
        agents and autonomous execution puts more steps in production with no
        human watching the output, and a baseline you recorded in advance covers
        even less of what actually runs. The more ambitious the roadmap, the
        wider the gap it opens behind it.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The fear that surfaces most in coverage of autonomous SOC tools is the
        silent false negative - an agent that closes a real threat no one ever
        sees. It is the same shape as the green run that stays quiet. It also
        runs against how Tines positions its own AI: built, in their words, so
        you are{" "}
        <a
          href="https://www.tines.com/blog/ai-in-tines-secure-private-by-design/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-900 transition-colors"
        >
          &quot;in complete control&quot;
        </a>
        , secure and private by design rather than another black box. That
        positioning only holds if the platform can surface the run that silently
        diverged. Today it doesn&apos;t. None of the agentic-SOC entrants I
        mapped in the appendix do either.
      </p>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">What I&apos;d do next</h2>
      <p className="text-zinc-500 leading-relaxed">
        Tines already proved its AI can diagnose a broken run. The missing piece
        is pointing it at the right run automatically. I&apos;d explore extending
        Workbench from reactive diagnosis to proactive detection: validate a
        run&apos;s output against the shape it was supposed to produce, flag the
        green run that silently diverged, and hand it to Workbench, which already
        knows how to explain and fix it. The structure to do this may already be
        there. A field with no consumers going empty is noise. A field that feeds
        a risk score and a ticket going empty is a signal. That relationship is
        visible in the builder - whether it&apos;s queryable is the product
        question.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Detection is also the AI capability Tines is better placed to ship than
        the agentic-SOC startups it competes with. A black-box agent can&apos;t
        tell you a field came back wrong, because it never knew what right looked
        like. A Tines story should know: the builder shows that the ticket step
        pulls from the enrichment step, so a blank enrichment output on a step
        that depends on it is a contradiction that could be surfaced. The thing
        usually framed as Tines&apos; limitation - that it runs a fixed graph
        instead of a free-roaming model - is exactly what makes a silent failure
        catchable here, and hard to catch on a free-roaming model.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        I&apos;ll address the elephant in the room when it comes to this memo:
        I&apos;m on the outside looking in. I don&apos;t have your customer data, your interviews, or your
        internal strategy. I built one story over a few days; you and your team
        have watched thousands run for years. I could be wrong about how often
        this actually bites, or whether it&apos;s already on a roadmap I can&apos;t
        see. What I&apos;m confident in is the shape of the gap, not the size of
        it.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        But I don&apos;t form opinions about products from a distance. The way I
        learn a product is to build the whole thing in it, as the customer would.{" "}
        <a
          href="/vishnu-mohanan-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-900 transition-colors"
        >
          Nine years shipping product at HubSpot
        </a>
        , building my father-in-law&apos;s honey business end to end in the
        platform - domain, CRM, social posts - and building{" "}
        <a
          href="https://laceup.club"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-900 transition-colors"
        >
          LaceUp
        </a>
        , an all-in-one manager for volunteer tennis clubs, from scratch. So the
        next step here is to sit with 10 customers who have lived a production
        incident and let them tell me how wrong, or how right, I am.
      </p>
    </section>

    {/* Prototype section parked for revisit - preserved as ParkedPrototypeSection below, not currently rendered. */}

    <section className="border-t border-zinc-100 pt-8">
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
        Appendix
      </p>
      <p className="text-zinc-500 leading-relaxed">
        Debugging wasn&apos;t the loudest candidate. Pricing and AI-credit anxiety
        are what shows up loudest in the reviews, and I walked past both on
        purpose. Pricing is a packaging decision, not a product gap - different
        bet, different owner. AI-credit anxiety is loud in the reviews, but Tines
        is already transparent about credit pricing and ships{" "}
        <a
          href="https://explained.tines.com/en/articles/12801399-ai-usage-and-credits"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-zinc-900 transition-colors"
        >
          usage reporting
        </a>{" "}
        for it, so recommending it would mean recommending work that&apos;s
        already happening. Debugging reads as the opposite: barely visible in
        what surfaces publicly before a sale, costly once you&apos;re in
        production. In my read of this, the loud complaints are prospect
        complaints. The quiet ones are retention problems, and they stay quiet
        because the people who feel this most already bought, already stayed, and
        are now stuck at 3am.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        To get there I ranked 12 customer problems on a RICE matrix, went deep on
        the runner-up with a three-layer framework, and mapped Tines against the
        agentic-SOC entrants (Prophet, Dropzone, Radiant) to test where the
        detection thesis sits competitively. The three briefs show the
        methodology behind the pick. Available on request.
      </p>
      <div className="mt-5">
        <Screenshot
          src="/projects/tines/rice-matrix.png"
          alt="RICE prioritization matrix scoring 12 Tines customer problems, with debugging as the runner-up"
          caption="12 customer problems scored on RICE - click to expand"
        />
      </div>
    </section>
  </div>
);

export const caseStudyPages: CaseStudyPage[] = [
  {
    slug: "tines",
    content: <TinesContent />,
  },
];

export function getCaseStudyPage(slug: string): CaseStudyPage | undefined {
  return caseStudyPages.find((p) => p.slug === slug);
}

// Parked for revisit: the "A clickable sketch of the idea" prototype section.
// Pulled out of the live Tines case study on 2026-06-23 to rethink the framing.
// Not rendered anywhere right now. To restore, drop <ParkedPrototypeSection />
// back into TinesContent (it previously sat between the close and the appendix).
export function ParkedPrototypeSection() {
  return (
    <section id="prototype" className="scroll-mt-24">
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        A clickable sketch of the idea
      </h2>
      <p className="text-zinc-500 leading-relaxed mb-5">
        First, the question that decides everything: how does the platform know a
        green run is wrong in the first place? There are four ways, and only one
        is a black box. The first column is the choice. The last column is which I
        explored and why.
      </p>
      <ComparisonTable
        columns={[
          "Approach",
          "How it knows what “correct” is",
          "Glass box?",
          "Why I did or didn’t build it",
        ]}
        rows={[
          [
            "Learned baseline",
            "A model trained on past “normal” runs flags statistical anomalies.",
            "No - opaque by construction",
            "Left out. The verdicts can’t be traced, which is the exact black box the agentic-SOC tools lean on and this whole POV argues against. Worth a secondary signal later, never the thing a human is asked to trust.",
          ],
          [
            "Inferred from the workflow",
            "The graph itself. A field that feeds a downstream step is load-bearing, so empty is a divergence.",
            "Yes",
            "Explored. No AI. Catches structural gaps, not wrong-but-well-formed answers, and it is only as complete as the graph.",
          ],
          [
            "Builder assertion",
            "A human attaches an expectation to a step, the way you attach a test.",
            "Yes",
            "Explored. No AI. Coverage depends on people actually writing them.",
          ],
          [
            "Agent-declared at plan time",
            "A tool-using agent already states what it expects a step to return. You capture that as the contract.",
            "Yes",
            "Prototyped below. AI-prompted, not trained. A loose declaration makes a weak contract.",
          ],
        ]}
      />
      <p className="text-zinc-500 leading-relaxed mt-6">
        I built the explicit ones, not the baseline. What follows is a clickable
        sketch of the bottom row - the agent-declared contract, enforced. Not a
        spec, a provocation. The same phishing investigation, now run by an agent.
        Flip between <span className="text-zinc-700">Autonomy</span> and{" "}
        <span className="text-zinc-700">Governed autonomy</span>, run it, and watch
        what each mode does with the same silent divergence. The two modes differ
        on one thing: who decides a step succeeded. In autonomy the agent grades
        its own homework and passes itself. In governed, an independent rail holds
        the agent to the expectation it declared, and withholds its verdict until
        a human clears it. The shape of the bet is the point. The real design is a
        customer conversation.
      </p>
      <AssuranceRailPrototype />
      <p className="text-zinc-500 leading-relaxed mt-6">
        The line that holds across all three explicit approaches: declaration can
        be AI-assisted, enforcement never is. The rail that checks the output is
        deterministic code no matter where the expectation came from, and it gates
        the agent&apos;s authority to act on a violation. That is what keeps it a
        glass box, and what the learned baseline gives up.
      </p>
    </section>
  );
}

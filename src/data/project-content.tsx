import { Screenshot, BeforeAfter, MobileScreenshots } from "@/components/ProjectScreenshot";

export type ProjectPage = {
  slug: string;
  title: string;
  label: string;
  intro: string;
  content: React.ReactNode;
};

const OnboardingContent = () => (
  <div className="space-y-10">
    <section>
      <p className="text-zinc-500 leading-relaxed">
        HubSpot&apos;s Pro tier is where most of the company&apos;s revenue sits. Customers
        who buy Sales Pro or Marketing Pro expect to get up and running quickly —
        that&apos;s part of what they&apos;re paying for. In 2024, fixing the onboarding
        experience was the company&apos;s #1 product priority.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The problem was that most customers weren&apos;t getting up and running at all.
      </p>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        The before state
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Two types of customers landed in onboarding, both underserved.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Customers who upgraded without speaking to sales saw a generic task
        list — the same one regardless of which hub they&apos;d bought or why. A
        sales rep who had just upgraded to Sales Pro was told to &ldquo;import
        contacts, create properties, invite teammates.&rdquo; Generic setup advice
        with no connection to why they upgraded or what they were trying to do.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Customers who bought through a sales rep and waived human-led
        onboarding had it worse: no guided experience at all. They&apos;d closed a
        deal and had no one to walk them through the product they&apos;d committed
        to.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The data matched the experience: 33% of customers accepted an
        onboarding plan and engaged with it. Two-thirds ignored it.
      </p>
    </section>

    <BeforeAfter
      url="app.hubspot.com/onboarding"
      before={{
        src: "/projects/onboarding/before.png",
        alt: "The old onboarding experience — generic User Guides with the same task list regardless of which hub you bought",
        caption: "Generic task list, same for every hub purchased",
      }}
      after={{
        src: "/projects/onboarding/after-plan.png",
        alt: "The new onboarding experience — personalised plan for Sales Hub with specific tasks for a sales rep",
        caption: "Personalised plan for the hub you actually bought",
      }}
    />

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        What good actually looked like
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Before writing a spec, I ran 10+ customer interviews and sat in on
        workshops with our human onboarding team — the people who do this
        every day for enterprise customers.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The pattern was clear: good onboarders don&apos;t start with a task list.
        They start with questions. What are you trying to accomplish? Who on
        your team will use this? Have you used a CRM before? The task list is
        a consequence of the answers, not a template applied to everyone.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The hypothesis: if we could capture those goals upfront — role,
        company size, hub purchased, prior CRM experience — we could generate
        a plan that felt relevant rather than generic. An AI agent could do
        the intake that a human onboarder does, at scale.
      </p>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        Building to learn
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Before engineering wrote a line of production code, I built a
        prototype in Lovable covering the full journey: upgrade →
        conversational intake → plan acceptance → first task.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Customers didn&apos;t want to chat their way through onboarding. They
        wanted to click. What resonated wasn&apos;t the conversation — it was the
        output. When they saw a plan that reflected their specific goals and
        the hub they&apos;d bought, they engaged. The conversation was a means to
        an end, not the experience itself.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        This shifted the team&apos;s direction before any production code existed.
        We moved from &ldquo;build a conversational agent&rdquo; to &ldquo;build an agentic
        intake that produces a personalised plan with a familiar UI.&rdquo; The
        agent&apos;s job was to understand the customer, not to talk to them.
      </p>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        What shipped
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        The new experience opens with a structured intake. The agent analyses
        the customer&apos;s website and business context, pre-fills a profile, and
        asks them to confirm or edit it — a review-and-confirm step rather
        than a questionnaire. A few targeted questions about goals and team
        setup follow.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The agent uses those answers to generate a personalised onboarding
        plan specific to the hub the customer bought. I wrote the initial
        prompt for the agent and the evals used to validate its outputs,
        pressure-tested against what our human onboarders would have
        recommended for the same customer profile.
      </p>
    </section>

    <Screenshot
      src="/projects/onboarding/after-intake.png"
      alt="The agentic intake — the agent analyses the customer's website and presents a pre-filled business profile for review and confirmation"
      url="app.hubspot.com/onboarding"
      caption="Agentic intake: the agent pre-fills context from your website. You review and confirm — no questionnaire."
    />

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">Results</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { stat: "2×", label: "plan adoption" },
          { stat: "+20pts", label: "week-1 visits" },
          { stat: "+26pts", label: "month-1 usage" },
          { stat: "$270K", label: "MRR attributed" },
        ].map(({ stat, label }) => (
          <div key={label} className="border border-zinc-100 rounded-lg p-4">
            <p className="text-2xl font-semibold text-zinc-900 mb-1">{stat}</p>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              {label}
            </p>
          </div>
        ))}
      </div>
      <p className="text-zinc-500 leading-relaxed">
        Plan adoption doubled — from 33% to 66% — comparing the agentic
        experience to the prior version. Portal Initial Value (whether
        customers reach meaningful usage in their first 30 days) climbed from
        56% to 69% after launch. The framework expanded to Marketing, Service,
        Commerce, and Content Hub.
      </p>
    </section>

    <section className="border-l-2 border-zinc-100 pl-5">
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        What V1 didn&apos;t solve
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Doubling plan adoption didn&apos;t fully solve the deeper problem: customers
        completing setup tasks wasn&apos;t the same as customers actually using
        HubSpot. The task list still needed work — too focused on
        configuration, not enough on the actions that would show customers why
        they&apos;d upgraded.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The AI-first sprint that followed was built to fix exactly that: an
        agentic intake that captures customer goals and builds a genuinely
        personalised roadmap, not just a filtered version of a generic list.
        Shipping V1 gave us the data to know what V2 needed to fix. That was
        the point.
      </p>
    </section>
  </div>
);

const MobileReportingContent = () => (
  <div className="space-y-10">
    <section>
      <p className="text-zinc-500 leading-relaxed">
        HubSpot has always had a mobile app, but reporting — dashboards,
        performance metrics, team activity — was web-only. A sales manager
        checking how their team was tracking had to open a laptop.
      </p>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        Why it didn&apos;t exist yet
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Two blockers. The mobile tech stack wasn&apos;t ready — building reporting
        on native iOS and Android would have meant duplicating significant
        business logic with no long-term benefit. And the web reporting team
        was in the middle of a platform migration. Building on the old system
        would have meant rebuilding everything once they were done.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The right moment was when that migration finished. I had to argue for
        the investment — mobile reporting wasn&apos;t an obvious priority when the
        web experience already existed.
      </p>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        The strategic bet
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        The target persona was sales managers and leaders — not reps. Leaders
        drive adoption: when a manager uses HubSpot on mobile to check team
        performance, they pull their reps in. Reporting was the feature that
        mattered to leaders, and building it on mobile was a play for deeper
        platform adoption from the top down.
      </p>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        What was built
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Mobile dashboard reporting with full parity to the web experience,
        built on the migrated reporting infrastructure. Leaders could view
        their team&apos;s dashboards, check pipeline metrics, and monitor activity
        from their phone.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Alongside this, I led the React Native migration that changed how the
        mobile team shipped. Quotes — a complex transactional feature —
        launched simultaneously on iOS and Android in roughly two months. The
        prior estimate for that kind of feature, building natively for each
        platform separately, was six months. Shared components and business
        logic made the difference.
      </p>
    </section>

    <MobileScreenshots
      screens={[
        {
          src: "/projects/mobile-reporting/dashboard.png",
          alt: "HubSpot mobile app showing the Deals Dashboard with Deal Forecast by Owner chart",
          caption: "Dashboard view",
        },
        {
          src: "/projects/mobile-reporting/report-detail.png",
          alt: "Report detail view showing Deal Forecast chart with AI-generated insights",
          caption: "Report detail with AI insights",
        },
        {
          src: "/projects/mobile-reporting/home.png",
          alt: "Home screen showing Marketing reports with email send, open and click metrics",
          caption: "Home with reporting widgets",
        },
      ]}
    />

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">Results</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { stat: "55K", label: "weekly users" },
          { stat: "27→43%", label: "retention" },
          { stat: "3→10%", label: "cross-platform" },
          { stat: "+7–9pts", label: "CSAT" },
        ].map(({ stat, label }) => (
          <div key={label} className="border border-zinc-100 rounded-lg p-4">
            <p className="text-2xl font-semibold text-zinc-900 mb-1">{stat}</p>
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              {label}
            </p>
          </div>
        ))}
      </div>
      <p className="text-zinc-500 leading-relaxed">
        Mobile dashboard WAUs grew to 55,000 — about 1 in 5 mobile users.
        Weekly retention improved from 27% to 43%. Cross-platform usage (web
        users who also used mobile weekly) went from 3% to 10%. CSAT improved
        7–9 points from the 2023 baseline.
      </p>
    </section>
  </div>
);

const LaceupContent = () => (
  <div className="space-y-10">
    <section>
      <p className="text-zinc-500 leading-relaxed">
        I built laceup.club — a tennis club SaaS — by orchestrating a team of
        12 AI specialists: a database architect, a frontend engineer, a brand
        designer, a product designer, a content strategist, a security lead.
        Each runs in an isolated context with a defined brief. I orchestrate
        the handoffs.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The hard part wasn&apos;t the code.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        AI can write components, design schemas, draft copy, audit RLS
        policies. What it can&apos;t do is decide what the product should be. Every
        interesting choice in laceup came down to judgment that no context
        window could automate. Here are four of those calls.
      </p>
      <div className="flex gap-3 mt-6">
        <a
          href="https://laceup.club/demo/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-900 border border-zinc-200 rounded px-4 py-2 hover:bg-zinc-50 transition-colors"
        >
          Try the demo ↗
        </a>
        <a
          href="https://laceup.club/c/clontarf-lawn-tennis-club"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors px-4 py-2"
        >
          See a live club ↗
        </a>
      </div>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        Why seed 148 clubs before anyone signed up?
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Every competitor in this space uses the same onboarding model: an
        admin signs up, a club gets created, a page appears. The platform
        starts empty.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        I flipped it. Before a single admin signed up, 148 Irish tennis clubs
        already had public pages on laceup — each populated with real
        competitive data: league fixtures from the Dublin Lawn Tennis Council,
        tournament results from Tennis Ireland, facility details from club
        websites. A captain searching for their club finds it already there,
        with match results they recognise.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        I call the conversion mechanism ghost prompts: interactive editors on
        unclaimed pages that invite visitors to fill in their club&apos;s profile
        before claiming ownership. Once you&apos;ve written your club&apos;s description,
        you feel ownership before you&apos;ve signed up. The IKEA effect, applied to
        SaaS onboarding.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The claim itself is a single modal. I rejected a two-step flow because
        the captain has already decided by the time they click — splitting it
        adds friction without adding value. Behind this sits a HubSpot CRM
        pipeline tracking each club from Unclaimed through Contacted to
        Claimed, so outreach is operationalised, not improvised.
      </p>
    </section>

    <MobileScreenshots
      screens={[
        {
          src: "/projects/laceup/mobile-public-clontarf-fold.png",
          alt: "Clontarf Lawn Tennis Club unclaimed page — 'Is this your club?' with Claim CTA, pre-populated with real data",
          caption: "Unclaimed: real data, ready to claim",
        },
        {
          src: "/projects/laceup/mobile-demo-home-fold.png",
          alt: "Club admin home after claiming — showing 'Your club in 3 steps' setup checklist with first step complete",
          caption: "After claiming: 3-step setup",
        },
      ]}
    />

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        Why give away the most valuable page for free?
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        A public club page with facilities, results, and a join link is
        valuable. Most competitors gate it behind a paid plan. I left it free.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Every unclaimed page is a search result waiting to convert a club
        captain. Every claimed page is a recruitment tool that brings members
        to the platform. Gating it behind Pro turns the best acquisition
        channel into a paywall.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The things I gate — automated reminders, CRM-style member notes,
        roster exports — are operational tools a captain values after
        they&apos;re committed. I gate the automation, not the presence. Blocking a
        match confirmation email because you&apos;re on the free plan drives a
        captain to WhatsApp. Offering scheduled reminders as a Pro feature
        gives them a reason to pay.
      </p>
    </section>

    <Screenshot
      src="/projects/laceup/demo-news.png"
      alt="Club news management — showing pinned posts, reach metrics (388% seen), drafts and published posts"
      url="laceup.club/demo/dashboard"
      caption="Admin tools: news with reach tracking — the kind of feature worth paying for"
    />

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        Where should the seam go?
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Laceup has two competition formats: ladders (ongoing, rank-based) and
        box leagues (round-robin within groups, seasonal). They look the same
        to a club admin: same registration flow, same match cards, same status
        lifecycle.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Under the surface, they use fundamentally different matchmaking
        algorithms. Ladders use level-banded greedy pairing: a band
        coefficient scales with field size, candidates are filtered by rank
        proximity, a seeded-random pick avoids back-to-back rematches. Box
        leagues use a deterministic circle-method rotation within each box,
        with the full schedule pre-generated for the season.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        I could have built a generic &ldquo;competition engine&rdquo; that abstracts over
        both. I didn&apos;t. The algorithms have different inputs, different
        constraints, different failure modes. Forcing them into one model
        would have made both worse. I shared only the thin layer where
        they&apos;re genuinely the same: a parent competitions table, a shared
        registration UI, common match display components.
      </p>
    </section>

    <Screenshot
      src="/projects/laceup/demo-ladder-registration.png"
      alt="Mixed Doubles Ladder registration page showing format, spots, cadence and current sign-ups"
      url="laceup.club/demo/dashboard"
      caption="Ladder registration — same UI surface as a box league, different engine underneath"
    />

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        Why not just put a Save button on it?
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Settings pages usually have a Save button at the bottom. You change
        three fields, scroll down, hit Save, hope you didn&apos;t miss one.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        I rejected this. Every field saves individually the moment you change
        it. A small checkmark confirms it. No save button, no bar, no toast.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Ambiguity about what&apos;s saved is worse than any amount of friction. If
        some fields save inline and others need a button, the admin has to
        remember which is which. A missed click means lost work with no
        feedback. Per-field auto-save is more work to implement — each field
        needs its own mutation and optimistic state — but it eliminates an
        entire category of user error.
      </p>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        How it was built
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        I built laceup by orchestrating a team of AI specialists through
        Claude Code. Each has a name, a defined expertise, and a brief: Tomas
        owns the database schema and RLS policies, Priya owns the frontend,
        Suki owns the design system, Nadia owns the brand, Finn owns pricing
        strategy, Theo runs security audits.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Each runs in an isolated context. I dispatch them with full briefs,
        review their output, and make the judgment calls that connect their
        work into a coherent product. Before any visual change ships, it goes
        through a design preview cycle: an HTML treatment reviewed in the
        browser before a line of production code gets written.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The AI team gives me the bandwidth of a small studio. The product
        decisions — what to build, what to reject, where the seams go — stay
        with me.
      </p>
    </section>

    <MobileScreenshots
      screens={[
        {
          src: "/projects/laceup/mobile-demo-home-fold.png",
          alt: "laceup mobile home showing club setup checklist, members and events summary",
          caption: "Mobile home",
        },
        {
          src: "/projects/laceup/mobile-demo-events-fold.png",
          alt: "laceup mobile events list showing Summer Social Mixer, Friday Night Doubles, Beginner Training Camp",
          caption: "Mobile events",
        },
      ]}
    />
  </div>
);

export const projectPages: ProjectPage[] = [
  {
    slug: "onboarding",
    title: "AI-First Onboarding",
    label: "HubSpot · 2024–2025 · Growth & Onboarding",
    intro:
      "Redesigned HubSpot's Pro onboarding around an agentic intake that captures customer goals and builds a personalised setup plan. HubSpot's #1 2025 product priority.",
    content: <OnboardingContent />,
  },
  {
    slug: "mobile-reporting",
    title: "Mobile Reporting",
    label: "HubSpot · 2021–2024 · Mobile Platform",
    intro:
      "Built mobile dashboard reporting from scratch, targeting the sales leader persona as the entry point for deeper platform adoption.",
    content: <MobileReportingContent />,
  },
  {
    slug: "laceup",
    title: "laceup.club",
    label: "Personal project · 2024–present",
    intro:
      "Tennis club SaaS with 148 clubs and 40,000 match records live in production. Built by orchestrating 12 AI specialists, then making the product calls they couldn't.",
    content: <LaceupContent />,
  },
];

export function getProjectPage(slug: string): ProjectPage | undefined {
  return projectPages.find((p) => p.slug === slug);
}

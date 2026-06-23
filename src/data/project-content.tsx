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
        HubSpot&apos;s Pro tier is where most of the company&apos;s revenue sits, and
        getting customers up and running is part of what they pay for. In 2024,
        fixing Pro onboarding was the company&apos;s #1 product priority.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The deeper problem: completing setup wasn&apos;t the same as getting value,
        and for a large segment of customers there was no path to value at all
        except a paid onboarding specialist.
      </p>
    </section>

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        Finding the real problem
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        I isolated the cohort that made the problem measurable: customers who had
        waived human-led onboarding entirely. Because no person was involved, any
        gap in their activation was down to the product, not a human. That
        comparison was the proof - purely product-led customers activated
        meaningfully worse than human-onboarded ones.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        It did two things at once. It quantified the gap a product-led experience
        had to close, and it gave us a clean group to build and test against -
        with no human onboarding to confound the results.
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
        list - the same one regardless of which hub they&apos;d bought or why. A
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
        alt: "The old onboarding experience - generic User Guides with the same task list regardless of which hub you bought",
        caption: "Generic task list, same for every hub purchased",
      }}
      after={{
        src: "/projects/onboarding/after-plan.png",
        alt: "The new onboarding experience - personalised plan for Sales Hub with specific tasks for a sales rep",
        caption: "Personalised plan for the hub you actually bought",
      }}
    />

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        What good actually looked like
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Before writing a spec, I ran customer interviews and sat in on
        workshops with our human onboarding team - the people who do this
        every day for enterprise customers.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The pattern was clear: good onboarders don&apos;t start with a task list.
        They start with questions. What are you trying to accomplish? Who on
        your team will use this? Have you used a CRM before? The task list is
        a consequence of the answers, not a template applied to everyone.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The hypothesis: if we could capture those goals upfront - role,
        company size, hub purchased, prior CRM experience - we could generate
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
        prototype in Lovable covering the full journey: upgrade,
        conversational intake, plan acceptance, first task.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Customers didn&apos;t want to chat their way through onboarding. They
        wanted to click. What resonated wasn&apos;t the conversation - it was the
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
        The agent, and how I knew it was any good
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        The experience opens with a structured intake. The agent reads the
        customer&apos;s website and business context, pre-fills a profile, and
        asks them to confirm or edit it - a review-and-confirm step rather
        than a questionnaire. A few targeted questions about goals and team
        setup follow. The agent uses those answers, plus company size and
        industry, to generate a personalised plan from a library of onboarding
        tasks and tours.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The hard part wasn&apos;t generating a plan. It was knowing whether the plan
        was any good. So I built the yardstick. I analysed 100 real calls from
        HubSpot&apos;s human onboarding specialists - the people who do this well
        every day - and turned them into a golden eval set defining what a good
        plan looks like for a given customer profile.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        I wrote the first-pass system prompt the agent runs on, owned the task
        and tour library it draws from, and ran the agent&apos;s outputs against
        those evals - iterating the prompt with engineering until the agent&apos;s
        plans matched what a specialist would have recommended for the same
        customer. The expertise that used to live in a paid human became the bar
        the agent had to clear.
      </p>
    </section>

    <Screenshot
      src="/projects/onboarding/after-intake.png"
      alt="The agentic intake - the agent analyses the customer's website and presents a pre-filled business profile for review and confirmation"
      url="app.hubspot.com/onboarding"
      caption="Agentic intake: the agent pre-fills context from your website. You review and confirm - no questionnaire."
    />

    <section>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">Results</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { stat: "+20pts", label: "week-1 visits" },
          { stat: "+26pts", label: "month-1 usage" },
          { stat: "$270K", label: "MRR off human onboarding" },
          { stat: "56→69%", label: "initial value" },
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
        The onboarding experience I owned - intake, plan generation, and routing,
        built with partner teams who shipped the rendering surface and task
        content - drove a +20pt lift in week-1 Sales Workspace visits and +26pts
        in month-1 usage against a control. $270K of MRR reached value through
        this product-led path, work that previously required a paid onboarding
        specialist. Portal Initial Value - whether customers reach meaningful
        usage in their first 30 days - rose from 56% to 69% across the period.
        The framework expanded to Marketing, Service, Commerce, and Content Hub.
      </p>
    </section>

    <section className="border-l-2 border-zinc-100 pl-5">
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        What V1 didn&apos;t solve
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        A personalised plan got more customers to start, but completing setup
        tasks still wasn&apos;t the same as using HubSpot. The plan leaned too far
        toward configuration - import this, connect that - and not far enough
        toward the actions that show a customer why they upgraded.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The work that followed shifted the question from &ldquo;have you finished
        setup?&rdquo; to &ldquo;have you gotten an outcome?&rdquo; - reorienting the plan around
        first value, not first configuration. Shipping V1 is what gave us the
        data to know that. That was the point.
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

const MobileReps2020Content = () => (
  <div className="space-y-10">
    <section>
      <p className="text-zinc-500 leading-relaxed">
        The 2019 features fixed specific moments - a conference, an incoming call, an
        email open. But after ~60 customer calls in early 2020, the gap was clear: reps
        had no coherent answer to the question they ask every morning. What do I actually
        do today?
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Four features built that answer, one part at a time - three through 2020,
        the fourth the year after.
      </p>
    </section>

    <section>
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
        Starting the day
      </p>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        Today View - now Home
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Reps juggle three to five tools and no single place tells them what to do next.
        Much of a rep&apos;s day is calendar-driven, yet mobile had zero visibility into
        scheduled meetings. Competitors - Pipedrive, Zoho, Copper - already had a
        Today tab. HubSpot didn&apos;t.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Customer research validated the ordering: scheduled work first, then unscheduled.
        Reps wanted to start the day with what was committed, then move to what was
        outstanding. The MVP call was Android-only, tab #1, gated inside the main app
        rather than a separate download - iOS users were anchored to the legacy Digest
        concept and would need a different approach once the Android data was in.
      </p>
    </section>

    <MobileScreenshots
      screens={[
        {
          src: "/projects/mobile-reps-2020/today-view-1.png",
          alt: "Today View home showing upcoming tasks, upcoming meetings, and forecasting progress",
          caption: "Tasks, meetings, and forecast in one place",
        },
        {
          src: "/projects/mobile-reps-2020/today-view-2.png",
          alt: "Logging a meeting directly from Today View, with notes and follow-up task",
          caption: "Log a meeting from Today View",
        },
      ]}
    />

    <section>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { stat: "+2pts", label: "retention (Android)" },
          { stat: "29%", label: "daily engagement" },
          { stat: "0→18%", label: "task follow-up creation" },
          { stat: "#1", label: "Sales feature by 2022" },
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
        Today View became the #1 Sales feature on mobile by 2022 - two years after
        shipping. It&apos;s the direct ancestor of what is now called Home in the HubSpot
        mobile app.
      </p>
    </section>

    <section>
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
        Working the list
      </p>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">Tasks</h2>
      <p className="text-zinc-500 leading-relaxed">
        Tasks was the second most-created engagement in HubSpot. 30K reps used it
        on mobile weekly. 82% of NPS mentions were negative or neutral. Reps were
        working around it - pen and paper, separate to-do apps - because the mobile
        experience didn&apos;t fit how they actually worked.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The customer calls revealed the pattern. Reps don&apos;t think about tasks as a
        list to manage. They move through three stages: organise what&apos;s due, action
        the urgent ones, create new ones in context. That became the framework for
        breaking a large, risky project into three milestones - each shipping one
        stage of value, each with a clear &ldquo;what&apos;s different for you&rdquo; story. You
        don&apos;t ask reps to change everything at once. You ship the part they&apos;re ready for.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        One planned assumption didn&apos;t survive the data. We were going to scope
        task search to the local list a rep was viewing. Usage showed reps needed
        to find any task across their whole workload, not just the one in front of
        them - so I reversed the call to global search before it shipped.
      </p>
    </section>

    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { stat: "30K", label: "weekly task viewers" },
          { stat: "53%", label: "then open a record" },
          { stat: "40%", label: "then call, email, or text" },
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
        Working a task pulled reps into the record, and from there into outreach.
        The list stopped being a parallel chore and became the on-ramp to the next
        call.
      </p>
    </section>

    <section>
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
        Composing outreach anywhere
      </p>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        HubSpot Keyboard
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Reps work where their customers engage - email, WhatsApp, SMS. Those apps
        don&apos;t know about HubSpot. Every time a rep needed to insert a snippet, a
        meeting link, or a document, they had to leave the conversation, open HubSpot,
        copy the content, and come back.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The Keyboard brought CRM sales content into any app with a text field. No
        CRM was doing this. The technical bet was on iOS and Android keyboard
        extensions - a platform capability most enterprise software was ignoring.
        The real product problem wasn&apos;t the feature itself. It was activation: both
        platforms require users to manually enable a third-party keyboard in system
        settings. Solving that meant engineering the onboarding around the friction,
        not around the feature.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The lesson generalised: any feature whose value sits behind an
        OS-permission step has to make that value unmistakable before the ask, or
        the setup wall eats the adoption. It showed up again on CallerID - the
        same wall, the same fix.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        One customer asked directly whether the keyboard tracked keystrokes. It
        didn&apos;t, but the question made the privacy stance explicit: no keystroke
        tracking, no storage, ever. That decision went into the product spec.
      </p>
    </section>

    <MobileScreenshots
      screens={[
        {
          src: "/projects/mobile-reps-2020/keyboard-1.png",
          alt: "HubSpot Keyboard inside a message, showing Meeting Links, Snippets, Documents, and Quotes tabs",
          caption: "CRM content in any app",
        },
        {
          src: "/projects/mobile-reps-2020/keyboard-2.png",
          alt: "HubSpot Keyboard setup screen - enable in system settings, with the no-keystroke-tracking privacy note",
          caption: "The activation wall: enable in settings",
        },
      ]}
    />

    <section>
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
        Coaching on the commute
      </p>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        Conversation Intelligence
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Sales managers don&apos;t have time blocked for coaching. It happens in
        in-between moments - on the way to a meeting, between calls, on a commute.
        Conversation Intelligence existed on desktop only. Reviewing a call meant
        opening a laptop.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        The framing for mobile CI was simple: coach your reps like you listen to a
        podcast. Playback with screen off, variable speed, timestamp comments,
        transcript. Built the following year, this was the first feature on HubSpot
        Mobile made specifically for a sales manager - every prior feature was built
        for reps. The bet was
        that managers spending time in the app would pull the whole team in. About
        50% of all CI users accessed it on mobile.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Launch was not clean. Most managers who opened the tab had no recorded
        calls to review yet, so the first cohort hit an empty experience. That
        sent us back to fix discovery - surfacing calls worth reviewing - before
        the commute-coaching habit could take hold. I owned the founding strategy
        and the demo; the later build was a team effort.
      </p>
    </section>

    <MobileScreenshots
      screens={[
        {
          src: "/projects/mobile-reps-2020/ci-1.png",
          alt: "Conversation Intelligence call list showing recent recorded calls with scores",
          caption: "Call library on mobile",
        },
        {
          src: "/projects/mobile-reps-2020/ci-2.png",
          alt: "CI playback view with transcript, timestamp comments, and playback speed controls",
          caption: "Review a call like a podcast",
        },
      ]}
    />

    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { stat: "147K", label: "sales managers on mobile" },
          { stat: "37%", label: "of all sales managers" },
          { stat: "~50%", label: "of CI use on mobile" },
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
        Managers were already on mobile in volume. Putting call review where they
        spent their in-between time made coaching fit the commute, and that pulled
        their teams in behind them.
      </p>
    </section>

    <section className="border-l-2 border-zinc-100 pl-5">
      <p className="text-zinc-500 leading-relaxed">
        Four features, one question. No single launch answered &ldquo;what should I
        do next?&rdquo; on its own. Today View set the day, Tasks worked the list,
        the Keyboard carried CRM content into every conversation, and Conversation
        Intelligence brought coaching along for the commute. The coherence is what
        changed how mobile felt.
      </p>
    </section>

    <section className="border border-zinc-100 rounded-lg p-6 flex items-center justify-between gap-4">
      <div>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
          Part 1 of 2
        </p>
        <p className="text-sm font-semibold text-zinc-900">
          At a conference, on a call, waiting on a prospect
        </p>
        <p className="text-zinc-500 text-sm mt-1">
          Business Card Scanner, CallerID, and Activity Feed - 2019
        </p>
      </div>
      <a
        href="/project/mobile-reps-2019"
        className="text-sm text-zinc-900 border border-zinc-200 rounded px-4 py-2 hover:bg-zinc-50 transition-colors whitespace-nowrap flex-shrink-0"
      >
        ← Back to Part 1
      </a>
    </section>
  </div>
);

const MobileReps2019Content = () => (
  <div className="space-y-10">
    <section>
      <p className="text-zinc-500 leading-relaxed">
        In 2019, HubSpot Mobile existed but it was a shrunken desktop. Every feature
        was designed around keyboards, big screens, and sustained attention. Three of
        the most common things a rep does during their day - meet someone new, take a
        phone call, wait on a prospect - weren&apos;t served by the app at all.
      </p>
    </section>

    <section>
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
        At a conference
      </p>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">
        Business Card Scanner
      </h2>
      <p className="text-zinc-500 leading-relaxed">
        Reps meet people. They exchange cards, make notes on the spot, and then spend
        time later manually entering those contacts into a CRM. The phone in their
        pocket already has a camera.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Business Card Scanner used OCR and an in-house ML classification model to
        photograph a card and create an enriched CRM contact in seconds - name, job
        title, company, phone, email - no manual entry. Before committing to in-house
        ML, I ran a competitive benchmark against ABBYY, CamCard, and Wantedly: booked
        a conference room, sourced real cards from the sales floor, and scanned each
        one against every solution. HubSpot&apos;s model scored highest - 90.8% accuracy
        on iOS, 85.7% on Android.
      </p>
    </section>

    <MobileScreenshots
      screens={[
        {
          src: "/projects/mobile-reps-2019/bcs-1.png",
          alt: "Business Card Scanner — camera view ready to scan a card",
          caption: "Scan a card",
        },
        {
          src: "/projects/mobile-reps-2019/bcs-2.png",
          alt: "Business Card Scanner — contact created from the scanned card",
          caption: "Contact created instantly",
        },
      ]}
    />

    <section>
      <p className="text-zinc-500 leading-relaxed">
        5K WAUs. W1 retention in the mid-20s. 20% week-over-week growth at launch.
        When COVID collapsed conference attendance in 2020, card-scanning usage followed.
        The right call was to deprioritise planned v2 investment - additional fields,
        post-scan workflows, a local model replacing cloud OCR - and redeploy the team
        to Today View. BCS stayed live. The roadmap was paused, not the feature.
      </p>
    </section>

    <section>
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
        On an incoming call
      </p>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">CallerID</h2>
      <p className="text-zinc-500 leading-relaxed">
        A rep&apos;s phone rings. Unknown number. Three options: answer blind, let it
        ring, or look it up and miss it. None of those work.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        CallerID surfaced CRM context on the lock screen before the rep answered - who
        was calling, which deals they were on, recent activity. No manual contact sync.
        Shipping it meant working inside the iOS and Android platform ecosystems - each
        handles incoming calls differently, each has system-level constraints on what
        you can surface and when. When Google removed external CallerID access
        mid-development, we rebuilt the Android approach from inside the platform.
      </p>
    </section>

    <MobileScreenshots
      screens={[
        {
          src: "/projects/mobile-reps-2019/callerid-1.png",
          alt: "HubSpot Caller ID notification appearing on the iOS lock screen",
          caption: "Caller ID on the lock screen",
        },
        {
          src: "/projects/mobile-reps-2019/callerid-2.png",
          alt: "HubSpot mobile Calling settings showing the Caller ID toggle",
          caption: "Turning Caller ID on in settings",
        },
      ]}
    />

    <section className="border-l-2 border-zinc-100 pl-5">
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
        A later rebuild, and a miss worth keeping
      </p>
      <p className="text-zinc-500 leading-relaxed">
        Years later, CallerID had decayed - slow, unreliable, and effectively
        broken for large portals. The team rebuilt the reliability layer; my lane
        was the relaunch: the adoption play, the impact measurement, and the root
        cause of why iOS so often showed nothing (Apple only triggers CallerID for
        numbers stored in +E.164 format, which most people don&apos;t). Reliability
        moved hard - slow loads over two seconds dropped from 54% to 6%.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Adoption is the honest part. I set the target at 51% with no real model
        behind it - just a belief that most people would obviously want their
        phone connected to their CRM. We hit about 10%. The funnel showed why:
        plenty of users tapped the prompt, far fewer finished enabling it, because
        turning CallerID on means granting a system permission. The same wall as
        the Keyboard. The lesson stuck - when the value sits behind an OS
        permission, you earn the setup or you don&apos;t get the adoption.
      </p>
    </section>

    <section>
      <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
        Waiting on a prospect
      </p>
      <h2 className="text-sm font-semibold text-zinc-900 mb-3">Activity Feed</h2>
      <p className="text-zinc-500 leading-relaxed">
        Reps track their emails. The moment a prospect opens a message is a signal to
        act - not when the rep gets back to their desk, but immediately.
      </p>
      <p className="text-zinc-500 leading-relaxed mt-4">
        Activity Feed put that signal on the phone. A push notification fires when a
        tracked email opens. Tap, and you&apos;re on the relevant contact before the
        prospect has finished reading. That habit loop - notification, open, action -
        turned mobile from a backup tool into a daily driver. Activity Feed push
        notifications eventually accounted for <strong>70% of all notifications</strong>{" "}
        sent from the HubSpot mobile app. 62K users checked their feed weekly, 71%
        of them on a paid hub.
      </p>
    </section>

    <MobileScreenshots
      screens={[
        {
          src: "/projects/mobile-reps-2019/af-1.png",
          alt: "Activity Feed showing real-time email open notifications and prospect activity",
          caption: "Real-time prospect activity",
        },
        {
          src: "/projects/mobile-reps-2019/af-2.png",
          alt: "Push notification for email open — contact name and action prompt",
          caption: "The notification that starts the habit loop",
        },
      ]}
    />

    <section className="border border-zinc-100 rounded-lg p-6 flex items-center justify-between gap-4">
      <div>
        <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1">
          Part 2 of 2
        </p>
        <p className="text-sm font-semibold text-zinc-900">
          What should I do next?
        </p>
        <p className="text-zinc-500 text-sm mt-1">
          Tasks, Today View, Keyboard, and Conversation Intelligence - 2020
        </p>
      </div>
      <a
        href="/project/mobile-reps-2020"
        className="text-sm text-zinc-900 border border-zinc-200 rounded px-4 py-2 hover:bg-zinc-50 transition-colors whitespace-nowrap flex-shrink-0"
      >
        Continue →
      </a>
    </section>
  </div>
);

export const projectPages: ProjectPage[] = [
  {
    slug: "mobile-reps-2020",
    title: "What should I do next?",
    label: "HubSpot · 2020 · Sales Mobile · Part 2 of 2",
    intro:
      "60 customer calls revealed the gap. Tasks, Today View, Keyboard, and Conversation Intelligence each answered a different part of the question reps ask every morning.",
    content: <MobileReps2020Content />,
  },
  {
    slug: "mobile-reps-2019",
    title: "Sales software is built for desks. Sales reps aren't.",
    label: "HubSpot · 2019 · Sales Mobile · Part 1 of 2",
    intro:
      "Three features built around where reps actually are - at conferences, on calls, waiting on prospects. Not a desktop port. A phone that does the job.",
    content: <MobileReps2019Content />,
  },
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

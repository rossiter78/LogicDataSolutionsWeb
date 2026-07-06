# Logic Data Solutions — Website Specification

This is the authoritative content and layout spec. Copy here is final unless marked `[PLACEHOLDER]` (awaiting real content from Trent — see `content-templates.md`). The build agent should treat headings and copy as written, and the section order as the page structure.

> **Session 2 revision.** §1 (positioning), §3 (Home), §4 (AI Solutions), §5 (Enterprise, standalone-behavior note), and §9 (hero brief) were rewritten to reflect the refined direction: an **AI-forward front of house for SMBs, with Denodo as a credentialed referral annex.** Where older text described a balanced, symmetrical two-track site, this version supersedes it.
>
> **Session 3 revision.** §3.1 (H1) and §9 (hero visual) were rewritten again after the animated architecture-diagram hero was built, reviewed, and rejected in favor of a more AI-forward, kinetic hero (a rotating headline paired with a live agent-demo prompt box). The architecture-diagram concept described in older §9 text is superseded — the diagram no longer ships anywhere on the site.

---

## 1. Positioning & Messaging Strategy

### The core idea
**AI works when the data underneath it is trustworthy.** Most AI projects don't fail on the model — they fail on the data foundation: ungoverned, stale, scattered, or unverifiable. Logic Data Solutions builds AI that holds up in production *because* it's built on governed, real-time, well-architected data.

### Who we are talking to (ICP — decided Session 2)
The site is aimed, in priority order, at:

1. **The curious beginner (guest of honor).** A small-business owner who wants "an AI thing" but doesn't yet know what it is, whether their business is ready, or what to ask for. Their private fear is *"I don't know enough to even start the conversation."* The entire front of house is tuned to remove that fear.
2. **The burned buyer (welcome addition — NOT the main event).** A small or mid-sized business that already tried AI — often a RAG assistant or chatbot over their own data — and got vague, wrong, or unreliable answers, so the project stalled or was shelved. They're skeptical, not ignorant; they already believe AI *can* work, they just don't trust the last person who promised it. Served through *diagnosis + rescue* woven into the AI page as reassuring depth. Higher-value and faster-closing than the beginner, but deliberately kept as a supporting character so the page keeps its warm, optimistic throughline.
3. **The enterprise data leader.** Arrives by **word-of-mouth referral (Denodo), not web search.** Lands directly on `/enterprise-data` and reads a page written peer-to-peer. Rarely enters through the homepage.

### The front-of-house / back-of-house model
This resolves the two-audience problem without splitting into two sites:
- **Front of house — AI Solutions.** Loud, primary, plain-language, SMB-facing. The homepage, hero, and `/ai-solutions` all live here. No Denodo knowledge assumed.
- **Back of house — Enterprise Data & AI Foundations.** Quiet, credentialed, self-contained. Because referrals land there directly, `/enterprise-data` must stand entirely on its own (see §5). It behaves like a microsite at a URL: a referred prospect can arrive, understand the offer, trust it, and book without ever touching the homepage.

One legal entity, one website, one LinkedIn company page. Two *practices/divisions* inside the one house — not two brands. (A two-site / two-company-page split was considered and rejected: it would amputate the rarest asset — the combination — and double the operational tax for a solo principal.)

### The differentiator — and its JOB (this is the whole strategy)
Most AI consultants can't speak to governed, real-time enterprise data architecture. Most data architects can't actually build agents, RAG pipelines, and MCP servers. **Trent does both — hands-on, in production, for real clients.** Almost no competitor can tell that story.

**Critical Session-2 decision — the differentiator's job changed:**
- It is **not the hook.** A non-technical SMB visitor doesn't wake up thinking about their "data foundation," so leading with it filters out the guest of honor in the first three seconds.
- It **is the trust-builder that closes the sale.** *Lead wide in the visitor's language (their problem); win deep with pedigree (why it'll actually hold up).* The data-foundation story moves from the doorway to the closing table — which is where a high-ticket differentiator does its real work anyway.

The rule that follows: **accessible in the hook, unmistakable in the proof.** The pedigree (enterprise/aerospace architecture, NASA manufacturing award, frontier enterprise-AI work) must be *visible and repeated* — hero support line, a dedicated "why it'll work" section, proof, case studies. Warmth without proof is the generic pitch; warmth *plus* visible pedigree is a category of one. Dumbing everything down and burying the pedigree in a footnote is the one failure mode to avoid.

### Why the burned buyer strengthens, not dilutes
The beginner needs "it's the foundation, not the model" as *reassurance* ("that's why ours will work"). The burned buyer needs the same sentence as *diagnosis* ("*that's* why yours didn't"). One differentiator, two jobs — so the persona is added with three surgical touches (a recognition card, one diagnostic beat, one FAQ) rather than a second track. The differentiator lands hardest on someone who has *lived* a failed project; that's a gift, used deliberately.

### Voice & tone
- **Front of house (home, AI):** senior, precise, calm, engineering-led — *and warm, plain-spoken, permission-giving.* Confidence without hype.
- **Back of house (enterprise):** shift register to peer-to-peer expert — denser, assumes the reader knows what data virtualization is, shows depth fast.
- Company voice ("we"), with Trent named as the principal behind the work.
- **Never** direct-response/"bleeding money" energy. **Never** headcount-reduction or layoff framing. The promise is augmenting teams and building things that work.

### Proof pillars (used across the site)
1. **Builds, doesn't just advise** — production agentic systems, a custom CRM with its own MCP server, RAG chatbots, computer vision, local model deployment.
2. **Foundation-grade data expertise** — Denodo partner; authorized subcontractor collaborating with Denodo's AI engineering team; deep platform architecture/administration. *(On the AI side, deploy this as the trust-builder, not the headline.)*
3. **Enterprise pedigree** — principal architect at a major aerospace company; NASA manufacturing award; ~$1M/yr cost reductions; scaled a platform user community 3 → 30+.
4. **Credentialed** — Denodo (Architect, Administrator, AI SDK), AWS Certified AI Practitioner, Cornell Data Science, MBA (Honors); Microsoft Generative AI Engineering cert in progress.

### Taglines
Primary (hero H1) is now tuned to the beginner ICP. Older, foundation-forward lines are retained below as *interior* copy (they're excellent as the H2 of "why most AI stalls," not as the front-door hook).
- **Hero H1 (primary):** *AI for your business — even if you're not sure where to start.*
- Interior / differentiator lines: *AI that works — because the data underneath it does.* · *The data foundation your AI has been missing.* · *Production AI, built on a foundation you can trust.*

---

## 2. Sitemap & Navigation

### Pages
- `/` — Home
- `/ai-solutions` — AI Solutions (front of house — primary)
- `/enterprise-data` — Enterprise Data & AI Foundations (back of house — referral landing)
- `/work` — Case Studies & Showcases
- `/about` — About
- `/contact` — Contact / Book a discovery call
- `/lab` — **Future**, build the route but link it only when ready (see `content-templates.md`)

### Primary nav (left logo, right links)
Home · AI Solutions · Work · About · Enterprise Data · **[Book a call]** (button, Corporate Red)

- The loud primary path is **AI Solutions → Work (proof) → Book.**
- **Enterprise Data** stays in the nav (it helps the occasional referred visitor who lands on the home find their way) but sits **visually quieter** than AI Solutions and Work — e.g. later in the order, lighter weight. Present for those who seek it; not shouted at those who don't.

### Footer
- Column 1: logo (icon), one-line descriptor, LinkedIn link.
- Column 2: AI Solutions, Enterprise Data, Work, About, Contact.
- Column 3: email, phone, "Westminster, CO · serving clients nationally."
- Bottom: © {year} Logic Data Solutions.

Note: this replaces the old standalone "Testimonials" and split "AI Services / Data Services" pages. Testimonials are distributed as proof on relevant pages plus an About-page block.

---

## 3. Home (`/`)

**Emphasis (Session 2):** the home is **AI-forward for the SMB**, not a balanced fork. Break the old symmetrical two-track section; give the enterprise practice a single quiet handoff band, not a co-equal panel. Thread the AI Opportunity Assessment through the page as the recurring, pressure-free next step.

### 3.1 Hero (Dark Charcoal band)
- **Eyebrow** (Corporate Red, small caps): AI & ENTERPRISE DATA CONSULTING
- **H1 (kinetic):** AI that **[rotating word slot]** — working inside your business. The rotating slot cycles through concrete jobs in the visitor's language: "answers your customers," "reads your paperwork," "drafts your proposals," "digs through your files," "watches your numbers." First value renders server-side as static text (fast LCP, complete sentence with no JS); rotation starts after hydration and is skipped entirely under `prefers-reduced-motion`.
- **Subhead:** We help you find where AI actually fits, then build it — assistants, automations, and custom tools that work in the real world, not just in a demo. Built by an engineer with deep enterprise data roots, so what we ship holds up after launch day.
- **Primary CTA:** Book a free AI Opportunity Assessment → `/contact`
- **Secondary CTA:** See what we've built → `/work`
- **Hero visual:** an agent-demo prompt box (see §9), not an architecture diagram. Sits right of the headline. Settled/reduced-motion state required.

*Why this H1:* it **permits confusion.** The guest of honor's reason to bounce is "I don't know enough to even ask." The headline removes it. The subhead carries the trust-builder (enterprise roots) in one clause without gating comprehension.

### 3.2 Credibility strip (thin band, Light Grey)
A single row of quiet proof, no images. This is where the enterprise/Denodo pedigree earns trust without gatekeeping the hook:
> Denodo Partner · AWS Certified AI Practitioner · 13+ years enterprise data architecture · NASA manufacturing award

### 3.3 The insight / the bridge
- **Section label:** WHY MOST AI STALLS
- **H2:** The problem usually isn't the model. It's the data underneath.
- **Body:** Teams pour effort into prompts and models, then watch results come back wrong, stale, or impossible to trust. The root cause is almost always underneath: data that's scattered across systems, ungoverned, or frozen in exports that were already out of date when they were made. We start where AI actually succeeds or fails — at the data foundation — and build up from there. That's why our chatbots, agents, and pipelines hold up in production instead of demos.

*(This is the correct home for the foundation thesis — to a reader who is now warmed up and ready for it.)*

### 3.4 What could AI do for you? (self-select by PROBLEM, not by track)
Replaces the old symmetrical two-track cards. The visitor recognizes their own situation in plain language.
- **Section label:** WHERE COULD YOU START?
- **H2:** You don't need to know the tech. You just need to know the problem.
- A set of recognition cards (see `content-templates.md` §4 for the reusable shape). Use the AI-page set condensed to 3–4 on the home, ordered hopeful-first with the "tried it, it stalled" card **last**:
  1. *You answer the same questions all day* → an assistant that knows your business.
  2. *You're doing the same task over and over* → automate it end to end.
  3. *You're sitting on information nobody has time to use* → make it searchable and useful.
  4. *You already tried AI and it didn't quite work* → we diagnose why and rebuild it on a foundation you can trust.
- CTA under the set: Explore AI Solutions → `/ai-solutions`

### 3.5 Capabilities (demoted to PROOF-of-competence, not the pitch)
The capabilities grid moves *behind* the problem framing above. It's no longer the sales pitch — it's the "yes, we actually know how" reassurance for the minority who want the mechanics.
- **Section label:** UNDER THE HOOD
- **H2:** How we build it.
- Grid of 6 (icon + title + 1–2 lines), distinct simple line icons:
  1. **Agentic AI** — Systems that reason, plan, and act across your tools using multi-step workflows and dynamic tool selection.
  2. **Query & Knowledge RAG** — Retrieval pipelines with full control over vector stores, embeddings, and tuning — answers grounded in your real data.
  3. **MCP Integration** — Custom MCP servers and clients that let agents discover and use your systems through an open, standard protocol.
  4. **Computer Vision** — Object detection and image-to-data pipelines, from cloud to constrained edge hardware.
  5. **Local & On-Prem Models** — Open-weight model deployment (Llama, Qwen, Gemma, and more) for air-gapped, private, and cost-sensitive environments.
  6. **Custom AI Applications** — Full-stack apps with AI built in — APIs, automation, and the infrastructure agents need to do real work.

### 3.6 Featured proof
- **Section label:** PROOF
- **H2:** Real systems, in production.
- One featured case study card (use a *relatable* R&D showcase at launch — the agentic CRM or the RAG chatbot, not the most technical build) + a row of 3 outcome stats (e.g. "Multi-day analysis → minutes", "~$800K redevelopment avoided", "3 → 30+ platform users"). Link: See all work → `/work`.

### 3.7 Why work with us
- **Section label:** WHY LOGIC DATA SOLUTIONS
- **H2:** Senior expertise, without the agency overhead.
- Three short points:
  - **You work with the principal.** No hand-off to junior staff. The person scoping your project is the person building it.
  - **We build on what's real.** Governed, live data — not static exports or unmanaged lakes — so your AI is accurate and auditable.
  - **Open standards, your ownership.** MCP, open-weight models, and architectures you own and can run yourself. No black boxes, no lock-in.

### 3.8 Entry offer (the conversion spine — echoed everywhere)
- **Section label:** A LOW-RISK FIRST STEP
- **H2:** Start with a free AI Opportunity Assessment.
- **Body:** Not sure where AI fits — or whether your data is ready for it? We'll review your goals, systems, and data foundation, then map the highest-value, lowest-risk places to start, with a clear path to production. No pressure, no obligation.
- **CTA:** Book your free assessment → `/contact`

### 3.9 Enterprise handoff (quiet, dignified — NOT a co-equal track)
A slim band low on the page, understated. The people who need it recognize "Denodo" instantly; everyone else glides past.
- **Copy:** *Enterprise data leaders: we also run a specialized Denodo data-virtualization practice — governed, real-time data foundations for enterprise AI. See Enterprise Data & AI Foundations → `/enterprise-data`.*

### 3.10 Testimonials
- **H2:** What clients say.
- 3 featured testimonials (see `content-templates.md`), ≥1 AI-related prioritized visually. Below: "More recommendations on LinkedIn →" link.

### 3.11 Final CTA (Dark Charcoal band)
- **H2:** Not sure if AI is right for you? That's the perfect place to start.
- **Body:** Tell us what you're trying to do. We'll tell you the most direct way to get there — honestly, whether or not we're the ones to build it.
- **CTA:** Book a free assessment → `/contact`

---

## 4. AI Solutions (`/ai-solutions`)

**Structure (Session 2 rewrite):** the page is a *narrative*, not a feature list. It walks one anxious person from "I'm curious but out of my depth" to "I want to talk to this person," and makes "just another AI guy" structurally impossible by putting the pedigree load-bearing in §4.3 — a visitor cannot reach the CTA without passing through it. Spine: **recognize me → reassure me it'll work → show me it's safe and clear → prove it → make the first step trivial.**

### 4.1 Hero — job: make the guest of honor feel this is for them in under 3 seconds
- **Eyebrow:** AI SOLUTIONS
- **H1:** AI for your business — even if you're not sure where to start.
- **Subhead:** We help you find where AI actually fits, then build it — assistants, automations, and custom tools that work in the real world, not just in a demo. No jargon required.
- **Primary CTA:** Book a free AI Opportunity Assessment → `/contact`
- **Secondary CTA:** See what we've built → `/work`

### 4.2 Recognition — job: replace the capabilities menu with "that's me"
The visitor meets their *problem* before any of your vocabulary. Order hopeful-first; the "tried and failed" card is **last** so a skimming beginner gets three optimistic hits before the word "fail" appears. (The burned buyer scans harder and will find card four easily.)
- **Section label:** WHAT COULD AI DO FOR YOU?
- **H2:** You don't need to know the tech. You just need to know the problem.
- Cards (see `content-templates.md` §4 for the reusable shape; the parenthetical names the hidden capability — it does **not** appear on the site):
  1. **"You answer the same questions all day."** A customer-facing assistant that actually knows your business — your policies, products, and documents — and handles the repetitive questions so your people don't. *(RAG)*
  2. **"You're doing the same task over and over."** We automate the repetitive, rule-based work end to end, so it runs reliably in the background instead of eating your week. *(Agentic automation)*
  3. **"You're sitting on information nobody has time to use."** Documents, images, records, spreadsheets — we turn the pile into something you can search, ask questions of, and act on. *(RAG + vision)*
  4. **"You already tried AI — and it didn't quite work."** Maybe you built an AI assistant or a chatbot over your data, and it gives vague, wrong, or unreliable answers. Usually the problem isn't the AI — it's what it's reaching into underneath. We diagnose why it's failing and rebuild it on a foundation that gives you answers you can trust. *(Rescue / RAG diagnosis — kept last, phrased conditionally)*

### 4.3 The turn — job: make "another AI guy" impossible
Delivered right after they feel understood, before they're asked for anything. The differentiator arrives as *reassurance* (and, for the burned buyer, *diagnosis*), never as a boast.
- **Section label:** WHY IT'LL ACTUALLY WORK
- **H2:** The hard part isn't building AI. It's building AI that holds up.
- **Body:** Anyone can wire up a chatbot for a demo. The reason so many AI projects quietly die is that they were never built to survive contact with real use — real data, real edge cases, real Monday mornings. We come at it differently. Before Logic Data Solutions, our principal spent more than a decade architecting governed data systems for an aerospace company — the kind of environment where "mostly works" isn't an option, and where the work earned a NASA manufacturing award. That same rigor goes into your project, whether you're a two-person shop or a growing team. We build the boring, reliable plumbing underneath the AI — exactly the part everyone else skips, and exactly why our systems keep working after launch day. And if you've already been burned — an AI project that demoed well and then fell apart in real use — that failure almost always traces to the same place: the data underneath was scattered, stale, or ungoverned, so the AI was reasoning over a shaky foundation. That's the exact problem our background is built to fix.

### 4.4 How we work — job: dissolve the fear of an opaque, runaway project
Four calm steps, one line each:
- **Assess** — we find where AI fits and whether it's worth doing (low-cost, low-risk).
- **Prototype** — you see something real fast, not a slide deck.
- **Productionize** — we make it reliable, secure, and integrated.
- **Own & operate** — it's yours; no black box, no lock-in. We support as much or as little as you want.

### 4.5 The foundation advantage (bridge, restated for AI buyers)
- **H2:** The difference is what's underneath.
- **Body:** Anyone can wire up a model. What makes AI trustworthy is the data it stands on — governed, current, and complete. Our background in enterprise data architecture means we build that foundation in from the start, even on smaller projects, so your AI gives answers you can rely on. Need that at enterprise scale? See **Enterprise Data & AI Foundations →** `/enterprise-data`.

### 4.6 Proof
Row of relevant showcases/case studies, led by the most *relatable* build → `/work`.

### 4.7 FAQ — job: answer the unspoken objections of THIS buyer
- **"I don't really know what I want — is that a problem?"** The opposite — it's the most common way people start with us, and it's exactly what the first conversation is for.
- **"We already tried building something and it didn't work — can it be saved?"** Often, yes. We start by finding *why* it's failing — and in our experience it's usually the data layer underneath, not the AI itself. Sometimes we rebuild that foundation; sometimes a targeted fix gets it back on track. Either way, you'll get a straight answer about what went wrong and what it'll take to fix it.
- **"Isn't this only for big companies?"** No. This practice is built for small and growing businesses. (We *also* do enterprise data work — but the AI practice is for you.)
- **"How is this different from just using ChatGPT?"** ChatGPT doesn't know your business, your data, or your systems. We build AI that does — and that belongs to you.
- **"Is my data safe?"** Yes — we can deploy private and on-prem/open-weight models so your data never leaves your control, and we design with governance and access control from the start.
- **"What does it cost?"** Most people start with a free assessment, so you get a real plan and a real number before committing to anything.

### 4.8 Final CTA — job: make the next step feel like nothing
- **H2:** Not sure if AI is right for you? That's the perfect place to start.
- **Body:** One free conversation. We'll look at what you do, spot where AI could genuinely help, and tell you honestly if it's worth it. No pressure, no obligation.
- **CTA:** Book your free assessment → `/contact`

---

## 5. Enterprise Data & AI Foundations (`/enterprise-data`)

> **Standalone-behavior note (Session 2):** because enterprise leads arrive **referred** and land here directly — often before seeing anything else — this page must stand completely on its own. Assume the visitor has NOT read the homepage and may not know the AI story. Give it a full hero, its own credibility, and a clear "who we are" so a referred prospect can arrive, understand, trust, and book without touching the front of house. Shift the voice to **peer-to-peer expert**: denser, precise, assumes the reader knows what data virtualization is. This is where the instinct toward "a second site" is honored — the page *behaves* like the second site while sharing one codebase and reputation.
>
> Follow the Denodo hard rules in `CLAUDE.md`: name and partner/subcontractor status are allowed; logo and "representing Denodo" are not.

### 5.1 Hero
- **Eyebrow:** ENTERPRISE DATA & AI FOUNDATIONS
- **H1:** The governed, real-time data foundation your AI needs.
- **Subhead:** Deep Denodo data-virtualization expertise — architecture, administration, and AI enablement — so your enterprise AI can reason over all your data, in real time, under full governance.
- **CTA:** Book a discovery call → `/contact`

### 5.2 Who it's for
- **H2:** For enterprises serious about data — and about AI on top of it.
- **Body:** If your data lives across clouds, warehouses, and on-prem systems, and you need a single governed, real-time access layer — for analytics, for AI, or both — this is the core of our practice. We work with organizations adopting, scaling, or getting more from the Denodo Platform.

### 5.3 The thesis
- **H2:** Agentic AI fails on the data foundation, not the model.
- **Body:** The hardest part of enterprise AI isn't the model — it's giving it secure, real-time, governed access to data spread across dozens of systems. Data virtualization solves exactly this: a logical layer that unifies your sources without copying them, with governance and security built in. It's the foundation that makes enterprise AI accurate, explainable, and safe.

### 5.4 Services
- **Platform architecture** — Lead architecture across all aspects of the Denodo Platform: logical data warehouse, data fabric, and data mesh designs.
- **Administration & operations** — SSL, identity/AD integration, RBAC/FGAC security models, caching strategies, license management, upgrades, and cluster configuration.
- **Denodo for AI** — Full-stack Denodo AI SDK deployments: vector store, metadata indexing, multi-LLM integration (cloud and on-prem), DeepQuery, and both MCP server variants (Platform MCP and AI SDK MCP).
- **Integration & performance** — Integrations across MS Fabric, Snowflake, Databricks, Netezza, Presto, Trino, and more; performance tuning, caching, and DuckDB integration for major speed gains.
- **Governance & enablement** — Metadata strategy, deployment governance, managed citizen-development programs, and team training.

### 5.5 The specialization (differentiator)
- **H2:** At the frontier of Denodo's AI capabilities.
- **Body:** We are a **Denodo partner** and an authorized **subcontractor that collaborates directly with Denodo's AI engineering team**, working at the leading edge of the platform's AI features — AI SDK, DeepQuery, and MCP. We extend the open-source AI SDK at the source level (for example, adding OAuth for secure enterprise chatbot deployments), so you're not limited to what's available out of the box.
  *(Do not imply Denodo endorsement of Logic Data Solutions. This states factual relationship only.)*

### 5.6 Heritage / credibility
- **Body:** Our principal served as enterprise architect and administrator for the Denodo Platform at a major aerospace company — owning design, installation, upgrades, and roadmap; delivering a proof-of-concept that launched a dedicated Data Science and Data Engineering organization; and scaling the platform community from 3 to 30+ users through governed citizen development and formal training.

### 5.7 Proof
Relevant enterprise outcome stories (anonymized) → `/work`.

### 5.8 CTA
- **H2:** Let's talk about your data foundation.
- **CTA:** Book a discovery call → `/contact`

---

## 6. Work / Case Studies (`/work`)

### 6.1 Intro
- **H1:** Real systems, real results.
- **Subhead:** A selection of what we've built — from production AI applications to enterprise data architectures. Client work is shown anonymized to respect confidentiality; our independent builds are shown in full.

### 6.2 Grid
Two groups, clearly labeled:

**Built in our lab (full detail)** — the four R&D showcases as named case studies (see `content-templates.md`). At launch, order/feature the most *relatable* first (agentic CRM, RAG chatbot) for the SMB visitor, with vision/edge shown as range:
1. Agentic CRM with custom MCP server.
2. Persistent AI agent operations (always-on agents + deterministic automation).
3. Production RAG chatbot (Colorado charter school).
4. Edge computer vision (smart security camera + fine-tuning pipeline).

**Client outcomes (anonymized)** — outcome stories from real engagements (federal, banking, energy, higher ed, legal), each led with a metric. Populate from `content-templates.md` as Trent supplies anonymized numbers.

Each card → a detail view (or expandable section) following the case-study template.

### 6.3 CTA
- **CTA:** Start a conversation → `/contact`

---

## 7. About (`/about`)

### 7.1 Hero
- **H1:** A boutique consultancy with enterprise depth.
- **Subhead:** Logic Data Solutions is led by Trent Rossiter — an AI architect and data engineer who builds the systems, not just the slide decks.

### 7.2 Story (company voice, principal named)
- **Body:** Logic Data Solutions is a boutique AI and enterprise-data consultancy. We exist because of a simple conviction: AI is only as good as the data beneath it. Our principal, Trent Rossiter, spent more than a decade as a principal data architect in enterprise aerospace — building governed data platforms, earning a NASA manufacturing award, and cutting roughly $1M a year in costs by replacing outside consultants with an internal capability. Today that same rigor goes into building production AI: agents, RAG systems, MCP servers, and custom applications for clients across federal government, banking, energy, higher education, and law.

### 7.3 The lab
- **H2:** We build in the open — on our own infrastructure.
- **Body:** We run a private AI development lab — an NVIDIA DGX Spark, containerized workloads, and isolated environments for agent deployment, networked securely — for local model development, architecture validation, and client solution testing. It's how we de-risk client work: we've usually built and broken it ourselves first. Several of the projects in our [work](/work) came out of this lab.

### 7.4 Credentials
Clean list: Denodo (Architect, Administrator, AI SDK) · AWS Certified AI Practitioner · Cornell University Data Science Certificate · University of Denver MBA (Honors) · B.S. Computer Engineering, *cum laude* · Microsoft Generative AI Engineering Professional Certificate (in progress).

### 7.5 Approach / values
Three short values: **Build, don't just advise** · **Foundations first** · **Your ownership, open standards**.

### 7.6 Testimonials
Full testimonial block (all available) + LinkedIn recommendations link.

### 7.7 CTA
- **CTA:** Work with us → `/contact`

---

## 8. Contact (`/contact`)

### 8.1 Hero
- **H1:** Book a discovery call.
- **Subhead:** A 30-minute conversation about what you're trying to do and the most direct way to get there. No pressure, no obligation.

### 8.2 Booking
- Inline Cal.com scheduler themed to the dark palette, backed by Trent's Google Calendar (see `seo-and-build-notes.md` §2 for the embed mechanics; the event slug is supplied via the `NEXT_PUBLIC_CAL_LINK` env var, not committed).
- To the side, "What to expect": three bullets — *We'll discuss your goals and current setup · We'll flag the highest-value, lowest-risk starting points · You'll leave with a clear sense of next steps, whether or not we work together.*

### 8.3 Alternative contact
Email shown as fallback beneath the scheduler (phone and location intentionally omitted). Optional minimal contact form (name, email, message) only if a non-calendar path is wanted — keep it simple; no personal data beyond that.

### 8.4 Light track framing
Two small prompts so visitors land right: *"Exploring AI for your business?"* and *"Need enterprise data architecture / Denodo expertise?"* — both lead to the same booking, just reassuring each audience they're in the right place.

---

## 9. Hero Visual — Design-Level Spec

> **Session 3 rewrite.** The animated architecture diagram originally briefed here (scattered sources → governed layer → AI agent) was mocked, reviewed, and set aside: it read as enterprise data plumbing, not as "AI, right now, for my business" — too indirect for the guest of honor's first three seconds. It replaced with a more direct, more AI-forward concept: a kinetic headline paired with a live demo of an agent working, shown inside a familiar chat/prompt interface. This is the shipped design (`src/components/RotatingWord.tsx` and `src/components/HeroPrompt.tsx`), not a future mock — no separate animation pass remains outstanding.

### 9.1 Concept
Two coordinated pieces, side by side in the hero band:
- **Left — kinetic headline (`RotatingWord`):** "AI that **[rotating word]** — working inside your business." The bracketed slot cycles through concrete, plain-language jobs (see §3.1). This carries the "capability and clarity" read on its own — it's the visitor's own words coming back animated, not a diagram they have to decode.
- **Right — agent-demo prompt box (`HeroPrompt`):** a familiar AI chat input, styled as an inert (non-editable) demo. It types out a real small-business question, shows the agent visibly checking sources step by step (e.g. "▸ querying invoices…", "▸ cross-checking job costs… ✓"), then streams a grounded answer into a card labeled **"Answer — grounded in your data.”** That label is the entire data-foundation differentiator, delivered as a trust signal inside the demo itself — no jargon, no diagram, no Denodo reference — matching the Hard Rules requirement that the differentiator be a trust-builder, not the hook.
- The panel cycles through three scenarios covering the three flavors of "an AI thing" a curious beginner might imagine: analysis (margin question), workflow (stale quotes), and support (customer email assistant).
- The whole panel is a single link to `/contact` (with a descriptive `aria-label`) — clicking the "input" doesn't dead-end, it converts. This avoids the fake-input frustration risk of a non-functional chat box.

### 9.2 Motion (on load, then continuous loop)
- Headline: eyebrow, H1, subhead, and CTAs fade/rise in staggered (`sg-fade-in`, ~0.15s steps).
- Rotating word: cross-fades to the next word every ~2.9s once hydrated.
- Prompt box: question types in character-by-character, a send-button pulses, each verification step appears with a trailing check mark, then the answer card fades in and types out. Holds ~3.4s before looping to the next scenario.

### 9.3 Technical direction
- Plain React components (DOM text + CSS transitions/keyframes), not SVG or canvas — no WebGL/particle effects, matching the Hard Rules performance constraint.
- H1, subhead, and CTAs render as static server text for a fast LCP; the rotating word and prompt-box demo hydrate and animate after paint.
- Respect `prefers-reduced-motion`: both components skip all animation and render a settled, complete state (headline shows its first word with no transition; the prompt box shows its first scenario fully typed and answered, no caret, no loop).
- Colors strictly from the palette: rotating word and "lock-in" accents in Corporate Red / `red-bright`, panel chrome in the ink/titanium/mist scale.

### 9.4 Why not the architecture diagram
- It required the visitor to parse a data-flow metaphor before feeling anything — the opposite of "permits confusion" from §3.1.
- It couldn't demonstrate the product; it could only symbolize it. The agent-demo prompt box shows the actual gesture (ask a question, get a grounded answer) that the rest of the page is selling.
- A glowing particle/nebula field was also rejected as the default AI-site cliché — see the original reasoning, which still holds.

---

## 10. Global UI notes
- Generous whitespace; Off-White base; Charcoal text; Red used sparingly for accent and CTAs.
- Section labels are small-caps, letter-spaced, Corporate Red.
- One primary CTA style (Red, solid) used consistently; one secondary (outline/ghost on dark).
- Cards: Light Grey fill, subtle border, no heavy shadows.
- Mobile-first; recognition cards stack; the hero visual scales to a simplified static form on small screens.
- No emoji in UI. Use a consistent simple line-icon set for capabilities.

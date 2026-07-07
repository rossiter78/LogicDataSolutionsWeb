# Content Templates & Components

Fill-in structures so Trent can drop real content in as it arrives, and the build agent can scaffold components that expect this shape. Anything `[IN BRACKETS]` is a value to be supplied.

> **Session 2 addition:** a new **Recognition Card** component (§4) is the primary content type for the AI-page and home "what could AI do for you?" sections. It's how we lead with the visitor's *problem* instead of our capabilities. Also note the **AI Opportunity Assessment** is now the site's conversion spine (free at launch) - every primary CTA routes to booking it.

---

## 1. Case Study Template

Each case study (both the full lab showcases and the anonymized client outcomes) uses the same shape. The build should make a reusable `CaseStudy` component keyed on these fields.

```
slug: [url-safe-id]
title: [short, concrete title]
track: [ai | enterprise-data]
type: [lab-showcase | client-outcome]
client: [real name | anonymized descriptor e.g. "a top-20 US bank"]
headline_metric: [the one number/result that leads - e.g. "Multi-day analysis → minutes"]
summary: [1–2 sentence card summary]
problem: [what they were trying to solve]
approach: [how we approached it / the foundation thinking]
what_we_built: [the actual system, in plain language]
outcome: [results; include rounded/anonymized metrics where allowed]
tech: [stack tags - e.g. Python, Flask, PostgreSQL, MCP, Qwen3]
confidential: [true | false]   # if true, no client name/logo, descriptor only
```

### 1.1 Pre-filled lab showcases (ready to use - confirm wording)

**Showcase 1 - Agentic CRM with custom MCP server**
- headline_metric: `[e.g. "Day-to-day CRM workflows automated end to end"]`
- problem: A consultancy needed a CRM that AI agents could operate directly - not a SaaS tool with bolt-on automation.
- approach: Built from the ground up for agentic workloads, with a clean API and MCP layer designed for agents first.
- what_we_built: A full-stack CRM (Python, Flask, PostgreSQL) with a REST API and a custom MCP server. Local Qwen3-class agents automate day-to-day workflows; a vision pipeline reads business-card images and auto-populates contacts. Built end-to-end using Claude Code.
- tech: Python, Flask, PostgreSQL, REST API, MCP, local LLM (Qwen3), vision model
- type: lab-showcase

**Showcase 2 - Persistent AI agent operations**
- headline_metric: `[e.g. "Always-on agents running 24/7"]`
- problem: Demonstrate production-minded agent operations, not just prototypes.
- approach: Run persistent agents in isolated environments, and deliberately move high-frequency work off the LLM to deterministic code for reliability and cost.
- what_we_built: Always-on Hermes (Nous Research) agents in isolated environments, with custom skills, shifting high-frequency tasks to deterministic Python and n8n flows.
- tech: Hermes (Nous Research), Python, n8n, LXD
- type: lab-showcase

**Showcase 3 - Production RAG chatbot (charter school)**
- headline_metric: `[e.g. "Instant, grounded answers to school-policy questions"]`
- problem: Staff and families needed fast, accurate answers from a body of school policy documents.
- approach: A retrieval pipeline grounded strictly in the school's own documents.
- what_we_built: A production RAG chatbot for policy Q&A.
- tech: Python, LangChain, LangFlow, ChromaDB, pg_vector, Gemini, Gradio
- type: lab-showcase

**Showcase 4 - Edge computer vision**
- headline_metric: `[e.g. "Real-time detection on repurposed edge hardware"]`
- problem: Run reliable object detection on constrained hardware, with alerting.
- approach: Applied vision inference at the edge, plus a fine-tuning pipeline for domain accuracy.
- what_we_built: A real-time YOLO-based detection system on a repurposed mobile device with Telegram alerting, and a YOLO11s fine-tuning pipeline.
- tech: Python, PyTorch, YOLO/YOLO11s, Google Colab
- type: lab-showcase

> **Launch ordering note (Session 2):** for the SMB front-of-house audience, feature the *most relatable* builds first - the agentic CRM and the RAG chatbot read as "real things that work." Let vision/edge sit as range, not as the lead.

### 1.2 Client outcome stories (Trent to supply)

For each engagement Trent can share (anonymized), fill one template. Target 3–5 at launch. **Action for Trent:** for each, provide a `headline_metric` and a one-line `outcome` with a rounded number cleared against the NDA (e.g. "≈$800K redevelopment avoided", "multi-day analysis cut to minutes", "~500 legacy reports migrated"). Suggested starting set drawn from known history:
- Enterprise BI org built in-house → ~$1M/yr consultant cost eliminated. `[confirm shareable]`
- ~500 legacy reports migrated (previously deemed infeasible) → ~$800K redevelopment avoided. `[confirm shareable]`
- First unified financial + operational data integration → NASA manufacturing award. `[confirm shareable]`
- `[federal / banking / energy / legal AI or data engagement - anonymized]`

---

## 2. Testimonial System

### 2.1 Where testimonials live (single source of truth)
All quotes are defined once in `src/lib/testimonials.ts`. Nothing else in the
codebase types quote text; pages and case studies read from that list. The
`Testimonial` shape:
```
slug:        stable id (case studies link to it via `testimonialSlug`)
pull:        short card-face quote (grids + case-study card face)
full:        full recommendation paragraphs (string[]); optional, powers the
             "See full testimonial" expander and the case-study "in their words"
name / title / org
track:       "ai" | "enterprise-data"
tag:         small eyebrow label, e.g. "Data architecture"
featured:    true to show in the home + About "What clients say" grids
placeholder: true to render a muted "coming soon" card (retire when a real
             quote takes the slot)
```

**How content flows:**
- **Grids** (home + About "What clients say") render `featuredTestimonials`
  (every entry with `featured: true`), via the shared `TestimonialCard`. Cards
  with a `full` quote get a sleek "See full testimonial" expander (native
  `<details>`, distinct from the Work section's heavier disclosure).
- **Case studies** show a quote by reference: set `testimonialSlug: "<slug>"`
  on the study in `caseStudies.ts`. The quote is never copied into the study.
- The two switches are independent: a quote can appear in the grids only
  (`featured`), in its case study only (`testimonialSlug`), or both.

### 2.2 Rules
- Design for **3 featured** at launch; section must look intentional with 3 and scale gracefully to more.
- Prioritize an AI/agent/RAG testimonial (`track: "ai"`) visually as they arrive - it's the growth story. (Launch set is data-practice quotes; earmark the next AI-era quote for a featured slot.)
- Show the highest attribution the person granted; never invent or upgrade attribution.
- Beneath featured testimonials, render a **"More recommendations on LinkedIn →"** link to Trent's profile. This lets a small set imply a deeper pile and gives Denodo-affiliated recommenders a personal-capacity home that keeps endorsement implications off the site.

**Live at launch (3 featured):** Mark Veile (Ball Aerospace, also linked from the Ball Aerospace case study via `testimonialSlug`); Matt Harris (Director of Data Solutions); Colleen Miller (University of Illinois). Prioritize new and AI-era quotes as they arrive.

**Action for Trent:** collect testimonials using the request templates already drafted (past-client, AI-project, Denodo-colleague LinkedIn). Record each person's permission and chosen attribution in writing. To add one, append an entry to `src/lib/testimonials.ts` (set `featured: true` to surface it).

---

## 3. Lab Slot (`/lab`) - Future, Build the Route

### 3.1 Purpose
A place to host an interactive AI demo later **without a redesign**. Not linked in nav until ready. At launch it can either 404-hide or hold a simple "coming soon" with recorded walkthroughs.

### 3.2 Launch content (zero-cost)
- Short recorded walkthroughs (screen-capture video, self-hosted or embedded) of the real lab systems: the agentic CRM being driven by an agent, the persistent agents working, the RAG chatbot answering. These are the strongest proof and cost nothing to run.
- Optional: one **client-side, scripted** interactive (e.g. an animated "watch an agent plan and call tools" sequence) - no model behind it, pure front-end, zero tokens.

### 3.3 Future live demo (deferred - do not build at launch)
- A single, **rate-limited, scoped** live demo (e.g. RAG over the site's own copy) can later run on **Cloudflare Workers AI** (free allocation ~10,000 neurons/day ≈ a few dozen small-model generations/day; $5/mo Workers paid plan if it outgrows that). This keeps inference on Cloudflare's own infrastructure - no OpenAI/Anthropic token bill.
- Constraints when built: hard rate limit per IP/session, small open model, scoped prompt, graceful failure when the daily allocation is exhausted (never a surprise charge). Keys/config via env only.
- Architect the route and a `<LabDemo>` boundary now so this drops in cleanly later.

---

## 4. Recognition Card (new - Session 2)

The core content type for the "what could AI do for you?" sections on Home (§3.4) and AI Solutions (§4.2). It leads with the visitor's *problem in plain language*, not our capability. The hidden capability is a build-side note only - it must never surface as copy on the site.

### 4.1 Component shape
```
id: [url-safe-id]
symptom_headline: [the problem in the visitor's own words, 2nd person - e.g. "You answer the same questions all day."]
promise: [1–2 sentences: what we'd build and the outcome, plain language, no jargon]
hidden_capability: [BUILD-SIDE ONLY - never rendered. e.g. "RAG", "agentic automation", "vision"]
tone: [hopeful | rescue]   # governs ordering (see rules)
icon: [simple line icon ref]
```

### 4.2 Rules
- **Order hopeful-first; any `tone: rescue` card goes LAST** in the set. A skimming beginner should get 2–3 optimistic hits before the word "fail" appears. The burned buyer scans harder and will find the rescue card at the end without trouble.
- **Rescue cards never appear above the recognition section, and never in the hero.** Rescue is reassuring depth, not a headline. Phrase rescue copy **conditionally** ("if you've already tried…") so the page assumes a fresh, hopeful visitor by default.
- Keep every headline in the visitor's language and in the second person. No product/capability names in rendered copy.
- Include an **"idea but unsure" catch card** where useful, so visitors who don't see themselves in a specific symptom still have a door (e.g. "You have an idea but don't know if it's possible.").

### 4.3 Pre-filled set (AI Solutions §4.2 - confirm wording)
1. `symptom_headline:` "You answer the same questions all day." · `promise:` A customer-facing assistant that actually knows your business - your policies, products, and documents - and handles the repetitive questions so your people don't. · `hidden_capability:` RAG · `tone:` hopeful
2. `symptom_headline:` "You're doing the same task over and over." · `promise:` We automate the repetitive, rule-based work end to end, so it runs reliably in the background instead of eating your week. · `hidden_capability:` agentic automation · `tone:` hopeful
3. `symptom_headline:` "You're sitting on information nobody has time to use." · `promise:` Documents, images, records, spreadsheets - we turn the pile into something you can search, ask questions of, and act on. · `hidden_capability:` RAG + vision · `tone:` hopeful
4. `symptom_headline:` "You already tried AI - and it didn't quite work." · `promise:` Maybe you built an AI assistant or a chatbot over your data, and it gives vague, wrong, or unreliable answers. Usually the problem isn't the AI - it's what it's reaching into underneath. We diagnose why it's failing and rebuild it on a foundation that gives you answers you can trust. · `hidden_capability:` RAG diagnosis / rescue · `tone:` rescue

*(Optional 5th, "idea but unsure" catch card, if a fifth slot reads well: `symptom_headline:` "You have an idea but don't know if it's possible." · `promise:` Bring the fuzzy version. Figuring out what's realistic, valuable, and buildable is exactly what the first conversation is for. · `tone:` hopeful.)*

### 4.4 Home condensed set (§3.4)
Reuse cards 1–4 above (drop the optional 5th on the home to keep it tight). Same ordering rule: rescue card last.

---

## 5. AI Opportunity Assessment (conversion spine - Session 2)

Not a page component so much as a through-line. Notes for the build:
- **Free at launch** (decision leans free over low-cost for this ICP - free converts harder for the anxious beginner; the paid depth begins *after* the assessment). Confirm with Trent before launch copy locks.
- Every primary CTA across the front of house routes to booking it (`/contact`): hero, entry-offer section, final CTA, and the "idea but unsure" recognition card.
- Framing is always *pressure-free discovery*, never a sales gate: "We'll tell you honestly if it's even worth it." This is what makes "book a call" feel like nothing to a visitor who doesn't yet know what they want.

# SEO & Build Notes

Technical guidance for the Claude Code build. Strategy and copy live in `website-spec.md`; this file covers SEO, metadata, integrations, and infrastructure.

> **Session 2 touch-up:** the AI Solutions metadata (§1.2) was retuned to the beginner ICP and the new H1. The two-intent-cluster strategy (§1.1) is unchanged and still correct. A note on the "rescue" search intent was added to §1.1 for future consideration (not a launch task).

---

## 1. SEO Strategy

### 1.1 Two intent clusters
The site serves two search intents; map them to the two track pages so each ranks for its own audience.

**AI Solutions cluster** (broad, top-of-funnel):
- "AI consultant", "custom AI development", "AI agency for small business", "build an AI agent", "RAG chatbot development", "MCP server development", "agentic AI consultant", "computer vision consultant", "on-prem / private LLM deployment", "AI consultant Colorado / Denver".

**Enterprise Data cluster** (narrow, high-intent, high-value):
- "Denodo consultant", "Denodo partner", "Denodo subcontractor", "Denodo architect", "Denodo administrator", "Denodo AI SDK", "Denodo DeepQuery", "Denodo MCP", "data virtualization consultant", "logical data warehouse / data fabric consultant".
- These are low-volume but extremely high-value and under-served — they are worth ranking for. The `/enterprise-data` page is built to target them and names Denodo in body copy for exactly this reason.

**Rescue intent (noted for the future — not a launch task).** The "burned buyer" persona (see `website-spec.md` §1) maps to a real, under-served, high-intent search cluster: "why is my AI chatbot giving wrong answers", "RAG returning inaccurate results", "fix AI project", "AI pilot failed". At launch, rescue is woven into `/ai-solutions` (not its own page), consistent with the "welcome addition, not the main event" decision. **If** the burned buyer later proves to be a sweet-spot segment, a dedicated `/ai-rescue` landing page targeting these terms is the natural, low-risk expansion — architected without disturbing the current structure. Do not build it at launch.

### 1.2 Per-page metadata (titles & descriptions)
Use Next.js Metadata API. Keep titles ~55–60 chars, descriptions ~150–160.
- **Home** — Title: `Logic Data Solutions — AI That Works, Built on Data You Can Trust`. Desc: Custom AI — assistants, automation, and apps — for small and growing businesses, built by an engineer with deep enterprise data roots so it holds up in the real world.
- **AI Solutions** — Title: `AI for Your Business — Custom AI That Actually Works | Logic Data Solutions`. Desc: Not sure where AI fits? We help you find out, then build it — assistants, automation, and custom tools that work in production. Start with a free AI Opportunity Assessment.
- **Enterprise Data** — Title: `Denodo Consulting & Data Virtualization for AI | Logic Data Solutions`. Desc: Denodo partner and subcontractor: data-virtualization architecture, administration, and AI SDK / DeepQuery / MCP enablement for governed, real-time enterprise AI.
- **Work** — Title: `Case Studies & AI Showcases | Logic Data Solutions`. Desc: Production AI systems and enterprise data architectures we've built — agentic apps, RAG, computer vision, and anonymized client outcomes.
- **About** — Title: `About — Boutique AI & Data Consulting | Logic Data Solutions`. Desc: Led by Trent Rossiter, an AI architect and data engineer with enterprise pedigree who builds the systems, not just the strategy.
- **Contact** — Title: `Book a Free AI Opportunity Assessment | Logic Data Solutions`. Desc: A 30-minute conversation about your goals and the most direct path to production AI. No pressure, no obligation.

### 1.3 On-page & technical SEO
- One `<h1>` per page (the page hero H1 in the spec).
- Semantic headings in the order given in `website-spec.md`.
- Descriptive alt text on all imagery; the hero visual needs an alt describing the architecture concept.
- `sitemap.xml` and `robots.txt` generated; submit to Google Search Console.
- **Structured data (JSON-LD):** `ProfessionalService` / `Organization` with name, logo, location (Westminster, CO), `sameAs` → LinkedIn; `Person` for Trent as principal; `FAQPage` on the AI Solutions FAQ; `BreadcrumbList` site-wide.
- Open Graph + Twitter card per page (reuse the brand OG image or a per-page variant).
- Local signal: include "Westminster, CO · serving clients nationally" and consistent NAP (name/address/phone) in the footer.
- Canonical URLs on every page.

### 1.4 Denodo-naming guardrail (SEO context)
Targeting "Denodo partner"/"Denodo consultant" is allowed and encouraged in text and metadata. Do **not** use the Denodo logo, and do not phrase anything as Logic Data Solutions speaking for or being endorsed by Denodo. Factual: "Denodo partner", "authorized subcontractor", "collaborates with Denodo's AI engineering team."

---

## 2. Booking Integration (Google Workspace)

- Trent uses Google Workspace **appointment scheduling** (Calendar). The contact page embeds the public booking page.
- Two options; prefer (A):
  - **(A) Embed** the Google appointment scheduling page via its provided `<iframe>` embed snippet on `/contact`.
  - **(B) Button/link** out to the booking URL in a new tab (fallback if the iframe styling is unacceptable on mobile).
- **The booking URL / embed snippet is configuration, not content.** Store it as an env var (e.g. `NEXT_PUBLIC_BOOKING_URL`) and reference it; do **not** hardcode or commit the actual URL in these markdown files or in source. Provide a `.env.example` with the variable name and a placeholder.
- Ensure the embed is responsive and keyboard-accessible; provide the email/phone fallback beneath it.
- All "Book a call" / "Book a free assessment" CTAs across the site route to `/contact` (or directly open the booking, per final UX decision).

---

## 3. Analytics & Privacy

- Use **Cloudflare Web Analytics** (free, no cookies, no PII) — fits the Cloudflare hosting and avoids a cookie-consent banner.
- No Google Analytics, no third-party ad/tracking pixels.
- Privacy page: a short, plain-language privacy note is sufficient given no tracking cookies; include it linked from the footer.

---

## 4. Hosting & Performance

- **Cloudflare Pages, free tier.** Build Next.js for static output where possible; keep any dynamic needs within free limits. Do not introduce paid Workers usage at launch.
- **Performance budget:** Lighthouse 95+ performance and accessibility on Home and both track pages. LCP < 2.5s; CLS < 0.1.
- Fonts via `next/font` (Montserrat, Source Sans Pro) with `display: swap`; subset and preload.
- Images: Next.js image optimization; modern formats; explicit dimensions to protect CLS. Compress the existing brand assets.
- The hero visual ships as lightweight animated SVG with a static fallback (see `website-spec.md` §9); it must not block LCP.
- Respect `prefers-reduced-motion` globally.

---

## 5. Accessibility

- WCAG 2.1 AA. Color contrast checked against the palette (note: **Titanium #878681 on Off-White fails for body text — use Charcoal**; Titanium is for large/secondary text and dividers only).
- Visible focus states; full keyboard navigation; skip-to-content link.
- All interactive elements labeled; the booking iframe has an accessible title.

---

## 6. Secrets & Config — Do Not Commit

Keep all of the following out of the repo (use `.env.local`, provide `.env.example` with names only):
- Booking URL / embed snippet (`NEXT_PUBLIC_BOOKING_URL`).
- Cloudflare Web Analytics token.
- Any future Workers AI / model keys or account IDs (Lab demo, deferred).
- Contact-form handler keys, if a form is added.

Never place keys, tokens, account IDs, or PII in any markdown spec file or committed source.

---

## 7. Deferred: Workers AI Demo

Not built at launch. When/if added (see `content-templates.md` §3.3): Cloudflare Workers AI, scoped + rate-limited, free allocation first ($5/mo Workers paid if it outgrows it), config via env, graceful failure on allocation exhaustion. Architect the `/lab` route and a `<LabDemo>` boundary now so it drops in without rework.

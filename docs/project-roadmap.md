# Project Roadmap & Action Items

A session-by-session plan so you can pick up cold and move forward. Each session lists its **goal**, the **tasks** to be done in it, and **your action items** (usually to be done *before* that session so it isn't blocked). A consolidated checklist is at the bottom.

Status legend: ✅ done · ▶️ next · ⬜ upcoming

---

## Session 1 — Discovery & Strategy ✅

**Goal:** Decide positioning, resolve the two-audience problem, lock format and constraints.
**Output:** This spec set (`CLAUDE.md` + `docs/`). Positioning = "AI that works because the data underneath it does"; two-track with AI as the front door; company voice, principal named; Denodo nameable but no logo / no representation; Cloudflare free tier; book-a-call conversion; no live AI at launch.

---

## Session 2 — Spec Review + Positioning Refinement ✅

**Goal:** Approve the written spec and lock the hero visual brief before any build.
**What actually happened (this session was a bigger strategic turn than planned — captured here so it isn't lost):**

- **Homepage stays AI-forward, not Denodo-forward.** The home's job is to *route*, not to sell either practice. AI is the wide net; Denodo buyers arrive referred and land deep. Confirmed in copy.
- **ICP chosen:** the **curious beginner** — a small-business owner who wants "an AI thing" but doesn't yet know what. Guest of honor; hero and home tuned to permit their confusion ("even if you're not sure where to start").
- **Second persona added as a *welcome addition* (not the main event):** the **burned buyer** — a small/mid business whose earlier AI attempt (e.g. a RAG assistant giving wrong answers) stalled. Served via *diagnosis + rescue* woven into the AI page: one recognition card (placed **last**), one diagnostic beat in the "why it'll work" section, one FAQ. No rescue track / no `/ai-rescue` page / no homepage rescue band at launch. Rescue kept below the recognition section, phrased conditionally.
- **Front-of-house / back-of-house model locked.** One legal entity, one website, one LinkedIn company page, two *practices* inside. A two-site / two-company-page split was considered and **rejected** (it would amputate the rarest asset — the AI-builder-with-enterprise-pedigree combination — and double the solo-principal maintenance tax).
- **The differentiator's JOB changed** — from *hook* to *trust-builder that closes the sale.* Lead wide in the visitor's language; win deep with pedigree. Data-foundation story moves from doorway to closing table. "Accessible in the hook, unmistakable in the proof."
- **AI Solutions page rewritten** from a capabilities menu into a narrative: recognize me → reassure me it'll work → show me it's safe/clear → prove it → make the first step trivial. Full copy in `website-spec.md` §4.
- **Home rebalanced** (`website-spec.md` §3): symmetrical two-track replaced with an AI-forward "what could AI do for you?" recognition section, capabilities grid demoted to proof-of-competence, a quiet enterprise handoff band (not a co-equal panel), and the **AI Opportunity Assessment (free) threaded as the conversion spine.**
- **Enterprise page** (`/enterprise-data`) confirmed as a **standalone referral landing** with a peer-to-peer expert voice — must work for a visitor who never saw the homepage.
- **Hero visual brief sharpened** (`website-spec.md` §9): it greets the optimistic, possibly non-technical SMB — must feel like *clarity and capability,* not data plumbing.

**Docs updated to reflect all of the above:** `CLAUDE.md`, `website-spec.md` (§1, §3, §4, §5 note, §9), `content-templates.md` (new Recognition Card component §4 + Assessment spine §5), `seo-and-build-notes.md` (AI Solutions metadata retuned to the new H1/positioning). Replace the project copies with these before Session 3.

**Still outstanding from this session (do before Session 3–4):**
- [ ] Confirm the **assessment is free** (vs. low-cost) for launch copy.
- [ ] Confirm you're comfortable naming **aerospace + NASA** (but not the client) in public "why it'll work" copy.
- [x] ~~Produce the SVG hero mock (settled state) against the §9 brief and approve it.~~ **Superseded (Session 3):** the SVG architecture-diagram concept was mocked, reviewed live on the built site, and rejected as too indirect/enterprise-feeling for the AI-forward hero. Replaced with a kinetic rotating headline + live agent-demo prompt box, designed and shipped directly (no separate mock-then-animate step). See `website-spec.md` §9.

---

## Session 3 — Scaffold & Global Layout ⬜ (Claude Code)

**Goal:** A running Next.js project on the design system, with nav/footer and routes stubbed.
**Tasks:**
- `npx create-next-app` (App Router, TypeScript, Tailwind); init git.
- Drop in `CLAUDE.md` + `docs/` at repo root.
- Configure Tailwind theme from the design tokens; load Montserrat + Source Sans Pro via `next/font`.
- Build global layout: header/nav (AI-forward order; Enterprise Data quieter), footer, CTA button component, section-label component, card component, **RecognitionCard component**.
- Stub all routes: `/`, `/ai-solutions`, `/enterprise-data`, `/work`, `/about`, `/contact`, `/lab`.
- Add `.env.example` (Cal.com event slug, analytics token — names only).
**Your action items before Session 3:**
- [ ] Create a **Cloudflare account** (for Pages + Web Analytics) — free.
- [ ] Decide where the repo lives (GitHub recommended for Cloudflare Pages CI).
- [x] ~~Approve the hero mock (carried over from Session 2).~~ Superseded — see Session 2 note above.

---

## Session 4 — Home Page ⬜ (Claude Code)

**Goal:** Complete, responsive Home page with final copy and the hero built (kinetic headline + agent-demo prompt box, done directly rather than in mock-then-animate stages — see `website-spec.md` §9).
**Tasks:** Build sections 3.1–3.11 from the spec, mobile-first; recognition cards (rescue card last); demoted capabilities grid; quiet enterprise handoff band; wire all primary CTAs to the free assessment on `/contact`; build the hero (`RotatingWord` + `HeroPrompt` components).
**Your action items before Session 4:**
- [ ] Send the **3 testimonial requests** (templates already drafted) so quotes are arriving.
- [ ] Send anyone you'd want an **AI-specific** testimonial from (≥1 needed).

---

## Session 5 — Track Pages: AI Solutions + Enterprise Data ⬜ (Claude Code)

**Goal:** Both track pages complete with final copy and FAQ/JSON-LD.
**Tasks:** Build `/ai-solutions` (§4 — the narrative flow with recognition cards, the "why it'll work" turn carrying the pedigree, rescue insertions) and `/enterprise-data` (§5 — standalone, peer-to-peer voice); add FAQ structured data; verify Denodo-naming guardrail; add the quiet cross-links (AI → enterprise for scale; enterprise self-contained).
**Your action items before Session 5:**
- [ ] Confirm the **Denodo specialization** wording in §5.5 is accurate and safe for your partner agreement.

---

## Session 6 — Work, About, Contact ⬜ (Claude Code)

**Goal:** Proof, story, and conversion pages complete.
**Tasks:** Build `/work` with the `CaseStudy` component (4 lab showcases — relatable ones featured first — + client outcome slots), `/about`, and `/contact` with the booking embed (via env) + fallback.
**Your action items before Session 6:**
- [ ] Supply **3–5 anonymized client outcomes** (headline metric + one-line result, cleared against NDA).
- [ ] Confirm final wording for the **4 lab showcases** (and flag any IP concern).
- [ ] Finish **Cal.com** setup: connect Google Calendar (conflict-check + writes bookings), set bookable hours in the Availability tab, and confirm the event slug for `NEXT_PUBLIC_CAL_LINK`.
- [ ] (Optional) Provide a **headshot** for About.
- [ ] Have **3 testimonials** in hand (≥1 AI-related) with attribution permissions recorded.

---

## Session 7 — Polish ⬜ (Claude Code)

**Goal:** Pass performance and accessibility bars. (Hero motion already built and shipped in Session 3 — see `website-spec.md` §9 — including its reduced-motion fallback; nothing hero-specific remains here.)
**Tasks:** Lighthouse pass (target 95+ perf & a11y); contrast/keyboard/focus audit; image optimization; metadata, OG tags, sitemap, robots, canonical.
**Your action items before Session 7:** none new — review the staging build when shared.

---

## Session 8 — Content Load, Deploy & Launch ⬜ (Claude Code)

**Goal:** Live on Cloudflare with real content.
**Tasks:** Connect repo to Cloudflare Pages; set env vars (`NEXT_PUBLIC_CAL_LINK`, analytics token); enable Cloudflare Web Analytics; final content pass; deploy; submit sitemap to Google Search Console; plan DNS cutover from the WordPress site.
**Your action items before Session 8:**
- [ ] Decide **domain cutover** timing; ensure you can move DNS for logicdatasolutions.com to Cloudflare.
- [ ] Provide the **Cal.com event slug** (`NEXT_PUBLIC_CAL_LINK`) and analytics token for env config at deploy.
- [ ] Final review/sign-off on all copy.

---

## Future — Lab Demo ⬜ (optional, post-launch)

**Goal:** Add interactive proof without a redesign.
**Tasks:** Record walkthroughs of the lab systems (CRM/agents/RAG) for `/lab`; optionally add the client-side scripted agent animation; later, if desired, the rate-limited Cloudflare Workers AI live demo.
**Your action items:**
- [ ] Record 2–3 short screen-capture walkthroughs of real systems.
- [ ] Decide whether you want the live Workers AI demo (and accept the free-tier limits / optional $5/mo).

---

## Master Action-Item Checklist (everything you own, grouped)

**Decisions to confirm (from Session 2)**
- [ ] Assessment is **free** (vs low-cost) for launch.
- [ ] Comfortable naming **aerospace + NASA** (not the client) in public copy.
- [x] ~~Approve the hero visual mock (settled state).~~ Superseded — hero built directly, see Session 2/3 notes above.

**Content to gather**
- [ ] 3 testimonials collected, ≥1 AI-related, attribution + permission recorded.
- [ ] 3–5 anonymized client outcomes (metric + result), NDA-cleared.
- [ ] Confirm/adjust wording for the 4 lab showcases.
- [ ] (Optional) headshot for About.
- [ ] (Future) 2–3 recorded walkthroughs of lab systems.

**Accounts & setup**
- [ ] Cloudflare account (Pages + Web Analytics).
- [ ] GitHub repo for the project.
- [ ] Cal.com account → Google Calendar connected, availability set, event slug captured.
- [ ] Ability to move logicdatasolutions.com DNS to Cloudflare.
- [ ] (Tidy) LinkedIn profile — it's your writing home and where recommendations live. One company page (not two).

**Provide at deploy (as env, never committed)**
- [ ] Cal.com event slug (`NEXT_PUBLIC_CAL_LINK`).
- [ ] Cloudflare Web Analytics token.

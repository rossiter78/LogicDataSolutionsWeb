# Logic Data Solutions — Website Build

Operating manual for building the Logic Data Solutions marketing site. Read this first, then load the file in `docs/` that matches the work you're doing. Keep this file lean; detailed content lives in `docs/`.

> **Session 2 update (positioning refined).** The site is no longer a *balanced* two-track. It is a **front-of-house AI site for small and mid-sized businesses, with a credentialed enterprise-data (Denodo) annex that referrals land on directly.** See "What this project is" and `docs/website-spec.md` §1 for the full reasoning. Earlier drafts described a symmetrical two-track home — that is superseded.

## What this project is

A redesign of logicdatasolutions.com — a boutique, principal-led consultancy run by Benjamin "Trent" Rossiter. The site houses **one company with two practices**:

1. **AI Solutions — the front of house (loud, primary).** Agentic AI, RAG, MCP servers, computer vision, local/on-prem model deployment, custom AI apps. This is what ~95% of web visitors arrive for. The site leads here, in plain language, with **no Denodo knowledge assumed.**
2. **Enterprise Data & AI Foundations — the back of house (quiet, credentialed).** Denodo data-virtualization architecture, administration, and Denodo-for-AI enablement (AI SDK, DeepQuery, MCP). Enterprise leads arrive by **word-of-mouth referral from Denodo, not web search** — so this practice is a self-contained *referral landing destination*, not a co-equal homepage track.

**Primary audience (ICP), in priority order:**
- **The curious beginner** — a small-business owner who wants "an AI thing" but doesn't yet know what. The site's job is to make this person feel welcome, capable, and safe. This is the guest of honor; the homepage and hero are tuned to them.
- **The burned buyer (welcome addition, not the main event)** — a small/mid-sized business that already tried AI (e.g. a RAG assistant that gives vague or wrong answers) and it stalled or failed. Served through *diagnosis and rescue* messaging woven into the AI page — never above the recognition section, never in the hero. Rescue is reassuring depth, not the headline.
- **The enterprise data leader** — arrives referred, lands deep (`/enterprise-data`), and reads a page written peer-to-peer. Rarely enters through the homepage.

**The unifying thesis:** *AI works when the data underneath it is governed, real-time, and trustworthy.* But note the **job change decided in Session 2:** the data-foundation story is no longer the homepage *hook* — it is the *trust-builder / differentiator that closes the sale.* Lead wide in the visitor's language; win deep with pedigree. See `docs/website-spec.md` §1 and §4.

Full strategy, sitemap, and page-by-page copy: `docs/website-spec.md`.

## Tech stack & hosting

- **Framework:** Next.js (App Router), TypeScript.
- **Hosting:** Cloudflare Pages, **free tier**. Prefer static generation / static export. Avoid features that force paid Workers usage at launch.
- **Styling:** Tailwind CSS with the design tokens below mapped to CSS variables / theme config.
- **Analytics:** Cloudflare Web Analytics (free, privacy-friendly, no cookie banner needed). No Google Analytics.
- **Booking:** Google Workspace appointment scheduling, embedded. See `docs/seo-and-build-notes.md`.
- **No live AI at launch.** A "Lab" slot is defined for a future Cloudflare Workers AI demo. Do not wire any LLM API at launch. See `docs/content-templates.md`.

## Design tokens

Colors:
- Corporate Red `#C0222E` — primary accent: section labels, key CTAs, stat borders, decorative rules. Never as a background behind the logo.
- Dark Charcoal `#3D4F5C` — primary text, headings, dark surfaces (hero band, footer).
- Titanium `#878681` — secondary text, captions, dividers.
- Light Grey `#DCDCDC` — card fills, row stripes, section separation.
- Off-White `#F0EEEE` — default page background.

Type:
- Headings: **Montserrat** (Bold for display).
- Body: **Source Sans Pro** (Regular).
- Load via next/font for performance.

Logos:
- Full color (with text): `https://logicdatasolutions.com/wp-content/uploads/2026/02/Color-logo-no-background.svg` — header on Off-White/Light Grey only.
- Icon only: `https://logicdatasolutions.com/wp-content/uploads/2026/02/LogoOnly.svg` — footer/tight spaces, OK on Dark Charcoal.
- Never place either logo on Corporate Red. Do not stretch, recolor, or add effects.

## Hard rules (do not violate)

- **AI-forward, front-of-house first.** The homepage and hero speak to the curious SMB in plain language. Do **not** lead the home or the AI page with Denodo, data virtualization, or capability jargon. Enterprise/Denodo gets a *quiet, dignified handoff* on the home, and its own standalone page — never a co-equal homepage panel.
- **Never gate comprehension behind jargon.** Terms like RAG, MCP, vector store, data virtualization may appear as the "how" one layer down, never as the first thing a non-technical visitor must understand. Recognition of the visitor's *problem* comes before any of your vocabulary.
- **The differentiator is a trust-builder, not the hook.** State the enterprise/aerospace/NASA pedigree as the reason the AI will actually *hold up* — visibly and repeatedly (hero support line, "why it'll work" section, proof, case studies). Accessible in the hook; unmistakable in the proof. Do not bury it, and do not lead with it.
- **Rescue is a welcome addition, not the main event.** The "tried AI and it failed" persona is served via a recognition card (placed **last** in the set), one diagnostic beat, and one FAQ. No rescue track, no `/ai-rescue` page, no homepage rescue band at launch. Keep rescue below the recognition section and phrase it conditionally ("*if* you've been burned").
- **Denodo branding:** You MAY name "Denodo" in body text and state that Trent is a **Denodo partner** and an authorized **subcontractor who collaborates with Denodo's AI engineering team**. You MUST NOT use the Denodo logo, and MUST NOT use any wording that implies Trent represents or speaks for Denodo.
- **No secrets in the repo.** Booking embed snippets, account IDs, and any keys go in environment config / `.env.local`, never in these markdown files or committed source. See `docs/seo-and-build-notes.md`.
- **Tone:** senior, precise, calm, engineering-led — but on the AI/front-of-house pages, *warm and permission-giving.* NOT hype / direct-response. No "your business is bleeding money" energy. No headcount-reduction or layoff framing — the message is augmenting teams and building on trustworthy data. The enterprise page shifts register to peer-to-peer expert (denser, assumes domain knowledge).
- **Voice:** company voice ("we"), with Trent named as the principal behind the work.
- **Performance:** hero must be a fast LCP element. No heavy WebGL/particle hero. Target Lighthouse 95+ on performance and accessibility.
- **Accessibility:** WCAG 2.1 AA. All motion respects `prefers-reduced-motion`. Color contrast must pass against the palette above (note Titanium on Off-White is borderline — use Charcoal for body text).

## Contact / identity facts

- Name: Benjamin "Trent" Rossiter (use "Trent Rossiter" publicly).
- Email: BenjaminRossiter@LogicDataSolutions.com
- Phone: 720.908.0723
- Location: Westminster, CO (serving clients remotely / nationally).
- LinkedIn: https://www.linkedin.com/in/benjamin-trent-rossiter-mba-0157945/
- **One legal entity, one website, one LinkedIn company page.** The two practices are divisions inside that single house — not separate brands, sites, or company pages. (Decided Session 2; a two-site / two-company-page split was considered and rejected.)

## Where things live

- `docs/website-spec.md` — positioning, sitemap, page-by-page layout + final copy, hero visual design spec.
- `docs/content-templates.md` — case-study, testimonial, and recognition-card templates; Lab slot definition.
- `docs/seo-and-build-notes.md` — SEO targets, metadata, booking embed, Workers AI (deferred), analytics, perf budget.
- `docs/project-roadmap.md` — design sessions, build sequence, and Trent's action items.

## Build sequence (summary)

See `docs/project-roadmap.md` for the full plan. In short: scaffold → global layout (nav/footer/tokens) → Home → AI Solutions → Enterprise Data → Case Studies → About → Contact → polish/perf/a11y → deploy. The hero visual is its own design pass (mock approved before animation is wired).

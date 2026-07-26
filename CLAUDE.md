# Logic Data Solutions - Website

Operating manual for the Logic Data Solutions marketing site. Read this first. When you are adding or changing site content, also read `docs/content-patterns.md`; for SEO, hosting, booking, or performance work, read `docs/build-notes.md`.

Keep this file lean. It holds positioning, rules, and facts, not copy. The site's copy lives in the code, and the code is the source of truth.

## What this project is

logicdatasolutions.com, a boutique, principal-led consultancy run by Benjamin "Trent" Rossiter. One company, two practices:

1. **AI Solutions - the front of house (loud, primary).** Agentic AI, RAG, MCP servers, computer vision, local/on-prem model deployment, custom AI apps. This is what nearly every web visitor arrives for. The site leads here, in plain language, with **no Denodo knowledge assumed.**
2. **Enterprise Data & AI Foundations - the back of house (quiet, credentialed).** Denodo data-virtualization architecture, administration, and Denodo-for-AI enablement (AI SDK, DeepQuery, MCP). Enterprise leads arrive by **word-of-mouth referral from Denodo, not web search.**

**Audience (ICP), in priority order:**

- **The curious beginner.** A small-business owner who wants "an AI thing" but doesn't yet know what. Their private fear is *"I don't know enough to even start the conversation."* This is the guest of honor; the home page and hero exist to remove that fear.
- **The burned buyer (welcome addition, not the main event).** A small or mid-sized business that already tried AI (often a RAG assistant giving vague or wrong answers) and stalled. Skeptical, not ignorant. Served through diagnosis and rescue woven into the AI page as reassuring depth, never as a headline.
- **The enterprise data leader.** Arrives referred, lands directly on `/enterprise-data`, reads a page written peer-to-peer. Rarely enters through the home page.

## Positioning

**The thesis:** AI works when the data underneath it is governed, real-time, and trustworthy. Most AI projects don't fail on the model; they fail on the foundation.

**The differentiator:** most AI consultants can't speak to governed enterprise data architecture, and most data architects can't actually build agents, RAG pipelines, and MCP servers. Trent does both, hands-on, in production. Almost no competitor can tell that story.

**The differentiator's job is to close, not to hook.** A non-technical small-business owner doesn't wake up thinking about their "data foundation," so leading with it filters out the guest of honor in the first three seconds. Lead wide in the visitor's language (their problem); win deep with pedigree (why it will actually hold up). The rule: **accessible in the hook, unmistakable in the proof.** The pedigree (enterprise aerospace architecture, NASA manufacturing award, frontier Denodo AI work) must be visible and repeated across hero support line, the "why it'll work" beat, proof, and case studies. Warmth without proof is the generic pitch. Burying the pedigree in a footnote is the one failure mode to avoid.

**Front of house / back of house.** This resolves the two-audience problem without splitting into two sites. `/enterprise-data` must stand entirely on its own: a referred prospect can land there, understand the offer, trust it, and book without ever touching the home page. It behaves like a microsite at a URL while sharing one codebase and one reputation. A two-site, two-company-page split was considered and rejected; it would amputate the rarest asset (the combination) and double the operational tax for a solo principal.

**Why the burned buyer strengthens rather than dilutes.** The beginner needs "it's the foundation, not the model" as reassurance ("that's why ours will work"). The burned buyer needs the same sentence as diagnosis ("that's why yours didn't"). One differentiator, two jobs.

## Tech stack & hosting

- **Framework:** Next.js (App Router), TypeScript. Static output.
- **Hosting:** Cloudflare Pages, free tier. Auto-deploys on push to `main`. Avoid anything that forces paid Workers usage.
- **Styling:** Tailwind CSS v4, tokens defined in `src/app/globals.css`.
- **Analytics:** Cloudflare Web Analytics. No Google Analytics, no tracking pixels, no cookie banner.
- **Booking:** Cal.com inline embed on `/contact`, backed by Trent's Google Calendar. See `docs/build-notes.md`.
- **No live AI.** `/lab` is a `noindex` stub reserved for a future demo. Do not wire an LLM API into the site.

## Design system

**The site ships dark.** `src/app/globals.css` is the source of truth for every token; read it before styling anything. The palette there is the brand palette plus dark-surface derivations in the same hue family as Dark Charcoal: an `ink-950` through `ink-600` scale, `mist` for secondary text on dark, and `live` (green) reserved exclusively for "this is running" signals inside service graphics.

Brand colors:

- Corporate Red `#C0222E` - CTA fills and accents. Never as a background behind the logo.
- Dark Charcoal `#3D4F5C` - ships as `ink-600`, the lightest dark surface.
- Titanium `#878681` - small caps labels, dividers, muted diagram strokes.
- Light Grey `#DCDCDC` and Off-White `#F0EEEE` - Off-White is the body text color on dark.

Two contrast rules that bite:

- **Corporate Red fails WCAG AA as text on dark surfaces.** Use `red-bright` (`#EF6E78`) for section labels and text accents. Solid red stays for CTA fills, where white text on `#C0222E` passes.
- **Titanium fails as body text on Off-White.** It is for large or secondary text and dividers only.

Type: **Montserrat** for headings (`font-display`), **Source Sans Pro** for body, both via `next/font`.

Logos: self-hosted, referenced through `src/lib/site.ts`. `logoFull` (with text) for the header, `logoIcon` for the footer and tight spaces. Never place either on Corporate Red. Do not stretch, recolor, or add effects.

## Hard rules (do not violate)

- **AI-forward, front-of-house first.** The home page and hero speak to the curious SMB in plain language. Do not lead the home or the AI page with Denodo, data virtualization, or capability jargon. Enterprise gets a quiet, dignified handoff on the home and its own standalone page, never a co-equal panel.
- **Never gate comprehension behind jargon.** RAG, MCP, vector store, data virtualization may appear as the "how" one layer down, never as the first thing a non-technical visitor must understand. Recognition of the visitor's problem comes before any of our vocabulary.
- **The differentiator is a trust-builder, not the hook.** See Positioning above. Do not bury it, and do not lead with it.
- **Rescue is a welcome addition, not the main event.** Keep it below the recognition section, never in a hero, and phrase it conditionally ("*if* you've already tried"). No rescue track and no `/ai-rescue` page.
- **Denodo branding:** you MAY name "Denodo" in body text and state that Trent is a **Denodo partner** and an authorized **subcontractor who collaborates with Denodo's AI engineering team**. You MUST NOT use the Denodo logo, and MUST NOT use any wording implying Trent represents, speaks for, or is endorsed by Denodo.
- **Do not name partner firms.** Delivery-scale partnerships are stated generically as "established consulting firms."
- **No secrets in the repo.** Keys, tokens, and account IDs go in environment config, never in markdown or committed source.
- **Tone:** senior, precise, calm, engineering-led, and on the front-of-house pages also warm and permission-giving. Confidence without hype. Never direct-response "your business is bleeding money" energy. Never headcount-reduction or layoff framing; the promise is augmenting teams. The enterprise page shifts register to peer-to-peer expert: denser, assumes domain knowledge.
- **Voice:** company voice ("we"), with Trent named as the principal behind the work.
- **No em dashes.** Do not use `—` anywhere: copy, metadata, alt or aria text, code comments, or documentation. Use a colon, a comma, parentheses, or two sentences.
- **Performance:** the hero must be a fast LCP element. No WebGL or particle effects. Target Lighthouse 95+ on performance and accessibility.
- **Accessibility:** WCAG 2.1 AA. All motion respects `prefers-reduced-motion`, and every animated element must read as complete in its settled state.

## Contact / identity facts

- Name: Benjamin "Trent" Rossiter (use "Trent Rossiter" publicly).
- Email: BenjaminRossiter@LogicDataSolutions.com
- Phone: 720.908.0723
- Location: Westminster, CO (serving clients remotely / nationally).
- LinkedIn: https://www.linkedin.com/in/benjamin-trent-rossiter-mba-0157945/
- **One legal entity, one website, one LinkedIn company page.** The two practices are divisions inside that single house, not separate brands, sites, or company pages.

## Where things live

- `docs/content-patterns.md` - how to add services, testimonials, case studies, and recognition cards; service-graphic conventions; page and section patterns.
- `docs/build-notes.md` - SEO, metadata rules, the Cal.com booking embed, hosting, performance budget, accessibility, secrets.
- `src/lib/` - all site content as typed data (`services.ts`, `testimonials.ts`, `caseStudies.ts`, `recognition.ts`, `site.ts`). Content changes usually happen here, not in page components.

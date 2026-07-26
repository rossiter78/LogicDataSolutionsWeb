# Build Notes

SEO, integrations, hosting, and performance. Positioning and tone live in `CLAUDE.md`; how to add content lives in `docs/content-patterns.md`.

---

## 1. SEO

### 1.1 Two intent clusters

The site serves two search intents. Each track page targets its own.

**AI Solutions** (broad, top-of-funnel): "AI consultant", "custom AI development", "AI agency for small business", "build an AI agent", "RAG chatbot development", "MCP server development", "agentic AI consultant", "computer vision consultant", "on-prem / private LLM deployment", "AI consultant Colorado / Denver".

**Enterprise Data** (narrow, high-intent, high-value): "Denodo consultant", "Denodo partner", "Denodo subcontractor", "Denodo architect", "Denodo administrator", "Denodo AI SDK", "Denodo DeepQuery", "Denodo MCP", "data virtualization consultant", "logical data warehouse / data fabric consultant". Low volume, extremely high value, badly under-served. `/enterprise-data` names Denodo in body copy for exactly this reason.

**Rescue intent (future, not built).** The burned-buyer persona maps to a real under-served cluster: "why is my AI chatbot giving wrong answers", "RAG returning inaccurate results", "AI pilot failed". Rescue currently lives inside `/ai-solutions`, per the hard rule in `CLAUDE.md`. If that segment ever proves to be a sweet spot, a dedicated `/ai-rescue` landing page is the natural low-risk expansion.

### 1.2 Metadata rules

Each page owns its own `Metadata` export via the Next.js Metadata API. The strings live in the page files; these are the rules they follow.

- Titles roughly 55 to 60 characters, descriptions 150 to 160.
- Every title carries the brand; every description carries a reason to click, not a summary of the page.
- The description should echo the page's actual H1 promise. If you rewrite a hero, re-read the description.
- Open Graph and Twitter card per page.
- Canonical URL on every page.
- `/lab` is `robots: { index: false }` until it has real content.

### 1.3 On-page and technical

- One `<h1>` per page. Semantic heading order, no level skipping.
- Descriptive alt text on all imagery. Service graphics carry a full-sentence `aria-label` describing the argument the diagram makes (see `content-patterns.md` §2). The hero prompt-box demo is `aria-hidden` and wrapped in a single link with a descriptive `aria-label`.
- `sitemap.xml` and `robots.txt` generated; submit the sitemap to Google Search Console.
- **JSON-LD:** `ProfessionalService` / `Organization` with name, logo, location (Westminster, CO), `sameAs` to LinkedIn; `Person` for Trent as principal; `FAQPage` wherever an FAQ ships; `BreadcrumbList` site-wide.
- Local signal: "Westminster, CO, serving clients nationally" plus consistent name/address/phone in the footer.

### 1.4 Denodo naming in SEO context

Targeting "Denodo partner" and "Denodo consultant" in text and metadata is allowed and encouraged. The branding rules in `CLAUDE.md` still bind: no Denodo logo, and nothing phrased as Logic Data Solutions speaking for or being endorsed by Denodo. Factual only: "Denodo partner", "authorized subcontractor", "collaborates with Denodo's AI engineering team".

---

## 2. Booking (Cal.com, backed by Google Calendar)

- **Widget:** Cal.com inline embed via `@calcom/embed-react`, wrapped in `src/components/BookingEmbed.tsx` (a client component). Themed `theme: "dark"` with the brand accent set to Corporate Red (`cal-brand: #c0222e`), layout `month_view`.
- **How it connects to Google:** in Cal.com, Trent connects his Google Calendar (Settings, Connected Calendars). Cal reads existing events for conflict-checking and writes new bookings back to that calendar. **Bookable hours are configured in Cal.com's Availability tab.** Cal.com does not import availability from Google's own appointment-scheduling product; that setup is not reused.
- **The event slug is public, not a secret.** It is visible in the booking page source, so it is committed as the default in `src/lib/site.ts` (`calLink`). This lets a fresh Cloudflare build produce a working widget with zero dashboard configuration. `NEXT_PUBLIC_CAL_LINK` overrides the default when set, e.g. to point a preview build at a test event.
- `BookingEmbed` renders an email fallback if the link is unset, so the page never shows an empty embed. `/contact` also shows an email fallback beneath the widget. Phone and location are deliberately not shown there.
- All "Book a call" CTAs across the site route to `/contact`, where the inline widget lives.

> Historical note: booking originally used Google Workspace appointment scheduling. Google only exposes a cross-origin iframe with no re-theming and no availability API, so it always rendered as Google's white UI inside our dark page. Cal.com replaced it while keeping Google Calendar as the source of truth.

---

## 3. Analytics and privacy

- **Cloudflare Web Analytics** only: free, no cookies, no PII, and no cookie-consent banner required.
- No Google Analytics, no third-party ad or tracking pixels.
- A short plain-language privacy note is sufficient given no tracking cookies. Link it from the footer.

---

## 4. Hosting and performance

- **Cloudflare Pages, free tier**, auto-deploying on push to `main`. Static output. Do not introduce paid Workers usage.
- **Budget:** Lighthouse 95+ performance and accessibility on the home page and both track pages. LCP under 2.5s, CLS under 0.1.
- Fonts via `next/font` (Montserrat, Source Sans Pro) with `display: swap`, subset and preloaded.
- Images through Next.js image optimization, modern formats, explicit dimensions to protect CLS.
- The hero ships as static server-rendered headline text for a fast LCP, plus a DOM and CSS animated demo panel that hydrates after paint. No SVG hero, no canvas, no WebGL.
- `prefers-reduced-motion` respected globally, including `scroll-behavior`.

---

## 5. Accessibility

- WCAG 2.1 AA. See `CLAUDE.md` for the two contrast rules that bite (Corporate Red as text on dark, Titanium as body text).
- Visible focus states, full keyboard navigation, skip-to-content link.
- All interactive elements labeled. The Cal.com embed exposes an accessible title.
- Every animation has a complete settled state under reduced motion. `globals.css` disables the `sg-*` utilities and the hero caret wholesale, so no meaning may depend on motion alone.

---

## 6. Secrets and config

Keep out of the repo, in `.env.local`, with names only in `.env.example`:

- Cloudflare Web Analytics token.
- Any future Workers AI model keys or account IDs.
- Contact-form handler keys, if a form is ever added.

Never place keys, tokens, account IDs, or PII in a markdown file or in committed source. The Cal.com event slug is the deliberate exception documented in §2: it is public by nature, not a credential.

---

## 7. Deferred: Workers AI demo

Not built. If a live demo is ever added at `/lab`, the constraints are: Cloudflare Workers AI (keeps inference on Cloudflare, no external token bill), a single scoped demo, a hard rate limit per IP or session, a small open model, and graceful failure when the daily free allocation is exhausted. Never a surprise charge. Config via env only. Architect it behind a `<LabDemo>` boundary so it drops in without rework.

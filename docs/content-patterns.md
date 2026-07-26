# Content Patterns

How to add content to the site so it stays consistent. One section per content type: where the data lives, what each field is for, the editorial rules, and how to add one.

This file does not contain copy, and it does not restate the TypeScript types. The `.ts` files in `src/lib/` are the source of truth for both. When the two disagree, the code is right and this file needs fixing.

Read `CLAUDE.md` first for positioning, tone, and the hard rules. Everything here assumes those.

---

## How content works here

All site content is typed data in `src/lib/`, rendered by shared components. Page files in `src/app/` hold layout and one-off section copy; they do not hold lists of content.

| Content type | Data | Rendered by | Appears on |
|---|---|---|---|
| Service | `services.ts` | `ServiceSection` + `ServiceGraphic` | `/ai-solutions` |
| Testimonial | `testimonials.ts` | `TestimonialCard` | `/`, `/about`, `/work` |
| Case study | `caseStudies.ts` | `CaseStudyCard` | `/work`, `/` (featured) |
| Recognition card | `recognition.ts` | `RecognitionCard` | `/`, `/ai-solutions` |
| Site identity | `site.ts` | `Header`, `Footer`, `BookingEmbed` | everywhere |

To add content, append to the array in the data file. The page picks it up. If you find yourself typing content directly into a page component, stop and check whether it belongs in `src/lib/` instead.

---

## 1. Service

**Data:** `src/lib/services.ts`. **Rendered by:** `src/components/ServiceSection.tsx`.

A service is one offering on `/ai-solutions`. Every service renders as a full-width section: an animated graphic on one side, the copy on the other. Sections alternate sides and background automatically by array index, so ordering in the array is the only layout decision you make.

### The fields, and what each is for

- **`id`** - url-safe slug. Used as the section anchor (`/ai-solutions#on-prem`) **and** as the key that selects the graphic. Adding a service without adding a matching graphic renders an empty panel. See §2.
- **`title`** - the offering's name. Concrete and ownable. This is the `<h2>`.
- **`tagline`** - one line, larger and brighter than body text, that says what the buyer gets in their own terms. Not a feature summary. Compare "The first win that gets everything else moving" against "A scoped discovery engagement."
- **`paras`** - two or three short paragraphs. The rhythm that works: name the reader's situation, then say what we do about it, then say what the result actually looks like. Address the reader as "you." Plain language on the front-of-house pages.
- **`youGet`** - four concrete deliverables, rendered as a checked list. Nouns, not promises. Each item should be something the client could point at when it arrived.
- **`bestFor`** - one sentence naming who this suits. This is a qualifier and it is allowed to exclude people; a service that is best for everyone reads as best for no one.
- **`outcome`** - one sentence on the state the client ends up in. Phrase it as a change ("You stop guessing and start building"), not a feature.
- **`quote`** *(optional)* - a client line supporting this specific offering. See the caveat below.
- **`ctaLabel`** - the button text. Every service CTA routes to `/contact`. Make the label specific to the offering ("Find Your First Win") rather than generic ("Learn more").

### Rules

- **Ordering carries meaning.** The first service is the entry point a curious visitor is meant to pick. Put the lowest-commitment, most legible offering first, and the specialist or infrastructure-heavy offerings later.
- **No jargon in `title` or `tagline`.** Acronyms are allowed once the reader is inside `paras` and only where they are the honest name of the thing. If an acronym is unavoidable in a title, expand it there (as AIDSEF does).
- **Keep `youGet` at four items.** The two-column `bestFor` / `outcome` block below it balances against a four-item list; longer lists unbalance the section and dilute each line.
- **No pricing or engagement length in the data.** Deliberately omitted. If a duration is essential to the pitch, it goes inside a `paras` sentence, not a field.

### Caveat: `quote` bypasses the testimonial system

`quote` is a plain string typed inline. Two services currently use it, and neither quote exists in `testimonials.ts`. This is the one place in the codebase where quote text is not single-sourced, and it means those quotes can drift or lose their attribution trail.

If you add a `quote`, the rules in §3 still apply: real, permissioned, never edited for punch. If the same person's words belong in the social-proof grids too, add them to `testimonials.ts` instead and consider whether the service needs the inline quote at all.

---

## 2. Service graphic

**Data:** none. **Lives in:** `src/components/ServiceGraphic.tsx`, animated by the `sg-*` utilities in `src/app/globals.css`.

Each service gets a hand-built animated SVG, registered in the `graphics` map by the service's `id`. These are illustrations of the idea, not decoration and not stock art.

### How to add one

1. Write a `Graphic<Name>()` function returning a single `<svg viewBox="0 0 400 300" role="img" aria-label="...">`.
2. Register it in the `graphics` map under the service `id`.
3. Give the `aria-label` a full sentence describing what the diagram *says*, not what it looks like. "Diagram: your current systems and data pass through an assessment lens and come out as one recommended first win, running in production." A screen-reader user should get the argument, not the shapes.

### Conventions

- **Palette only, via CSS variables.** `var(--color-ink-800)`, `var(--color-titanium)`, `var(--color-mist)`, `var(--color-red-bright)`. Never hardcode a hex.
- **`live` green is reserved.** `var(--color-live)` means "this is running in production" and nothing else. Not for text, CTAs, section accents, or general emphasis.
- **Labels** use the shared `label` style object (Source Sans, 11px, mist). Keep text in graphics to short nouns.
- **Animation is CSS, driven by custom properties.** Use the `sg-*` classes rather than writing new keyframes: `sg-draw` (stroke reveal), `sg-travel` (a pulse moving along a path), `sg-glow`, `sg-pop`, `sg-typing`, `sg-fill`, `sg-float`, `sg-march`, `sg-fade-in`. Per-instance timing and distance come through `--delay`, `--dur`, `--tx`, `--ty`, and `--dash`, passed with the local `v()` helper.
- **The static state must read complete.** This is the hard requirement, not a nicety. `globals.css` disables every `sg-*` animation under `prefers-reduced-motion` and hides `sg-travel` pulses entirely, so any meaning carried *only* by a moving pulse is lost for those users. Design the settled frame first, then add motion to it.
- **No JS, no canvas, no WebGL.** Inline SVG with CSS animation, per the performance rule in `CLAUDE.md`.

---

## 3. Testimonial

**Data:** `src/lib/testimonials.ts`. **Rendered by:** `src/components/TestimonialCard.tsx`.

Every client quote on the site is defined once here and displayed elsewhere by reference. Nothing else in the codebase should type quote text (see the §1 caveat for the one current exception).

### The fields

- **`slug`** - stable id. Case studies link to a quote with this.
- **`pull`** - the short card-face quote used in grids and on case-study cards. One or two sentences, the sharpest part of what they said.
- **`full`** *(optional)* - the complete recommendation as an array of paragraphs. Powers the "See full testimonial" expander and the case-study "in their words" disclosure.
- **`name` / `title` / `org`** - attribution. `title` and `org` are optional; leave `org` empty rather than guessing.
- **`track`** - `"ai"` or `"enterprise-data"`.
- **`tag`** - short eyebrow label on the card, e.g. "Enterprise data", "AI assistant".
- **`featured`** - `true` puts it in the home and About "What clients say" grids.
- **`placeholder`** - `true` renders a muted "coming soon" card. Delete the stub once a real quote takes the slot.

### How placement works

Two independent switches:

- `featured: true` puts the quote in the social-proof grids.
- Setting `testimonialSlug: "<slug>"` on a study in `caseStudies.ts` puts it inside that engagement's story on `/work`.

So a quote can appear in the grids only, in its case study only, or both. The text is never copied between files; the case study looks it up through `getTestimonial()`.

### Rules

- **Show the highest attribution the person granted, and never more.** Do not invent a title, upgrade a role, or attach an employer the person didn't agree to name. Record permission and chosen attribution in writing before it ships.
- **Never edit a quote for punch.** Trimming to a `pull` is fine; rewording is not. `pull` must be a verbatim substring-level excerpt of what they actually said.
- **Prioritize AI-track quotes.** The launch set skewed toward the data practice. As AI-era quotes arrive, give them featured slots; the AI practice is the growth story and its proof is thinner.
- **Keep the grid looking intentional.** It should read well at three and scale gracefully upward. Use `placeholder` stubs rather than an obviously short row while requests are in flight.
- **The LinkedIn link stays.** Beneath featured testimonials, the "More recommendations on LinkedIn" link lets a small set imply a deeper pile, and gives Denodo-affiliated recommenders a personal-capacity home that keeps endorsement implications off the site.

---

## 4. Case study

**Data:** `src/lib/caseStudies.ts`. **Rendered by:** `src/components/CaseStudyCard.tsx`.

Two exported arrays, rendered as two labeled groups on `/work`:

- **`labShowcases`** - independent R&D builds from our own lab. Shown in full detail, named as ours.
- **`clientOutcomes`** - real engagements. Some named with permission, others anonymized.

Both use the same `CaseStudy` shape.

### The fields

- **`slug`**, **`title`** - id and a short concrete title.
- **`track`** - `"ai"` or `"enterprise-data"`. **`type`** - `"lab-showcase"` or `"client-outcome"`; this decides which group it lands in.
- **`client`** - the real name where permitted, otherwise a descriptor such as "a top-20 US bank". Lab builds use the lab itself.
- **`headlineMetric`** - the one result that leads the card. A number where there is one; a concrete before-and-after where there isn't ("Multi-day analysis to minutes").
- **`summary`** - one or two sentences for the card face.
- **`problem` / `approach` / `whatWeBuilt` / `outcome`** - the story. `approach` is where the foundation thinking shows; `whatWeBuilt` should be plain enough for a non-technical reader even when the stack isn't.
- **`tech`** - stack tags, rendered as chips.
- **`confidential`** - `true` means no client name anywhere, descriptor only.
- **`placeholder`** *(optional)* - renders a muted empty slot with no story.
- **`testimonialSlug`** *(optional)* - pulls a quote in from `testimonials.ts`. Never copy the text.

### Rules

- **Anonymize by default, name by exception.** A client name ships only when you can point to explicit permission. If in doubt, `confidential: true` and a descriptor.
- **Numbers must be NDA-cleared and rounded.** "Roughly $800K redevelopment avoided" rather than an exact internal figure. Round in the client's favor for safety, not for effect.
- **Lead the most relatable builds first.** For the SMB visitor, an agentic CRM and a working chatbot read as "real things that work." Vision and edge builds sit later, demonstrating range.
- **Never imply a partnership that doesn't exist.** Naming a platform in `tech` is fine. Framing an engagement as done on behalf of, or endorsed by, a vendor is not. The Denodo rules in `CLAUDE.md` apply here too.

---

## 5. Recognition card

**Data:** `src/lib/recognition.ts`. **Rendered by:** `src/components/RecognitionCard.tsx`.

The core content type for the "what could AI do for you?" sections on the home page and `/ai-solutions`. It leads with the visitor's *problem in their own words*, not with our capability. This is the structural expression of the "never gate comprehension behind jargon" rule.

### The fields

- **`id`** - url-safe id.
- **`symptomHeadline`** - the problem in the visitor's language, second person, as a spoken sentence. "You answer the same questions all day."
- **`promise`** - one or two sentences: what we'd build and what changes. Plain language.
- **`hiddenCapability`** - **build-side only, never rendered.** It records which capability the card is quietly selling ("RAG", "agentic automation", "RAG + vision") so the set stays balanced and nobody adds three cards that are all the same service.
- **`tone`** - `"hopeful"` or `"rescue"`. Governs ordering.
- **`icon`** - key into the line-icon set in `icons.tsx`.

`catchCard` is exported separately: the "You have an idea but don't know if it's possible" door for visitors who don't see themselves in any specific symptom.

### Rules

- **Order hopeful first. Any `rescue` card goes LAST.** A skimming beginner should get two or three optimistic hits before the word "fail" appears anywhere. The burned buyer scans harder and will find the rescue card at the end without trouble.
- **Rescue never appears above the recognition section, and never in a hero.** Rescue is reassuring depth, not a headline.
- **Phrase rescue conditionally.** "If you've already tried." The page assumes a fresh, hopeful visitor by default.
- **`hiddenCapability` never becomes copy.** If a capability name has leaked into `symptomHeadline` or `promise`, the card has stopped doing its job.
- **Stay in second person, in their vocabulary.** No product names, no capability names, no "we" until the `promise`.

---

## 6. Page and section patterns

Conventions that keep new sections looking like the existing ones.

- **Section rhythm.** `SectionLabel` (small caps, letter-spaced, `red-bright`) sits above an `<h2>` in Montserrat bold. The label names the section's job in two or three words; the h2 is a full sentence, usually ending in a period.
- **One `<h1>` per page**, in the hero.
- **Band alternation.** Sections alternate between the body background (`ink-950`) and `ink-900` with `border-y border-ink-800`. `ServiceSection` does this automatically by index; elsewhere it's manual, so check the section above before choosing.
- **`.section-grad`** adds the soft brand-red bloom rising from the bottom of a section. Low alpha on purpose: it should read as atmosphere tying the page to the brand, never as a color block.
- **CTAs.** One primary style (`CtaButton`, solid red) used consistently. Every conversion CTA routes to `/contact`. Make the label say what happens next.
- **Cards** use `border-ink-700` on an `ink-900` or `ink-800` fill. No heavy shadows.
- **Icons** come from the shared line-icon set in `icons.tsx`. Keep the set visually consistent; no emoji anywhere in the UI.
- **Mobile first.** Card grids stack, service sections collapse to one column, and the hero degrades to a simplified state.
- **Motion.** Anything animated needs a complete settled state under `prefers-reduced-motion`. Hero components skip animation entirely and render their first scenario fully resolved.

---

## 7. The Lab (`/lab`)

A `noindex` stub, not linked in the nav. It exists so an interactive demo can be added later without a redesign.

When it gets content, the zero-cost version comes first: short recorded walkthroughs of the real lab systems (the agentic CRM being driven by an agent, the persistent agents working, the RAG chatbot answering). These are the strongest proof available and cost nothing to run.

A live demo stays deferred. If one is ever built, the constraints are in `docs/build-notes.md`.

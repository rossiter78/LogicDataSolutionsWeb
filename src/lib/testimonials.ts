/*
  Testimonials: the single source of truth for every client quote on the site.

  ── How to manage this file ────────────────────────────────────────────────
  A quote is defined ONCE here, then displayed wherever it's needed by
  reference. Nothing else in the codebase types quote text; pages and case
  studies read from this list.

  To ADD a testimonial: append one object to `testimonials` below and fill in
  the fields. Set `featured: true` if you want it in the home + About
  "What clients say" grids.

  To CONTROL WHERE A QUOTE SHOWS:
  - `featured: true`   → appears in the home + About social-proof grids.
  - `featured` omitted → hidden from those grids (still available to link from
                          a case study, see below).
  - A case study shows a quote by referencing this list, not by copying it:
    in `caseStudies.ts`, set `testimonialSlug: "<slug>"` on the study. That
    quote then renders inside that engagement's story on /work, whether or not
    it's `featured`. So a quote can appear in its case study only, in the
    grids only, or both, purely by how you set `featured` + `testimonialSlug`.

  To RETIRE a placeholder: delete the `placeholder: true` stub once a real
  quote takes its slot. Placeholders render as muted "coming soon" cards so the
  grids look intentional while requests are in flight.

  `pull`  = short card-face quote (grids + case-study card summary).
  `full`  = full recommendation paragraphs (shown in the case-study "in their
            words" disclosure). Optional; omit for grid-only quotes.
*/

export type Testimonial = {
  slug: string; // stable id; case studies link to it via `testimonialSlug`
  pull: string; // short quote for grids and the case-study card face
  full?: string[]; // full recommendation paragraphs (case-study disclosure)
  name: string;
  title?: string;
  org: string;
  track: "ai" | "enterprise-data";
  tag: string; // small eyebrow label, e.g. "Enterprise data"
  featured?: boolean; // show in the home + About "What clients say" grids
  placeholder?: boolean; // not yet arrived; renders a muted "coming soon" card
};

export const testimonials: Testimonial[] = [
  {
    slug: "mark-veile-ball",
    track: "enterprise-data",
    tag: "Enterprise data",
    featured: true,
    name: "Mark Veile",
    org: "Ball Aerospace",
    pull: "Trent Rossiter was a true asset to our team. His high performance, customer-centric approach, and logical problem-solving skills have made a positive and lasting impact on our operations.",
    full: [
      "Trent Rossiter was a delight to work with because he showed commitment to providing top-tier support and a logical approach to problem-solving. This led to significant improvement in efficiency and effectiveness for my team's operations.",
      "Trent exhibited an impressive level of dedication to the needs of our organization. His customer-focused mindset made a significant impact on our team's experience with the Denodo platform. He consistently ensured that our users had the tools and resources they need to excel. Whether it's resolving technical issues, offering guidance on best practices, or tailoring solutions to meet our specific requirements, Trent consistently delivered.",
      "Trent possesses a deep understanding of the Denodo platform and its intricacies, allowing him to develop elegant and efficient solutions for even the most complex issues. His ability to break down problems, analyze them methodically, and implement well-considered solutions was invaluable to our team's success. He was able to identify if the issue was within our span-of-control or needed to be addressed directly by Denodo and then took it one step further by interacting with Denodo Support to define the requirements of the issue and collaborate on a solution.",
      "Trent Rossiter was a true asset to our team, and I have no doubt that he will be an asset to any organization lucky enough to work with him in the future. His high performance, customer-centric approach, and logical problem-solving skills have made a positive and lasting impact on our operations. Thank you, Trent, for your exceptional contributions to our team's success.",
    ],
  },

  {
    slug: "matt-harris",
    track: "enterprise-data",
    tag: "Data virtualization",
    featured: true,
    name: "Matt Harris",
    title: "Director of Data Solutions",
    org: "",
    pull: "Throughout a challenging data virtualization implementation, Logic Data Solutions consistently displayed deep technical expertise, strategic thinking, and unwavering professionalism.",
    full: [
      "Throughout a challenging data virtualization implementation, Logic Data Solutions consistently displayed deep technical expertise, strategic thinking, and unwavering professionalism. Even with a customer who rigorously questioned every decision, they remained patient and responsive, ultimately delivering a successful data solution and earning the customer's confidence.",
      "Logic Data Solutions played a pivotal role by patiently addressing concerns, validating design decisions, and driving consensus, that made a measurable difference in overcoming resistance and delivering a successful solution.",
      "Logic Data Solutions reduced design review cycles by 30%, prevented multiple weeks of potential rework, and accelerated solution adoption, directly contributing to the project's successful delivery and increased customer confidence in the platform.",
    ],
  },
  {
    slug: "colleen-miller",
    track: "enterprise-data",
    tag: "Data architecture",
    featured: true,
    name: "Colleen Miller",
    title: "Associate Director, Data Architecture and Delivery",
    org: "University of Illinois",
    pull: "His technical expertise, positive attitude, responsiveness, and willingness to help make him an invaluable partner.",
    full: [
      "I regularly bring both new ideas and challenging problems to Trent, and he consistently provides thoughtful, practical solutions. On the rare occasion that he doesn't know the answer immediately, he always treats it as an action item. He researches the issue and comes back with a solution often within hours. His responsiveness and follow-through give me complete confidence that we'll get to the right answer.",
      "One of the things I appreciate most is Trent's enthusiasm. No matter what issue we bring to him, he approaches it with genuine excitement and curiosity. That positive attitude is contagious and makes our team excited to tackle problems instead of feeling overwhelmed by them.",
      "Trent is also exceptionally patient and supportive. He never makes me feel like I'm asking too many questions, even when I need him to explain something for the second or third time. He always takes the time to ensure I understand, and he does so with kindness and encouragement.",
      "Working with Trent has been a wonderful experience. His technical expertise, positive attitude, responsiveness, and willingness to help make him an invaluable partner. I am incredibly grateful for everything he does to support our team, and I sincerely appreciate having the opportunity to work with him.",
    ],
  },
];

/* Quotes that appear in the home + About "What clients say" grids. */
export const featuredTestimonials = testimonials.filter((t) => t.featured);

/* Look up one quote by slug (used by case studies via `testimonialSlug`). */
export function getTestimonial(slug: string): Testimonial | undefined {
  return testimonials.find((t) => t.slug === slug);
}

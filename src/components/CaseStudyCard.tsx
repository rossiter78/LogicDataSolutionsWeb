import type { CaseStudy } from "@/lib/caseStudies";
import { getTestimonial } from "@/lib/testimonials";

/*
  Case-study card. The summary + headline metric read on their own; the full
  problem → approach → what we built → outcome story lives in a native
  <details> disclosure, so the page needs no client-side JS and the expand
  control is keyboard-accessible for free.

  Placeholder cards render as a muted "coming soon" scaffold with no story.
*/
export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  if (study.placeholder) {
    return (
      <article className="flex flex-col rounded-xl border border-dashed border-ink-700 bg-ink-900/40 p-6 sm:p-8">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
          Client outcome
        </p>
        <h3 className="mt-3 text-xl font-bold text-mist">Story coming soon.</h3>
        <p className="mt-3 leading-relaxed text-titanium">
          Another client outcome will be featured here.
        </p>
      </article>
    );
  }

  const eyebrow =
    study.type === "lab-showcase" ? "Built in our lab" : study.client;

  // Quote text is never stored on the study; look it up in the testimonials
  // source of truth by the slug the study links to.
  const quote = study.testimonialSlug
    ? getTestimonial(study.testimonialSlug)
    : undefined;

  const detailRows: [string, string][] = [
    ["The problem", study.problem],
    ["Our approach", study.approach],
    ["What we built", study.whatWeBuilt],
    ["The outcome", study.outcome],
  ];

  return (
    <article className="flex flex-col rounded-xl border border-ink-700 bg-ink-900 p-6 sm:p-8">
      <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
        {eyebrow}
      </p>
      <h3 className="mt-3 text-xl font-bold">{study.title}</h3>
      <p className="mt-4 font-display text-2xl font-bold leading-tight text-red-bright">
        {study.headlineMetric}
      </p>
      <p className="mt-3 leading-relaxed text-mist">{study.summary}</p>

      {study.tech.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {study.tech.map((t) => (
            <li
              key={t}
              className="rounded-md border border-ink-700 bg-ink-800 px-2.5 py-1 font-display text-xs font-semibold text-mist"
            >
              {t}
            </li>
          ))}
        </ul>
      )}

      {quote && (
        <blockquote className="mt-6 border-l-2 border-red pl-4 text-sm italic leading-relaxed text-mist">
          &ldquo;{quote.pull}&rdquo;
          <cite className="mt-2 block not-italic font-display text-xs font-bold uppercase tracking-[0.14em] text-titanium">
            {quote.name} · {quote.org}
          </cite>
        </blockquote>
      )}

      <details className="group mt-6 border-t border-ink-800 pt-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-display text-sm font-bold text-offwhite">
          Read the full story
          <svg
            viewBox="0 0 16 16"
            className="h-4 w-4 shrink-0 text-red-bright transition-transform group-open:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m3.5 6 4.5 4.5L12.5 6" />
          </svg>
        </summary>
        <dl className="mt-4 flex flex-col gap-4">
          {detailRows.map(([label, value]) => (
            <div key={label}>
              <dt className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
                {label}
              </dt>
              <dd className="mt-1.5 leading-relaxed text-mist">{value}</dd>
            </div>
          ))}
        </dl>

        {quote?.full && (
          <figure className="mt-6 border-t border-ink-800 pt-4">
            <figcaption className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
              In their words
            </figcaption>
            <blockquote className="mt-3 flex flex-col gap-3 border-l-2 border-red pl-4 italic leading-relaxed text-mist">
              {quote.full.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </blockquote>
            <p className="mt-3 pl-4 font-display text-xs font-bold uppercase tracking-[0.14em] text-titanium">
              {quote.name} · {quote.org}
            </p>
          </figure>
        )}
      </details>
    </article>
  );
}

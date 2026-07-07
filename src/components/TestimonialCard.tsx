import type { Testimonial } from "@/lib/testimonials";

/*
  One "What clients say" card, shared by the home and About grids so the markup
  lives in a single place. `surface` picks the fill so the card reads against
  its section: "raised" (ink-900) on the near-black body, "base" (ink-950) on a
  charcoal band. Placeholder entries render a muted, dashed "coming soon" slot.
*/
export default function TestimonialCard({
  testimonial,
  surface = "raised",
}: {
  testimonial: Testimonial;
  surface?: "raised" | "base";
}) {
  const fill = surface === "base" ? "bg-ink-950" : "bg-ink-900";

  if (testimonial.placeholder) {
    return (
      <figure
        className={`flex flex-col gap-4 rounded-lg border border-dashed border-ink-700 ${fill} p-7`}
      >
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
          {testimonial.tag}
        </p>
        <blockquote className="italic leading-relaxed text-titanium">
          &ldquo;Testimonial arriving via a request already in flight.&rdquo;
        </blockquote>
        <figcaption className="mt-auto text-sm text-titanium">
          Name, Title, Organization
        </figcaption>
      </figure>
    );
  }

  const attribution = [
    [testimonial.name, testimonial.title].filter(Boolean).join(", "),
    testimonial.org,
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <figure
      className={`flex flex-col gap-4 rounded-lg border border-ink-700 ${fill} p-7`}
    >
      <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
        {testimonial.tag}
      </p>
      <blockquote className="italic leading-relaxed text-mist">
        &ldquo;{testimonial.pull}&rdquo;
      </blockquote>

      <div className="mt-auto flex flex-col gap-4">
        <figcaption className="text-sm text-titanium">{attribution}</figcaption>

        {testimonial.full && testimonial.full.length > 0 && (
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center gap-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-red-bright transition-colors hover:text-offwhite [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">See full testimonial</span>
              <span className="hidden group-open:inline">Hide testimonial</span>
              <svg
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none"
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
            <blockquote className="mt-4 flex flex-col gap-3 border-t border-ink-800 pt-4 text-sm italic leading-relaxed text-mist">
              {testimonial.full.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </blockquote>
          </details>
        )}
      </div>
    </figure>
  );
}

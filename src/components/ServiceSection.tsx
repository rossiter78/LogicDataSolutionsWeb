import CtaButton from "@/components/CtaButton";
import ServiceGraphic from "@/components/ServiceGraphic";
import Container from "@/components/Container";
import type { Service } from "@/lib/services";

export default function ServiceSection({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const flip = index % 2 === 1;
  return (
    <section
      id={service.id}
      className={`section-grad scroll-mt-20 ${flip ? "border-y border-ink-800 bg-ink-900" : ""}`}
    >
      <Container className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div
          className={`rounded-xl border border-ink-700 p-6 sm:p-10 ${
            flip ? "bg-ink-950 lg:order-2" : "bg-ink-900"
          }`}
        >
          <ServiceGraphic id={service.id} />
        </div>

        <div className={`flex flex-col items-start gap-5 ${flip ? "lg:order-1" : ""}`}>
          <p className="font-display text-sm font-bold tracking-[0.2em] text-red-bright">
            {service.num}
          </p>
          <h2 className="text-2xl font-bold sm:text-3xl">{service.title}</h2>
          <p className="font-display text-lg font-semibold text-offwhite">
            {service.tagline}
          </p>
          {service.paras.map((p) => (
            <p key={p.slice(0, 24)} className="leading-relaxed text-mist">
              {p}
            </p>
          ))}

          <div className="mt-1 w-full">
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
              You get
            </p>
            <ul className="mt-3 flex flex-col gap-2.5">
              {service.youGet.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-mist">
                  <svg
                    viewBox="0 0 16 16"
                    className="mt-1 h-4 w-4 shrink-0 text-red-bright"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="m2.5 8.5 3.5 3.5 7.5-8" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-1 grid w-full gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-ink-700 bg-ink-800 p-4">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
                Best for
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                {service.bestFor}
              </p>
            </div>
            <div className="rounded-lg border border-ink-700 bg-ink-800 p-4">
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
                The outcome
              </p>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                {service.outcome}
              </p>
            </div>
          </div>

          {service.quote && (
            <blockquote className="border-l-2 border-red pl-4 italic leading-relaxed text-mist">
              &ldquo;{service.quote}&rdquo;
            </blockquote>
          )}

          <CtaButton href="/contact" className="mt-2">
            {service.ctaLabel}
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}

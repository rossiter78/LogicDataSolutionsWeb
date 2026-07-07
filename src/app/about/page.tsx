import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CtaButton from "@/components/CtaButton";
import SectionLabel from "@/components/SectionLabel";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About: Boutique AI & Data Consulting",
  description:
    "Led by Trent Rossiter, an AI architect and data engineer with enterprise aerospace pedigree who builds the systems, not just the slide decks.",
};

/*
  About page (website-spec §7). Company voice, principal named. Structure:
  hero → story → the lab → credentials → values → testimonials → CTA.
  Testimonial slots reuse the home-page placeholder pattern (real quotes are
  an open action item, content-templates.md §2); layout is final, copy is not.
*/

const credentials = [
  "Denodo Architect, Administrator & AI SDK",
  "AWS Certified AI Practitioner",
  "Microsoft Generative AI Engineering (in progress)",
  "Cornell Data Science Certificate",
];

const values = [
  {
    title: "Build, don't just advise.",
    body: "We ship working systems, not slide decks. The deliverable is software that runs in production and keeps running.",
  },
  {
    title: "Foundations first.",
    body: "AI is only as good as the data beneath it. We build the governed, real-time foundation in from the start, even on smaller projects.",
  },
  {
    title: "Your ownership, open standards.",
    body: "MCP, open-weight models, and architectures you own and can run yourself. No black boxes, no lock-in.",
  },
];

/* Placeholder slots - real quotes arriving via the testimonial requests
   (content-templates.md §2). Layout is final; copy is not. */
const testimonialPlaceholders = [
  { tag: "AI project" },
  { tag: "Enterprise data" },
  { tag: "Client engagement" },
  { tag: "Leadership" },
];

export default function AboutPage() {
  return (
    <>
      {/* 7.1 Hero */}
      <section className="section-grad">
        <Container className="flex max-w-3xl flex-col items-start gap-6 py-20 lg:py-28">
          <SectionLabel>About</SectionLabel>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            A boutique consultancy with enterprise depth.
          </h1>
          <p className="text-lg leading-relaxed text-mist">
            Logic Data Solutions is led by Trent Rossiter, an AI architect and
            data engineer who builds the systems, not just the slide decks.
          </p>
        </Container>
      </section>

      {/* 7.2 Story */}
      <section className="section-grad border-y border-ink-800 bg-ink-900">
        <Container className="max-w-3xl py-16 lg:py-20">
          <div className="flex flex-col gap-5">
            <SectionLabel>Our story</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              AI is only as good as the data beneath it.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              Logic Data Solutions is a boutique AI and enterprise-data
              consultancy. We exist because of a simple conviction: AI is only
              as good as the data beneath it. Our principal, Trent Rossiter,
              spent more than a decade as a principal data architect in
              enterprise aerospace, building governed data platforms, earning a
              NASA manufacturing award, and cutting roughly $1M a year in costs
              by replacing outside consultants with an internal capability.
            </p>
            <p className="text-lg leading-relaxed text-mist">
              Today that same rigor goes into building production AI: agents,
              RAG systems, MCP servers, and custom applications for clients
              across federal government, banking, energy, higher education, and
              law.
            </p>
          </div>
        </Container>
      </section>

      {/* 7.3 The lab */}
      <section className="section-grad">
        <Container className="max-w-3xl py-16 lg:py-20">
          <div className="flex flex-col gap-5">
            <SectionLabel>The lab</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              We build in the open, on our own infrastructure.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              We run a private AI development lab: an NVIDIA DGX Spark,
              containerized workloads, and isolated environments for agent
              deployment, networked securely, for local model development,
              architecture validation, and client solution testing. It&rsquo;s
              how we de-risk client work: we&rsquo;ve usually built and broken
              it ourselves first. Several of the projects in our{" "}
              <Link
                href="/work"
                className="font-semibold text-offwhite underline decoration-ink-600 underline-offset-4 transition-colors hover:text-red-bright"
              >
                work
              </Link>{" "}
              came out of this lab.
            </p>
          </div>
        </Container>
      </section>

      {/* 7.4 Credentials - reframed as a quiet trust strip, not a resume
          matrix. Proof-of-work leads; the formal certs sit underneath as
          reassurance (pills, not cards) so the section stops reading like a CV. */}
      <section className="section-grad border-y border-ink-800 bg-ink-900">
        <Container className="py-16 lg:py-20">
          <div className="flex max-w-3xl flex-col gap-4">
            <SectionLabel>Credentials</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              We&rsquo;d rather show you the work than the certificates.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              The builds speak first. But the formal record is here if you want
              it: the training and certifications underneath the work.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {credentials.map((cred) => (
              <li
                key={cred}
                className="rounded-full border border-ink-700 bg-ink-950 px-4 py-2 text-sm text-mist"
              >
                {cred}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* 7.5 Approach / values */}
      <section className="section-grad">
        <Container className="py-16 lg:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Three things we don&rsquo;t compromise on.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col gap-3">
                <h3 className="font-display text-lg font-bold">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-mist">{value.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 7.6 Testimonials */}
      <section className="section-grad border-y border-ink-800 bg-ink-900">
        <Container className="py-16 lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">What clients say.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {testimonialPlaceholders.map((t, i) => (
              <figure
                key={i}
                className="flex flex-col gap-4 rounded-lg border border-dashed border-ink-700 bg-ink-950 p-7"
              >
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
                  {t.tag}
                </p>
                <blockquote className="italic leading-relaxed text-titanium">
                  &ldquo;Testimonial placeholder: final quote and attribution
                  arriving via the requests already in flight.&rdquo;
                </blockquote>
                <figcaption className="mt-auto text-sm text-titanium">
                  Name, Title, Organization
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm font-bold text-red-bright transition-colors hover:text-offwhite"
            >
              More recommendations on LinkedIn →
            </a>
          </div>
        </Container>
      </section>

      {/* Scale / partnerships - answers the "is a boutique big enough?"
          objection right before the CTA, without undercutting the
          principal-led positioning the rest of the page sells. */}
      <section className="section-grad">
        <Container className="max-w-3xl py-16 lg:py-20">
          <div className="flex flex-col gap-5">
            <SectionLabel>Scale when you need it</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Boutique by default, not by limitation.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              You work directly with the principal, and that never changes. But
              boutique doesn&rsquo;t mean capacity-limited. When a project calls
              for a larger delivery team, we scale up through partnerships with
              established consulting firms, so you get the reach of a big firm
              exactly when the work needs it, without giving up the senior
              ownership and single point of accountability you came to a
              boutique for.
            </p>
          </div>
        </Container>
      </section>

      {/* 7.7 CTA */}
      <section className="section-grad border-t border-ink-800 bg-ink-900">
        <Container className="flex flex-col items-center gap-6 py-20 text-center lg:py-24">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Senior expertise, without the agency overhead.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-mist">
            The person who scopes your project is the person who builds it.
            Tell us what you&rsquo;re trying to do, and we&rsquo;ll tell you the
            most direct way to get there.
          </p>
          <CtaButton href="/contact" className="mt-2">
            Work with us
          </CtaButton>
        </Container>
      </section>
    </>
  );
}

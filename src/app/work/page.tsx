import type { Metadata } from "next";
import Container from "@/components/Container";
import CtaButton from "@/components/CtaButton";
import SectionLabel from "@/components/SectionLabel";
import CaseStudyCard from "@/components/CaseStudyCard";
import { labShowcases, clientOutcomes } from "@/lib/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies & AI Showcases",
  description:
    "Production AI systems and enterprise data architectures we've built: agentic apps, RAG, computer vision, and anonymized client outcomes.",
};

export default function WorkPage() {
  return (
    <>
      {/* 6.1 Intro */}
      <section className="section-grad">
        <Container className="flex max-w-3xl flex-col items-start gap-6 py-20 lg:py-28">
          <SectionLabel>Work</SectionLabel>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Real systems, real results.
          </h1>
          <p className="text-lg leading-relaxed text-mist">
            A selection of what we&rsquo;ve built, from production AI
            applications to enterprise data architectures. Client work is shown
            with permission, or anonymized to respect confidentiality; our
            independent builds are shown in full.
          </p>
        </Container>
      </section>

      {/* 6.2 Grid - Built in our lab (full detail) */}
      <section className="section-grad border-y border-ink-800 bg-ink-900">
        <Container className="py-16 lg:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <SectionLabel>Built in our lab</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Independent builds, shown in full.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              Systems we designed and built on our own infrastructure: the
              R&amp;D that de-risks client work. Expand any one for the full
              story.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {labShowcases.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </section>

      {/* 6.2 Grid - Client outcomes (anonymized) */}
      <section className="section-grad">
        <Container className="py-16 lg:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <SectionLabel>Client outcomes</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Outcomes from real engagements.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              Outcome stories from engagements across enterprise data and AI,
              each led by its result. Some are shared with the client&rsquo;s
              permission; others are anonymized to respect confidentiality.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {clientOutcomes.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </section>

      {/* 6.3 CTA */}
      <section className="section-grad border-t border-ink-800 bg-ink-900">
        <Container className="flex flex-col items-center gap-6 py-20 text-center lg:py-24">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Want something like this built for you?
          </h2>
          <CtaButton href="/contact" className="mt-2">
            Start a conversation
          </CtaButton>
        </Container>
      </section>
    </>
  );
}

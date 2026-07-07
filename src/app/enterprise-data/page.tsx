import type { Metadata } from "next";
import Container from "@/components/Container";
import CtaButton from "@/components/CtaButton";
import SectionLabel from "@/components/SectionLabel";

export const metadata: Metadata = {
  title: "Denodo Consulting & Data Virtualization for AI",
  description:
    "Denodo partner and subcontractor: data-virtualization architecture, administration, and AI SDK / DeepQuery / MCP enablement for governed, real-time enterprise AI.",
};

/*
  Enterprise Data & AI Foundations - the "back of house" referral landing page
  (website-spec §5). Written to stand entirely on its own: enterprise leads
  arrive referred and land here directly, so it carries its own hero, thesis,
  credibility, and CTA. Voice shifts to peer-to-peer expert - denser than the
  AI/front-of-house pages, assumes the reader knows data virtualization.

  Denodo hard rules (CLAUDE.md): name + partner/subcontractor status are stated
  as fact; no Denodo logo; no wording implying we represent or speak for Denodo.
*/

const services = [
  {
    title: "Platform architecture",
    body: "Lead architecture across every layer of the Denodo Platform (logical data warehouse, data fabric, and data mesh designs), modeled for governance and performance from the base view up.",
  },
  {
    title: "Administration & operations",
    body: "SSL, identity and AD integration, RBAC and FGAC security models, caching strategy, license management, upgrades, and cluster configuration: the day-two work that keeps the platform trustworthy.",
  },
  {
    title: "Denodo for AI",
    body: "Full-stack Denodo AI SDK deployments: vector store, metadata indexing, multi-LLM integration (cloud and on-prem), DeepQuery, and both MCP server variants, Platform MCP and AI SDK MCP.",
  },
  {
    title: "Integration & performance",
    body: "Integrations across MS Fabric, Snowflake, Databricks, Netezza, Presto, Trino, and more; performance tuning, caching, and DuckDB integration for major speed gains.",
  },
  {
    title: "Governance & enablement",
    body: "Metadata strategy, deployment governance, managed citizen-development programs, and team training, so the platform scales without losing its guarantees.",
  },
];

/*
  Proof cards - layout is final; the anonymized outcome stories that fill them
  are an open action item (Trent supplies the metrics). Each card links out to
  /work per spec §5.7 / §6.2. Placeholder copy below is intentionally generic
  and must be replaced before launch.
*/
const proofCards = [
  {
    sector: "Aerospace",
    metric: "Metric to come",
    placeholder:
      "Governed Denodo platform build-out and roadmap ownership at a major aerospace manufacturer. Anonymized outcome and numbers pending.",
  },
  {
    sector: "Federal / regulated",
    metric: "Metric to come",
    placeholder:
      "Secure, real-time data access layer under full governance for a regulated enterprise. Anonymized outcome and numbers pending.",
  },
  {
    sector: "Enterprise AI enablement",
    metric: "Metric to come",
    placeholder:
      "Denodo-for-AI enablement (AI SDK, DeepQuery, and MCP) connecting an enterprise LLM to live governed data. Anonymized outcome and numbers pending.",
  },
];

export default function EnterpriseDataPage() {
  return (
    <>
      {/* 5.1 Hero */}
      <section className="section-grad">
        <Container className="flex max-w-3xl flex-col items-start gap-6 py-20 lg:py-28">
          <SectionLabel>Enterprise Data &amp; AI Foundations</SectionLabel>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            The governed, real-time data foundation your AI needs.
          </h1>
          <p className="text-lg leading-relaxed text-mist">
            Deep Denodo data-virtualization expertise (architecture,
            administration, and AI enablement) so your enterprise AI can reason
            over all your data, in real time, under full governance.
          </p>
          <div className="mt-2">
            <CtaButton href="/contact">Book a discovery call</CtaButton>
          </div>
        </Container>
      </section>

      {/* 5.2 Who it's for */}
      <section className="section-grad border-y border-ink-800 bg-ink-900">
        <Container className="max-w-3xl py-16 lg:py-20">
          <div className="flex flex-col gap-5">
            <SectionLabel>Who it&rsquo;s for</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              For enterprises serious about data, and about AI on top of it.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              If your data lives across clouds, warehouses, and on-prem systems,
              and you need a single governed, real-time access layer (for
              analytics, for AI, or both), this is the core of our practice. We
              work with organizations adopting, scaling, or getting more from the
              Denodo Platform.
            </p>
          </div>
        </Container>
      </section>

      {/* 5.3 The thesis */}
      <section className="section-grad">
        <Container className="max-w-3xl py-16 lg:py-20">
          <div className="flex flex-col gap-5">
            <SectionLabel>The thesis</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Agentic AI fails on the data foundation, not the model.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              The hardest part of enterprise AI isn&rsquo;t the model: it&rsquo;s
              giving it secure, real-time, governed access to data spread across
              dozens of systems. Data virtualization solves exactly this: a
              logical layer that unifies your sources without copying them, with
              governance and security built in. It&rsquo;s the foundation that
              makes enterprise AI accurate, explainable, and safe.
            </p>
          </div>
        </Container>
      </section>

      {/* 5.4 Services */}
      <section className="section-grad border-y border-ink-800 bg-ink-900">
        <Container className="py-16 lg:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              What we do across the platform.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`rounded-xl border border-ink-700 bg-ink-950 p-6 sm:p-8 ${
                  // Last card of an odd-length list spans full width on md+
                  i === services.length - 1 && services.length % 2 === 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-sm font-bold tracking-[0.2em] text-red-bright">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                </div>
                <p className="mt-3 leading-relaxed text-mist">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5.5 The specialization (differentiator) */}
      <section className="section-grad">
        <Container className="max-w-3xl py-16 lg:py-20">
          <div className="flex flex-col gap-5">
            <SectionLabel>The specialization</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              At the frontier of Denodo&rsquo;s AI capabilities.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              We are a <strong className="text-offwhite">Denodo partner</strong>{" "}
              and an authorized{" "}
              <strong className="text-offwhite">
                subcontractor that collaborates directly with Denodo&rsquo;s AI
                engineering team
              </strong>
              , working at the leading edge of the platform&rsquo;s AI features:
              AI SDK, DeepQuery, and MCP. We extend the open-source AI SDK at the
              source level (for example, adding OAuth for secure enterprise
              chatbot deployments), so you&rsquo;re not limited to what&rsquo;s
              available out of the box.
            </p>
          </div>
        </Container>
      </section>

      {/* 5.6 Heritage / credibility */}
      <section className="section-grad border-y border-ink-800 bg-ink-900">
        <Container className="max-w-3xl py-16 lg:py-20">
          <div className="flex flex-col gap-5">
            <SectionLabel>Heritage</SectionLabel>
            <p className="text-lg leading-relaxed text-mist">
              Our principal served as enterprise architect and administrator for
              the Denodo Platform at a major aerospace company: owning design,
              installation, upgrades, and roadmap; delivering a
              proof-of-concept that launched a dedicated Data Science and Data
              Engineering organization; and scaling the platform community from
              3 to 30+ users through governed citizen development and formal
              training.
            </p>
            <p className="text-lg leading-relaxed text-mist">
              For programs that need a larger delivery team, we scale up through
              partnerships with established consulting firms: a boutique practice
              can staff enterprise-scale work without diluting the senior
              ownership, or handing your architecture to a rotating bench.
            </p>
          </div>
        </Container>
      </section>

      {/* 5.7 Proof - card layout final; contents are an open action item */}
      <section className="section-grad">
        <Container className="py-16 lg:py-24">
          <div className="flex max-w-3xl flex-col gap-4">
            <SectionLabel>Proof</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Enterprise outcomes.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              Relevant enterprise data engagements, anonymized to respect
              confidentiality. Each is led by the result it delivered.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {proofCards.map((card) => (
              <div
                key={card.sector}
                className="flex flex-col rounded-xl border border-ink-700 bg-ink-900 p-6"
              >
                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
                  {card.sector}
                </p>
                <p className="mt-4 font-display text-3xl font-bold text-red-bright">
                  {card.metric}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                  {card.placeholder}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <CtaButton href="/work" variant="secondary">
              See enterprise outcomes
            </CtaButton>
          </div>
        </Container>
      </section>

      {/* 5.8 CTA */}
      <section className="section-grad border-t border-ink-800 bg-ink-900">
        <Container className="flex flex-col items-center gap-6 py-20 text-center lg:py-24">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Let&rsquo;s talk about your data foundation.
          </h2>
          <CtaButton href="/contact" className="mt-2">
            Book a discovery call
          </CtaButton>
        </Container>
      </section>
    </>
  );
}

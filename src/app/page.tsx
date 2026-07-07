import type { CSSProperties } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import CtaButton from "@/components/CtaButton";
import SectionLabel from "@/components/SectionLabel";
import HeroPrompt from "@/components/HeroPrompt";
import RotatingWord from "@/components/RotatingWord";
import RecognitionCard from "@/components/RecognitionCard";
import TestimonialCard from "@/components/TestimonialCard";
import { homeRecognitionCards } from "@/lib/recognition";
import { featuredTestimonials } from "@/lib/testimonials";
import {
  IconAgent,
  IconApp,
  IconMcp,
  IconRag,
  IconServer,
  IconVision,
} from "@/components/icons";

const capabilities = [
  {
    icon: IconAgent,
    title: "Agentic AI",
    body: "Systems that reason, plan, and act across your tools using multi-step workflows and dynamic tool selection.",
  },
  {
    icon: IconRag,
    title: "Query & Knowledge RAG",
    body: "Retrieval pipelines with full control over vector stores, embeddings, and tuning, so answers stay grounded in your real data.",
  },
  {
    icon: IconMcp,
    title: "MCP Integration",
    body: "Custom MCP servers and clients that let agents discover and use your systems through an open, standard protocol.",
  },
  {
    icon: IconVision,
    title: "Computer Vision",
    body: "Object detection and image-to-data pipelines, from cloud to constrained edge hardware.",
  },
  {
    icon: IconServer,
    title: "Local & On-Prem Models",
    body: "Open-weight model deployment (Llama, Qwen, Gemma, and more) for air-gapped, private, and cost-sensitive environments.",
  },
  {
    icon: IconApp,
    title: "Custom AI Applications",
    body: "Full-stack apps with AI built in: APIs, automation, and the infrastructure agents need to do real work.",
  },
];

const stats = [
  { value: "Multi-day analysis → minutes", label: "enterprise data delivery" },
  { value: "~$800K", label: "redevelopment avoided" },
  { value: "3 → 30+", label: "platform users scaled" },
];

const whyUs = [
  {
    title: "You work with the principal.",
    body: "No hand-off to junior staff. The person scoping your project is the person building it.",
  },
  {
    title: "We build on what's real.",
    body: "Governed, live data, not static exports or unmanaged lakes, so your AI is accurate and auditable.",
  },
  {
    title: "Open standards, your ownership.",
    body: "MCP, open-weight models, and architectures you own and can run yourself. No black boxes, no lock-in.",
  },
];


export default function Home() {
  return (
    <>
      {/* 3.1 Hero */}
      <section className="section-grad relative overflow-hidden">
        <Container className="grid items-center gap-12 py-20 lg:py-28 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="flex flex-col items-start gap-6">
            <div className="sg-fade-in">
              <SectionLabel>AI &amp; Enterprise Data Consulting</SectionLabel>
            </div>
            <h1
              className="sg-fade-in font-bold leading-tight"
              style={
                {
                  "--delay": "0.15s",
                  fontSize: "clamp(1.5rem, 5.2vw, 3rem)",
                } as CSSProperties
              }
            >
              AI that <RotatingWord />
              <br />working inside your business.
            </h1>
            <p
              className="sg-fade-in max-w-xl text-lg leading-relaxed text-mist"
              style={{ "--delay": "0.35s" } as CSSProperties}
            >
              We help you find where AI actually fits, then build it:
              assistants, automations, and custom tools that work in the real
              world, not just in a demo. Built by an engineer with deep
              enterprise data roots, so what we ship holds up after launch day.
            </p>
            <div
              className="sg-fade-in mt-2 flex flex-wrap gap-4"
              style={{ "--delay": "0.55s" } as CSSProperties}
            >
              <CtaButton href="/contact">
                Book a free AI Opportunity Assessment
              </CtaButton>
              <CtaButton href="/work" variant="secondary">
                See what we&rsquo;ve built
              </CtaButton>
            </div>
          </div>
          <HeroPrompt className="sg-fade-in mx-auto w-full max-w-lg self-center" />
        </Container>
      </section>

      {/* 3.3 The insight / the bridge */}
      <section className="section-grad border-y border-ink-800 bg-ink-900">
        <Container className="max-w-3xl py-20 lg:py-24">
          <div className="flex flex-col gap-5">
            <SectionLabel>Why most AI stalls</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              The problem usually isn&rsquo;t the model. It&rsquo;s the data
              underneath.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              Teams pour effort into prompts and models, then watch results
              come back wrong, stale, or impossible to trust. The root cause is
              almost always underneath: data that&rsquo;s scattered across
              systems, ungoverned, or frozen in exports that were already out
              of date when they were made. We start where AI actually succeeds
              or fails, at the data foundation, and build up from there.
              That&rsquo;s why our chatbots, agents, and pipelines hold up in
              production instead of demos.
            </p>
          </div>
        </Container>
      </section>

      {/* 3.4 What could AI do for you? - recognition cards, rescue last */}
      <section className="section-grad">
        <Container className="py-20 lg:py-24">
          <div className="flex flex-col gap-5">
            <SectionLabel>Where could you start?</SectionLabel>
            <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
              You don&rsquo;t need to know the tech. You just need to know the
              problem.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {homeRecognitionCards.map((card) => (
              <RecognitionCard key={card.id} card={card} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/ai-solutions"
              className="font-display text-sm font-bold text-red-bright transition-colors hover:text-offwhite"
            >
              Explore AI Solutions →
            </Link>
          </div>
        </Container>
      </section>

      {/* 3.5 Capabilities - proof of competence, not the pitch */}
      <section className="section-grad border-y border-ink-800 bg-ink-900">
        <Container className="py-20 lg:py-24">
          <div className="flex flex-col gap-5">
            <SectionLabel>Under the hood</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">How we build it.</h2>
          </div>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div key={cap.title} className="flex flex-col gap-3">
                <cap.icon className="h-7 w-7 text-red-bright" />
                <h3 className="font-display text-base font-bold">
                  {cap.title}
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-mist">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3.6 Featured proof */}
      <section className="section-grad">
        <Container className="py-20 lg:py-24">
          <div className="flex flex-col gap-5">
            <SectionLabel>Proof</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Real systems, in production.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Link
              href="/work"
              className="group flex flex-col gap-4 rounded-lg border border-ink-700 bg-ink-800 p-8 transition-colors hover:border-ink-600"
            >
              <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-titanium">
                Featured · Built in our lab
              </p>
              <h3 className="font-display text-2xl font-bold group-hover:text-offwhite">
                Agentic CRM with a custom MCP server
              </h3>
              <p className="leading-relaxed text-mist">
                A full-stack CRM built from the ground up for agentic workloads:
                local AI agents run day-to-day workflows end to end through a
                custom MCP server, and a vision pipeline reads business cards
                straight into contacts.
              </p>
              <p className="mt-auto pt-2 font-display text-sm font-bold text-red-bright">
                Read the case study →
              </p>
            </Link>

            <div className="flex flex-col justify-center gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="border-l-2 border-red pl-5"
                >
                  <p className="font-display text-xl font-bold sm:text-2xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-mist">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/work"
              className="font-display text-sm font-bold text-red-bright transition-colors hover:text-offwhite"
            >
              See all work →
            </Link>
          </div>
        </Container>
      </section>

      {/* 3.7 Why work with us */}
      <section className="section-grad border-y border-ink-800 bg-ink-900">
        <Container className="py-20 lg:py-24">
          <div className="flex flex-col gap-5">
            <SectionLabel>Why Logic Data Solutions</SectionLabel>
            <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
              Senior expertise, without the agency overhead.
            </h2>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {whyUs.map((point) => (
              <div key={point.title} className="flex flex-col gap-3">
                <h3 className="font-display text-lg font-bold">
                  {point.title}
                </h3>
                <p className="leading-relaxed text-mist">{point.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 3.8 Entry offer - the conversion spine */}
      <section className="section-grad">
        <Container className="pb-20 lg:pb-24">
          <div className="rounded-xl border border-ink-700 bg-ink-800 px-8 py-12 sm:px-12 lg:px-16">
            <div className="flex flex-col items-start gap-5">
              <SectionLabel>A low-risk first step</SectionLabel>
              <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
                Start with a free AI Opportunity Assessment.
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-mist">
                Not sure where AI fits, or whether your data is ready for it?
                We&rsquo;ll review your goals, systems, and data foundation,
                then map the highest-value, lowest-risk places to start, with a
                clear path to production. No pressure, no obligation.
              </p>
              <CtaButton href="/contact" className="mt-2">
                Book your free assessment
              </CtaButton>
            </div>
          </div>
        </Container>
      </section>

      {/* 3.9 Enterprise handoff - quiet, dignified */}
      <section className="section-grad border-y border-ink-800 bg-ink-900">
        <Container className="py-8">
          <p className="text-center text-[0.95rem] leading-relaxed text-titanium">
            Enterprise data leaders: we also run a specialized Denodo
            data-virtualization practice: governed, real-time data foundations
            for enterprise AI.{" "}
            <Link
              href="/enterprise-data"
              className="font-semibold text-mist underline decoration-ink-600 underline-offset-4 transition-colors hover:text-offwhite"
            >
              See Enterprise Data &amp; AI Foundations →
            </Link>
          </p>
        </Container>
      </section>

      {/* 3.10 Testimonials */}
      <section className="section-grad">
        <Container className="py-20 lg:py-24">
          <h2 className="text-3xl font-bold sm:text-4xl">What clients say.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.slug} testimonial={t} surface="raised" />
            ))}
          </div>
          <div className="mt-8">
            <a
              href="https://www.linkedin.com/in/benjamin-trent-rossiter-mba-0157945/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-sm font-bold text-red-bright transition-colors hover:text-offwhite"
            >
              More recommendations on LinkedIn →
            </a>
          </div>
        </Container>
      </section>

      {/* 3.11 Final CTA */}
      <section className="section-grad border-t border-ink-800 bg-ink-900">
        <Container className="flex flex-col items-center gap-6 py-20 text-center lg:py-24">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Not sure if AI is right for you? That&rsquo;s the perfect place to
            start.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-mist">
            Tell us what you&rsquo;re trying to do. We&rsquo;ll tell you the
            most direct way to get there, honestly, whether or not we&rsquo;re
            the ones to build it.
          </p>
          <CtaButton href="/contact" className="mt-2">
            Book a free assessment
          </CtaButton>
        </Container>
      </section>
    </>
  );
}

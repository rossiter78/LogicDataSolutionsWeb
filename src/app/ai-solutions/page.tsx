import type { Metadata } from "next";
import Container from "@/components/Container";
import CtaButton from "@/components/CtaButton";
import SectionLabel from "@/components/SectionLabel";
import ServiceSection from "@/components/ServiceSection";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "AI for Your Business — Custom AI That Actually Works",
  description:
    "Not sure where AI fits? We help you find out, then build it — assistants, automation, and custom tools that work in production. Start with a free consultation.",
};

export default function AiSolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section>
        <Container className="flex max-w-3xl flex-col items-start gap-6 py-20 lg:py-28">
          <SectionLabel>AI Solutions</SectionLabel>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            AI for your business — even if you&rsquo;re not sure where to
            start.
          </h1>
          <p className="text-lg leading-relaxed text-mist">
            We help you find where AI actually fits, then build it —
            assistants, automations, and custom tools that work in the real
            world, not just in a demo. No jargon required.
          </p>
          <div className="mt-2 flex flex-wrap gap-4">
            <CtaButton href="/contact">Book a free consultation</CtaButton>
            <CtaButton href="/work" variant="secondary">
              See what we&rsquo;ve built
            </CtaButton>
          </div>
        </Container>
      </section>

      {/* The frame — why this works when other AI projects don't */}
      <section className="border-y border-ink-800 bg-ink-900">
        <Container className="max-w-3xl py-16 lg:py-20">
          <div className="flex flex-col gap-5">
            <SectionLabel>Services</SectionLabel>
            <h2 className="text-3xl font-bold sm:text-4xl">
              AI that works the first time.
            </h2>
            <p className="text-lg leading-relaxed text-mist">
              Most AI projects fail quietly. The chatbot writes the wrong
              queries. The agent does the thing you told it not to do. The
              demo looked great, but production is a different story.
            </p>
            <p className="text-lg leading-relaxed text-mist">
              We build AI systems that hold up, with the data foundation and
              security to match. That discipline comes from more than a decade
              architecting governed data systems in enterprise aerospace — the
              kind of environment where &ldquo;mostly works&rdquo; isn&rsquo;t
              an option. Every engagement starts with a free consultation.
              Below is what you can hire us to do next.
            </p>
            <p className="text-lg leading-relaxed text-mist">
              Every offering begins with a fixed-scope conversation about your
              goals. No 20-person team, no waiting on a stack of tickets.
              Enterprise-grade rigor at the speed a growing business actually
              needs.
            </p>
          </div>
        </Container>
      </section>

      {/* The six services */}
      {services.map((service, i) => (
        <ServiceSection key={service.id} service={service} index={i} />
      ))}

      {/* Final CTA */}
      <section className="border-t border-ink-800 bg-ink-900">
        <Container className="flex flex-col items-center gap-6 py-20 text-center lg:py-24">
          <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
            Not sure which one fits?
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-mist">
            That is what the free consultation is for. Tell us what you are
            trying to do, and we will tell you honestly where to start — even
            if it is not with us.
          </p>
          <CtaButton href="/contact" className="mt-2">
            Book a Free Consultation
          </CtaButton>
        </Container>
      </section>
    </>
  );
}

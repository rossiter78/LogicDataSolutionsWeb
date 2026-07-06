import type { Metadata } from "next";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import BookingEmbed from "@/components/BookingEmbed";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free AI Opportunity Assessment",
  description:
    "A 30-minute conversation about your goals and the most direct path to production AI. No pressure, no obligation.",
};

export default function ContactPage() {
  return (
    <section className="section-grad">
      <Container className="max-w-3xl py-20 sm:py-24">
        <SectionLabel>Contact</SectionLabel>
        <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl">
          Book a discovery call.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-mist">
          A 30-minute conversation about what you&rsquo;re trying to do and the
          most direct way to get there. No pressure, no obligation. Pick a time
          that works for you below.
        </p>

        <div className="mt-10">
          <BookingEmbed />
        </div>

        <div className="mt-10 border-t border-ink-800 pt-6 text-sm text-mist">
          <p>
            Prefer to reach out directly? Email{" "}
            <a
              href={`mailto:${site.email}`}
              className="font-semibold text-red-bright hover:text-offwhite"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

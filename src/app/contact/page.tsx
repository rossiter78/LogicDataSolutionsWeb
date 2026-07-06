import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = {
  title: "Book a Free AI Opportunity Assessment",
  description:
    "A 30-minute conversation about your goals and the most direct path to production AI. No pressure, no obligation.",
};

export default function ContactPage() {
  return (
    <PageStub
      eyebrow="Contact"
      h1="Book a discovery call."
      subhead="A 30-minute conversation about what you're trying to do and the most direct way to get there. No pressure, no obligation."
      cta={null}
    />
  );
}

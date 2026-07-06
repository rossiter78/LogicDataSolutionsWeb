import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = {
  title: "About — Boutique AI & Data Consulting",
  description:
    "Led by Trent Rossiter, an AI architect and data engineer with enterprise pedigree who builds the systems, not just the strategy.",
};

export default function AboutPage() {
  return (
    <PageStub
      eyebrow="About"
      h1="A boutique consultancy with enterprise depth."
      subhead="Logic Data Solutions is led by Trent Rossiter — an AI architect and data engineer who builds the systems, not just the slide decks."
      cta={{ href: "/contact", label: "Work with us" }}
    />
  );
}

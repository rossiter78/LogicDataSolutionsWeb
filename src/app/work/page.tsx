import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = {
  title: "Case Studies & AI Showcases",
  description:
    "Production AI systems and enterprise data architectures we've built — agentic apps, RAG, computer vision, and anonymized client outcomes.",
};

export default function WorkPage() {
  return (
    <PageStub
      eyebrow="Work"
      h1="Real systems, real results."
      subhead="A selection of what we've built — from production AI applications to enterprise data architectures. Client work is shown anonymized to respect confidentiality; our independent builds are shown in full."
      cta={{ href: "/contact", label: "Start a conversation" }}
    />
  );
}

import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = {
  title: "Denodo Consulting & Data Virtualization for AI",
  description:
    "Denodo partner and subcontractor: data-virtualization architecture, administration, and AI SDK / DeepQuery / MCP enablement for governed, real-time enterprise AI.",
};

export default function EnterpriseDataPage() {
  return (
    <PageStub
      eyebrow="Enterprise Data & AI Foundations"
      h1="The governed, real-time data foundation your AI needs."
      subhead="Deep Denodo data-virtualization expertise — architecture, administration, and AI enablement — so your enterprise AI can reason over all your data, in real time, under full governance."
      cta={{ href: "/contact", label: "Book a discovery call" }}
    />
  );
}

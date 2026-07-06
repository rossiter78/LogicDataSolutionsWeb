import type { Metadata } from "next";
import PageStub from "@/components/PageStub";

export const metadata: Metadata = {
  title: "The Lab",
  description:
    "Where we build and break things first — walkthroughs of the real systems running in our private AI development lab.",
  robots: { index: false }, // not linked in nav until content is ready
};

/*
  Future home of the interactive demo (content-templates.md §3).
  Route exists so the demo drops in later without a redesign; it is
  intentionally NOT linked from the nav at launch.
*/
export default function LabPage() {
  return (
    <PageStub
      eyebrow="The Lab"
      h1="Coming soon."
      subhead="Recorded walkthroughs of the real systems in our private AI lab — agents driving a custom CRM, always-on agent operations, and a production RAG chatbot."
      cta={null}
    />
  );
}

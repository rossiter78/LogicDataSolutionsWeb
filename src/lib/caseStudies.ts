/*
  Case-study content (content-templates.md §1 shape; website-spec §6).

  Two groups render on /work:
  - Lab showcases: the four independent R&D builds, shown in full. Copy is
    pre-filled from content-templates §1.1 (marked "ready to use — confirm
    wording"). Headline metrics were bracketed suggestions in the doc; the
    de-bracketed versions below are defaults pending Trent's sign-off.
  - Client outcomes: anonymized engagement stories. These are an OPEN ACTION
    ITEM — Trent supplies each headline metric + one-line outcome, cleared
    against the relevant NDA (content-templates §1.2). The entries below are
    layout placeholders drawn from the "suggested starting set"; every metric
    reads "Pending clearance" until confirmed shareable.

  Launch ordering (website-spec §6.2): lead with the most relatable builds
  for the SMB visitor (agentic CRM first); let vision/edge sit last as range.
*/

export type CaseStudy = {
  slug: string;
  title: string;
  track: "ai" | "enterprise-data";
  type: "lab-showcase" | "client-outcome";
  client: string;
  headlineMetric: string;
  summary: string;
  problem: string;
  approach: string;
  whatWeBuilt: string;
  outcome: string;
  tech: string[];
  confidential: boolean;
  // Empty scaffold card — renders as a muted "coming soon" slot with no story.
  placeholder?: boolean;
  // Client testimonial. `pull` is the short card-face quote; `full` is the
  // complete recommendation shown inside the expanded story.
  quote?: { pull: string; full: string[]; name: string; org: string };
};

export const labShowcases: CaseStudy[] = [
  {
    slug: "agentic-crm-mcp",
    title: "Agentic CRM with a custom MCP server",
    track: "ai",
    type: "lab-showcase",
    client: "Logic Data Solutions lab",
    headlineMetric: "Day-to-day CRM workflows automated end to end",
    summary:
      "A full-stack CRM built from the ground up for AI agents to operate directly — not a SaaS tool with bolt-on automation.",
    problem:
      "A consultancy needed a CRM that AI agents could operate directly — not a SaaS tool with bolt-on automation.",
    approach:
      "Built from the ground up for agentic workloads, with a clean API and an MCP layer designed for agents first.",
    whatWeBuilt:
      "A full-stack CRM (Python, Flask, PostgreSQL) with a REST API and a custom MCP server. Local Qwen3-class agents automate day-to-day workflows; a vision pipeline reads business-card images and auto-populates contacts. Built end to end using Claude Code.",
    outcome:
      "Routine CRM workflows run agent-driven, and new contacts populate themselves straight from a photo of a business card.",
    tech: ["Python", "Flask", "PostgreSQL", "REST API", "MCP", "Qwen3 (local)", "Vision model"],
    confidential: false,
  },
  {
    slug: "persistent-agent-ops",
    title: "Persistent AI agent operations",
    track: "ai",
    type: "lab-showcase",
    client: "Logic Data Solutions lab",
    headlineMetric: "Always-on agents running 24/7",
    summary:
      "Production-minded agent operations: always-on agents in isolated environments, with high-frequency work deliberately moved off the model for reliability and cost.",
    problem:
      "Demonstrate production-minded agent operations, not just prototypes.",
    approach:
      "Run persistent agents in isolated environments, and deliberately move high-frequency work off the LLM to deterministic code for reliability and cost.",
    whatWeBuilt:
      "Always-on Hermes (Nous Research) agents in isolated environments, with custom skills, shifting high-frequency tasks to deterministic Python and n8n flows.",
    outcome:
      "Agents that keep running reliably around the clock, with the costly, high-frequency steps handled by deterministic code instead of the model.",
    tech: ["Hermes (Nous Research)", "Python", "n8n", "LXD"],
    confidential: false,
  },
  {
    slug: "rag-chatbot-charter-school",
    title: "Production RAG chatbot (charter school)",
    track: "ai",
    type: "lab-showcase",
    client: "Colorado charter school",
    headlineMetric: "Instant, grounded answers to school-policy questions",
    summary:
      "A production retrieval chatbot that answers policy questions strictly from the school's own documents.",
    problem:
      "Staff and families needed fast, accurate answers from a body of school policy documents.",
    approach:
      "A retrieval pipeline grounded strictly in the school's own documents.",
    whatWeBuilt: "A production RAG chatbot for policy Q&A.",
    outcome:
      "Staff and families get instant, document-grounded answers instead of digging through policy PDFs.",
    tech: ["Python", "LangChain", "LangFlow", "ChromaDB", "pgvector", "Gemini", "Gradio"],
    confidential: false,
  },
  {
    slug: "edge-computer-vision",
    title: "Edge computer vision",
    track: "ai",
    type: "lab-showcase",
    client: "Logic Data Solutions lab",
    headlineMetric: "Real-time detection on repurposed edge hardware",
    summary:
      "Real-time object detection running on constrained hardware, with alerting and a fine-tuning pipeline for domain accuracy.",
    problem:
      "Run reliable object detection on constrained hardware, with alerting.",
    approach:
      "Applied vision inference at the edge, plus a fine-tuning pipeline for domain accuracy.",
    whatWeBuilt:
      "A real-time YOLO-based detection system on a repurposed mobile device with Telegram alerting, and a YOLO11s fine-tuning pipeline.",
    outcome:
      "Reliable real-time detection on repurposed hardware, tuned to the objects that actually matter for the use case.",
    tech: ["Python", "PyTorch", "YOLO / YOLO11s", "Google Colab"],
    confidential: false,
  },
];

/*
  Client outcomes. Two slots are intentional PLACEHOLDERS (empty scaffolds) for
  stories still to be written/cleared; the third is the Ball Aerospace story,
  shared with the client's permission (named testimonial from Mark Veile).
  Denodo is named in body/testimonial text only — no logo, no implication that
  Trent represents Denodo (CLAUDE.md hard rules).
*/
export const clientOutcomes: CaseStudy[] = [
  {
    slug: "client-outcome-placeholder-1",
    title: "",
    track: "enterprise-data",
    type: "client-outcome",
    client: "",
    headlineMetric: "",
    summary: "",
    problem: "",
    approach: "",
    whatWeBuilt: "",
    outcome: "",
    tech: [],
    confidential: true,
    placeholder: true,
  },
  {
    slug: "client-outcome-placeholder-2",
    title: "",
    track: "enterprise-data",
    type: "client-outcome",
    client: "",
    headlineMetric: "",
    summary: "",
    problem: "",
    approach: "",
    whatWeBuilt: "",
    outcome: "",
    tech: [],
    confidential: true,
    placeholder: true,
  },
  {
    slug: "ball-aerospace-data-virtualization",
    title: "Data virtualization for a new Data Science organization",
    track: "enterprise-data",
    type: "client-outcome",
    client: "Ball Aerospace",
    headlineMetric: "The data cornerstone of a new Data Science team",
    summary:
      "When Ball Aerospace stood up a new Data Science organization, it needed access to far more data than the existing enterprise data warehouse could feasibly support. Data virtualization with Denodo became the foundation.",
    problem:
      "Ball Aerospace created a new Data Science organization, led by Mark Veile. The team needed fast access to far more data — from systems across the enterprise — than the existing enterprise data warehouse (EDW) could feasibly support.",
    approach:
      "Rather than push the EDW past what it could handle, we implemented data virtualization with Denodo: a governed logical layer that unifies data from across the enterprise in real time, without copying it.",
    whatWeBuilt:
      "A Denodo data-virtualization layer that gave the Data Science team unified, governed, high-speed access to data from all over the enterprise.",
    outcome:
      "The team could reach unified and governed enterprise data quickly — the cornerstone of the organization's success.",
    tech: ["Denodo", "Data virtualization"],
    confidential: false,
    quote: {
      pull: "Trent Rossiter was a true asset to our team. His high performance, customer-centric approach, and logical problem-solving skills have made a positive and lasting impact on our operations.",
      full: [
        "Trent Rossiter was a delight to work with because he showed commitment to providing top-tier support and a logical approach to problem-solving. This led to significant improvement in efficiency and effectiveness for my team's operations.",
        "Trent exhibited an impressive level of dedication to the needs of our organization. His customer-focused mindset made a significant impact on our team's experience with the Denodo platform. He consistently ensured that our users had the tools and resources they need to excel. Whether it's resolving technical issues, offering guidance on best practices, or tailoring solutions to meet our specific requirements, Trent consistently delivered.",
        "Trent possesses a deep understanding of the Denodo platform and its intricacies, allowing him to develop elegant and efficient solutions for even the most complex issues. His ability to break down problems, analyze them methodically, and implement well-considered solutions was invaluable to our team's success. He was able to identify if the issue was within our span-of-control or needed to be addressed directly by Denodo and then took it one step further by interacting with Denodo Support to define the requirements of the issue and collaborate on a solution.",
        "Trent Rossiter was a true asset to our team, and I have no doubt that he will be an asset to any organization lucky enough to work with him in the future. His high performance, customer-centric approach, and logical problem-solving skills have made a positive and lasting impact on our operations. Thank you, Trent, for your exceptional contributions to our team's success.",
      ],
      name: "Mark Veile",
      org: "Ball Aerospace",
    },
  },
];

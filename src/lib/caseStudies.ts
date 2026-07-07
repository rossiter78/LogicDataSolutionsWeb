/*
  Case-study content (content-templates.md §1 shape; website-spec §6).

  Two groups render on /work:
  - Lab showcases: independent R&D builds, shown in full. Copy is pre-filled
    from content-templates §1.1 (marked "ready to use - confirm wording").
    Headline metrics were bracketed suggestions in the doc; the de-bracketed
    versions below are defaults pending Trent's sign-off.
  - Client outcomes: real engagement stories, some named with the client's
    permission, others anonymized. Remaining slots are an OPEN ACTION ITEM -
    Trent supplies each headline metric + one-line outcome, cleared against the
    relevant NDA (content-templates §1.2).

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
  // Empty scaffold card - renders as a muted "coming soon" slot with no story.
  placeholder?: boolean;
  // Client testimonial for this engagement, linked by slug into
  // `testimonials.ts` (the single source of truth). The card looks the quote
  // up and renders it; the text is never duplicated here.
  testimonialSlug?: string;
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
      "A full-stack CRM built from the ground up for AI agents to operate directly, not a SaaS tool with bolt-on automation.",
    problem:
      "A consultancy needed a CRM that AI agents could operate directly, not a SaaS tool with bolt-on automation.",
    approach:
      "Built from the ground up for agentic workloads, with a clean API and an MCP layer designed for agents first.",
    whatWeBuilt:
      "A full-stack CRM (Python, Flask, PostgreSQL) with a REST API and a custom MCP server. Local agents automate day-to-day workflows; a vision pipeline reads business-card images and auto-populates contacts. Built end to end using Claude Code.",
    outcome:
      "Routine CRM workflows run agent-driven, and new contacts populate themselves straight from a photo of a business card.",
    tech: ["Python", "Flask", "PostgreSQL", "REST API", "MCP", "Local inferencing", "Vision model"],
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
      "Production-minded agent operations: always-on agents in isolated environments, with high-frequency task components codified in Python and n8n for reliability and cost.",
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
    slug: "edge-computer-vision",
    title: "Edge computer vision",
    track: "ai",
    type: "lab-showcase",
    client: "Logic Data Solutions lab",
    headlineMetric: "Real-time detection on repurposed edge hardware",
    summary:
      "Real-time object detection running on constrained edge hardware, with alerting.",
    problem:
      "Run reliable object detection on constrained hardware, with alerting.",
    approach:
      "Applied YOLO vision inference at the edge for real-time detection with alerting.",
    whatWeBuilt:
      "A real-time YOLO-based detection system running on a repurposed Android device via Termux, with Telegram alerting.",
    outcome:
      "Reliable real-time detection on repurposed hardware, alerting on the objects that actually matter for the use case.",
    tech: ["Python", "YOLO", "Android", "Termux"],
    confidential: false,
  },
  {
    slug: "vision-model-fine-tuning",
    title: "Fine-tuning a vision model for domain accuracy",
    track: "ai",
    type: "lab-showcase",
    client: "Logic Data Solutions lab",
    headlineMetric: "Detection accuracy nearly tripled with fine-tuning",
    summary:
      "Off-the-shelf vision models see broad, generic categories. We fine-tuned a YOLO model to reliably tell apart specific wildlife species, and detection accuracy climbed from 0.32 to 0.87 mAP over training. The same technique is how you build an automated visual quality check, tuned to the exact defects or parts your business cares about.",
    problem:
      "Generic vision models recognize broad categories, but real business use, like an automated quality check on a line, depends on a model reliably spotting the specific things that matter to you, which a general model was never trained to see.",
    approach:
      "We used a wildlife species dataset as a stand-in domain and fine-tuned a YOLO model on it, to measure exactly what it takes to move a general detector to expert-level accuracy on a narrow, specialized set of classes.",
    whatWeBuilt:
      "A fine-tuning pipeline (Python, YOLO11s, trained in Google Colab) that adapts a general detector into a specialist, plus documentation of the data, labeling, and training effort each step requires.",
    outcome:
      "Over training, detection accuracy (mAP@50) rose from 0.32 to 0.87, with precision at 0.85 and recall at 0.80: expert-level on a narrow set of classes. The real value is the transfer: the same pipeline retargets to an AI quality check, teaching a model to catch the specific defects or parts a business needs inspected, instead of settling for generic detection.",
    tech: ["Python", "YOLO11s", "PyTorch", "Google Colab"],
    confidential: false,
  },
];

/*
  Client outcomes. Lead with real, cleared stories: the multilingual charter
  school RAG assistant (AI track) and the Ball Aerospace data-virtualization
  engagement (enterprise track, named with the client's permission - testimonial
  from Mark Veile). One trailing slot is an intentional PLACEHOLDER (empty
  scaffold) for the next story to be written/cleared.
  Denodo is named in body/testimonial text only - no logo, no implication that
  Trent represents Denodo (CLAUDE.md hard rules).
*/
export const clientOutcomes: CaseStudy[] = [
  {
    slug: "rag-chatbot-charter-school",
    title: "A multilingual policy assistant for a charter school",
    track: "ai",
    type: "client-outcome",
    client: "Colorado charter school",
    headlineMetric: "Fewer front-office calls, answers in every family's language",
    summary:
      "A charter school's small front office was answering the same policy questions over and over, many from families who spoke little English. We built a multilingual assistant that replies strictly from the school's own documents, so staff field fewer calls and every family gets a clear answer in their own language.",
    problem:
      "A Colorado charter school's front-office staff spent hours answering the same questions about policies, enrollment, schedules, and procedures, all buried across a large body of documents. For the school's many families who speak little or no English, getting a clear answer often meant a phone call, a translated note, or a trip to the office.",
    approach:
      "We built a retrieval chatbot grounded strictly in the school's own documents, so every answer traces back to real policy and nothing is invented. Because it understands and responds in the family's own language, the same assistant serves English- and non-English-speaking families alike.",
    whatWeBuilt:
      "A production RAG assistant over the school's policy and procedure documents, with multilingual question-and-answer support. Families ask in plain language, in whatever language they are comfortable with, and get accurate answers drawn only from official school documents.",
    outcome:
      "Routine policy questions are answered instantly, at any hour, so front-office staff field noticeably fewer repetitive calls. The multilingual support has been especially valuable for the school's non-English-speaking families, who can now get clear, accurate answers on their own, without waiting on a translator or a callback.",
    tech: ["Python", "LangChain", "LangFlow", "ChromaDB", "pgvector", "Gemini", "Gradio"],
    confidential: false,
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
      "Ball Aerospace created a new Data Science organization, led by Mark Veile. The team needed fast access to far more data, from systems across the enterprise, than the existing enterprise data warehouse (EDW) could feasibly support.",
    approach:
      "Rather than push the EDW past what it could handle, we implemented data virtualization with Denodo: a governed logical layer that unifies data from across the enterprise in real time, without copying it.",
    whatWeBuilt:
      "A Denodo data-virtualization layer that gave the Data Science team unified, governed, high-speed access to data from all over the enterprise.",
    outcome:
      "The team could reach unified and governed enterprise data quickly: the cornerstone of the organization's success.",
    tech: ["Denodo", "Data virtualization"],
    confidential: false,
    testimonialSlug: "mark-veile-ball",
  },
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
];

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
      "A full-stack CRM (Python, Flask, PostgreSQL) with a REST API and a custom MCP server. Overnight, local agents draft the day's outreach; each morning the principal reviews, edits, and sends. A vision pipeline reads business-card images and auto-populates contacts, and an installable progressive web app puts the whole system on a mobile phone. Self-hosted with its own CI/CD pipeline, built end-to-end in-house, co-authored with Claude Code.",
    outcome:
      "It runs the consultancy's pipeline day to day: no lead goes cold, every contact gets a timely touch, and new contacts populate themselves straight from a photo of a business card. The whole system runs locally, with no third-party SaaS.",
    tech: ["Python", "Flask", "PostgreSQL", "REST API", "MCP", "PWA", "Local inferencing", "Vision model"],
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
  Client outcomes. Real, cleared stories: the multilingual charter school RAG
  assistant (AI track), the Ball Aerospace data-virtualization engagement
  (enterprise track, named with the client's permission - testimonial from Mark
  Veile), a Big Ten university's production Denodo rollout (enterprise track,
  anonymized), and an oil & gas governed-RAG build as a Denodo subcontractor
  (enterprise track, anonymized). Anonymized stories carry no testimonial yet;
  link one via testimonialSlug when a quote is cleared.
  Denodo is named in body/testimonial text only - no logo, no implication that
  Trent represents Denodo (CLAUDE.md hard rules).
*/
export const clientOutcomes: CaseStudy[] = [
  {
    slug: "oil-gas-governed-rag",
    title: "A trustworthy query chatbot, governed at the source",
    track: "enterprise-data",
    type: "client-outcome",
    client: "Oil & gas enterprise",
    headlineMetric: "Data governance moved out of prompts, into Denodo",
    summary:
      "An oil and gas enterprise was building a query RAG chatbot that leaned on system prompts for both security and query writing. We re-based it on governed data: security enforced inside Denodo, and retrieval driven by semantic search over real metadata, so answers are trustworthy and hold up when the data model changes.",
    problem:
      "An oil and gas enterprise, already a Denodo customer, was building a query RAG chat system from scratch. Data governance was enforced through system prompts, and query writing relied on prescriptive, hand-written prompt examples. The result was rigid and unpredictable: no one could say with confidence what the LLM would do when a question arrived phrased differently than the examples, and using prompts as the security boundary left real risk that data could leak.",
    approach:
      "Working as a Denodo subcontractor, we moved the two hardest responsibilities off the prompt and onto the data foundation. Security became Denodo's job, enforced in the governed layer rather than requested of the model, and retrieval became a matter of meaning rather than matching pre-written phrasings.",
    whatWeBuilt:
      "We moved data governance and security into Denodo, so the customer knows with certainty that data cannot be leaked, regardless of how the model behaves. We then enriched Denodo with business and technical metadata and loaded both into a vector database, so the LLM runs semantic search against the user's actual question and retrieves the right context to answer reliably.",
    outcome:
      "The chatbot now returns reliable results grounded in governed data, and the security boundary no longer depends on prompt wording. Because retrieval is driven by metadata and meaning, a change in the data model no longer means tens of hours spent rewriting prompts: the system adapts on its own.",
    tech: ["Denodo", "Data virtualization", "RAG", "Vector database", "Semantic search", "LLM"],
    confidential: true,
  },
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
    slug: "big-ten-university-denodo",
    title: "Taking Denodo to production at university scale",
    track: "enterprise-data",
    type: "client-outcome",
    client: "Big Ten university",
    headlineMetric: "Hundreds of virtual databases, thousands of users",
    summary:
      "A Big Ten university had purchased Denodo and needed to get it fully production-ready. We helped take it live and keep it there: hundreds of virtual databases now serve thousands of users, unifying on-prem systems and every major cloud in one governed layer.",
    problem:
      "The university had invested in Denodo but needed help getting the platform fully ready for an enterprise-wide production rollout. Its data lived everywhere: on-prem systems, Snowflake, Microsoft Fabric, Oracle Cloud, AWS, Azure, and GCP, plus a range of SaaS applications, each with its own authentication scheme and data structure.",
    approach:
      "We treated Denodo as the single governed access layer over the entire estate, standing up reliable, well-modeled connections to each source and solving the awkward SaaS integrations case by case. Every API was different: authentication, API type (some REST, some OData), and paging all varied from one vendor to the next, calling for a different integration and scaling strategy each time.",
    whatWeBuilt:
      "Integrations spanning the university's full data estate: on-prem sources, Snowflake, Microsoft Fabric, Oracle Cloud, AWS, Azure, and GCP databases, plus a handful of SaaS APIs with non-standard authentication and data structures. We also built an automated system that propagates updates from one of their largest source systems, which carries over 12,000 base views, so schema changes flow through on their own. That work alone was projected to save hundreds of hours of manual effort a year, and it lifted a real weight off the support team, who had found keeping that system current a daunting task and no longer have to worry about it.",
    outcome:
      "Denodo is fully in production: hundreds of virtual databases serving thousands of users across the university. It has reshaped how the institution thinks about data management, becoming a go-to platform they expect to keep growing. Two years in, we remain their partner of choice for their toughest Denodo challenges.",
    tech: ["Denodo", "Data virtualization", "Snowflake", "Microsoft Fabric", "Oracle Cloud", "AWS", "Azure", "GCP", "SaaS APIs"],
    confidential: true,
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
];

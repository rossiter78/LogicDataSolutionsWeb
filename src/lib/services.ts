/*
  AI Solutions - service offerings. Copy supplied by Trent (2026-07-06),
  converted to company voice per CLAUDE.md; engagement/pricing lines
  intentionally omitted for now.
*/
export type Service = {
  id: string;
  num: string;
  title: string;
  tagline: string;
  paras: string[];
  youGet: string[];
  bestFor: string;
  outcome: string;
  quote?: string;
  ctaLabel: string;
};

export const services: Service[] = [
  {
    id: "assessment",
    num: "01",
    title: "AI Readiness & Architecture Assessment",
    tagline:
      "Know exactly what to build, in what order, before you spend a dollar building it.",
    paras: [
      "You know AI belongs in your business. You are less sure where to start, and you would rather not pay to learn what not to do. Or maybe you already tried, and the results did not match the promise.",
      "This is a fixed-scope engagement that looks at your data, your tools, and your goals, then hands you a clear plan.",
    ],
    youGet: [
      "A review of your current data, systems, and any AI already in flight",
      "A prioritized roadmap of what to build, in what order, and why",
      "A plain-language readout of the security and governance gaps to close first",
      "A realistic view of cost, effort, and expected payoff for each step",
    ],
    bestFor:
      "Leaders who know AI is coming and want a straight answer on where to begin.",
    outcome:
      "You walk away with a plan you understand and can act on, whether you hire us to build it or not.",
    ctaLabel: "Book Your Assessment",
  },
  {
    id: "rag-chatbot",
    num: "02",
    title: "Metadata-Driven Query RAG Chatbot",
    tagline:
      "A chatbot that answers real questions about your data, because it speaks your team's language.",
    paras: [
      "Most knowledge-base chatbots fail for one reason: they do not understand how your people actually talk about your business. So they write the wrong queries, or they stall out complaining about ambiguity.",
      "We fix that at the source. By curating the business metadata that sits under your data, the AI learns your vocabulary and starts writing queries that are correct, not just plausible.",
    ],
    youGet: [
      "A production chatbot that answers questions against your own data",
      "Curated metadata so the model understands your terms, not generic ones",
      "Deterministic data security, so the right people see the right data and nothing leaks",
      "Retrieval tuned and tested against the questions your team really asks",
    ],
    bestFor:
      "Teams drowning in questions that a well-built assistant could answer, from service desk to data analysis.",
    outcome:
      "A chatbot people trust and actually use, instead of one they quietly abandon.",
    quote:
      "I appreciate what you've done for us so much. I say it all the time, 'we picked the right guy,' and I'm so glad we did.",
    ctaLabel: "Get a Chatbot That Works",
  },
  {
    id: "workflow-agent",
    num: "03",
    title: "Autonomous Workflow Agent",
    tagline:
      "Hand off the tedious, repetitive work to an agent that does it right every time.",
    paras: [
      "An autonomous agent should free your team from busywork. The catch is consistency. Most agents behave unpredictably and do the wrong thing at the worst moment, which is exactly why first attempts get shelved.",
      "We build agents that stay in their lane. The trick is deliberate engineering: move the high-frequency, high-risk steps off the model and onto deterministic code, so the agent is fast, cheap, and reliable where it counts.",
    ],
    youGet: [
      "A custom agent that runs multi-step workflows end to end",
      "Deterministic guardrails so it does what you asked and nothing you didn't",
      "Tool integration across your internal and external systems (built on MCP)",
      "Evaluation and tuning so behavior stays consistent under real conditions",
    ],
    bestFor:
      "Businesses with a repeatable, rules-based process eating hours of staff time every week.",
    outcome:
      "Employees freed from tedious work, and an agent you can actually leave running.",
    ctaLabel: "Automate a Workflow",
  },
  {
    id: "custom-app",
    num: "04",
    title: "Custom AI Application Build",
    tagline:
      "Full-stack applications built for both your people and your AI agents to use.",
    paras: [
      "Off-the-shelf tools force you to work the way they were built. When you need something purpose-made, we build it, using agentic development tools to move fast without cutting corners on architecture.",
      "We build custom, AI-enabled applications in popular languages like Python and Next.js, deployed to your own infrastructure or to the cloud provider you already trust: Azure, AWS, or Cloudflare. That includes multi-modal AI applications that work across text, images, and documents, so your software can see and read, not just chat.",
    ],
    youGet: [
      "A custom, AI-native application built around your actual workflow",
      "An API and MCP layer so your agents can use the system, not just your staff",
      "A sound architecture chosen on purpose, not whatever the AI happened to guess",
      "A working reference for what your business can build when the foundation is right",
    ],
    bestFor:
      "AI-forward companies who have outgrown generic tools and want software built for how they operate.",
    outcome:
      "Software that fits your business exactly, ready for the agentic workloads coming next.",
    ctaLabel: "Scope Your Build",
  },
  {
    id: "on-prem",
    num: "05",
    title: "On-Premises & Air-Gapped AI Deployment",
    tagline:
      "Capable AI that runs on your infrastructure, with your data never leaving the building.",
    paras: [
      "Some data cannot go to a third-party API, full stop. That does not mean you have to sit out the AI shift. Open-weight models are good enough now to run serious workloads privately, if someone knows how to deploy and operate them.",
      "We stand up private AI on your hardware, using open-weight models (Llama, Gemma, Qwen, and Mistral families), tuned for your cost and performance needs.",
      "Deployment runs on trusted, battle-tested frameworks like vLLM and LM Studio.",
    ],
    youGet: [
      "Private AI running on your own infrastructure",
      "Open-weight model selection and deployment matched to your workload",
      "Air-gapped options for the most sensitive environments",
      "Cost control by keeping inference in-house instead of paying per token",
    ],
    bestFor:
      "Regulated, security-conscious, or cost-sensitive organizations that cannot or will not send data out.",
    outcome:
      "The AI capability you want, without the data-exposure risk you can't accept.",
    ctaLabel: "Deploy Private AI",
  },
  {
    id: "training",
    num: "06",
    title: "AI Enablement & Training for Teams",
    tagline: "Get your team fluent in what AI can really do, minus the hype.",
    paras: [
      "The fastest way to waste money on AI is to chase what it cannot do while missing what it can. Most teams do not need more buzzwords. They need someone who can explain this clearly and help them make good calls.",
      "We train and advise your leaders and staff in plain language, so they stop guessing and start making informed decisions.",
    ],
    youGet: [
      "Hands-on training tailored to your team and your tools",
      "A grounded view of what AI can and cannot do for your business",
      "Guidance on spotting the risky, corner-cutting approaches before they cost you",
      "A team that can hold its own on AI decisions instead of deferring to hype",
    ],
    bestFor:
      "Organizations ready to build internal confidence rather than depend on one outside voice forever.",
    outcome:
      "Smarter decisions, fewer expensive mistakes, and a team that gets why the AI works.",
    quote: "I like the way he explains things in a way that I can understand them.",
    ctaLabel: "Train My Team",
  },
];

/*
  AI Solutions - service offerings. Copy supplied by Trent (2026-07-06),
  converted to company voice per CLAUDE.md; engagement/pricing lines
  intentionally omitted for now.
*/
export type Service = {
  id: string;
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
    title: "First AI Win Assessment",
    tagline: "The first win that gets everything else moving.",
    paras: [
      "You know AI belongs in your business somewhere. What you do not have is a first move, so nothing starts. Or you tried something already, and it did not land.",
      "We find one use case worth building, drawn from the work your team actually does, and tell you what it takes. Two to three weeks, one recommendation, and we shape it together before we start.",
      "The target is not a demo. It is one thing running in production that people actually use, because once your team sees AI working for them, the excitement takes hold and the possibilities are unleashed.",
    ],
    youGet: [
      "One recommended build, sized to get you a win",
      "How it would work, in plain language",
      "The data and security gaps it depends on",
      "What it costs, what it returns, and what it unlocks next",
    ],
    bestFor:
      "Organizations that know AI is coming and want a real first move, not a strategy deck.",
    outcome:
      "You stop guessing and start building, with a first move you can act on right away.",
    ctaLabel: "Find Your First Win",
  },
  {
    id: "rag-chatbot",
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
    id: "aidsef",
    title: "AI-Driven Software Engineering Framework (AIDSEF)",
    tagline:
      "Build software with AI that earns your engineers' trust instead of asking for it.",
    paras: [
      "Your developers are right to be skeptical. Most AI coding is vibe coding: unreviewed output, no tests, and no record of why anything was built the way it was. This is the opposite of that. It is agentic engineering, the industry's name for the disciplined end of building software with AI.",
      "This is not a fringe position. Google's 2026 whitepaper on the new software development lifecycle draws the same line: what separates the two is not which AI you use, but how much structure, verification, and human judgment surrounds it.",
      "AIDSEF is our framework for exactly that. Tests come before code, and the build proves they failed first. Every pull request is reviewed by a different model than the one that wrote it, and every spec, decision, and review lands in Git where your team approves it.",
      "Your engineers do not lose control, they move up. They co-author the rules, hold every gate, and can veto anything at any point. The AI does the labor. The judgment stays human.",
    ],
    youGet: [
      "A rulebook your engineers co-author: gates, risk tiers, coverage thresholds",
      "Test-driven development enforced by machinery, not by honor system",
      "Review on every pull request by a model from a different family than the author",
      "An audit trail that is just your Git history, ready for whoever asks",
    ],
    bestFor:
      "Teams with real developers who want AI speed without giving up tests, review, or control.",
    outcome:
      "Software built at AI speed that clears the same bar as everything else your team ships.",
    ctaLabel: "Bring AIDSEF to Your Team",
  },
  {
    id: "on-prem",
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

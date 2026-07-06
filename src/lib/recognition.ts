/*
  Recognition Card content (content-templates.md §4).
  `hiddenCapability` is BUILD-SIDE ONLY - never rendered on the site.
  Ordering rule: hopeful first, any `rescue` card LAST.
*/
export type RecognitionCardData = {
  id: string;
  symptomHeadline: string;
  promise: string;
  hiddenCapability: string; // never rendered
  tone: "hopeful" | "rescue";
  icon: "chat" | "loop" | "archive" | "rebuild" | "spark";
};

export const recognitionCards: RecognitionCardData[] = [
  {
    id: "same-questions",
    symptomHeadline: "You answer the same questions all day.",
    promise:
      "A customer-facing assistant that actually knows your business (your policies, products, and documents) and handles the repetitive questions so your people don't.",
    hiddenCapability: "RAG",
    tone: "hopeful",
    icon: "chat",
  },
  {
    id: "same-task",
    symptomHeadline: "You're doing the same task over and over.",
    promise:
      "We automate the repetitive, rule-based work end to end, so it runs reliably in the background instead of eating your week.",
    hiddenCapability: "agentic automation",
    tone: "hopeful",
    icon: "loop",
  },
  {
    id: "unused-information",
    symptomHeadline: "You're sitting on information nobody has time to use.",
    promise:
      "Documents, images, records, spreadsheets: we turn the pile into something you can search, ask questions of, and act on.",
    hiddenCapability: "RAG + vision",
    tone: "hopeful",
    icon: "archive",
  },
  {
    id: "tried-ai",
    symptomHeadline: "You already tried AI, and it didn't quite work.",
    promise:
      "Maybe you built an AI assistant or a chatbot over your data, and it gives vague, wrong, or unreliable answers. Usually the problem isn't the AI: it's what it's reaching into underneath. We diagnose why it's failing and rebuild it on a foundation that gives you answers you can trust.",
    hiddenCapability: "RAG diagnosis / rescue",
    tone: "rescue",
    icon: "rebuild",
  },
];

/* Optional 5th "idea but unsure" catch card - AI Solutions page only. */
export const catchCard: RecognitionCardData = {
  id: "idea-unsure",
  symptomHeadline: "You have an idea but don't know if it's possible.",
  promise:
    "Bring the fuzzy version. Figuring out what's realistic, valuable, and buildable is exactly what the first conversation is for.",
  hiddenCapability: "assessment",
  tone: "hopeful",
  icon: "spark",
};

/* Home uses cards 1–4 (rescue last), per content-templates.md §4.4. */
export const homeRecognitionCards = recognitionCards;

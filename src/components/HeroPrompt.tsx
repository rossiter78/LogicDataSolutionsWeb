"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/*
  Hero prompt panel — the "agent visibly at work" demo (approved mock,
  Session 3). A familiar AI prompt box types a real small-business question,
  the agent checks real sources step by step, then a grounded answer streams
  into a card. Cycles through three scenarios.

  Server render and prefers-reduced-motion both show the settled state:
  the first scenario fully answered, no motion. The whole panel links to
  /contact so tapping the "input" converts instead of frustrating.
*/
const SCENARIOS = [
  {
    q: "Where did we lose margin last quarter?",
    steps: ["querying invoices", "cross-checking job costs"],
    a: "Rush orders in May — 3 clients drove 80% of the dip.",
  },
  {
    q: "Which quotes are still waiting on us?",
    steps: ["scanning open quotes", "checking last contact dates"],
    a: "4 quotes idle over a week. Follow-up drafts ready for review.",
  },
  {
    q: "Can something answer our customer emails?",
    steps: ["reading your docs and policies"],
    a: "Yes — a support assistant that cites your own documents.",
  },
];

type StepState = { label: string; done: boolean };

const settled = {
  question: SCENARIOS[0].q,
  steps: SCENARIOS[0].steps.map((label) => ({ label, done: true })),
  answer: SCENARIOS[0].a,
};

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export default function HeroPrompt({ className = "" }: { className?: string }) {
  const [question, setQuestion] = useState(settled.question);
  const [sending, setSending] = useState(false);
  const [steps, setSteps] = useState<StepState[]>(settled.steps);
  const [answer, setAnswer] = useState(settled.answer);
  const [cardVisible, setCardVisible] = useState(true);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let alive = true;
    setAnimating(true);

    (async () => {
      let i = 0;
      while (alive) {
        const sc = SCENARIOS[i % SCENARIOS.length];
        i += 1;

        setCardVisible(false);
        setSteps([]);
        setAnswer("");
        setQuestion("");
        await sleep(400);

        for (let c = 1; c <= sc.q.length; c += 1) {
          if (!alive) return;
          setQuestion(sc.q.slice(0, c));
          await sleep(30);
        }

        setSending(true);
        await sleep(450);
        if (!alive) return;
        setSending(false);

        for (let s = 0; s < sc.steps.length; s += 1) {
          if (!alive) return;
          const label = sc.steps[s];
          setSteps((prev) => [...prev, { label, done: false }]);
          await sleep(750);
          setSteps((prev) =>
            prev.map((st, idx) => (idx === s ? { ...st, done: true } : st)),
          );
        }
        await sleep(350);

        if (!alive) return;
        setCardVisible(true);
        for (let c = 1; c <= sc.a.length; c += 1) {
          if (!alive) return;
          setAnswer(sc.a.slice(0, c));
          await sleep(24);
        }

        await sleep(3400);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <Link
      href="/contact"
      aria-label="Watch an AI assistant answer real business questions from live data — book a free assessment to ask your own"
      className={`group block ${className}`}
    >
      <div aria-hidden="true">
        <div className="flex items-start gap-3 rounded-[10px] border border-ink-600 bg-ink-800 px-4 py-3.5 transition-colors group-hover:border-titanium">
          <span className="min-h-[1.4rem] flex-1 text-[0.95rem] leading-relaxed text-offwhite">
            {question}
            {animating && (
              <span className="hero-caret ml-0.5 inline-block h-[1.05em] w-0.5 translate-y-[2px] bg-red-bright" />
            )}
          </span>
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-red transition-opacity duration-300 ${
              sending ? "opacity-100" : "opacity-40"
            }`}
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4"
              fill="none"
              stroke="#fff"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" />
            </svg>
          </span>
        </div>

        <div className="min-h-[3.5rem] px-1 pt-3 font-mono text-xs leading-relaxed">
          {steps.map((step) => (
            <div key={step.label} className="mb-1.5 text-mist">
              <span className="text-red-bright">&#9656;</span> {step.label}
              &hellip;{" "}
              {step.done && <span className="text-red-bright">&#10003;</span>}
            </div>
          ))}
        </div>

        <div
          className={`rounded-r-lg border-l-2 border-red bg-ink-800 px-4 py-3 transition-[opacity,transform] duration-500 ${
            cardVisible ? "opacity-100" : "translate-y-1.5 opacity-0"
          }`}
        >
          <p className="font-display text-[0.65rem] font-bold uppercase tracking-[0.14em] text-red-bright">
            Answer — grounded in your data
          </p>
          <p className="mt-1 min-h-[2.8rem] text-sm leading-relaxed text-offwhite">
            {answer}
          </p>
        </div>
      </div>
    </Link>
  );
}

"use client";

import { useEffect, useState } from "react";

/*
  Rotating word slot in the hero headline. Server-renders the first word so
  the h1 is complete, static LCP text; rotation starts after hydration and
  never runs under prefers-reduced-motion. Screen readers get one stable
  word (sr-only) — the cycling copy is aria-hidden.
*/
const WORDS = [
  "answers your customers",
  "reads your paperwork",
  "drafts your proposals",
  "digs through your files",
  "watches your numbers",
];

const SWAP_MS = 2900;
const FADE_MS = 300;

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let fade: ReturnType<typeof setTimeout>;
    const swap = setInterval(() => {
      setVisible(false);
      fade = setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setVisible(true);
      }, FADE_MS);
    }, SWAP_MS);
    return () => {
      clearInterval(swap);
      clearTimeout(fade);
    };
  }, []);

  return (
    <>
      <span className="sr-only">{WORDS[0]}</span>
      <span
        aria-hidden="true"
        className={`inline-block border-b-[3px] border-red pb-0.5 text-red-bright transition-[opacity,transform] duration-300 ease-out ${
          visible ? "opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        {WORDS[index]}
      </span>
    </>
  );
}

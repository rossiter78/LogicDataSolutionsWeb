"use client";

import { useEffect, useState } from "react";

/*
  Rotating word slot in the hero headline. Server-renders the first word so
  the h1 is complete, static LCP text; rotation starts after hydration and
  never runs under prefers-reduced-motion. Screen readers get one stable
  word (sr-only) - the cycling copy is aria-hidden.

  The red underline lives on the persistent viewport, not the words, so it
  stays put while the values scroll. Each value is kept on a single line
  (whitespace-nowrap); the words slide upward from one value to the next,
  slot-machine style.
*/
const WORDS = [
  "answers your customers",
  "reads your paperwork",
  "drafts your proposals",
  "digs through your files",
  "watches your numbers",
];

const SWAP_MS = 2900;
const ANIM_MS = 480;

// One text line, in em so it tracks the responsive headline font size.
const SLOT = "1.15em";
const slotStyle = { height: SLOT, lineHeight: SLOT } as const;

export default function RotatingWord() {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setAnimating(true), SWAP_MS);
    return () => clearInterval(id);
  }, []);

  const next = (index + 1) % WORDS.length;

  // When the upward slide finishes, commit the new word and snap the track
  // back to the top with no transition, so the reveal is seamless.
  const handleTransitionEnd = () => {
    if (!animating) return;
    setIndex(next);
    setAnimating(false);
  };

  return (
    <span
      className="relative inline-flex overflow-hidden border-b-[3px] border-red align-bottom"
      style={{ height: SLOT }}
    >
      <span className="sr-only">{WORDS[0]}</span>
      <span
        aria-hidden="true"
        className="flex flex-col text-red-bright"
        style={{
          transform: animating ? "translateY(-50%)" : "translateY(0)",
          transition: animating ? `transform ${ANIM_MS}ms ease` : "none",
          willChange: "transform",
        }}
        onTransitionEnd={handleTransitionEnd}
      >
        <span className="block whitespace-nowrap" style={slotStyle}>
          {WORDS[index]}
        </span>
        <span className="block whitespace-nowrap" style={slotStyle}>
          {WORDS[next]}
        </span>
      </span>
    </span>
  );
}

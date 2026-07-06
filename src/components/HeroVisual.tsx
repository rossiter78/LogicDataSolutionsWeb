/*
  Hero visual — STATIC settled state of the animated architecture diagram
  (website-spec.md §9). Animation is wired in a later pass, only after this
  mock is approved. Concept: scattered sources (left) converge into one
  governed data layer (center spine); an AI/agent node (top) queries down
  through it and gets clean answers back.

  Palette only: lines in charcoal/titanium, the governed-layer lock-in and
  agent pulse in Corporate Red. Light, crisp SVG — no WebGL.
*/
export default function HeroVisual({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 470"
      className={className}
      role="img"
      aria-label="Diagram: scattered data sources flow into one governed, always-current data layer, and an AI agent on top queries through that layer to get answers it can trust."
    >
      {/* ---- connectors: sources → governed layer ---- */}
      <g
        fill="none"
        stroke="var(--color-ink-600)"
        strokeWidth="1.5"
      >
        <path d="M96 128 C 160 140, 190 250, 238 278" />
        <path d="M148 216 C 190 228, 205 262, 240 288" />
        <path d="M92 302 C 150 306, 185 300, 236 298" />
        <path d="M156 384 C 200 372, 210 330, 240 310" />
      </g>
      {/* small joins where connectors meet the layer */}
      <g fill="var(--color-titanium)">
        <circle cx="238" cy="278" r="2.5" />
        <circle cx="240" cy="288" r="2.5" />
        <circle cx="236" cy="298" r="2.5" />
        <circle cx="240" cy="310" r="2.5" />
      </g>

      {/* ---- source nodes (scattered, mismatched) ---- */}
      <g
        fill="var(--color-ink-800)"
        stroke="var(--color-titanium)"
        strokeWidth="1.5"
      >
        {/* database cylinder */}
        <g transform="translate(48 100)">
          <ellipse cx="24" cy="8" rx="24" ry="8" />
          <path d="M0 8v32c0 4.4 10.7 8 24 8s24-3.6 24-8V8" fill="none" />
          <path d="M0 24c0 4.4 10.7 8 24 8s24-3.6 24-8" fill="none" />
        </g>
        {/* cloud */}
        <g transform="translate(96 190)">
          <path d="M14 34a10 10 0 0 1 2-19.8 16 16 0 0 1 30-1.4A11 11 0 0 1 44 34H14Z" />
        </g>
        {/* file / document */}
        <g transform="translate(48 272)">
          <path d="M0 0h30l14 14v42H0V0Z" />
          <path d="M30 0v14h14" fill="none" />
          <path d="M9 28h26M9 38h26M9 48h17" fill="none" />
        </g>
        {/* app window */}
        <g transform="translate(108 352)">
          <rect x="0" y="0" width="52" height="42" rx="4" />
          <path d="M0 12h52" fill="none" />
          <circle cx="8" cy="6" r="1.6" fill="var(--color-titanium)" stroke="none" />
          <circle cx="15" cy="6" r="1.6" fill="var(--color-titanium)" stroke="none" />
        </g>
      </g>

      {/* ---- AI / agent node (top) ---- */}
      <g transform="translate(380 88)">
        <circle
          r="40"
          fill="var(--color-ink-800)"
          stroke="var(--color-titanium)"
          strokeWidth="1.5"
        />
        <circle
          r="48"
          fill="none"
          stroke="var(--color-ink-600)"
          strokeWidth="1"
        />
        {/* spark mark */}
        <g
          stroke="var(--color-offwhite)"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        >
          <path d="M0 -16v8M0 8v8M-16 0h8M8 0h8" />
          <path d="M-10 -10l5 5M5 5l5 5M10 -10l-5 5M-5 5l-5 5" />
        </g>
        <circle r="4" fill="var(--color-red)" />
      </g>

      {/* query goes down, answer comes back */}
      <g fill="none" strokeWidth="1.5">
        <path d="M372 136v126" stroke="var(--color-ink-600)" />
        <path d="M388 262V136" stroke="var(--color-ink-600)" strokeDasharray="3 5" />
        {/* arrowheads */}
        <path d="m366 254 6 9 6-9" stroke="var(--color-titanium)" />
        <path d="m382 144 6-9 6 9" stroke="var(--color-titanium)" />
      </g>
      {/* agent query pulse (static position; animates later) */}
      <circle cx="372" cy="205" r="4" fill="var(--color-red)" />

      {/* ---- governed data layer (the spine) ---- */}
      <g>
        <rect
          x="230"
          y="266"
          width="300"
          height="56"
          rx="12"
          fill="var(--color-ink-800)"
          stroke="var(--color-charcoal)"
          strokeWidth="1.5"
        />
        {/* unified segments inside the layer */}
        <g stroke="var(--color-ink-600)" strokeWidth="1.5">
          <path d="M262 280v28M300 280v28M338 280v28M376 280v28M414 280v28M452 280v28M490 280v28" />
        </g>
        {/* the red "lock-in" — governed layer highlight */}
        <path
          d="M242 334h276"
          stroke="var(--color-red)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* shield/governance tick on the layer */}
        <g transform="translate(510 250)">
          <path
            d="M0 4c6 0 10-3 10-3s4 3 10 3v8c0 7-6 11-10 13-4-2-10-6-10-13V4Z"
            fill="var(--color-ink-900)"
            stroke="var(--color-red-bright)"
            strokeWidth="1.5"
          />
          <path
            d="m5.5 11 3.2 3.4L15 8.2"
            fill="none"
            stroke="var(--color-red-bright)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>

      {/* ---- plain-language labels ---- */}
      <g
        fill="var(--color-mist)"
        style={{ fontFamily: "var(--font-source-sans)", fontSize: "13px" }}
      >
        <text x="46" y="448">Your data sources</text>
        <text x="258" y="360">One trusted, always-current layer</text>
        <text x="548" y="60" textAnchor="end">AI that can trust the answer</text>
      </g>
    </svg>
  );
}

import type { CSSProperties } from "react";

/*
  One animated SVG per service - simple, clean, brand-palette, CSS-driven
  (sg-* utilities in globals.css). Each graphic's static state reads
  complete on its own, so prefers-reduced-motion loses nothing essential.
*/

const label: CSSProperties = {
  fontFamily: "var(--font-source-sans)",
  fontSize: "11px",
  fill: "var(--color-mist)",
};

const v = (vars: Record<string, string>) => vars as CSSProperties;

/* 01 - Assessment: a roadmap that lights up step by step. */
function GraphicAssessment() {
  const steps = [
    { x: 80, y: 220, n: "1", t: "Review", d: "0s" },
    { x: 200, y: 150, n: "2", t: "Prioritize", d: "0.35s" },
    { x: 320, y: 80, n: "3", t: "Plan", d: "0.7s" },
  ];
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram: a three-step roadmap (review, prioritize, plan) lighting up in order.">
      <line
        x1="80"
        y1="220"
        x2="320"
        y2="80"
        stroke="var(--color-ink-600)"
        strokeWidth="1.5"
        className="sg-draw"
        style={v({ "--dash": "280" })}
      />
      <circle
        r="4"
        cx="80"
        cy="220"
        fill="var(--color-red)"
        className="sg-travel"
        style={v({ "--tx": "240px", "--ty": "-140px", "--dur": "5s", "--delay": "1s" })}
      />
      {steps.map((s, i) => (
        <g key={s.n} className="sg-fade-in" style={v({ "--delay": s.d })}>
          <circle
            cx={s.x}
            cy={s.y}
            r="26"
            fill="none"
            stroke="var(--color-red-bright)"
            className="sg-glow"
            style={v({ "--delay": `${i * 1.1}s`, "--min": "0.12", "--dur": "3.3s" })}
          />
          <circle cx={s.x} cy={s.y} r="20" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
          <text
            x={s.x}
            y={s.y + 5}
            textAnchor="middle"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "14px", fontWeight: 700, fill: "var(--color-offwhite)" }}
          >
            {s.n}
          </text>
          <text x={s.x} y={s.y + 44} textAnchor="middle" style={label}>
            {s.t}
          </text>
        </g>
      ))}
    </svg>
  );
}

/* 02 - RAG chatbot: question → metadata layer → data, answer comes back checked. */
function GraphicRag() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram: a question flows through a curated business-metadata layer into your data, and a verified answer comes back.">
      {/* question bubble */}
      <rect x="40" y="36" width="150" height="58" rx="10" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
      <path d="M62 94l0 12 12-12Z" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
      <rect x="58" y="52" width="90" height="5" rx="2.5" fill="var(--color-ink-600)" />
      <rect x="58" y="64" width="60" height="5" rx="2.5" fill="var(--color-ink-600)" />
      {["0s", "0.2s", "0.4s"].map((d, i) => (
        <circle key={d} cx={150 + i * 12} cy="80" r="3" fill="var(--color-mist)" className="sg-typing" style={v({ "--delay": d })} />
      ))}

      {/* answer bubble */}
      <rect x="240" y="50" width="120" height="50" rx="10" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
      <rect x="256" y="64" width="60" height="5" rx="2.5" fill="var(--color-ink-600)" />
      <rect x="256" y="78" width="44" height="5" rx="2.5" fill="var(--color-ink-600)" />
      <g className="sg-pop" style={v({ "--delay": "2.4s", "--dur": "7s" })}>
        <circle cx="336" cy="75" r="11" fill="var(--color-red)" />
        <path d="m331 75 3.5 3.5 7-7" fill="none" stroke="var(--color-offwhite)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* metadata layer */}
      <rect x="60" y="150" width="280" height="34" rx="8" fill="var(--color-ink-800)" stroke="var(--color-charcoal)" strokeWidth="1.5" />
      <g stroke="var(--color-ink-600)" strokeWidth="1.5">
        <path d="M100 158v18M140 158v18M180 158v18M220 158v18M260 158v18M300 158v18" />
      </g>
      <path d="M70 190h260" stroke="var(--color-red)" strokeWidth="2.5" strokeLinecap="round" className="sg-glow" style={v({ "--min": "0.5", "--dur": "4s" })} />
      <text x="200" y="210" textAnchor="middle" style={label}>
        Curated metadata: your business vocabulary
      </text>

      {/* your data */}
      <g fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" transform="translate(114 228)">
        <ellipse cx="26" cy="8" rx="26" ry="8" />
        <path d="M0 8v28c0 4.4 11.6 8 26 8s26-3.6 26-8V8" fill="none" />
        <path d="M0 22c0 4.4 11.6 8 26 8s26-3.6 26-8" fill="none" />
      </g>
      <text x="212" y="262" style={label}>
        Your data
      </text>

      {/* flow pulses: question down, into data, answer up */}
      <circle cx="100" cy="102" r="4" fill="var(--color-red)" className="sg-travel" style={v({ "--ty": "46px", "--dur": "3.5s" })} />
      <circle cx="140" cy="186" r="4" fill="var(--color-red)" className="sg-travel" style={v({ "--ty": "38px", "--dur": "3.5s", "--delay": "0.9s" })} />
      <circle cx="300" cy="148" r="4" fill="var(--color-red-bright)" className="sg-travel" style={v({ "--ty": "-44px", "--dur": "3.5s", "--delay": "1.8s" })} />
    </svg>
  );
}

/* 03 - Workflow agent: a pulse runs the pipeline inside guardrails, checking every step. */
function GraphicAgent() {
  const steps = [
    { x: 70, t: "Fetch" },
    { x: 160, t: "Decide" },
    { x: 250, t: "Act" },
    { x: 340, t: "Verify" },
  ];
  const checkDelays = ["0.6s", "2s", "3.4s", "4.8s"];
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram: an agent runs a four-step workflow (fetch, decide, act, verify) between guardrails, checking off each step.">
      <text x="370" y="80" textAnchor="end" style={label}>
        guardrails
      </text>
      <g stroke="var(--color-ink-600)" strokeWidth="1.5" strokeDasharray="6 7">
        <line x1="30" y1="94" x2="370" y2="94" />
        <line x1="30" y1="206" x2="370" y2="206" />
      </g>
      <line x1="70" y1="150" x2="340" y2="150" stroke="var(--color-ink-600)" strokeWidth="1.5" />
      {steps.map((s, i) => (
        <g key={s.t}>
          <rect x={s.x - 22} y="128" width="44" height="44" rx="8" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
          <text x={s.x} y="240" textAnchor="middle" style={label}>
            {s.t}
          </text>
          <g className="sg-pop" style={v({ "--delay": checkDelays[i], "--dur": "6.5s" })}>
            <circle cx={s.x + 16} cy="124" r="9" fill="var(--color-red)" />
            <path d={`m${s.x + 12} 124 3 3 6-6`} fill="none" stroke="var(--color-offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      ))}
      <circle cx="52" cy="150" r="5" fill="var(--color-red)" className="sg-travel" style={v({ "--tx": "296px", "--dur": "6.5s" })} />
    </svg>
  );
}

/* 04 - Custom app: one application, operated by your team and your agents. */
function GraphicApp() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram: a custom application with an API and MCP layer, used by both people and AI agents.">
      {/* app window */}
      <rect x="110" y="50" width="180" height="140" rx="8" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
      <path d="M110 74h180" stroke="var(--color-titanium)" strokeWidth="1.5" />
      <circle cx="124" cy="62" r="2" fill="var(--color-titanium)" />
      <circle cx="134" cy="62" r="2" fill="var(--color-titanium)" />
      <rect x="122" y="86" width="42" height="92" rx="4" fill="var(--color-ink-700)" />
      <rect x="176" y="90" width="98" height="6" rx="3" fill="var(--color-ink-600)" />
      <rect x="176" y="104" width="76" height="6" rx="3" fill="var(--color-ink-600)" />
      <rect x="176" y="118" width="88" height="6" rx="3" fill="var(--color-ink-600)" />
      {/* little chart */}
      <g fill="var(--color-red)">
        <rect x="180" y="156" width="12" height="20" rx="2" className="sg-fill" style={v({ "--delay": "0.3s" })} />
        <rect x="200" y="146" width="12" height="30" rx="2" className="sg-fill" style={v({ "--delay": "0.5s" })} />
        <rect x="220" y="151" width="12" height="25" rx="2" className="sg-fill" style={v({ "--delay": "0.7s" })} />
      </g>

      {/* API / MCP layer */}
      <line x1="200" y1="190" x2="200" y2="208" stroke="var(--color-ink-600)" strokeWidth="1.5" />
      <rect
        x="110"
        y="208"
        width="180"
        height="30"
        rx="6"
        fill="var(--color-ink-900)"
        stroke="var(--color-red-bright)"
        strokeWidth="1.5"
        className="sg-glow"
        style={v({ "--min": "0.45", "--dur": "4s" })}
      />
      <text x="200" y="227" textAnchor="middle" style={{ ...label, fill: "var(--color-offwhite)" }}>
        API · MCP
      </text>

      {/* your team */}
      <g stroke="var(--color-titanium)" strokeWidth="1.5" fill="var(--color-ink-800)">
        <circle cx="55" cy="200" r="9" />
        <path d="M40 226c2-9 8-13 15-13s13 4 15 13" fill="none" />
      </g>
      <text x="55" y="250" textAnchor="middle" style={label}>
        Your team
      </text>

      {/* AI agents */}
      <g transform="translate(345 209)">
        <circle r="13" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
        <g stroke="var(--color-offwhite)" strokeWidth="1.3" strokeLinecap="round">
          <path d="M0 -6v3M0 3v3M-6 0h3M3 0h3" />
        </g>
        <circle r="2" fill="var(--color-red)" />
      </g>
      <text x="345" y="250" textAnchor="middle" style={label}>
        AI agents
      </text>

      {/* both sides operate it */}
      <circle cx="72" cy="223" r="4" fill="var(--color-red)" className="sg-travel" style={v({ "--tx": "34px", "--dur": "3s" })} />
      <circle cx="328" cy="223" r="4" fill="var(--color-red)" className="sg-travel" style={v({ "--tx": "-34px", "--dur": "3s", "--delay": "1.5s" })} />
    </svg>
  );
}

/* 05 - On-prem: AI inside your walls; nothing crosses the boundary. */
function GraphicOnPrem() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram: AI running on your own servers inside a secure boundary: data stays in; nothing reaches the outside cloud.">
      {/* secure boundary */}
      <rect
        x="70"
        y="55"
        width="215"
        height="200"
        rx="16"
        fill="none"
        stroke="var(--color-red-bright)"
        strokeWidth="1.5"
        strokeDasharray="5 7"
        className="sg-glow"
        style={v({ "--min": "0.4", "--dur": "4s" })}
      />
      {/* shield */}
      <g transform="translate(167 40)">
        <path
          d="M0 4c6 0 10-3 10-3s4 3 10 3v8c0 7-6 11-10 13-4-2-10-6-10-13V4Z"
          fill="var(--color-ink-900)"
          stroke="var(--color-red-bright)"
          strokeWidth="1.5"
        />
        <path d="m5.5 11 3.2 3.4L15 8.2" fill="none" stroke="var(--color-red-bright)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* server */}
      <rect x="140" y="115" width="80" height="90" rx="6" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
      <path d="M140 145h80M140 175h80" stroke="var(--color-titanium)" strokeWidth="1.2" />
      {["0s", "0.5s", "1s"].map((d, i) => (
        <circle key={d} cx="153" cy={130 + i * 30} r="3" fill="var(--color-red)" className="sg-glow" style={v({ "--delay": d, "--min": "0.2", "--dur": "2s" })} />
      ))}
      <g stroke="var(--color-ink-600)" strokeWidth="1.5">
        <path d="M166 130h42M166 160h42M166 190h42" />
      </g>
      <text x="180" y="238" textAnchor="middle" style={label}>
        Your infrastructure
      </text>

      {/* data stays inside */}
      <circle cx="105" cy="180" r="4" fill="var(--color-mist)" className="sg-float" style={v({ "--dur": "3.5s" })} />
      <circle cx="250" cy="120" r="4" fill="var(--color-mist)" className="sg-float" style={v({ "--dur": "4s", "--delay": "0.8s" })} />
      <circle cx="248" cy="200" r="3" fill="var(--color-mist)" className="sg-float" style={v({ "--dur": "3s", "--delay": "1.6s" })} />

      {/* the outside, blocked */}
      <g transform="translate(310 70)" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5">
        <path d="M9 23a7 7 0 0 1 1.4-13.8 11 11 0 0 1 20.8-1A7.5 7.5 0 0 1 30 23H9Z" />
      </g>
      <line x1="222" y1="140" x2="281" y2="110" stroke="var(--color-ink-600)" strokeWidth="1.5" strokeDasharray="4 5" />
      <g className="sg-glow" style={v({ "--min": "0.5", "--dur": "2.6s" })} stroke="var(--color-red)" strokeWidth="2.2" strokeLinecap="round">
        <path d="m278 103 12 12M290 103l-12 12" />
      </g>
    </svg>
  );
}

/* 06 - Training: knowledge flows to the team; capability bars fill. */
function GraphicTraining() {
  const people = [
    { x: 100, line: "M195 82 108 148", dash: "120", d: "0.2s", bar: "0.9s" },
    { x: 200, line: "M200 86 200 148", dash: "70", d: "0.45s", bar: "1.15s" },
    { x: 300, line: "M205 82 292 148", dash: "120", d: "0.7s", bar: "1.4s" },
  ];
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram: clear AI understanding flowing from one source to a whole team, whose capability grows.">
      {/* bulb */}
      <g transform="translate(200 58)">
        <circle
          r="17"
          fill="var(--color-ink-800)"
          stroke="var(--color-titanium)"
          strokeWidth="1.5"
        />
        <path d="M-5 24h10M-3.5 30h7" stroke="var(--color-titanium)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M0 -8v6M-5 2h10M-3 6c0 3 1 5 3 6 2-1 3-3 3-6" fill="none" stroke="var(--color-red-bright)" strokeWidth="1.4" strokeLinecap="round" />
        <g
          stroke="var(--color-red-bright)"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="sg-glow"
          style={v({ "--min": "0.25", "--dur": "3s" })}
        >
          <path d="M0 -28v-6M-20 -20l-4-4M20 -20l4-4M-28 0h-6M28 0h6" />
        </g>
      </g>

      {people.map((p) => (
        <g key={p.x}>
          <path
            d={p.line}
            fill="none"
            stroke="var(--color-ink-600)"
            strokeWidth="1.5"
            className="sg-draw"
            style={v({ "--dash": p.dash, "--delay": p.d })}
          />
          <g stroke="var(--color-titanium)" strokeWidth="1.5" fill="var(--color-ink-800)">
            <circle cx={p.x} cy="162" r="11" />
            <path d={`M${p.x - 17} 192c2-10 9-15 17-15s15 5 17 15`} fill="none" />
          </g>
          <rect x={p.x - 32} y="214" width="64" height="8" rx="4" fill="var(--color-ink-700)" />
          <rect
            x={p.x - 32}
            y="214"
            width="64"
            height="8"
            rx="4"
            fill="var(--color-red)"
            className="sg-fill"
            style={v({ "--delay": p.bar })}
          />
        </g>
      ))}
      <text x="200" y="252" textAnchor="middle" style={label}>
        A team that gets it
      </text>
    </svg>
  );
}

const graphics: Record<string, () => React.JSX.Element> = {
  assessment: GraphicAssessment,
  "rag-chatbot": GraphicRag,
  "workflow-agent": GraphicAgent,
  "custom-app": GraphicApp,
  "on-prem": GraphicOnPrem,
  training: GraphicTraining,
};

export default function ServiceGraphic({ id }: { id: string }) {
  const Graphic = graphics[id];
  return Graphic ? <Graphic /> : null;
}

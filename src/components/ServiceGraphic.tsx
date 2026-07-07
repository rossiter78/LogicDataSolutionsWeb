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

/* 01 - Assessment: your current systems pass through the assessment lens
   and come out the other side as an ordered, numbered plan. */
function GraphicAssessment() {
  const rows = [
    { y: 106, d: "1s", w1: 52, w2: 36, primary: true },
    { y: 146, d: "1.25s", w1: 46, w2: 30, primary: false },
    { y: 186, d: "1.5s", w1: 50, w2: 34, primary: false },
  ];
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram: your current systems and data pass through an assessment lens and come out as an ordered, numbered plan.">
      {/* what you have: slightly askew, unassessed */}
      <g className="sg-fade-in">
        <g transform="rotate(-4 75 96)">
          <rect x="38" y="70" width="74" height="52" rx="6" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
          <path d="M38 84h74" stroke="var(--color-titanium)" strokeWidth="1.2" />
          <circle cx="47" cy="77" r="2" fill="var(--color-titanium)" />
          <rect x="50" y="92" width="44" height="4" rx="2" fill="var(--color-ink-600)" />
          <rect x="50" y="102" width="30" height="4" rx="2" fill="var(--color-ink-600)" />
        </g>
        <text x="123" y="66" style={{ ...label, fontSize: "15px", fill: "var(--color-titanium)", fontWeight: 700 }}>
          ?
        </text>
      </g>
      <g className="sg-fade-in" style={v({ "--delay": "0.15s" })}>
        <g fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" transform="translate(42 168) rotate(5)">
          <ellipse cx="22" cy="7" rx="22" ry="7" />
          <path d="M0 7v26c0 3.9 9.8 7 22 7s22-3.1 22-7V7" fill="none" />
          <path d="M0 20c0 3.9 9.8 7 22 7s22-3.1 22-7" fill="none" />
        </g>
        <text x="56" y="242" style={{ ...label, fontSize: "14px", fill: "var(--color-titanium)", fontWeight: 700 }}>
          ?
        </text>
      </g>
      <g className="sg-fade-in" style={v({ "--delay": "0.3s" })}>
        <g transform="rotate(-6 121 149)">
          <rect x="104" y="132" width="34" height="34" rx="6" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
          <circle cx="121" cy="149" r="4" fill="var(--color-red)" />
        </g>
      </g>
      <text x="88" y="262" textAnchor="middle" style={label}>
        What you have
      </text>

      {/* the assessment lens */}
      <g className="sg-fade-in" style={v({ "--delay": "0.5s" })}>
        <circle
          cx="196"
          cy="146"
          r="27"
          fill="var(--color-ink-900)"
          stroke="var(--color-red-bright)"
          strokeWidth="2"
          className="sg-glow"
          style={v({ "--min": "0.5", "--dur": "3.5s" })}
        />
        <path d="M186 140a12 12 0 0 1 9-6" stroke="var(--color-red-bright)" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.7" />
        <line x1="215" y1="167" x2="232" y2="186" stroke="var(--color-red-bright)" strokeWidth="4" strokeLinecap="round" />
      </g>

      {/* flow: in one side, out the other */}
      <path d="M142 146h22" stroke="var(--color-ink-600)" strokeWidth="1.5" strokeDasharray="4 5" />
      <path d="M228 146h36" stroke="var(--color-ink-600)" strokeWidth="1.5" strokeDasharray="4 5" />
      <path d="M258 141l8 5-8 5" fill="none" stroke="var(--color-ink-600)" strokeWidth="1.5" />
      <circle
        cx="136"
        cy="146"
        r="4"
        fill="var(--color-red)"
        className="sg-travel"
        style={v({ "--tx": "128px", "--dur": "4.5s", "--delay": "1.8s" })}
      />

      {/* your plan: ordered, prioritized */}
      <g className="sg-fade-in" style={v({ "--delay": "0.7s" })}>
        <rect x="272" y="58" width="104" height="176" rx="8" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
        <path d="M284 78h64" stroke="var(--color-red)" strokeWidth="3" strokeLinecap="round" />
      </g>
      {rows.map((r, i) => (
        <g key={r.y} className="sg-fade-in" style={v({ "--delay": r.d })}>
          {r.primary && (
            <circle
              cx="294"
              cy={r.y}
              r="14"
              fill="none"
              stroke="var(--color-red-bright)"
              className="sg-glow"
              style={v({ "--min": "0.12", "--dur": "3.3s", "--delay": "2.5s" })}
            />
          )}
          <circle
            cx="294"
            cy={r.y}
            r="9"
            fill={r.primary ? "var(--color-red)" : "var(--color-ink-800)"}
            stroke={r.primary ? "var(--color-red)" : i === 1 ? "var(--color-red)" : "var(--color-titanium)"}
            strokeWidth="1.6"
          />
          <text
            x="294"
            y={r.y + 4}
            textAnchor="middle"
            style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 700, fill: "var(--color-offwhite)" }}
          >
            {i + 1}
          </text>
          <rect x="310" y={r.y - 4} width={r.w1} height="4" rx="2" fill="var(--color-ink-600)" />
          <rect x="310" y={r.y + 5} width={r.w2} height="4" rx="2" fill="var(--color-ink-700)" />
        </g>
      ))}
      <text x="324" y="262" textAnchor="middle" style={label}>
        Your plan
      </text>
    </svg>
  );
}

/* 02 - RAG chatbot: your question reaches the model, the model consults the
   curated vocabulary, sends the right query to your data, and the checked
   answer comes back to you. Dashed lines march in the direction of flow. */
function GraphicRag() {
  const Arrow = ({ x, y, deg }: { x: number; y: number; deg: number }) => (
    <g transform={`translate(${x} ${y}) rotate(${deg})`}>
      <path d="M-6 -4 L0 0 L-6 4" fill="none" stroke="var(--color-ink-600)" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
  const pairs = [
    { y: 56, hot: true },
    { y: 74, hot: false },
    { y: 92, hot: false },
  ];
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Diagram: your question goes to an AI model that consults curated metadata (your business vocabulary), sends the right query to your data, and delivers a correct, checked answer back to you.">
      {/* you ask */}
      <rect x="24" y="38" width="112" height="58" rx="10" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
      <path d="M46 96l0 12 12-12Z" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
      <rect x="40" y="50" width="84" height="5" rx="2.5" fill="var(--color-ink-600)" />
      <rect x="40" y="63" width="44" height="10" rx="5" fill="none" stroke="var(--color-red-bright)" strokeWidth="1.3" />
      <rect x="46" y="66.5" width="32" height="3" rx="1.5" fill="var(--color-red-bright)" />
      <rect x="90" y="65.5" width="30" height="5" rx="2.5" fill="var(--color-ink-600)" />
      {["0s", "0.2s", "0.4s"].map((d, i) => (
        <circle key={d} cx={100 + i * 11} cy="84" r="3" fill="var(--color-mist)" className="sg-typing" style={v({ "--delay": d })} />
      ))}
      <text x="80" y="126" textAnchor="middle" style={label}>
        You ask, your way
      </text>

      {/* question flows to the model */}
      <path d="M140 62 C166 68 180 88 190 110" fill="none" stroke="var(--color-ink-600)" strokeWidth="1.5" className="sg-march" />
      <Arrow x={190} y={110} deg={66} />

      {/* the model: Claude spark and OpenAI mark in diagonal corners */}
      <rect x="174" y="114" width="52" height="52" rx="10" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
      <image href="/icons/claude-spark.png" x="180" y="119" width="21" height="21" />
      <image href="/icons/openai-mark.png" x="200" y="139" width="21" height="21" />
      <text x="200" y="186" textAnchor="middle" style={label}>
        The AI
      </text>

      {/* curated vocabulary feeding the model */}
      <rect x="282" y="40" width="96" height="74" rx="8" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
      {pairs.map((p) => (
        <g key={p.y}>
          <rect x="294" y={p.y - 1.5} width="16" height="7" rx="3.5" fill={p.hot ? "var(--color-red)" : "var(--color-ink-600)"} />
          {p.hot ? (
            <rect x="316" y={p.y} width="50" height="4" rx="2" fill="var(--color-red-bright)" className="sg-glow" style={v({ "--min": "0.45", "--dur": "3s" })} />
          ) : (
            <rect x="316" y={p.y} width="50" height="4" rx="2" fill="var(--color-ink-600)" />
          )}
        </g>
      ))}
      <text x="330" y="134" textAnchor="middle" style={label}>
        Your vocabulary, curated
      </text>
      <path d="M288 118 C264 132 244 130 228 126" fill="none" stroke="var(--color-ink-600)" strokeWidth="1.5" className="sg-march" style={v({ "--dur": "1.1s" })} />
      <Arrow x={228} y={126} deg={-166} />

      {/* query out, results back */}
      <path d="M226 152 C258 158 284 178 300 202" fill="none" stroke="var(--color-ink-600)" strokeWidth="1.5" className="sg-march" style={v({ "--delay": "0.3s" })} />
      <Arrow x={300} y={202} deg={63} />
      <path d="M318 196 C306 168 274 152 238 146" fill="none" stroke="var(--color-ink-600)" strokeWidth="1.5" className="sg-march" style={v({ "--delay": "0.6s" })} />
      <Arrow x={238} y={146} deg={-170} />
      <g fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" transform="translate(288 206)">
        <ellipse cx="24" cy="7" rx="24" ry="7" />
        <path d="M0 7v26c0 3.9 10.7 7 24 7s24-3.1 24-7V7" fill="none" />
        <path d="M0 20c0 3.9 10.7 7 24 7s24-3.1 24-7" fill="none" />
      </g>
      <text x="312" y="270" textAnchor="middle" style={label}>
        Your data
      </text>

      {/* the answer comes back to you */}
      <path d="M176 168 C164 186 154 198 144 210" fill="none" stroke="var(--color-ink-600)" strokeWidth="1.5" className="sg-march" style={v({ "--delay": "0.9s" })} />
      <Arrow x={144} y={210} deg={130} />
      <rect x="24" y="190" width="112" height="52" rx="10" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
      <path d="M46 242l0 12 12-12Z" fill="var(--color-ink-800)" stroke="var(--color-titanium)" strokeWidth="1.5" />
      <rect x="40" y="204" width="62" height="5" rx="2.5" fill="var(--color-ink-600)" />
      <rect x="40" y="216" width="44" height="5" rx="2.5" fill="var(--color-ink-600)" />
      <g className="sg-pop" style={v({ "--delay": "1.8s", "--dur": "7s" })}>
        <circle cx="134" cy="192" r="10" fill="var(--color-red)" />
        <path d="m129.5 192 3.2 3.2 6.4-6.4" fill="none" stroke="var(--color-offwhite)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <text x="80" y="276" textAnchor="middle" style={label}>
        Correct answer
      </text>
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

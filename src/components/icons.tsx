/*
  Consistent simple line-icon set (no emoji, per global UI notes).
  All icons: 24×24, stroke-based, currentColor.
*/
type IconProps = { className?: string };

const svgProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function IconAgent({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <circle cx="12" cy="6" r="2.4" />
      <circle cx="5" cy="18" r="2.4" />
      <circle cx="19" cy="18" r="2.4" />
      <path d="M10.8 8.1 6.3 15.9M13.2 8.1l4.5 7.8M7.4 18h9.2" />
    </svg>
  );
}

export function IconRag({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M5 4.5h8.5A2.5 2.5 0 0 1 16 7v3" />
      <path d="M5 4.5v13A2.5 2.5 0 0 0 7.5 20H10" />
      <path d="M5 4.5C5 3.7 5.7 3 6.5 3H14" />
      <circle cx="15.5" cy="15.5" r="3.5" />
      <path d="m18.2 18.2 2.8 2.8" />
    </svg>
  );
}

export function IconMcp({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M9 7V3.5M15 7V3.5" />
      <path d="M6.5 7h11v4a5.5 5.5 0 0 1-11 0V7Z" />
      <path d="M12 16.5V19a2 2 0 0 1-2 2H8" />
    </svg>
  );
}

export function IconVision({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function IconServer({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="4" y="4" width="16" height="7" rx="1.5" />
      <rect x="4" y="13" width="16" height="7" rx="1.5" />
      <path d="M7.5 7.5h.01M7.5 16.5h.01M11 7.5h2M11 16.5h2" />
    </svg>
  );
}

export function IconApp({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 8.5h18" />
      <path d="m9 12.5-2.2 2.2L9 16.9M15 12.5l2.2 2.2L15 16.9" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M4 5.5h16v10.5H9.5L5.5 20v-4H4V5.5Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  );
}

export function IconLoop({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M4.5 12a7.5 7.5 0 0 1 13-5.1" />
      <path d="M17.5 3.5v3.6h-3.6" />
      <path d="M19.5 12a7.5 7.5 0 0 1-13 5.1" />
      <path d="M6.5 20.5v-3.6h3.6" />
    </svg>
  );
}

export function IconArchive({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <rect x="3.5" y="4" width="17" height="5" rx="1" />
      <path d="M5.5 9v9.5a1.5 1.5 0 0 0 1.5 1.5h10a1.5 1.5 0 0 0 1.5-1.5V9" />
      <path d="M10 13h4" />
    </svg>
  );
}

export function IconRebuild({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M14.5 6.5a4 4 0 0 1 5 5l-8 8a4 4 0 0 1-5-5l8-8Z" />
      <path d="m11 10 3 3" />
      <path d="M4 4l3.5 3.5M4 7.5V4h3.5" />
    </svg>
  );
}

export function IconSpark({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg {...svgProps} className={className}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

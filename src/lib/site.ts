export const site = {
  name: "Logic Data Solutions",
  domain: "https://logicdatasolutions.com",
  principal: "Trent Rossiter",
  email: "BenjaminRossiter@LogicDataSolutions.com",
  linkedin:
    "https://www.linkedin.com/in/benjamin-trent-rossiter-mba-0157945/",
  logoIcon:
    "https://logicdatasolutions.com/wp-content/uploads/2026/02/LogoOnly.svg",
  logoFull:
    "https://logicdatasolutions.com/wp-content/uploads/2026/02/Color-logo-no-background.svg",
  // Cal.com event slug backing the /contact booking embed. Public (it's visible
  // in the booking page source), so it's committed as the default here rather
  // than required as a build secret. NEXT_PUBLIC_CAL_LINK overrides it — e.g. to
  // point a local/preview build at a different or test event.
  calLink: process.env.NEXT_PUBLIC_CAL_LINK || "benjamin-rossiter-kblse0/30min",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/enterprise-data", label: "Enterprise Data" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

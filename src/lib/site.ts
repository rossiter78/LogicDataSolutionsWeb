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
  // Cal.com event link, e.g. "trent-rossiter/discovery-call". Backed by Trent's
  // Google Calendar; kept in env so the link isn't hardcoded in source.
  calLink: process.env.NEXT_PUBLIC_CAL_LINK ?? "",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/enterprise-data", label: "Enterprise Data" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

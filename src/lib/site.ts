export const site = {
  name: "Logic Data Solutions",
  domain: "https://logicdatasolutions.com",
  principal: "Trent Rossiter",
  email: "BenjaminRossiter@LogicDataSolutions.com",
  phone: "720.908.0723",
  phoneHref: "tel:+17209080723",
  location: "Westminster, CO · serving clients nationally",
  linkedin:
    "https://www.linkedin.com/in/benjamin-trent-rossiter-mba-0157945/",
  logoIcon:
    "https://logicdatasolutions.com/wp-content/uploads/2026/02/LogoOnly.svg",
  logoFull:
    "https://logicdatasolutions.com/wp-content/uploads/2026/02/Color-logo-no-background.svg",
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL ?? "",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/ai-solutions", label: "AI Solutions" },
  // Enterprise Data stays visually quieter than the AI path.
  { href: "/enterprise-data", label: "Enterprise Data", quiet: true },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
] as const;

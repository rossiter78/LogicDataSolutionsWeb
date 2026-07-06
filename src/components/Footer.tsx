import Link from "next/link";
import Container from "@/components/Container";
import { site } from "@/lib/site";

const footerNav = [
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/enterprise-data", label: "Enterprise Data" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-900">
      <Container className="mx-auto flex max-w-4xl flex-col items-center gap-4 py-8 text-center">
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:items-center md:justify-between md:text-left">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.logoIcon}
              alt=""
              className="h-10 w-10"
              width={40}
              height={40}
            />
            <span className="font-display text-[0.95rem] font-bold tracking-wide text-offwhite">
              Logic Data Solutions
            </span>
          </Link>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-mist transition-colors hover:text-offwhite"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center gap-1 text-sm md:items-end">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-mist transition-colors hover:text-offwhite"
            >
              LinkedIn →
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-mist transition-colors hover:text-offwhite"
            >
              {site.email}
            </a>
          </div>
        </div>
      </Container>
      <div className="border-t border-ink-800">
        <Container className="py-3">
          <p className="text-center text-xs text-titanium md:text-left">
            © {new Date().getFullYear()} Logic Data Solutions
          </p>
        </Container>
      </div>
    </footer>
  );
}

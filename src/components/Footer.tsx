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
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.logoIcon}
            alt="Logic Data Solutions"
            className="h-10 w-10"
            width={40}
            height={40}
          />
          <p className="max-w-xs text-sm leading-relaxed text-mist">
            AI that works — because the data underneath it does. A boutique AI
            and enterprise-data consultancy.
          </p>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-mist transition-colors hover:text-offwhite"
          >
            LinkedIn →
          </a>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2.5">
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

        <div className="flex flex-col gap-2.5 text-sm text-mist">
          <a
            href={`mailto:${site.email}`}
            className="transition-colors hover:text-offwhite"
          >
            {site.email}
          </a>
          <a
            href={site.phoneHref}
            className="transition-colors hover:text-offwhite"
          >
            {site.phone}
          </a>
          <p>{site.location}</p>
        </div>
      </Container>
      <div className="border-t border-ink-800">
        <Container className="py-5">
          <p className="text-xs text-titanium">
            © {new Date().getFullYear()} Logic Data Solutions
          </p>
        </Container>
      </div>
    </footer>
  );
}

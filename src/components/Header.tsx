"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";

/*
  Dark header. Brand = icon-only logo (approved on Dark Charcoal) + white
  wordmark — the full-color logo is restricted to Off-White/Light Grey
  backgrounds. Nav is AI-forward; Enterprise Data sits last and quieter.
*/
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href: string, quiet?: boolean) => {
    const active =
      href === "/" ? pathname === "/" : pathname?.startsWith(href);
    return [
      "font-display text-sm transition-colors",
      active ? "text-offwhite font-bold" : "hover:text-offwhite",
      !active && (quiet ? "text-titanium" : "text-mist font-semibold"),
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800 bg-ink-950/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={site.logoIcon}
            alt=""
            className="h-8 w-8"
            width={32}
            height={32}
          />
          <span className="font-display text-[0.95rem] font-bold tracking-wide text-offwhite">
            Logic Data Solutions
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={linkClass(item.href, Boolean("quiet" in item && item.quiet))}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-md bg-red px-4 py-2 font-display text-sm font-bold text-offwhite transition-colors hover:bg-red-deep"
          >
            Book a call
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-md text-offwhite md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-ink-800 bg-ink-950 px-5 pb-6 pt-3 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2.5 ${linkClass(
                    item.href,
                    Boolean("quiet" in item && item.quiet)
                  )}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-red px-4 py-3 text-center font-display text-sm font-bold text-offwhite"
              >
                Book a call
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

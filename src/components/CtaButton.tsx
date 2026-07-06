import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

/*
  One primary CTA style (solid Corporate Red) and one secondary
  (ghost/outline on dark) used consistently across the site.
*/
export default function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-display text-sm font-bold transition-colors";
  const styles =
    variant === "primary"
      ? "bg-red text-offwhite hover:bg-red-deep"
      : "border border-ink-600 text-offwhite hover:border-titanium hover:bg-ink-800";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}

import Container from "@/components/Container";
import CtaButton from "@/components/CtaButton";
import SectionLabel from "@/components/SectionLabel";

/*
  Temporary scaffold-phase stub: real hero copy + a "content in build" note,
  so every route resolves and the nav can be reviewed. Each stub is replaced
  by its full page in later sessions (roadmap sessions 5–6).
*/
export default function PageStub({
  eyebrow,
  h1,
  subhead,
  cta = { href: "/contact", label: "Book a discovery call" },
}: {
  eyebrow: string;
  h1: string;
  subhead: string;
  cta?: { href: string; label: string } | null;
}) {
  return (
    <section>
      <Container className="flex min-h-[55vh] max-w-3xl flex-col justify-center gap-6 py-24">
        <SectionLabel>{eyebrow}</SectionLabel>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{h1}</h1>
        <p className="text-lg leading-relaxed text-mist">{subhead}</p>
        {cta && (
          <div>
            <CtaButton href={cta.href}>{cta.label}</CtaButton>
          </div>
        )}
        <p className="mt-6 rounded-md border border-dashed border-ink-700 bg-ink-900 px-4 py-3 text-sm text-titanium">
          Full page content is coming in the next build session — this route is
          scaffolded so the site structure can be reviewed.
        </p>
      </Container>
    </section>
  );
}

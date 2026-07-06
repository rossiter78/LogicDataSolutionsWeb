export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-red-bright">
      {children}
    </p>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-12 flex items-center gap-[10px] text-[0.74rem] font-semibold uppercase tracking-[0.1em] text-accent">
      <span>{children}</span>
      <span className="h-px flex-1 bg-rule" />
    </div>
  );
}

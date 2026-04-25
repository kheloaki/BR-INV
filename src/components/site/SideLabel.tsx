export function SideLabel() {
  return (
    <div
      className="hidden xl:block fixed left-6 top-1/2 z-30 pointer-events-none origin-left"
      style={{ transform: "translateY(-50%) rotate(-90deg) translateY(-100%)" }}
    >
      <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase font-bold text-[var(--ivory)]/70 mix-blend-difference">
        <span className="h-px w-8 bg-current" />
        Basé au Maroc — Disponible partout en Afrique
      </div>
    </div>
  );
}

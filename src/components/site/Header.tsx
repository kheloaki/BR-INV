import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoHorizontal from "@/assets/barane-logo-horizontal-transparent.png";

const nav = [
  { label: "Activités", to: "/activites" },
  { label: "Catalogue", to: "/catalogue" },
  { label: "Secteurs", to: "/secteurs" },
  { label: "À propos", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border bg-[var(--ivory)]">
      <div className="grid grid-cols-12 items-center h-16 lg:h-[72px]">
        {/* Logo block — mirrors reference left-anchored logo */}
        <Link
          to="/"
          className="col-span-5 lg:col-span-2 flex items-center h-full px-2 lg:px-1.5 text-[var(--navy)]"
        >
          <div className="h-full flex items-center pr-2 border-r border-border">
            <img
              src={logoHorizontal}
              alt="BARANE INVEST"
              className="h-14 lg:h-16 w-auto object-contain"
            />
          </div>
        </Link>

        <nav className="hidden lg:flex col-span-7 items-center justify-center gap-11 px-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`group flex items-baseline gap-1 text-[0.85rem] font-semibold tracking-[0.07em] uppercase transition-colors ${
                pathname === item.to ? "text-[var(--navy)]" : "text-[var(--graphite)]/80"
              } hover:text-[var(--gold)]`}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex col-span-3 h-full border-l border-border">
          <button
            type="button"
            className="w-1/3 h-full border-r border-border flex items-center justify-center gap-1 text-[0.8rem] font-semibold tracking-[0.06em] uppercase text-[var(--navy)]"
            aria-label="Language"
          >
            EN <ChevronDown className="h-3.5 w-3.5" />
          </button>
          <Button variant="gold" size="xl" className="w-2/3 h-full rounded-none border-0" asChild>
            <Link to="/contact" className="text-[0.8rem] tracking-[0.06em] uppercase">
              Service Proposal
            </Link>
          </Button>
        </div>

        <div className="lg:hidden col-span-7 flex justify-end h-full">
          <button
            className="h-full px-6 flex items-center text-[var(--navy)]"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-[var(--navy-deep)] px-6 py-8 space-y-5">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="flex items-baseline text-[var(--ivory)] font-display text-2xl uppercase tracking-tight"
            >
              {item.label}
            </Link>
          ))}
          <Button variant="gold" className="w-full" asChild>
            <Link to="/contact">Demander un devis</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

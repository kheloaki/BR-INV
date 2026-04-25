import { ArrowRight, Download, Linkedin, Instagram } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-industrial.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[var(--navy-deep)]">
      <img
        src={hero}
        alt="Site industriel et infrastructure — BARANE INVEST"
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        width={1920}
        height={1280}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.165 0.045 263 / 0.7) 0%, oklch(0.165 0.045 263 / 0.85) 60%, oklch(0.165 0.045 263) 100%)",
        }}
      />
      {/* Topographic pattern */}
      <div className="absolute inset-0 bg-topo opacity-[0.08] mix-blend-screen" />

      <div className="relative z-10 px-6 lg:px-16 pb-16 lg:pb-20 pt-20 lg:pt-24 w-full">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-10 animate-fade-up">
            <span className="h-px w-12 bg-[var(--gold)]" />
            <span className="eyebrow text-[var(--gold)]">Groupe industriel · Maroc & Afrique</span>
          </div>

          <h1 className="display-xl text-[14vw] lg:text-[10vw] xl:text-[9rem] text-[var(--ivory)] animate-fade-up max-w-[1300px]">
            Bâtir l'industrie,
            <br />
            <span className="text-[var(--gold)]">connecter</span> les projets.
          </h1>

          <div className="mt-12 grid lg:grid-cols-12 gap-8 items-end">
            <p className="lg:col-span-5 text-base lg:text-lg text-[var(--ivory)]/75 leading-relaxed max-w-md animate-fade-up">
              Partenaire de confiance pour la construction, l'infrastructure, la logistique et
              l'équipement industriel — au service des entreprises, mines et chantiers d'envergure.
            </p>

            <div className="lg:col-span-7 flex flex-wrap items-center gap-0 lg:justify-end animate-fade-up">
              <Button variant="gold" size="xl" asChild>
                <Link to="/contact">
                  Demander un devis <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outlineLight" size="xl" asChild>
                <Link to="/catalogue">
                  <Download className="h-5 w-5" /> Voir le catalogue
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom social column — bottom left like reference */}
      <div className="absolute bottom-8 left-6 z-20 flex flex-col gap-4 text-[var(--ivory)]/60">
        <a
          href="https://www.linkedin.com/company/baraneinvest"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[var(--gold)] transition-colors"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-[var(--gold)] transition-colors">
          <Instagram className="h-4 w-4" />
        </a>
      </div>

      {/* Vertical side label */}
      <div
        className="hidden lg:block absolute left-6 bottom-32 z-20 pointer-events-none origin-bottom-left"
        style={{ transform: "rotate(-90deg) translateX(0)" }}
      >
        <div className="flex items-center gap-3 text-[10px] tracking-[0.4em] uppercase font-bold text-[var(--ivory)]/60 whitespace-nowrap">
          Basé au Maroc — Disponible partout en Afrique
          <span className="h-px w-12 bg-current" />
        </div>
      </div>
    </section>
  );
}

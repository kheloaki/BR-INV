import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import infraImg from "@/assets/sector-infrastructure.jpg";

export function About() {
  return (
    <section id="about" className="relative py-32 lg:py-40 bg-[var(--ivory)] overflow-hidden">
      <div className="px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Eyebrow column */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 sticky top-32">
              <span className="eyebrow text-[var(--navy)]">À propos</span>
            </div>
          </div>

          <div className="lg:col-span-9">
            <h2 className="display-xl text-5xl lg:text-7xl xl:text-8xl text-[var(--navy)] max-w-5xl">
              Un partenaire industriel <span className="text-[var(--gold)]">sérieux</span>,
              structuré et opérationnel.
            </h2>

            <div className="mt-16 grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={infraImg}
                    alt="Infrastructure"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[var(--gold)] text-[var(--navy-deep)] text-[10px] tracking-[0.3em] font-bold uppercase">
                    Depuis nos origines
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <p className="text-lg lg:text-xl text-[var(--graphite)] leading-relaxed">
                    BARANE INVEST est une société marocaine spécialisée dans la fourniture
                    industrielle, les travaux d'infrastructure, la logistique et le commerce B2B.
                  </p>
                  <p className="mt-6 text-base text-[var(--graphite)]/80 leading-relaxed">
                    Nous accompagnons les contractants, industriels, mines, carrières et donneurs
                    d'ordre publics et privés avec une rigueur corporate et une exécution terrain
                    sans compromis.
                  </p>
                </div>

                <ul className="mt-12 divide-y divide-[var(--navy)]/10 border-t border-b border-[var(--navy)]/10">
                  {[
                    "Société marocaine légalement constituée",
                    "Gouvernance professionnelle",
                    "Approvisionnement multi-marques",
                    "Réseau logistique national",
                    "Capacité import-export",
                  ].map((p, i) => (
                    <li key={p} className="py-4 flex items-baseline gap-4">
                      <span className="text-[var(--navy)] font-medium">{p}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="navy" size="lg" className="mt-10 self-start" asChild>
                  <Link to="/activites">
                    Nos domaines <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

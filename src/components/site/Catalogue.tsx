import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import motors from "@/assets/cat-motors.jpg";
import bearings from "@/assets/cat-bearings.jpg";
import screening from "@/assets/cat-screening.jpg";
import hydraulic from "@/assets/cat-hydraulic.jpg";

const featured = [
  { img: screening, title: "Criblage & convoyeurs", count: "Bandes · Rouleaux · Tambours" },
  { img: motors, title: "Moteurs & réducteurs", count: "Électriques · Industriels" },
  { img: bearings, title: "Roulements & transmissions", count: "Toutes marques" },
  { img: hydraulic, title: "Pneumatique & hydraulique", count: "Vannes · Raccords · Vérins" },
];

const others = [
  "Matériel électrique",
  "Vibration & levage",
  "Graissage & étanchéité",
  "Transmission mécanique",
  "Outillage industriel",
  "Pièces d'usure carrières",
  "Filtration & maintenance",
  "Produits techniques sur demande",
];

export function Catalogue() {
  return (
    <section id="catalogue" className="py-32 lg:py-40 bg-[var(--ivory)]">
      <div className="px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-[var(--navy)]">Catalogue B2B</span>
              </div>
            </div>
            <div className="lg:col-span-6">
              <h2 className="display-xl text-5xl lg:text-7xl xl:text-8xl text-[var(--navy)]">
                Des produits <span className="text-[var(--gold)]">techniques</span> pour chaque
                chaîne.
              </h2>
            </div>
            <div className="lg:col-span-3 flex lg:justify-end items-end">
              <Button variant="navy" size="lg" asChild>
                <Link to="/contact">
                  Catalogue complet <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border">
            {featured.map((c, i) => (
              <div
                key={c.title}
                className={`group relative aspect-[3/4] overflow-hidden bg-[var(--navy)] cursor-pointer ${
                  i < featured.length - 1 ? "lg:border-r border-border" : ""
                }`}
              >
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0.165 0.045 263 / 0.2) 0%, oklch(0.165 0.045 263 / 0.95) 100%)",
                  }}
                />
                <div className="absolute bottom-0 inset-x-0 p-6 lg:p-8">
                  <div className="eyebrow text-[var(--gold)] mb-3">{c.count}</div>
                  <h3 className="font-display text-2xl lg:text-3xl text-[var(--ivory)] leading-none">
                    {c.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Other categories — list */}
          <div className="mt-16 grid lg:grid-cols-12 gap-8 border-t border-[var(--navy)]/10 pt-10">
            <div className="lg:col-span-3">
              <span className="eyebrow text-[var(--navy)]/60">Autres familles</span>
            </div>
            <ul className="lg:col-span-9 grid sm:grid-cols-2 gap-x-8">
              {others.map((o) => (
                <li
                  key={o}
                  className="flex items-baseline gap-4 py-3 border-b border-[var(--navy)]/10"
                >
                  <span className="text-[var(--navy)] font-medium">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

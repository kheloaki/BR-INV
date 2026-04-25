import { ArrowUpRight } from "lucide-react";
import mining from "@/assets/sector-mining.jpg";
import construction from "@/assets/sector-construction.jpg";
import infra from "@/assets/sector-infrastructure.jpg";

const projects = [
  {
    img: mining,
    tag: "Mines & carrières",
    title: "Approvisionnement pièces d'usure",
    location: "Khouribga · Maroc · 2024",
  },
  {
    img: infra,
    tag: "Infrastructure",
    title: "Soutien matériel ouvrage d'art",
    location: "Axe autoroutier · Maroc · 2024",
  },
  {
    img: construction,
    tag: "BTP industriel",
    title: "Fourniture chantier complexe industriel",
    location: "Casablanca · Maroc · 2025",
  },
];

export function Projects() {
  return (
    <section className="py-32 lg:py-40 bg-[var(--ivory)]">
      <div className="px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-[var(--navy)]">Réalisations</span>
              </div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="display-xl text-5xl lg:text-7xl xl:text-8xl text-[var(--navy)] max-w-4xl">
                Des cas concrets qui parlent <span className="text-[var(--gold)]">d'expertise</span>
                .
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-px bg-[var(--navy)]/15">
            {projects.map((p) => (
              <article key={p.title} className="group cursor-pointer bg-[var(--ivory)] p-2">
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-[var(--gold)] text-[var(--navy-deep)] eyebrow">
                    {p.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 h-12 w-12 bg-[var(--ivory)] flex items-center justify-center text-[var(--navy)] opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl text-[var(--navy)] leading-none group-hover:text-[var(--gold)] transition-colors">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs eyebrow text-[var(--navy)]/50">{p.location}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

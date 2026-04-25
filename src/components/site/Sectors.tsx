import mining from "@/assets/sector-mining.jpg";
import construction from "@/assets/sector-construction.jpg";
import infra from "@/assets/sector-infrastructure.jpg";
import logistics from "@/assets/sector-logistics.jpg";
import equipment from "@/assets/sector-equipment.jpg";
import { ArrowUpRight } from "lucide-react";

const sectors = [
  { img: mining, title: "Mines", desc: "Pièces d'usure, criblage, maintenance lourde." },
  { img: equipment, title: "Carrières", desc: "Convoyeurs, vibration, levage industriel." },
  { img: construction, title: "BTP & industrie", desc: "Matériaux et équipements de chantier." },
  { img: infra, title: "Infrastructures", desc: "Routes, ouvrages d'art, projets publics." },
  { img: logistics, title: "Logistique", desc: "Coordination, livraison et flux export." },
];

export function Sectors() {
  return (
    <section
      id="secteurs"
      className="py-32 lg:py-40 bg-[var(--navy-deep)] text-[var(--ivory)] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-topo opacity-[0.05] mix-blend-screen" />

      <div className="relative px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-[var(--gold)]">Secteurs desservis</span>
              </div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="display-xl text-5xl lg:text-7xl xl:text-8xl text-[var(--ivory)] max-w-4xl">
                Là où l'industrie <span className="text-[var(--gold)]">avance</span>, nous
                intervenons.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 border-t border-l border-[var(--gold)]/20">
            {sectors.map((s, i) => (
              <article
                key={s.title}
                className={`group relative aspect-[3/4] overflow-hidden cursor-pointer border-r border-b border-[var(--gold)]/20 ${
                  i === 0
                    ? "col-span-2 row-span-2 lg:col-span-2 lg:row-span-1 aspect-[3/4] lg:aspect-auto"
                    : ""
                }`}
              >
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, oklch(0.165 0.045 263 / 0.2) 30%, oklch(0.165 0.045 263 / 0.95) 100%)",
                  }}
                />
                <div className="absolute top-4 right-4 h-10 w-10 bg-[var(--gold)] flex items-center justify-center text-[var(--navy-deep)] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-5 lg:p-6">
                  <h3
                    className={`font-display text-[var(--ivory)] leading-none ${i === 0 ? "text-4xl lg:text-6xl" : "text-2xl lg:text-3xl"}`}
                  >
                    {s.title}
                  </h3>
                  <div className="h-px w-10 bg-[var(--gold)] my-3" />
                  <p className="text-xs lg:text-sm text-[var(--ivory)]/60">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

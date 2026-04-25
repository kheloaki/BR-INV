import { ArrowUpRight } from "lucide-react";

const activities = [
  {
    title: "Construction & matériaux",
    desc: "Fourniture et accompagnement pour chantiers de bâtiment et génie civil.",
  },
  {
    title: "Infrastructures & aménagements",
    desc: "Soutien aux projets d'infrastructure routière, urbaine et industrielle.",
  },
  {
    title: "Logistique & transport",
    desc: "Coordination logistique, livraisons sécurisées sur sites distants.",
  },
  {
    title: "Commerce & distribution",
    desc: "Distribution multi-marques de produits industriels et techniques.",
  },
  {
    title: "Import-export",
    desc: "Sourcing international et flux export vers l'Afrique de l'Ouest et au-delà.",
  },
  {
    title: "Travaux publics",
    desc: "Appui technique et matériel pour entreprises de TP et concessionnaires.",
  },
  {
    title: "Équipement industriel",
    desc: "Moteurs, réducteurs, convoyeurs, transmissions et pièces critiques.",
  },
  {
    title: "Support mines & carrières",
    desc: "Pièces d'usure, criblage, vibration, levage et maintenance industrielle.",
  },
];

export function Activities() {
  return (
    <section
      id="activites"
      className="relative py-32 lg:py-40 bg-[var(--navy-deep)] text-[var(--ivory)] overflow-hidden"
    >
      <div className="absolute inset-0 bg-topo opacity-[0.06] mix-blend-screen" />

      <div className="relative px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-3">
                <span className="eyebrow text-[var(--gold)]">Domaines d'activité</span>
              </div>
            </div>
            <div className="lg:col-span-9">
              <h2 className="display-xl text-5xl lg:text-7xl xl:text-8xl text-[var(--ivory)] max-w-4xl">
                Une offre <span className="text-[var(--gold)]">multi-sectorielle</span> au service
                des projets industriels.
              </h2>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-[var(--gold)]/20">
            {activities.map(({ title, desc }, i) => (
              <div
                key={title}
                className={`group p-8 lg:p-10 border-b border-[var(--gold)]/20 cursor-pointer hover:bg-[var(--navy)] transition-colors duration-500 relative ${
                  (i + 1) % 4 !== 0 ? "lg:border-r border-[var(--gold)]/20" : ""
                } ${(i + 1) % 2 !== 0 ? "sm:border-r border-[var(--gold)]/20 lg:border-r" : ""}`}
              >
                <div className="flex items-start justify-between mb-12">
                  <ArrowUpRight className="h-5 w-5 text-[var(--ivory)]/30 group-hover:text-[var(--gold)] group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-500" />
                </div>
                <h3 className="font-display text-2xl lg:text-3xl text-[var(--ivory)] mb-4 group-hover:text-[var(--gold)] transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-[var(--ivory)]/55 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

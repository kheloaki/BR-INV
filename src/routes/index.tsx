import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { Activities } from "@/components/site/Activities";
import { Catalogue } from "@/components/site/Catalogue";
import { Sectors } from "@/components/site/Sectors";
import { WhyUs } from "@/components/site/WhyUs";
import { Partners } from "@/components/site/Partners";
import { Projects } from "@/components/site/Projects";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title:
          "BARANE INVEST — Groupe industriel marocain · Construction, infrastructure & équipement",
      },
      {
        name: "description",
        content:
          "BARANE INVEST : partenaire B2B pour la construction, l'infrastructure, la logistique, l'équipement industriel et le support mines & carrières au Maroc et en Afrique.",
      },
      { property: "og:title", content: "BARANE INVEST — Groupe industriel marocain" },
      {
        property: "og:description",
        content: "Construction, infrastructure, équipement industriel, mines & carrières.",
      },
    ],
  }),
});

function Index() {
  return (
    <PageLayout>
      <Hero />
      <TrustStrip />
      <About />
      <Activities />
      <Catalogue />
      <Sectors />
      <WhyUs />
      <Partners />
      <Projects />
      <ContactCTA />
    </PageLayout>
  );
}

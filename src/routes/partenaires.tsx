import { createFileRoute } from "@tanstack/react-router";
import { Partners } from "@/components/site/Partners";
import { Projects } from "@/components/site/Projects";
import { WhyUs } from "@/components/site/WhyUs";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/partenaires")({
  component: PartnersPage,
});

function PartnersPage() {
  return (
    <PageLayout>
      <div className="pt-20 lg:pt-24">
        <Partners />
        <Projects />
        <WhyUs />
        <ContactCTA />
      </div>
    </PageLayout>
  );
}

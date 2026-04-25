import { createFileRoute } from "@tanstack/react-router";
import { Sectors } from "@/components/site/Sectors";
import { Activities } from "@/components/site/Activities";
import { Projects } from "@/components/site/Projects";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/secteurs")({
  component: SectorsPage,
});

function SectorsPage() {
  return (
    <PageLayout>
      <div className="pt-20 lg:pt-24">
        <Sectors />
        <Activities />
        <Projects />
        <ContactCTA />
      </div>
    </PageLayout>
  );
}

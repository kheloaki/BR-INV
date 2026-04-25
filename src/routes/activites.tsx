import { createFileRoute } from "@tanstack/react-router";
import { Activities } from "@/components/site/Activities";
import { Sectors } from "@/components/site/Sectors";
import { Projects } from "@/components/site/Projects";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/activites")({
  component: ActivitiesPage,
});

function ActivitiesPage() {
  return (
    <PageLayout>
      <div className="pt-20 lg:pt-24">
        <Activities />
        <Sectors />
        <Projects />
        <ContactCTA />
      </div>
    </PageLayout>
  );
}

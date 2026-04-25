import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/site/Projects";
import { Sectors } from "@/components/site/Sectors";
import { Partners } from "@/components/site/Partners";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/projets")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageLayout>
      <div className="pt-20 lg:pt-24">
        <Projects />
        <Sectors />
        <Partners />
        <ContactCTA />
      </div>
    </PageLayout>
  );
}

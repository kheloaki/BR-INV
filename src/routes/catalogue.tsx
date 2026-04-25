import { createFileRoute } from "@tanstack/react-router";
import { Catalogue } from "@/components/site/Catalogue";
import { Partners } from "@/components/site/Partners";
import { Projects } from "@/components/site/Projects";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/catalogue")({
  component: CataloguePage,
});

function CataloguePage() {
  return (
    <PageLayout>
      <div className="pt-20 lg:pt-24">
        <Catalogue />
        <Partners />
        <Projects />
        <ContactCTA />
      </div>
    </PageLayout>
  );
}

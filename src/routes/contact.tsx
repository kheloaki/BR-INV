import { createFileRoute } from "@tanstack/react-router";
import { ContactCTA } from "@/components/site/ContactCTA";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Partners } from "@/components/site/Partners";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageLayout>
      <div className="pt-20 lg:pt-24">
        <About />
        <Projects />
        <Partners />
        <ContactCTA />
      </div>
    </PageLayout>
  );
}

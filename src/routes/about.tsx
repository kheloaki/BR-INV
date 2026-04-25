import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { Partners } from "@/components/site/Partners";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <div className="pt-20 lg:pt-24">
        <About />
        <WhyUs />
        <Partners />
        <ContactCTA />
      </div>
    </PageLayout>
  );
}

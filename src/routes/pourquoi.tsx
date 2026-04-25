import { createFileRoute } from "@tanstack/react-router";
import { WhyUs } from "@/components/site/WhyUs";
import { About } from "@/components/site/About";
import { Partners } from "@/components/site/Partners";
import { ContactCTA } from "@/components/site/ContactCTA";
import { PageLayout } from "@/components/site/PageLayout";

export const Route = createFileRoute("/pourquoi")({
  component: WhyPage,
});

function WhyPage() {
  return (
    <PageLayout>
      <div className="pt-20 lg:pt-24">
        <WhyUs />
        <About />
        <Partners />
        <ContactCTA />
      </div>
    </PageLayout>
  );
}

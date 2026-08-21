import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FeaturedPlanCard } from "@/components/plans/FeaturedPlanCard";
import { featuredPlans } from "@/lib/plans";

export function PricingPreview() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Abonnements"
          title="Ein fairer Preis für jede Laufzeit"
          description="Kurz reinschnuppern oder langfristig sparen — Sie entscheiden, wie lange Sie sich binden möchten."
        />

        <div className="grid w-full items-start gap-8 pt-4 lg:grid-cols-3">
          {featuredPlans.map((plan, index) => (
            <ScrollReveal key={plan.id} delay={((index % 3) + 1) as 1 | 2 | 3} className="grid h-full">
              <FeaturedPlanCard plan={plan} />
            </ScrollReveal>
          ))}
        </div>

        <Button href="/plans" variant="outline">
          Alle Abonnements vergleichen →
        </Button>
      </Container>
    </section>
  );
}

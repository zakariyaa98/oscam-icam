import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingTabs } from "@/components/plans/PricingTabs";

// Reuses the exact same duration-tab + pricing-card system already built for
// /plans (components/plans/PricingTabs + PricingCard, backed by
// lib/plans.ts) — same data, same prices, same features, same WhatsApp
// purchase links. Nothing pricing-related is duplicated; only the Home
// section's presentation changed from a static 3-plan preview to the full
// premium tabbed comparison.
export function PricingPreview() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Abonnements"
          title="Ein fairer Preis für jede Laufzeit"
          description="Kurz reinschnuppern oder langfristig sparen — Sie entscheiden, wie lange Sie sich binden möchten."
        />

        <PricingTabs />
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingTabs } from "@/components/plans/PricingTabs";

// Reuses the exact same package-tab + pricing-card system already built for
// /oscam-service (components/plans/PricingTabs + PricingCard, backed by
// lib/plans.ts) — same data, same prices, same WhatsApp links. Nothing
// pricing-related is duplicated; only the Home section's presentation.
export function PricingPreview() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Technischer Support"
          title="Support-Pakete für Ihre OSCam/iCam-Einrichtung"
          description="Von der einmaligen Basis-Einrichtung bis zum laufenden Premium-Support — Sie entscheiden, wie viel Begleitung Sie brauchen."
        />

        <PricingTabs />
      </Container>
    </section>
  );
}

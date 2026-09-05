import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FeaturedPlanCard } from "@/components/plans/FeaturedPlanCard";
import { featuredPlans } from "@/lib/plans";

export function PlansPreview() {
  return (
    <section className="border-b border-border bg-background-elevated/40 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Support-Pakete"
          title="Einrichtungspakete für OSCam & iCam"
          description="Persönliche Fernunterstützung bei der Einrichtung auf Ihrem Enigma2-Receiver — von der einmaligen Basis-Einrichtung bis zur laufenden Betreuung."
        />

        <div className="grid w-full items-start gap-6 pt-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPlans.map((plan) => (
            <ScrollReveal key={plan.id} className="h-full">
              <FeaturedPlanCard plan={plan} />
            </ScrollReveal>
          ))}
        </div>

        <p className="text-sm text-muted">
          Alle Pakete mit Preisstufen für 1–3 Receiver finden Sie auf der{" "}
          <Link
            href="/oscam-service"
            className="font-semibold text-aqua underline underline-offset-4 transition-colors hover:text-aqua-soft"
          >
            Support-Seite
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}

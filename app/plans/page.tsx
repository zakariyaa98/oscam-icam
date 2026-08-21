import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PricingTabs } from "@/components/plans/PricingTabs";

export const metadata: Metadata = {
  title: "IPTV Abonnement & Preise | Sub Zero IPTV",
  description:
    "Von 1 Monat bis 2 Jahre Laufzeit, 1 bis 3 Geräte gleichzeitig: Vergleichen Sie die Sub Zero IPTV Abonnements und finden Sie die passende Laufzeit.",
  alternates: {
    canonical: "/plans",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Sub Zero IPTV",
    url: "/plans",
    title: "IPTV Abonnement & Preise | Sub Zero IPTV",
    description: "Von 1 Monat bis 2 Jahre Laufzeit, 1 bis 3 Geräte gleichzeitig — jetzt vergleichen.",
    images: [{ url: "https://sub-zeroiptv.xyz/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://sub-zeroiptv.xyz/opengraph-image"],
    title: "IPTV Abonnement & Preise | Sub Zero IPTV",
    description: "Von 1 Monat bis 2 Jahre Laufzeit, 1 bis 3 Geräte gleichzeitig — jetzt vergleichen.",
  },
};

export default function PlansPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Tarife", href: "/plans" }]} />

      <section className="border-b border-border py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Abonnements"
            title="Wählen Sie Ihre Laufzeit, den Rest übernehmen wir"
            description="Jedes Abo enthält denselben vollen Funktionsumfang: 30.000+ Sender, eine riesige VOD-Bibliothek, EPG und Support rund um die Uhr. Sie entscheiden nur über Laufzeit und Geräteanzahl."
          />

          <PricingTabs />
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

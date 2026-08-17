import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PricingTabs } from "@/components/plans/PricingTabs";

export const metadata: Metadata = {
  title: "IPTV Abo – Pakete & Preise | Deutschland IPTV",
  description:
    "IPTV Abo bei Deutschland IPTV: 1 bis 24 Monate Laufzeit, 1 bis 3 Geräte. Transparente Preise, faire Angebote und sofortige Aktivierung – jetzt vergleichen.",
  alternates: {
    canonical: "/plans",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/plans",
    title: "IPTV Abo – Pakete & Preise | Deutschland IPTV",
    description:
      "IPTV Abo bei Deutschland IPTV: 1 bis 24 Monate Laufzeit, 1 bis 3 Geräte. Transparente Preise und sofortige Aktivierung.",
    images: [{ url: "https://deutschland-iptv.online/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/opengraph-image"],
    title: "IPTV Abo – Pakete & Preise | Deutschland IPTV",
    description:
      "IPTV Abo bei Deutschland IPTV: 1 bis 24 Monate Laufzeit, 1 bis 3 Geräte. Transparente Preise und sofortige Aktivierung.",
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
            eyebrow="Tarife"
            title="Das passende IPTV Abo für Sie"
            description="Jeder Tarif enthält den vollen Funktionsumfang: 30.000+ Sender, eine riesige VOD-Bibliothek, EPG und 24/7 Support. Wählen Sie einfach Ihre Laufzeit und Geräteanzahl."
          />

          <PricingTabs />
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

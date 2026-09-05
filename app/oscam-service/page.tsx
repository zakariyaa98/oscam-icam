import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { PricingTabs } from "@/components/plans/PricingTabs";

export const metadata: Metadata = {
  title: "OSCam iCam Support & Einrichtung – Pakete",
  description:
    "Technischer Support für die Einrichtung von OSCam und iCam auf Ihrem Enigma2-Receiver: von der Basis-Einrichtung bis zum laufenden Premium-Support.",
  keywords: ["OSCam Support", "OSCam Einrichtung", "OSCam Service", "iCam Support"],
  alternates: {
    canonical: "/oscam-service",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam-service",
    title: "OSCam iCam Support & Einrichtung – Pakete",
    description: "Von der Basis-Einrichtung bis zum laufenden Premium-Support — jetzt vergleichen.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSCam iCam Support & Einrichtung – Pakete",
    description: "Von der Basis-Einrichtung bis zum laufenden Premium-Support — jetzt vergleichen.",
  },
};

export default function OscamServicePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "Support", href: "/oscam-service" }]} />

      <section className="border-b border-border py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Technischer Support"
            title="OSCam iCam Support & Einrichtung"
            description="Wir unterstützen Sie persönlich bei der Konfiguration von OSCam oder iCam auf Ihrem Enigma2-Receiver — von der einmaligen Basis-Einrichtung bis zur laufenden Betreuung. Wir bieten keinen Zugang zu Kanälen oder Zugangsdaten an, sondern ausschließlich technische Unterstützung bei Ihrer eigenen, rechtmäßig erworbenen Konfiguration."
          />

          <PricingTabs />
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

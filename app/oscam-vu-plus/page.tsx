import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "OSCam auf VU+: Installation und wichtige Hinweise",
  description:
    "OSCam auf VU+ Receivern einrichten: Plugin-Feed, Bildvarianten wie OpenPLi und OpenATV sowie typische Besonderheiten bei VU+ Duo, Uno, Zero und Solo.",
  keywords: ["OSCam VU+", "OSCam VU+ Duo", "VU+ OSCam Einrichtung", "OSCam Enigma2 VU+"],
  alternates: {
    canonical: "/oscam-vu-plus",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam-vu-plus",
    title: "OSCam auf VU+: Installation und wichtige Hinweise",
    description: "Plugin-Feed, Bildvarianten und typische Besonderheiten bei VU+ Receivern.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSCam auf VU+: Installation und wichtige Hinweise",
    description: "Plugin-Feed, Bildvarianten und typische Besonderheiten bei VU+ Receivern.",
  },
};

export default function OscamVuPlusPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "OSCam VU+", href: "/oscam-vu-plus" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Receiver"
            title="OSCam auf VU+ Receivern einrichten"
            description="VU+ zählt zu den beliebtesten Enigma2-Marken — nicht zuletzt wegen der großen Auswahl an Images und dem gut gepflegten Plugin-Feed."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                VU+ Receiver wie Duo, Uno, Zero oder Solo laufen mit dem Enigma2-Betriebssystem und
                werden meist mit Bildvarianten wie OpenPLi oder OpenATV ausgeliefert oder nachträglich
                geflasht. Für beide Images ist{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam
                </Link>{" "}
                in der Regel direkt über den Plugin-Feed verfügbar, ohne dass eine manuelle
                IPK-Installation nötig wäre.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/streaming-technologie.png"
                alt="Symbolbild: Netzwerktechnik im Hintergrund einer VU+ Konfiguration"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Besonderheiten bei VU+
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>Großer, aktiv gepflegter Plugin-Feed bei OpenPLi und OpenATV.</li>
                <li>Mehrere Modellreihen (Duo, Uno, Zero, Solo) mit unterschiedlicher Hardware-Ausstattung, aber identischer Grundkonfiguration von OSCam.</li>
                <li>Ausreichend Rechenleistung für mehrere gleichzeitig aktive Reader auf den meisten Modellen.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Installation Schritt für Schritt
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die allgemeine Vorgehensweise — Plugin installieren, oscam.conf/oscam.server/oscam.user
                anpassen, Reader eintragen — ist bei VU+ identisch zu anderen Enigma2-Receivern. Eine
                ausführliche Schritt-für-Schritt-Anleitung finden Sie auf unserer Seite{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  OSCam installieren
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Brauchen Sie Unterstützung?</h2>
              <p className="text-sm leading-relaxed text-muted">
                Unser{" "}
                <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
                  Support-Team
                </Link>{" "}
                hilft bei der Einrichtung von OSCam oder iCam auf Ihrem VU+ Receiver, wenn Sie einmal
                nicht weiterkommen.
              </p>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

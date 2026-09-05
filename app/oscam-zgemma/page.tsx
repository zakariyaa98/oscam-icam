import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "OSCam auf Zgemma: Einrichtung und wichtige Hinweise",
  description:
    "OSCam auf Zgemma Receivern (H9, H9S, H9 Combo) einrichten: Plugin-Feed, Performance-Hinweise und worauf Sie bei der Konfiguration achten sollten.",
  keywords: ["OSCam Zgemma", "Zgemma OSCam Einrichtung", "OSCam H9", "OSCam Enigma2 Zgemma"],
  alternates: {
    canonical: "/oscam-zgemma",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam-zgemma",
    title: "OSCam auf Zgemma: Einrichtung und wichtige Hinweise",
    description: "Plugin-Feed, Performance-Hinweise und worauf Sie bei der Konfiguration achten sollten.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSCam auf Zgemma: Einrichtung und wichtige Hinweise",
    description: "Plugin-Feed, Performance-Hinweise und worauf Sie bei der Konfiguration achten sollten.",
  },
};

export default function OscamZgemmaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "OSCam Zgemma", href: "/oscam-zgemma" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Receiver"
            title="OSCam auf Zgemma Receivern einrichten"
            description="Zgemma-Geräte wie H9, H9S oder H9 Combo bieten einen günstigen Einstieg in Enigma2 mit vollwertiger OSCam-Unterstützung."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                Zgemma-Receiver laufen meist mit OpenATV oder OpenPLi und unterstützen{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam
                </Link>{" "}
                genau wie andere Enigma2-Geräte über den Plugin-Feed. Die Hardware fällt bei manchen
                Modellen etwas leistungsschwächer aus als bei Premium-Receivern, was bei sehr
                umfangreichen Konfigurationen spürbar sein kann.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/streaming-technologie.png"
                alt="Symbolbild: Netzwerktechnik im Hintergrund einer Zgemma-Konfiguration"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Besonderheiten bei Zgemma
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>Günstiger Einstieg mit vollwertiger Enigma2- und OSCam-Unterstützung.</li>
                <li>Bei sehr vielen gleichzeitig aktiven Readern lohnt sich eine schlanke, aufgeräumte Konfiguration.</li>
                <li>Modelle wie der H9 Combo unterstützen zusätzlich DVB-C/T2 neben Satellitenempfang.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Installation Schritt für Schritt
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die Installation läuft nach demselben Grundprinzip wie bei anderen Enigma2-Receivern
                ab. Eine ausführliche Anleitung finden Sie auf unserer Seite{" "}
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
                hilft bei der Einrichtung von OSCam oder iCam auf Ihrer Zgemma, wenn Sie einmal nicht
                weiterkommen.
              </p>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

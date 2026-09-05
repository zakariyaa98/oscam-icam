import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "OSCam auf Dreambox: Einrichtung und Besonderheiten",
  description:
    "OSCam auf Dreambox Receivern (DM900, DM920, DM520) einrichten: Unterschiede zwischen den Bildvarianten und worauf Sie bei der Konfiguration achten sollten.",
  keywords: ["OSCam Dreambox", "Dreambox OSCam Einrichtung", "OSCam DM900", "OSCam Enigma2 Dreambox"],
  alternates: {
    canonical: "/oscam-dreambox",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam-dreambox",
    title: "OSCam auf Dreambox: Einrichtung und Besonderheiten",
    description: "Unterschiede zwischen den Bildvarianten und worauf Sie bei der Konfiguration achten sollten.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSCam auf Dreambox: Einrichtung und Besonderheiten",
    description: "Unterschiede zwischen den Bildvarianten und worauf Sie bei der Konfiguration achten sollten.",
  },
};

export default function OscamDreamboxPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "OSCam Dreambox", href: "/oscam-dreambox" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Receiver"
            title="OSCam auf Dreambox Receivern einrichten"
            description="Dreambox-Modelle wie DM900, DM920 oder DM520 laufen mit unterschiedlichen Enigma2-Bildvarianten — die Grundkonfiguration von OSCam bleibt dabei nahezu identisch."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                Dreambox-Receiver werden je nach Modell mit unterschiedlichen Enigma2-Images
                ausgeliefert, etwa OpenDroid oder Dream Elite. Für{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam
                </Link>{" "}
                ändert das wenig an der grundsätzlichen Vorgehensweise, allerdings kann die
                Bezeichnung einzelner Menüpunkte je nach installiertem Image leicht abweichen.
              </p>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/streaming-technologie.png"
                alt="Symbolbild: Netzwerktechnik im Hintergrund einer Dreambox-Konfiguration"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Besonderheiten bei Dreambox
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>Mehrere herstellereigene und community-basierte Bildvarianten mit teils abweichender Menüführung.</li>
                <li>Aktuelle Modelle (DM900, DM920) bieten ausreichend Leistung für mehrere gleichzeitige Reader.</li>
                <li>Ältere Modelle profitieren von einer aufgeräumten, sparsamen OSCam-Konfiguration.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Installation Schritt für Schritt
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Prüfen Sie zunächst, welches Image auf Ihrer Dreambox installiert ist, um die passende
                Menüführung für Plugin-Installation und Bouquet-Verwaltung zu finden. Die allgemeine
                Vorgehensweise ist auf unserer Seite{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  OSCam installieren
                </Link>{" "}
                beschrieben.
              </p>
            </section>

            <section className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Brauchen Sie Unterstützung?</h2>
              <p className="text-sm leading-relaxed text-muted">
                Unser{" "}
                <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
                  Support-Team
                </Link>{" "}
                hilft bei der Einrichtung von OSCam oder iCam auf Ihrer Dreambox, wenn Sie einmal
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

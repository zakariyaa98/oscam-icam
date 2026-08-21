import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "IPTV auf Android TV & Android-Box: maximale Flexibilität",
  description:
    "Voller Play-Store-Zugriff, direkte APK-Installation: So läuft Sub Zero IPTV auf Android TV und Android-Boxen.",
  keywords: ["IPTV Android TV", "IPTV Deutschland", "IPTV Abonnement"],
  alternates: {
    canonical: "/iptv-android-tv",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Sub Zero IPTV",
    url: "/iptv-android-tv",
    title: "IPTV auf Android TV & Android-Box: maximale Flexibilität",
    description: "Sub Zero IPTV auf Android TV und Android-Boxen einrichten — mit Hinweisen zur passenden Hardware.",
    images: [{ url: "https://sub-zeroiptv.xyz/images/android-tv-box.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://sub-zeroiptv.xyz/images/android-tv-box.png"],
    title: "IPTV auf Android TV & Android-Box: maximale Flexibilität",
    description: "Sub Zero IPTV auf Android TV und Android-Boxen einrichten — mit Hinweisen zur passenden Hardware.",
  },
};

export default function IptvAndroidTvPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV Android TV", href: "/iptv-android-tv" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Android TV"
            title="Die flexibelste Plattform für IPTV"
            description="Voller Play-Store-Zugriff und direkte APK-Installation — ideal für alle, die volle Kontrolle über die App-Wahl möchten."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              Android TV und klassische Android-Boxen bieten den größten Funktionsumfang unter
              den IPTV Playern: vollen Zugriff auf den Google Play Store, direkte
              APK-Installation und meist ein besseres Preis-Leistungs-Verhältnis als vergleichbare
              Markengeräte.
            </p>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Android TV oder generische Android-Box?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Android TV ist Googles offizielles Betriebssystem für Fernseher und
                Streaming-Boxen, mit einheitlicher Oberfläche und Play-Store-Zertifizierung.
                Günstigere Android-Boxen anderer Hersteller laufen oft mit einer angepassten
                Version ohne die offizielle TV-Oberfläche — IPTV Apps lassen sich aber meist
                trotzdem problemlos per APK installieren.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Worauf Sie bei der Hardware achten sollten
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die Leistung unterscheidet sich stark zwischen den Modellen. Für ein flüssiges
                Erlebnis empfehlen wir mindestens 2 GB RAM und ein aktuelles Android TV OS mit
                zuverlässigem HEVC-Decoder — besonders wichtig für 4K und Sport mit hoher
                Bildrate.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Installation in wenigen Schritten</h2>
              <p className="text-base leading-relaxed text-muted">
                App wie TiviMate oder IBO Player aus dem Play Store oder per APK laden, Sub Zero
                IPTV Zugangsdaten eingeben — die Senderliste lädt automatisch. Die ausführliche
                Anleitung finden Sie unter{" "}
                <Link href="/blog/iptv-device-setup-guide" className="text-aqua underline underline-offset-4">
                  IPTV auf Ihren Geräten einrichten
                </Link>
                , oder einen App-Vergleich in{" "}
                <Link href="/blog/tivimate-vs-ibo-player" className="text-aqua underline underline-offset-4">
                  TiviMate vs. IBO Player
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Andere Geräte im Vergleich</h2>
              <p className="text-base leading-relaxed text-muted">
                Nicht sicher, ob Android TV das Richtige für Sie ist? Ein direkter Vergleich mit
                Fire TV Stick und Apple TV steht in{" "}
                <Link href="/blog/best-iptv-devices-2026" className="text-aqua underline underline-offset-4">
                  Die besten Geräte für IPTV
                </Link>
                . Sub Zero IPTV läuft ebenso zuverlässig auf einem{" "}
                <Link href="/iptv-fire-tv-stick" className="text-aqua underline underline-offset-4">
                  Fire TV Stick
                </Link>{" "}
                oder einem{" "}
                <Link href="/iptv-smart-tv" className="text-aqua underline underline-offset-4">
                  Smart TV
                </Link>
                . Den passenden Tarif finden Sie auf unserer{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  Tarifseite
                </Link>
                .
              </p>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "IPTV für Android TV – Installation & Anleitung",
  description:
    "IPTV auf Android TV und Android-Boxen nutzen: Kompatibilität, Installation und Tipps für flüssiges Streaming mit Deutschland IPTV.",
  keywords: ["IPTV für Android TV", "IPTV Android TV", "IPTV auf Android TV", "IPTV Android"],
  alternates: {
    canonical: "/iptv-android-tv",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/iptv-android-tv",
    title: "IPTV für Android TV – Installation & Anleitung",
    description: "Deutschland IPTV auf Android TV und Android-Boxen installieren — mit Tipps zur richtigen Hardware.",
    images: [{ url: "https://deutschland-iptv.online/images/android-tv-box.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/android-tv-box.png"],
    title: "IPTV für Android TV – Installation & Anleitung",
    description: "Deutschland IPTV auf Android TV und Android-Boxen installieren — mit Tipps zur richtigen Hardware.",
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
            title="IPTV für Android TV und Android-Boxen"
            description="Die flexibelste Plattform für IPTV: voller Zugriff auf den Play Store und direkte APK-Installation."
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
                Android TV im Vergleich zur generischen Android-Box
              </h2>
              <p className="text-base leading-relaxed text-muted">
                „Android TV“ bezeichnet Googles offizielles Betriebssystem für Fernseher und
                Streaming-Boxen, mit einheitlicher Oberfläche und Play-Store-Zertifizierung.
                Günstigere „Android-Boxen“ anderer Hersteller laufen oft mit einer angepassten
                Android-Version ohne die offizielle TV-Oberfläche — IPTV Apps lassen sich darauf
                aber meist trotzdem problemlos per APK installieren.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Worauf Sie bei der Hardware achten sollten
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die Leistung unterscheidet sich stark zwischen den Modellen. Für ein flüssiges
                Erlebnis empfehlen wir mindestens 2 GB RAM und ein aktuelles Android TV OS mit
                zuverlässigem HEVC-Decoder — besonders wichtig für 4K-Inhalte und Sport mit hoher
                Bildrate.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Installation</h2>
              <p className="text-base leading-relaxed text-muted">
                Laden Sie eine IPTV App wie TiviMate oder IBO Player aus dem Play Store oder per
                APK herunter, geben Sie Ihre Deutschland IPTV Zugangsdaten ein, und die
                Senderliste lädt automatisch. Die ausführliche Schritt-für-Schritt-Anleitung
                finden Sie unter{" "}
                <Link href="/blog/iptv-device-setup-guide" className="text-aqua underline underline-offset-4">
                  IPTV auf Ihren Geräten einrichten
                </Link>
                , oder einen App-Vergleich in{" "}
                <Link
                  href="/blog/tivimate-vs-ibo-player"
                  className="text-aqua underline underline-offset-4"
                >
                  TiviMate vs. IBO Player
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Andere Geräte im Vergleich</h2>
              <p className="text-base leading-relaxed text-muted">
                Nicht sicher, ob Android TV das Richtige für Sie ist? Einen direkten Vergleich mit
                Fire TV Stick und Apple TV finden Sie in{" "}
                <Link
                  href="/blog/best-iptv-devices-2026"
                  className="text-aqua underline underline-offset-4"
                >
                  Die besten Geräte für IPTV
                </Link>
                . Deutschland IPTV läuft genauso zuverlässig auf einem{" "}
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

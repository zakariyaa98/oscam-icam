import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "IPTV auf dem Fire TV Stick: startklar in Minuten",
  description:
    "Der Fire TV Stick gehört zu den beliebtesten IPTV Geräten. So läuft Sub Zero IPTV darauf — von der App-Wahl bis zum ersten Sender.",
  keywords: ["IPTV Fire TV Stick", "IPTV Deutschland", "IPTV Abonnement"],
  alternates: {
    canonical: "/iptv-fire-tv-stick",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Sub Zero IPTV",
    url: "/iptv-fire-tv-stick",
    title: "IPTV auf dem Fire TV Stick: startklar in Minuten",
    description: "Wie Sub Zero IPTV auf dem Amazon Fire TV Stick läuft — vom Auspacken bis zum ersten Sender.",
    images: [{ url: "https://sub-zeroiptv.xyz/images/fire-tv-stick.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://sub-zeroiptv.xyz/images/fire-tv-stick.png"],
    title: "IPTV auf dem Fire TV Stick: startklar in Minuten",
    description: "Wie Sub Zero IPTV auf dem Amazon Fire TV Stick läuft — vom Auspacken bis zum ersten Sender.",
  },
};

const faqItems = [
  {
    question: "Welcher Fire TV Stick eignet sich für IPTV am besten?",
    answer: "Für HD- und Full-HD-Sender genügt der Standard-Stick. Für 4K empfehlen wir den Fire TV Stick 4K oder 4K Max.",
  },
  {
    question: "Welche App funktioniert am besten?",
    answer: "IPTV Smarters Pro eignet sich gut für Einsteiger, TiviMate bietet mehr Anpassungsoptionen für Fortgeschrittene.",
  },
  {
    question: "Wie installiere ich eine App, die nicht im Amazon App Store gelistet ist?",
    answer: "Über die kostenlose „Downloader“-App, nach Aktivierung von „Apps aus unbekannten Quellen“ in den Entwickleroptionen.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function IptvFireTvStickPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV Fire TV Stick", href: "/iptv-fire-tv-stick" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Fire TV Stick"
            title="Vom HDMI-Anschluss zum ersten Sender in Minuten"
            description="Kaum ein Gerät macht IPTV so unkompliziert wie der Fire TV Stick — günstig, kompakt, sofort einsatzbereit."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              Einfach in den HDMI-Anschluss des Fernsehers stecken, und schon steht ein
              Smart-TV-Erlebnis bereit. Dank großer App-Auswahl über den Amazon App Store und
              zusätzlichen Sideloading-Optionen läuft IPTV auf dem Fire TV Stick zuverlässig. Eine
              allgemeine Einführung finden Sie in unserem Artikel{" "}
              <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                IPTV Service
              </Link>
              .
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/fire-tv-stick.png"
                alt="IPTV Fire TV Stick im HDMI-Anschluss eines Fernsehers"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Warum sich der Stick für IPTV so gut eignet
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>Plug and Play: HDMI rein, kein weiterer Aufwand nötig.</li>
                <li>Große App-Auswahl über den Store oder eine Downloader-App.</li>
                <li>Fernbedienung mit Alexa-Sprachsteuerung für einfache Navigation.</li>
                <li>Erhältlich in mehreren Leistungsstufen — von HD bis 4K Max.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">So geht die Einrichtung</h2>
              <p className="text-base leading-relaxed text-muted">
                App über den integrierten Store oder eine Downloader-App installieren, Sub Zero
                IPTV Zugangsdaten oder Playlist-URL eingeben — fertig. Die vollständige Anleitung
                mit App-Vergleich finden Sie in unserem Artikel{" "}
                <Link href="/blog/iptv-fire-tv-stick-setup-guide" className="text-aqua underline underline-offset-4">
                  IPTV auf dem Fire TV Stick installieren
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Welches Modell passt zu Ihnen?</h2>
              <p className="text-base leading-relaxed text-muted">
                Für Full-HD-Sender reicht der Standard-Stick meist aus. Für 4K empfehlen wir den
                Fire TV Stick 4K oder 4K Max. Einen Vergleich mit weiteren Geräten finden Sie in{" "}
                <Link href="/blog/best-iptv-devices-2026" className="text-aqua underline underline-offset-4">
                  Die besten Geräte für IPTV
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Nicht das richtige Gerät?</h2>
              <p className="text-base leading-relaxed text-muted">
                Sub Zero IPTV funktioniert genauso gut auf{" "}
                <Link href="/iptv-smart-tv" className="text-aqua underline underline-offset-4">
                  Samsung- und LG-Smart-TVs
                </Link>{" "}
                oder einer{" "}
                <Link href="/iptv-android-tv" className="text-aqua underline underline-offset-4">
                  Android-TV-Box
                </Link>
                . Alle Abonnements finden Sie auf unserer{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  Tarifseite
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Häufig gestellte Fragen</h2>
              <div className="flex flex-col gap-4">
                {faqItems.map((item) => (
                  <details key={item.question} className="group rounded-xl border border-border bg-background p-5">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-foreground marker:content-none">
                      {item.question}
                    </summary>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

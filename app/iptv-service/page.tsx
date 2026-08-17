import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "IPTV Service – TV ohne Kabelanschluss erklärt",
  description:
    "IPTV Service einfach erklärt: wie es funktioniert, die Vorteile gegenüber Kabel-TV und worauf Sie bei der Anbieterwahl achten sollten. Jetzt informieren.",
  keywords: [
    "IPTV Service",
    "IPTV Dienst",
    "was ist IPTV",
    "TV über Internet schauen",
    "IPTV ohne Kabel",
    "Premium IPTV",
  ],
  alternates: {
    canonical: "/iptv-service",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Deutschland IPTV",
    url: "/iptv-service",
    title: "IPTV Service – TV ohne Kabelanschluss erklärt",
    description:
      "Wie IPTV funktioniert, die Vorteile und wie Sie den richtigen Anbieter wählen — verständlich erklärt von Deutschland IPTV.",
    images: [{ url: "https://deutschland-iptv.online/images/streaming-technologie.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://deutschland-iptv.online/images/streaming-technologie.png"],
    title: "IPTV Service – TV ohne Kabelanschluss erklärt",
    description:
      "Wie IPTV funktioniert, die Vorteile und wie Sie den richtigen Anbieter wählen — verständlich erklärt von Deutschland IPTV.",
  },
};

const faqItems = [
  {
    question: "Was ist IPTV und wie funktioniert es?",
    answer:
      "IPTV (Internet Protocol Television) überträgt TV-Inhalte über Ihre bestehende Internetverbindung statt über Kabel, Satellit oder terrestrischen Empfang. Sie benötigen lediglich ein internetfähiges Gerät und eine IPTV App, um Live-TV, einen EPG und eine VOD-Bibliothek zu erhalten.",
  },
  {
    question: "Benötige ich eine Mindestvertragslaufzeit für IPTV?",
    answer:
      "Nein. Deutschland IPTV bietet flexible Tarife mit 6 Monaten, 1 Jahr oder 2 Jahren Laufzeit ohne automatische Verlängerung.",
  },
  {
    question: "Wie schnell wird mein IPTV Zugang aktiviert?",
    answer:
      "In der Regel erhalten Sie Ihre Zugangsdaten innerhalb weniger Minuten nach Bestätigung Ihrer Bestellung über WhatsApp.",
  },
  {
    question: "Funktioniert IPTV mit jeder Internetverbindung?",
    answer:
      "Für flüssiges HD-Streaming empfehlen wir mindestens 10 Mbit/s, für 4K-Inhalte idealerweise 25 Mbit/s oder mehr — die meisten modernen Breitbandanschlüsse erfüllen das problemlos.",
  },
  {
    question: "Ist IPTV legal?",
    answer:
      "Die Nutzung eines IPTV Dienstes mit ordnungsgemäß lizenzierten Inhalten ist legal. Achten Sie auf einen Anbieter, der transparent, vertrauenswürdig ist und ein legitimes Geschäftsmodell hat.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function IptvServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Breadcrumbs
        items={[{ label: "Startseite", href: "/" }, { label: "IPTV Service", href: "/iptv-service" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="IPTV Service"
            title="IPTV — modernes Fernsehen ohne Kabelanschluss"
            description="Alles Wichtige über IPTV auf einen Blick — verständlich erklärt, mit direkten Links zu ausführlichen Guides."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                IPTV (Internet Protocol Television) hat sich zu einer modernen Alternative zu
                klassischem Kabel- und Satelliten-TV entwickelt. Statt an feste Sendezeiten und
                einen physischen Anschluss gebunden zu sein, streamen Sie Live-TV, Filme und
                Serien direkt über Ihre bestehende Internetverbindung — auf Ihrem Smart TV,
                Smartphone, Tablet oder PC. Wer komplett auf Kabel verzichten möchte, findet in
                unserem Artikel{" "}
                <Link href="/blog/iptv-vs-cable-tv" className="text-aqua underline underline-offset-4">
                  IPTV vs. Kabel-TV
                </Link>{" "}
                die einzelnen Schritte.
              </p>
              <p>
                Deutschland IPTV bündelt Tausende Sender sowie eine umfangreiche VOD-Bibliothek in
                einem einzigen Abo, mit stabilen Servern und persönlichem Support. Eine
                ausführliche Anleitung finden Sie in unserem{" "}
                <Link href="/blog/iptv-guide-2026" className="text-aqua underline underline-offset-4">
                  vollständigen IPTV Guide 2026
                </Link>
                .
              </p>
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was ist IPTV und wie funktioniert es?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Technisch gesehen erhalten Sie nach der Anmeldung persönliche Zugangsdaten oder
                eine Playlist-URL, mit denen eine IPTV App die verfügbaren Sender, den
                elektronischen Programmführer (EPG) und oft auch eine Bibliothek an Filmen und
                Serien lädt. Im Kern funktioniert IPTV wie digitaler TV-Empfang, der vollständig
                über das offene Internet läuft — ganz ohne Antenne oder Kabelanschluss.
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/streaming-technologie.png"
                  alt="IPTV Streaming-Technologie auf mehreren Geräten"
                  fill
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Deutschland IPTV auf einen Blick
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>30.000+ Sender in HD, Full HD und 4K</li>
                <li>Filme und Serien (VOD) inklusive</li>
                <li>Elektronischer Programmführer (EPG) für volle Übersicht</li>
                <li>Kompatibel mit Smart TV, Fire TV Stick, Android TV, iPhone, Android und PC</li>
                <li>Persönlicher Kundenservice über WhatsApp</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                IPTV im Vergleich zu Kabel- und Satelliten-TV
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Klassisches Kabel- oder Satelliten-TV bindet Sie an einen festen Anschluss, oft
                mit separater Empfangsgebühr und begrenzter Senderauswahl. IPTV dagegen läuft über
                Ihre bereits vorhandene Internetverbindung, bietet ein deutlich größeres Angebot
                an Sendern und Inhalten und funktioniert unabhängig von einem einzelnen Gerät —
                vom Wohnzimmer-TV bis zum Smartphone unterwegs. Einen vollständigen
                Kostenvergleich und die technischen Voraussetzungen für den Umstieg finden Sie in
                unserem Artikel{" "}
                <Link href="/blog/iptv-vs-cable-tv" className="text-aqua underline underline-offset-4">
                  IPTV vs. Kabel-TV
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Den passenden IPTV Anbieter finden
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nicht jeder Anbieter liefert die gleiche Qualität. Serverstabilität, transparente
                Preise und echter Kundenservice machen den Unterschied. Unser Ratgeber{" "}
                <Link href="/iptv-providers" className="text-aqua underline underline-offset-4">
                  IPTV Anbieter
                </Link>{" "}
                erklärt genau, worauf Sie achten sollten, und{" "}
                <Link href="/best-iptv-service" className="text-aqua underline underline-offset-4">
                  Bester IPTV Anbieter
                </Link>{" "}
                vergleicht die wichtigsten Qualitätskriterien. Unser Artikel{" "}
                <Link
                  href="/blog/best-iptv-providers-2026"
                  className="text-aqua underline underline-offset-4"
                >
                  Beste IPTV Anbieter 2026
                </Link>{" "}
                bietet zusätzlich einen direkten Anbietervergleich mit Checkliste.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                IPTV auf Ihren Geräten nutzen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Deutschland IPTV läuft auf nahezu jedem internetfähigen Gerät. Ausführliche
                Einrichtungsanleitungen finden Sie für{" "}
                <Link href="/iptv-fire-tv-stick" className="text-aqua underline underline-offset-4">
                  Fire TV Stick
                </Link>
                , für{" "}
                <Link href="/iptv-smart-tv" className="text-aqua underline underline-offset-4">
                  Samsung und LG Smart TVs
                </Link>{" "}
                und für{" "}
                <Link href="/iptv-android-tv" className="text-aqua underline underline-offset-4">
                  Android TV und Android-Boxen
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Häufig gestellte Fragen zu IPTV</h2>
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Was ist IPTV? Der IPTV Service einfach erklärt",
  description:
    "IPTV verständlich erklärt: wie der Service funktioniert, was ihn von Kabel-TV unterscheidet und worauf Sie bei der Anbieterwahl achten sollten.",
  keywords: ["IPTV Deutschland", "was ist IPTV", "IPTV Abonnement", "IPTV Premium"],
  alternates: {
    canonical: "/iptv-service",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Sub Zero IPTV",
    url: "/iptv-service",
    title: "Was ist IPTV? Der IPTV Service einfach erklärt",
    description: "Wie IPTV funktioniert und worauf es bei der Anbieterwahl ankommt — verständlich erklärt.",
    images: [{ url: "https://www.sub-zeroiptv.xyz/images/streaming-technologie.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.sub-zeroiptv.xyz/images/streaming-technologie.png"],
    title: "Was ist IPTV? Der IPTV Service einfach erklärt",
    description: "Wie IPTV funktioniert und worauf es bei der Anbieterwahl ankommt — verständlich erklärt.",
  },
};

const faqItems = [
  {
    question: "Was genau ist ein IPTV Service?",
    answer:
      "Ein Dienst, der Fernsehprogramme über Ihre Internetverbindung liefert, statt über Kabel, Satellit oder Antenne. Sie benötigen lediglich ein internetfähiges Gerät und eine passende App.",
  },
  {
    question: "Muss ich mich langfristig binden?",
    answer: "Nein. Sub Zero IPTV bietet Laufzeiten von 6 Monaten bis 2 Jahren, ohne automatische Verlängerung.",
  },
  {
    question: "Wie lange dauert die Aktivierung meines Zugangs?",
    answer: "In der Regel wenige Minuten nach Bestätigung Ihrer Bestellung über WhatsApp.",
  },
  {
    question: "Reicht meine Internetverbindung dafür aus?",
    answer:
      "Für HD genügen meist 10 Mbit/s, für 4K empfehlen wir 25 Mbit/s oder mehr — die meisten Haushalte erfüllen das problemlos.",
  },
  {
    question: "Ist IPTV legal?",
    answer: "Ja, solange der Anbieter über ordnungsgemäß lizenzierte Inhalte verfügt.",
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

export default function IptvServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV Service", href: "/iptv-service" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Grundlagen"
            title="IPTV in drei Minuten verstanden"
            description="Kein Techniker-Termin, keine Satellitenschüssel — nur eine App und eine Internetverbindung. Hier ist, was dahintersteckt."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                IPTV steht für Internet Protocol Television: Statt über Kabel, Satellit oder
                Antenne läuft das Programm als Datenstrom über Ihre bestehende
                Internetverbindung — auf Smart TV, Smartphone, Tablet oder PC. Wer ganz auf Kabel
                verzichten möchte, findet die einzelnen Schritte in unserem Artikel{" "}
                <Link href="/blog/iptv-vs-cable-tv" className="text-aqua underline underline-offset-4">
                  IPTV vs. Kabel-TV
                </Link>
                .
              </p>
              <p>
                Sub Zero IPTV bündelt Tausende Sender sowie eine umfangreiche Filmbibliothek in
                einem Abo, mit stabilen Servern und Support auf Deutsch. Eine ausführliche
                Einführung finden Sie in unserem{" "}
                <Link href="/blog/iptv-guide-2026" className="text-aqua underline underline-offset-4">
                  IPTV Ratgeber 2026
                </Link>
                .
              </p>
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Wie IPTV im Alltag funktioniert
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nach der Anmeldung erhalten Sie Zugangsdaten oder eine Playlist-URL. Eine App auf
                Ihrem Gerät lädt damit automatisch die verfügbaren Sender, den elektronischen
                Programmführer (EPG) und meist auch eine Bibliothek an Filmen und Serien — im
                Kern digitaler TV-Empfang, der vollständig über das Internet läuft.
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
                Was im Sub Zero IPTV Abo steckt
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>30.000+ Sender in HD, Full HD und 4K</li>
                <li>Filme und Serien auf Abruf (VOD)</li>
                <li>Elektronischer Programmführer für volle Übersicht</li>
                <li>Kompatibel mit Smart TV, Fire TV Stick, Android TV, iPhone, Android und PC</li>
                <li>Support-Team auf Deutsch, direkt über WhatsApp erreichbar</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                IPTV gegenüber Kabel und Satellit
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Klassisches Kabel- oder Satelliten-TV bindet Sie an einen festen Anschluss, oft
                mit separater Gebühr und begrenzter Senderauswahl. IPTV läuft über Ihre bereits
                vorhandene Internetverbindung und funktioniert unabhängig von einem einzelnen
                Gerät. Details zum Umstieg finden Sie in unserem Artikel{" "}
                <Link href="/blog/iptv-vs-cable-tv" className="text-aqua underline underline-offset-4">
                  IPTV vs. Kabel-TV
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Bevor Sie sich für einen Anbieter entscheiden
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nicht jeder Anbieter liefert dieselbe Qualität. Serverstabilität, transparente
                Preise und echter Support machen den Unterschied. Unsere Seite{" "}
                <Link href="/iptv-providers" className="text-aqua underline underline-offset-4">
                  IPTV Anbieter
                </Link>{" "}
                zeigt, worauf Sie achten sollten, und{" "}
                <Link href="/best-iptv-service" className="text-aqua underline underline-offset-4">
                  Bester IPTV Anbieter
                </Link>{" "}
                fasst die wichtigsten Qualitätskriterien zusammen.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Einrichtung auf Ihrem Gerät
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Sub Zero IPTV läuft auf nahezu jedem internetfähigen Gerät. Anleitungen finden Sie
                für den{" "}
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

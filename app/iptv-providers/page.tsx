import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "IPTV Anbieter Deutschland: Seriös von unseriös unterscheiden",
  description:
    "Warnzeichen und Vertrauenssignale bei der Wahl eines IPTV Anbieters in Deutschland — mit Checkliste für Ihre Entscheidung.",
  keywords: ["IPTV Anbieter Deutschland", "IPTV Deutschland", "IPTV Vergleich", "IPTV Bewertungen"],
  alternates: {
    canonical: "/iptv-providers",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "Sub Zero IPTV",
    url: "/iptv-providers",
    title: "IPTV Anbieter Deutschland: Seriös von unseriös unterscheiden",
    description: "Warnzeichen und Vertrauenssignale bei der Anbieterwahl — mit Checkliste.",
    images: [{ url: "https://sub-zeroiptv.xyz/images/streaming-app.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://sub-zeroiptv.xyz/images/streaming-app.png"],
    title: "IPTV Anbieter Deutschland: Seriös von unseriös unterscheiden",
    description: "Warnzeichen und Vertrauenssignale bei der Anbieterwahl — mit Checkliste.",
  },
};

const warningSigns = [
  "Kein Kontakt vor dem Kauf möglich — nur ein anonymes Bestellformular.",
  "Widersprüchliche Preise ohne erkennbare Tarifstruktur.",
  "Keine Angaben zu Senderanzahl, Qualität oder unterstützten Geräten.",
  "Support bleibt nach der Zahlung plötzlich stumm.",
  "Auffällig viele, aber austauschbare Fünf-Sterne-Bewertungen ohne Details.",
];

const trustSignals = [
  "Direkter, persönlicher Kontakt über WhatsApp — schon vor dem Kauf.",
  "Klar angegebene Laufzeit und ein fester Preis, ohne Kleingedrucktes.",
  "Transparente Informationen zu Sendern, Qualität und Geräten.",
  "Schnelle Aktivierung und Support, der auch nach dem Kauf erreichbar bleibt.",
];

const checklistQuestions = [
  "Wie schnell antwortet der Support auf eine erste Nachricht?",
  "Sind Laufzeit, Preis und Senderauswahl klar kommuniziert?",
  "Funktioniert der Service auf meinem konkreten Gerät?",
  "Gibt es einen erreichbaren Kontakt bei technischen Problemen?",
  "Ist ein Test vor der langfristigen Bindung möglich?",
];

const faqItems = [
  {
    question: "Wie finde ich einen vertrauenswürdigen IPTV Anbieter?",
    answer: "Achten Sie auf direkten Kontakt vor dem Kauf, transparente Preise, klare Geräteangaben und erreichbaren Support danach.",
  },
  {
    question: "Welche Warnzeichen deuten auf einen unseriösen Anbieter hin?",
    answer: "Fehlender Kontakt vor dem Kauf, unklare Preise, fehlende Geräteangaben und Preise deutlich unter dem Marktdurchschnitt.",
  },
  {
    question: "Sollte ich vor dem Kauf testen?",
    answer: "Ja, ein kurzer Test wird dringend empfohlen, um Qualität und Support vorab einzuschätzen.",
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

export default function IptvProvidersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "IPTV Anbieter", href: "/iptv-providers" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Anbieterwahl"
            title="Seriöse IPTV Anbieter erkennen, bevor Sie zahlen"
            description="Der Markt ist groß, die Unterschiede sind es auch. Diese Warnzeichen und Vertrauenssignale helfen bei der Entscheidung."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              In Deutschland gibt es zahlreiche IPTV Anbieter — und ebenso große
              Qualitätsunterschiede. Bevor Sie sich entscheiden, lohnt sich ein genauer Blick auf
              Kommunikation, Preisstruktur und Support: genau dort zeigen sich unseriöse Anbieter
              zuerst. Eine allgemeine Einführung finden Sie in unserem Artikel{" "}
              <Link href="/iptv-service" className="text-aqua underline underline-offset-4">
                IPTV Service
              </Link>
              .
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/streaming-app.png"
                alt="IPTV Anbieter vergleichen: App-Auswahl auf dem Bildschirm"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Warnzeichen</h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                {warningSigns.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Vertrauenssignale</h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                {trustSignals.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Genau nach diesen Grundsätzen ist Sub Zero IPTV aufgebaut: transparente{" "}
                <Link href="/plans" className="text-aqua underline underline-offset-4">
                  Abonnements
                </Link>{" "}
                ohne versteckte Kosten und ein Team, das Sie direkt über{" "}
                <Link href="/contact" className="text-aqua underline underline-offset-4">
                  WhatsApp
                </Link>{" "}
                erreichen — schon vor dem Kauf.
              </p>
            </section>

            <section className="flex flex-col gap-4 rounded-3xl border border-border bg-background-elevated p-7">
              <h2 className="text-xl font-semibold text-foreground">Checkliste vor dem Kauf</h2>
              <ul className="flex flex-col gap-3 text-sm leading-relaxed text-muted">
                {checklistQuestions.map((question) => (
                  <li key={question} className="flex items-start gap-3">
                    <span aria-hidden className="mt-1 text-aqua">✓</span>
                    <span>{question}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm leading-relaxed text-muted">
                Weitere Kriterien im Detail finden Sie unter{" "}
                <Link href="/best-iptv-service" className="text-aqua underline underline-offset-4">
                  Bester IPTV Anbieter
                </Link>
                , und einen direkten Vergleich in unserem Artikel{" "}
                <Link href="/blog/best-iptv-providers-2026" className="text-aqua underline underline-offset-4">
                  Beste IPTV Anbieter 2026
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

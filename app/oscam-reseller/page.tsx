import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "OSCam Reseller: Informationen für Partner und Händler",
  description:
    "OSCam Reseller-Modelle verständlich erklärt: für wen sie sich eignen, welche Vorteile ein Partnerprogramm bieten kann und was Sie vor dem Start prüfen sollten.",
  keywords: ["OSCam Reseller", "OSCam Partner", "OSCam Reseller Programm"],
  alternates: {
    canonical: "/oscam-reseller",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam-reseller",
    title: "OSCam Reseller: Informationen für Partner und Händler",
    description: "Für wen sich ein Reseller-Modell eignet und was Sie vor dem Start prüfen sollten.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSCam Reseller: Informationen für Partner und Händler",
    description: "Für wen sich ein Reseller-Modell eignet und was Sie vor dem Start prüfen sollten.",
  },
};

const suitableFor = [
  "Technische Dienstleister mit Erfahrung in Receiver-Konfiguration",
  "Unternehmen, die Einrichtung und Support für Enigma2-Geräte anbieten",
  "Software- und Support-Anbieter mit bestehendem Kundenstamm",
  "Autorisierte Partner, die technische Dienstleistungen ergänzen möchten",
];

const benefits = [
  "Unterstützung durch den Partner bzw. das Programm selbst",
  "Zugriff auf technische Dokumentation",
  "Bereitgestellte technische Ressourcen und Schulungsmaterialien",
  "Strukturierte Kommunikationswege zu Kunden",
  "Teilweise zentrale Verwaltung mehrerer Kundenkonfigurationen",
];

const checkBeforeStart = [
  "Rechtliche Anforderungen in Ihrem Land bzw. Ihrer Branche",
  "Nutzungsbedingungen des jeweiligen Programms im Detail",
  "Umgang mit Kundendaten und Datenschutz",
  "Erreichbarkeit und Qualität des technischen Supports",
  "Technische Kompatibilität mit den Geräten Ihrer Zielgruppe",
  "Transparenz bei Abrechnung und Konditionen",
  "Verfügbare Dokumentation für Sie und Ihre Kunden",
];

const comparisonRows = [
  { aspect: "Zielgruppe", reseller: "Geschäftskunden / eigene Endkunden", customer: "Eigener Bedarf" },
  { aspect: "Support-Umfang", reseller: "Erweiterte Dokumentation & Partnerkontakt", customer: "Standard-Support" },
  { aspect: "Verantwortung", reseller: "Eigene Kundenkommunikation", customer: "Direkter Kontakt zum Anbieter" },
  { aspect: "Voraussetzungen", reseller: "Geschäftliche/technische Vorkenntnisse", customer: "Keine besonderen Voraussetzungen" },
];

const faqItems = [
  {
    question: "Was ist ein OSCam Reseller?",
    answer: "Ein Partner oder Händler, der technische Dienstleistungen rund um OSCam/iCam im Rahmen eines Partnerprogramms an eigene Kunden weitergibt.",
  },
  {
    question: "Für wen eignet sich ein Reseller-Modell?",
    answer: "Vor allem für technische Dienstleister, Receiver-Support-Anbieter und Unternehmen mit bestehendem Kundenstamm im Enigma2-Umfeld.",
  },
  {
    question: "Verdiene ich als Reseller garantiert Geld?",
    answer: "Nein, das lässt sich pauschal nicht sagen. Einnahmen hängen von Nachfrage, eigenem Aufwand und Marktbedingungen ab — seriöse Programme versprechen keine garantierten Gewinne.",
  },
  {
    question: "Welche Voraussetzungen sollte ich mitbringen?",
    answer: "Technisches Grundverständnis für Enigma2-Receiver sowie die Bereitschaft, eigenen Kundensupport zu leisten.",
  },
  {
    question: "Was sollte ich vor dem Einstieg prüfen?",
    answer: "Rechtliche Anforderungen, Nutzungsbedingungen, Datenschutz, Support-Qualität und technische Kompatibilität — im Zweifel direkt beim jeweiligen Programm nachfragen.",
  },
  {
    question: "Unterscheidet sich der Support für Reseller von dem für Endkunden?",
    answer: "Häufig ja — Reseller erhalten in der Regel erweiterten Zugriff auf Dokumentation und einen direkteren Kontaktweg, da sie selbst gegenüber ihren Kunden verantwortlich sind.",
  },
  {
    question: "Muss ich ein Gewerbe anmelden, um Reseller zu werden?",
    answer: "Das hängt von Umfang und Land Ihrer Tätigkeit ab. Klären Sie diese Frage im Zweifel mit einer entsprechenden Fachstelle, bevor Sie geschäftlich tätig werden.",
  },
  {
    question: "Bietet OSCam-iCam ein eigenes Reseller-Programm an?",
    answer: "Sprechen Sie uns über unsere Kontaktseite an — wir informieren Sie gerne unverbindlich über aktuelle Möglichkeiten.",
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

export default function OscamResellerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "OSCam Reseller", href: "/oscam-reseller" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Business"
            title="OSCam Reseller – Informationen für Partner und Händler"
            description="Ein Überblick über das Reseller-Konzept aus geschäftlicher Perspektive — ohne Gewinnversprechen, dafür mit den Fragen, die Sie vorab klären sollten."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was ist ein OSCam Reseller?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Als Reseller bezeichnet man einen Partner, der technische Dienstleistungen rund um{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam
                </Link>{" "}
                und{" "}
                <Link href="/icam" className="text-aqua underline underline-offset-4">
                  iCam
                </Link>{" "}
                im Rahmen eines Partnerprogramms an eigene Kunden weitergibt — etwa Einrichtung,
                Konfiguration oder laufenden technischen Support für Enigma2-Receiver.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Für wen eignet sich ein Reseller-Modell?
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                {suitableFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Welche Vorteile kann ein Reseller-Programm bieten?
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Wichtig: Seriöse Programme versprechen kein garantiertes Einkommen, keine
                garantierten Kunden und keine festen Margen — reale Ergebnisse hängen von Nachfrage
                und eigenem Aufwand ab.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was sollte man vor dem Start prüfen?
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                {checkBeforeStart.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-1 text-aqua">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Reseller vs. normaler Kunde
              </h2>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-background-elevated">
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">Aspekt</th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">Reseller</th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">Normaler Kunde</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr key={row.aspect} className={index % 2 === 0 ? "bg-background" : "bg-background-elevated/40"}>
                        <td className="border-b border-border px-4 py-3 font-medium text-foreground">{row.aspect}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.reseller}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.customer}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

            <section className="flex flex-col items-center gap-5 rounded-3xl border border-aqua/30 bg-aqua/5 p-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Fragen zum Reseller-Konzept?
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-muted">
                Nehmen Sie unverbindlich Kontakt auf — wir beantworten Ihre Fragen persönlich.
              </p>
              <Button href="/contact" variant="primary" className="px-8 py-4 text-base">
                Kontakt aufnehmen
              </Button>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}

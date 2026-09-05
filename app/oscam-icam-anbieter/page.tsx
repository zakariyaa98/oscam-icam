import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "OSCam iCam Anbieter: Worauf sollte man achten?",
  description:
    "OSCam iCam Anbieter im Überblick: Transparenz, Kompatibilität, technischer Support, Updates, Sicherheit und Datenschutz — worauf Sie bei der Auswahl achten sollten.",
  keywords: ["OSCam iCam Anbieter", "OSCam Anbieter", "iCam Anbieter", "OSCam Support"],
  alternates: {
    canonical: "/oscam-icam-anbieter",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam-icam-anbieter",
    title: "OSCam iCam Anbieter: Worauf sollte man achten?",
    description: "Transparenz, Kompatibilität, Support, Updates und Sicherheit — worauf es bei der Auswahl ankommt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "OSCam iCam Anbieter: Worauf sollte man achten?",
    description: "Transparenz, Kompatibilität, Support, Updates und Sicherheit — worauf es bei der Auswahl ankommt.",
  },
};

const comparisonRows = [
  { criterion: "Kompatibilität", detail: "Unterstützte Geräte und Enigma2-Images" },
  { criterion: "Support", detail: "Erreichbarkeit und Dokumentation" },
  { criterion: "Updates", detail: "Technische Pflege" },
  { criterion: "Transparenz", detail: "Klare Informationen" },
  { criterion: "Sicherheit", detail: "Seriöse Datenverarbeitung" },
  { criterion: "Bedingungen", detail: "Verständliche Nutzungsbedingungen" },
];

const faqItems = [
  {
    question: "Was ist ein OSCam iCam Anbieter?",
    answer:
      "Ein Anbieter, der technische Dienstleistungen rund um OSCam und iCam anbietet — etwa Einrichtungshilfe, Konfigurationsservice oder technischen Support für Enigma2-Receiver.",
  },
  {
    question: "Woran erkenne ich einen transparenten Anbieter?",
    answer: "An klar kommunizierten Leistungen, nachvollziehbaren Preisen und verständlichen Nutzungsbedingungen ohne Kleingedrucktes.",
  },
  {
    question: "Warum ist Gerätekompatibilität wichtig?",
    answer: "Nicht jede Lösung passt zu jedem Receiver oder Enigma2-Image. Ein seriöser Anbieter benennt klar, welche Geräte und Images unterstützt werden.",
  },
  {
    question: "Wie wichtig ist technischer Support?",
    answer: "Sehr wichtig — gerade bei der Ersteinrichtung können Rückfragen entstehen. Erreichbarkeit und verständliche Dokumentation sind wesentliche Qualitätsmerkmale.",
  },
  {
    question: "Was bedeutet 'Updates' in diesem Zusammenhang?",
    answer: "Ob und wie regelmäßig ein Anbieter seine Software oder Dienstleistungen technisch pflegt und weiterentwickelt.",
  },
  {
    question: "Worauf sollte ich bei Datenschutz achten?",
    answer: "Ein seriöser Anbieter informiert klar darüber, welche Daten erhoben werden und wie sie verarbeitet werden — nachlesbar in einer verständlichen Datenschutzerklärung.",
  },
  {
    question: "Sollte ich Nutzungsbedingungen vor der Beauftragung lesen?",
    answer: "Ja, unbedingt. Verständliche und vollständige Bedingungen sind ein starkes Vertrauenssignal.",
  },
  {
    question: "Bietet OSCam-iCam selbst Zugangsdaten oder Kartenserver an?",
    answer: "Nein. Wir informieren ausschließlich über die technische Funktionsweise und bieten Unterstützung bei der Konfiguration mit eigenen, rechtmäßig erworbenen Berechtigungen.",
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

export default function OscamIcamAnbieterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs
        items={[{ label: "Startseite", href: "/" }, { label: "OSCam iCam Anbieter", href: "/oscam-icam-anbieter" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Anbieterwahl"
            title="OSCam iCam Anbieter – Worauf sollte man achten?"
            description="Der Markt an technischen Dienstleistern rund um OSCam und iCam ist unübersichtlich. Diese Kriterien helfen bei einer informierten Entscheidung."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was ist ein OSCam iCam Anbieter?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Als OSCam iCam Anbieter bezeichnet man einen Dienstleister, der technische
                Leistungen rund um OSCam und iCam erbringt — etwa Einrichtungshilfe, Konfiguration
                oder laufenden technischen Support für Enigma2-Receiver. Der Begriff beschreibt die
                Art der Dienstleistung, nicht ein bestimmtes Unternehmen.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Worauf sollte man bei einem Anbieter achten?
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li><strong className="text-foreground">Transparenz:</strong> Klare Angaben zu Leistungsumfang, Preisen und Ablauf, ohne versteckte Bedingungen.</li>
                <li><strong className="text-foreground">Kompatibilität:</strong> Konkrete Angaben, welche Receiver und Enigma2-Images unterstützt werden.</li>
                <li><strong className="text-foreground">Technischer Support:</strong> Erreichbarkeit bei Rückfragen, insbesondere während der Ersteinrichtung.</li>
                <li><strong className="text-foreground">Dokumentation:</strong> Nachvollziehbare Anleitungen statt reiner Blackbox-Lösungen.</li>
                <li><strong className="text-foreground">Updates:</strong> Regelmäßige technische Pflege statt einmaliger, unbetreuter Einrichtung.</li>
                <li><strong className="text-foreground">Sicherheit und Datenschutz:</strong> Seriöser Umgang mit Ihren Daten, nachlesbar in einer klaren Datenschutzerklärung.</li>
                <li><strong className="text-foreground">Klare Bedingungen:</strong> Verständliche Nutzungsbedingungen ohne Kleingedrucktes.</li>
              </ul>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam und iCam auf Enigma2
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Sowohl{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam
                </Link>{" "}
                als auch{" "}
                <Link href="/icam" className="text-aqua underline underline-offset-4">
                  iCam
                </Link>{" "}
                laufen auf Enigma2-Receivern wie VU+, Dreambox und Zgemma. Ein guter Anbieter kennt
                die Unterschiede zwischen beiden Lösungen und kann einschätzen, welche Variante zu
                Ihrem konkreten Setup passt.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam Einrichtung und technischer Support
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Gerade bei der Ersteinrichtung — Plugin-Installation, Konfigurationsdateien, Reader
                eintragen — können technische Rückfragen entstehen. Ein verlässlicher Anbieter
                begleitet diesen Prozess und bleibt auch danach für Fragen zu Updates oder
                Fehlerbehebung erreichbar. Wie eine Grundeinrichtung technisch abläuft, zeigt unsere
                Anleitung{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  OSCam installieren
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Anbieter vergleichen
              </h2>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-background-elevated">
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Kriterium
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Worauf achten?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr key={row.criterion} className={index % 2 === 0 ? "bg-background" : "bg-background-elevated/40"}>
                        <td className="border-b border-border px-4 py-3 font-medium text-foreground">{row.criterion}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.detail}</td>
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
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  );
}

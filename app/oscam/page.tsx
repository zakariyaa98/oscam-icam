import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "OSCam: Was es ist und wie es auf Enigma2 funktioniert",
  description:
    "OSCam verständlich erklärt: Architektur, die wichtigsten Konfigurationsdateien (oscam.conf, oscam.server, oscam.user) und wie die Software auf Enigma2-Receivern eingebunden wird.",
  keywords: ["OSCam", "OSCam Enigma2", "OSCam Installation", "OSCam Einrichtung", "OSCam Konfiguration"],
  alternates: {
    canonical: "/oscam",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam",
    title: "OSCam: Was es ist und wie es auf Enigma2 funktioniert",
    description: "Architektur, Konfigurationsdateien und Grundbegriffe von OSCam auf Enigma2-Receivern.",
    images: [{ url: "https://oscam-icam.de/images/streaming-technologie.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://oscam-icam.de/images/streaming-technologie.png"],
    title: "OSCam: Was es ist und wie es auf Enigma2 funktioniert",
    description: "Architektur, Konfigurationsdateien und Grundbegriffe von OSCam auf Enigma2-Receivern.",
  },
};

const faqItems = [
  {
    question: "Was genau ist OSCam?",
    answer:
      "OSCam ist eine quelloffene Softcam-Software für Linux-basierte Receiver. Sie verwaltet den Zugriff auf Conditional-Access-Module und leitet Entschlüsselungsanfragen an lokal angeschlossene Kartenleser weiter.",
  },
  {
    question: "Auf welchen Receivern läuft OSCam?",
    answer: "Auf jedem Receiver mit Enigma2-Image sowie auf vielen anderen Linux-basierten Systemen, die die entsprechenden Bibliotheken mitbringen.",
  },
  {
    question: "Brauche ich Programmierkenntnisse, um OSCam zu konfigurieren?",
    answer: "Nein. Die Konfiguration erfolgt über gut dokumentierte Textdateien und die browserbasierte WebIf-Oberfläche.",
  },
  {
    question: "Was ist der Unterschied zwischen OSCam und iCam?",
    answer: "Beide erfüllen eine ähnliche Aufgabe, unterscheiden sich aber in Konfigurationssyntax und unterstützten Protokollen. Details finden Sie auf unserer Seite iCam.",
  },
  {
    question: "Ist OSCam legal?",
    answer: "OSCam selbst ist freie Open-Source-Software. Ihre Nutzung ist Teil einer legalen technischen Konfiguration, solange ausschließlich eigene, rechtmäßig erworbene Zugangsberechtigungen eingebunden werden.",
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

export default function OscamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "OSCam", href: "/oscam" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="OSCam"
            title="OSCam: die Softcam-Software hinter vielen Enigma2-Receivern"
            description="Keine Blackbox, sondern gut dokumentierte Open-Source-Software — sobald man die Grundbegriffe kennt, wirkt OSCam deutlich weniger kompliziert."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                OSCam (Open Source Conditional Access Module) ist eine freie Softcam-Software, die auf
                Linux-basierten Receivern läuft — allen voran auf Enigma2-Geräten wie VU+, Dreambox
                oder Zgemma. Sie übernimmt die Vermittlung zwischen dem Receiver und einem
                Conditional-Access-Modul beziehungsweise einer lokal angeschlossenen Smartcard und
                sorgt dafür, dass verschlüsselte Sender mit einer rechtmäßig erworbenen Berechtigung
                entschlüsselt werden können.
              </p>
              <p>
                Auf dieser Seite geht es ausschließlich um die technische Funktionsweise von OSCam.
                Weitere Artikel rund um Konfiguration und Troubleshooting finden Sie in unserem{" "}
                <Link href="/blog" className="text-aqua underline underline-offset-4">
                  Blog
                </Link>
                .
              </p>
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Wie OSCam aufgebaut ist
              </h2>
              <p className="text-base leading-relaxed text-muted">
                OSCam läuft als eigenständiger Dienst im Hintergrund des Receivers und wird über
                mehrere Textdateien konfiguriert:
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li><strong className="text-foreground">oscam.conf</strong> — grundlegende Einstellungen wie Ports, Logging und allgemeines Verhalten.</li>
                <li><strong className="text-foreground">oscam.server</strong> — Definition der Reader, also der Verbindungen zu Kartenlesern oder CI+-Modulen.</li>
                <li><strong className="text-foreground">oscam.user</strong> — Benutzerkonten und deren Zugriffsrechte innerhalb der lokalen Konfiguration.</li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Eine ausführliche Erklärung dieser Dateien mit Beispielen finden Sie in unserem
                Blogartikel{" "}
                <Link href="/blog/oscam-konfiguration-verstehen" className="text-aqua underline underline-offset-4">
                  OSCam Konfiguration verstehen
                </Link>
                .
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/streaming-technologie.png"
                  alt="Symbolbild: Netzwerktechnik und Datenverarbeitung im Hintergrund einer OSCam-Konfiguration"
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
                Das OSCam WebIf
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Neben der direkten Bearbeitung der Konfigurationsdateien bringt OSCam eine
                browserbasierte Oberfläche mit, das sogenannte WebIf. Darüber lassen sich Status,
                aktive Verbindungen und Logs übersichtlich einsehen, ohne jede Datei manuell zu
                öffnen — praktisch, sobald die Grundkonfiguration einmal steht.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam auf Ihrem Receiver einrichten
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Eine Schritt-für-Schritt-Anleitung zur Installation finden Sie auf unserer Seite{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  OSCam installieren
                </Link>
                . Gerätespezifische Hinweise gibt es außerdem für{" "}
                <Link href="/oscam-vu-plus" className="text-aqua underline underline-offset-4">
                  VU+
                </Link>
                ,{" "}
                <Link href="/oscam-dreambox" className="text-aqua underline underline-offset-4">
                  Dreambox
                </Link>{" "}
                und{" "}
                <Link href="/oscam-zgemma" className="text-aqua underline underline-offset-4">
                  Zgemma
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam oder iCam?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                iCam verfolgt einen ähnlichen Ansatz wie OSCam, unterscheidet sich aber in Details
                wie Konfigurationssyntax und unterstützten Protokollen. Eine Gegenüberstellung
                finden Sie auf unserer Seite{" "}
                <Link href="/icam" className="text-aqua underline underline-offset-4">
                  iCam
                </Link>{" "}
                sowie im Blogartikel{" "}
                <Link href="/blog/oscam-icam-unterschiede" className="text-aqua underline underline-offset-4">
                  OSCam und iCam im Vergleich
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

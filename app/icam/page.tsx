import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "iCam auf Enigma2: Funktionsweise und Unterschiede zu OSCam",
  description:
    "iCam verständlich erklärt: was der Softcam-Client leistet, wie er sich auf Enigma2-Receivern einbinden lässt und worin die Unterschiede zu OSCam liegen.",
  keywords: ["iCam", "iCam Enigma2", "OSCam iCam", "iCam Einrichtung", "iCam installieren"],
  alternates: {
    canonical: "/icam",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/icam",
    title: "iCam auf Enigma2: Funktionsweise und Unterschiede zu OSCam",
    description: "Was iCam leistet und worin die Unterschiede zu OSCam liegen — verständlich erklärt.",
    images: [{ url: "https://oscam-icam.de/images/streaming-technologie.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://oscam-icam.de/images/streaming-technologie.png"],
    title: "iCam auf Enigma2: Funktionsweise und Unterschiede zu OSCam",
    description: "Was iCam leistet und worin die Unterschiede zu OSCam liegen — verständlich erklärt.",
  },
};

const faqItems = [
  {
    question: "Was ist iCam?",
    answer:
      "iCam ist ein Softcam-Client für Linux-basierte Receiver, der eine ähnliche Aufgabe wie OSCam übernimmt: die Vermittlung zwischen Receiver und einem Conditional-Access-Modul oder Kartenleser.",
  },
  {
    question: "Was unterscheidet iCam von OSCam?",
    answer: "Beide Programme verfolgen ein ähnliches Grundprinzip, unterscheiden sich aber in Konfigurationssyntax, Entwicklungsstand und unterstützten Protokollen im Detail.",
  },
  {
    question: "Läuft iCam auf VU+, Dreambox und Zgemma?",
    answer: "iCam lässt sich grundsätzlich auf jedem Receiver mit passendem Enigma2-Image einbinden, unabhängig von der Marke.",
  },
  {
    question: "Muss ich mich zwischen OSCam und iCam entscheiden?",
    answer: "In der Regel ja, da beide dieselbe grundlegende Aufgabe übernehmen. Welche Variante besser zu Ihrem Setup passt, hängt von Ihren konkreten Anforderungen ab.",
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

export default function IcamPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "iCam", href: "/icam" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="iCam"
            title="iCam: der Softcam-Client im Überblick"
            description="Eine kompakte Einführung in iCam, seine Aufgabe auf Enigma2-Receivern und die wichtigsten Unterschiede zu OSCam."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                iCam ist, wie OSCam, ein Softcam-Client für Linux-basierte Receiver. Er übernimmt die
                Kommunikation zwischen dem Receiver und einem angeschlossenen
                Conditional-Access-Modul oder Kartenleser, damit verschlüsselte Sender mit einer
                rechtmäßig erworbenen Berechtigung dargestellt werden können.
              </p>
              <p>
                Im Kern verfolgt iCam dasselbe Prinzip wie{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam
                </Link>
                , unterscheidet sich aber in einzelnen technischen Details.
              </p>
            </div>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Worin sich iCam und OSCam unterscheiden
              </h2>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li><strong className="text-foreground">Konfigurationssyntax:</strong> Beide nutzen Textdateien, die Struktur und Bezeichnungen weichen jedoch in Details voneinander ab.</li>
                <li><strong className="text-foreground">Protokollunterstützung:</strong> Der Funktionsumfang für einzelne Übertragungsprotokolle kann variieren.</li>
                <li><strong className="text-foreground">Community und Dokumentation:</strong> Verbreitung und Dokumentationsstand unterscheiden sich je nach Projekt und Version.</li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Eine ausführliche Gegenüberstellung finden Sie in unserem Blogartikel{" "}
                <Link href="/blog/oscam-icam-unterschiede" className="text-aqua underline underline-offset-4">
                  OSCam und iCam im Vergleich
                </Link>
                .
              </p>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/streaming-technologie.png"
                  alt="Symbolbild: Netzwerktechnik im Hintergrund einer iCam-Konfiguration"
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
                iCam auf Enigma2 einbinden
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die grundsätzliche Vorgehensweise ähnelt der Installation von OSCam: Plugin oder
                Paket über den Feed des jeweiligen Enigma2-Images installieren, Konfigurationsdateien
                anpassen und Reader eintragen. Eine allgemeine Schritt-für-Schritt-Anleitung finden
                Sie auf unserer Seite{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  OSCam installieren
                </Link>
                , deren Grundprinzip sich auf iCam übertragen lässt.
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Unterstützung bei der Einrichtung
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Sind Sie sich unsicher, ob OSCam oder iCam besser zu Ihrem Receiver und Ihrer
                Zugangsberechtigung passt, hilft unser{" "}
                <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
                  Support-Team
                </Link>{" "}
                gerne bei der Einschätzung und der praktischen Umsetzung.
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

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "OSCam installieren: Schritt-für-Schritt-Anleitung für Enigma2",
  description:
    "OSCam installieren auf Enigma2-Receivern: Plugin-Installation, Grundkonfiguration der wichtigsten Dateien und erste Schritte im WebIf — praxisnah erklärt.",
  keywords: ["OSCam installieren", "OSCam Einrichtung", "OSCam Enigma2 installieren", "OSCam Anleitung"],
  alternates: {
    canonical: "/oscam-installieren",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam-installieren",
    title: "OSCam installieren: Schritt-für-Schritt-Anleitung für Enigma2",
    description: "Plugin-Installation, Grundkonfiguration und erste Schritte im WebIf — praxisnah erklärt.",
    images: [{ url: "https://oscam-icam.de/images/streaming-technologie.png" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://oscam-icam.de/images/streaming-technologie.png"],
    title: "OSCam installieren: Schritt-für-Schritt-Anleitung für Enigma2",
    description: "Plugin-Installation, Grundkonfiguration und erste Schritte im WebIf — praxisnah erklärt.",
  },
};

const steps = [
  {
    title: "Voraussetzungen prüfen",
    body: "Ein Enigma2-Receiver mit aktueller Firmware, eine stabile Internetverbindung und ein lokal angeschlossenes Conditional-Access-Modul oder ein Kartenleser mit einer rechtmäßig erworbenen Berechtigung.",
  },
  {
    title: "Plugin-Feed öffnen",
    body: "Über das Blue-Button-Menü bzw. den Plugin-Browser des Images (etwa OpenATV oder OpenPLi) nach OSCam suchen — die Software ist bei den meisten Images bereits im Feed gelistet.",
  },
  {
    title: "OSCam installieren",
    body: "Installation über das Plugin-Menü starten. Ist OSCam nicht gelistet, lässt es sich alternativ per IPK-Datei über Telnet, FTP oder einen USB-Stick manuell nachinstallieren.",
  },
  {
    title: "Grundkonfiguration anlegen",
    body: "Die Dateien oscam.conf, oscam.server und oscam.user im Konfigurationsverzeichnis anpassen — Details dazu in unserem Blogartikel zur OSCam-Konfiguration.",
  },
  {
    title: "Reader eintragen",
    body: "Den angeschlossenen Kartenleser bzw. das CI+-Modul in oscam.server als Reader hinterlegen, mit den vom Hersteller dokumentierten Parametern.",
  },
  {
    title: "OSCam starten und WebIf prüfen",
    body: "Dienst starten und über die browserbasierte WebIf-Oberfläche kontrollieren, ob der Reader als verbunden angezeigt wird.",
  },
];

const faqItems = [
  {
    question: "Wie lange dauert die Installation von OSCam?",
    answer: "Die reine Plugin-Installation dauert wenige Minuten. Die Grundkonfiguration kann je nach Vorkenntnis etwas länger dauern.",
  },
  {
    question: "Muss ich Dateien manuell bearbeiten?",
    answer: "Für die Grundkonfiguration ja, meist reicht dafür aber ein einfacher Texteditor über FTP oder das WebIf selbst.",
  },
  {
    question: "Was tue ich, wenn OSCam im Plugin-Feed fehlt?",
    answer: "Dann lässt sich OSCam alternativ per IPK-Datei über Telnet, FTP oder USB-Stick manuell installieren.",
  },
  {
    question: "Funktioniert die Anleitung auch für iCam?",
    answer: "Das Grundprinzip — Plugin installieren, Konfigurationsdateien anpassen, Reader eintragen — lässt sich weitgehend auf iCam übertragen, Details unterscheiden sich aber. Mehr dazu auf unserer Seite iCam.",
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

export default function OscamInstallierenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs
        items={[{ label: "Startseite", href: "/" }, { label: "OSCam installieren", href: "/oscam-installieren" }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Anleitung"
            title="OSCam installieren: die sechs Schritte zur Grundeinrichtung"
            description="Vom Plugin-Feed bis zum ersten funktionierenden Reader — so gehen Sie bei der Installation auf Ihrem Enigma2-Receiver vor."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
            <p className="text-base leading-relaxed text-muted">
              Diese Anleitung beschreibt die technische Grundinstallation von{" "}
              <Link href="/oscam" className="text-aqua underline underline-offset-4">
                OSCam
              </Link>{" "}
              auf einem Enigma2-Receiver. Sie richtet sich an Nutzer, die OSCam mit einer eigenen,
              rechtmäßig erworbenen Zugangsberechtigung einrichten möchten.
            </p>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/streaming-technologie.png"
                alt="Symbolbild: Netzwerktechnik im Hintergrund einer OSCam-Installation"
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section className="flex flex-col gap-6">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-aqua text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-lg font-semibold text-foreground">{step.title}</h2>
                    <p className="text-base leading-relaxed text-muted">{step.body}</p>
                  </div>
                </div>
              ))}
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Gerätespezifische Hinweise
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die grundsätzliche Vorgehensweise ist auf allen Enigma2-Receivern identisch, im
                Detail kann sich die Menüführung je nach Marke unterscheiden. Hinweise für Ihr
                konkretes Gerät finden Sie unter{" "}
                <Link href="/oscam-vu-plus" className="text-aqua underline underline-offset-4">
                  OSCam auf VU+
                </Link>
                ,{" "}
                <Link href="/oscam-dreambox" className="text-aqua underline underline-offset-4">
                  OSCam auf Dreambox
                </Link>{" "}
                und{" "}
                <Link href="/oscam-zgemma" className="text-aqua underline underline-offset-4">
                  OSCam auf Zgemma
                </Link>
                .
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Wenn es nicht auf Anhieb klappt
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Startet OSCam nach der Konfiguration nicht oder bleibt der Reader auf „nicht
                verbunden“, lohnt sich zunächst ein Blick in die Logdatei. Häufige Ursachen erklären
                wir in unserem Blogartikel{" "}
                <Link href="/blog/oscam-fehler-loesungen" className="text-aqua underline underline-offset-4">
                  Häufige OSCam Fehler und Lösungen
                </Link>
                . Bei anhaltenden Problemen unterstützt Sie unser{" "}
                <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
                  Support-Team
                </Link>{" "}
                persönlich.
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

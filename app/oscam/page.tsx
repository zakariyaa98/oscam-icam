import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

const ogImage = "/images/home page/oscam/oscam-icam-softcam-technologie-sender.png";

export const metadata: Metadata = {
  title: "OSCam: Anleitung zu Einrichtung und Nutzung auf Enigma2",
  description:
    "OSCam verständlich erklärt: Aufbau der Software, die wichtigsten Konfigurationsdateien und wie Sie OSCam auf Enigma2-Receivern wie VU+, Dreambox oder Zgemma einrichten und im Alltag nutzen.",
  keywords: [
    "OSCam",
    "OSCam Anleitung",
    "OSCam Einrichtung",
    "OSCam Enigma2",
    "OSCam installieren",
    "OSCam VU+",
    "OSCam Dreambox",
    "OSCam Zgemma",
    "OSCam iCam",
    "OSCam Anbieter",
  ],
  alternates: {
    canonical: "/oscam",
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam",
    title: "OSCam: Anleitung zu Einrichtung und Nutzung auf Enigma2",
    description:
      "Aufbau, Konfigurationsdateien und Einrichtung von OSCam auf Enigma2-Receivern wie VU+, Dreambox und Zgemma — Schritt für Schritt erklärt.",
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
    title: "OSCam: Anleitung zu Einrichtung und Nutzung auf Enigma2",
    description:
      "Aufbau, Konfigurationsdateien und Einrichtung von OSCam auf Enigma2-Receivern wie VU+, Dreambox und Zgemma.",
  },
};

const pageNav = [
  { href: "#was-ist-oscam", label: "Was ist OSCam?" },
  { href: "#funktionsweise", label: "Funktionsweise" },
  { href: "#konfiguration", label: "Konfigurationsdateien" },
  { href: "#enigma2", label: "OSCam auf Enigma2" },
  { href: "#receiver", label: "Receiver" },
  { href: "#oscam-oder-icam", label: "OSCam oder iCam?" },
  { href: "#anbieter", label: "Anbieter" },
  { href: "#probleme", label: "Häufige Probleme" },
  { href: "#faq", label: "FAQ" },
];

const grundbegriffe = [
  {
    src: "/images/home page/OSCam-iCam-Icon-Enigma2-Linux-Sat-Receiver.png",
    alt: "Symbol für einen Enigma2 Linux-Sat-Receiver",
    text: "Ein Linux-Receiver mit Enigma2-Oberfläche liefert das verschlüsselte Signal und die Bedienung.",
  },
  {
    src: "/images/home page/OSCam-iCam-Icon-OSCam-Softcam-Kartenleser.png",
    alt: "Symbol für OSCam als Softcam mit Kartenleser",
    text: "OSCam läuft als Dienst auf dem Receiver und vermittelt zwischen Sender und Kartenleser.",
  },
  {
    src: "/images/home page/OSCam-iCam-Icon-iCam-Softcam-Client.png",
    alt: "Symbol für den iCam Softcam-Client",
    text: "iCam verfolgt denselben Zweck, unterscheidet sich aber in Syntax und Protokollumfang.",
  },
];

const architektur = [
  {
    term: "Receiver",
    body: "Der Enigma2-Receiver empfängt das verschlüsselte Signal über Sat, Kabel oder DVB-T2 und stellt die Anfrage nach einem gültigen Kontrollwort.",
  },
  {
    term: "DVBAPI",
    body: "Die Schnittstelle zwischen Enigma2-Treiber und OSCam. Über sie meldet der Receiver, welcher Sender läuft und welche Entschlüsselung er benötigt.",
  },
  {
    term: "OSCam",
    body: "Der Dienst nimmt die Anfrage entgegen, ordnet sie einem Reader zu und gibt das entschlüsselte Kontrollwort an den Receiver zurück.",
  },
  {
    term: "Reader",
    body: "Eine in oscam.server definierte Verbindung zu einer Signalquelle — ein lokal gesteckter Kartenleser, ein CI+-Modul oder eine eigene Netzwerkverbindung.",
  },
  {
    term: "User",
    body: "In oscam.user steht, welcher Zugang welche Reader nutzen darf. In einem Einzelplatz-Setup ist das oft nur ein einziger Eintrag.",
  },
  {
    term: "WebIf",
    body: "Die eingebaute Weboberfläche zeigt Status, aktive Kanäle, Reader-Zustand und Logs im Browser — die schnellste Kontrolle für ein Setup.",
  },
  {
    term: "Konfigurationsdateien",
    body: "oscam.conf, oscam.server, oscam.user und oscam.dvbapi steuern das gesamte Verhalten. Sie sind reiner Text und über FTP oder das WebIf bearbeitbar.",
  },
];

const flowSteps = [
  "Verschlüsselter Sender",
  "Receiver / DVBAPI",
  "OSCam",
  "Reader",
  "Smartcard oder CI+-Modul",
  "Kontrollwort zurück",
  "Klarbild",
];

const configFiles = [
  {
    name: "oscam.conf",
    role: "Grundeinstellungen und Dienste",
    body: "Legt das allgemeine Verhalten fest: Protokolle und Ports, Logging, das WebIf sowie globale Optionen. Ohne eine gültige oscam.conf startet der Dienst nicht.",
    image: {
      src: "/images/home page/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-oscam-conf.png",
      alt: "Beispielhafte oscam.conf mit globalem Abschnitt, Logdatei-Pfad und aktiviertem Cache-Dienst",
    },
  },
  {
    name: "oscam.server",
    role: "Reader und Verbindungen",
    body: "Beschreibt jede Signalquelle als eigenen Reader — mit Typ, Adresse und den vom jeweiligen Modul dokumentierten Parametern. Hier entscheidet sich, woher ein Kontrollwort kommt.",
  },
  {
    name: "oscam.user",
    role: "Zugänge und Berechtigungen",
    body: "Definiert die Zugänge innerhalb der eigenen Installation und ordnet ihnen Reader zu. In einem privaten Setup genügt meist ein einzelner Eintrag mit klarem Passwort.",
  },
  {
    name: "oscam.dvbapi",
    role: "Priorisierung der Anfragen",
    body: "Steuert, welcher Reader für welchen Sender bevorzugt oder ignoriert wird. Sinnvoll, sobald mehrere Reader dieselbe Anfrage beantworten könnten.",
    image: {
      src: "/images/home page/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-oscam-dvbapi.png",
      alt: "Beispielhafte oscam.dvbapi mit Prioritätsregeln für einzelne Sender-Kennungen",
    },
  },
];

const enigma2Steps = [
  "Receiver mit aktueller Firmware und stabiler Netzwerkverbindung vorbereiten.",
  "Ein gepflegtes Enigma2-Image nutzen, in dessen Feed OSCam bereits gelistet ist.",
  "OSCam über den Plugin-Browser installieren oder alternativ als IPK-Paket nachziehen.",
  "oscam.conf, oscam.server und oscam.user an das eigene Setup anpassen.",
  "Den Dienst starten und im Frontdisplay bzw. über die Oberfläche prüfen, ob er läuft.",
  "Im WebIf kontrollieren, ob der Reader verbunden ist — und bei Problemen ins Log schauen.",
];

const receiverInfos = [
  {
    name: "VU+",
    href: "/oscam-vu-plus",
    body: "Große Auswahl an Images wie OpenPLi und OpenATV, aktiv gepflegter Plugin-Feed und auf den meisten Modellen genug Reserve für mehrere parallele Reader.",
  },
  {
    name: "Dreambox",
    href: "/oscam-dreambox",
    body: "Je nach Modell OpenATV oder das herstellereigene DreamOS — die Pfade und der Installationsweg unterscheiden sich hier stärker als bei anderen Marken.",
  },
  {
    name: "Zgemma",
    href: "/oscam-zgemma",
    body: "Preiswerte Einstiegsgeräte mit knapperer Ausstattung. Eine schlanke Konfiguration und wenige gleichzeitige Reader halten die Box zuverlässig.",
  },
];

const probleme = [
  {
    title: "OSCam startet nicht",
    hint: "Meist ein Syntaxfehler in oscam.conf oder eine fehlende Berechtigung auf dem Konfigurationsordner.",
  },
  {
    title: "Kein Bild trotz laufendem Dienst",
    hint: "Der Reader liefert kein Kontrollwort — Zugangsberechtigung, Reader-Parameter oder oscam.dvbapi prüfen.",
  },
  {
    title: "Reader wird nicht erkannt",
    hint: "Falscher Reader-Typ, vertauschte Adresse oder ein Kartenleser, den das Image nicht auf Anhieb sauber einbindet.",
  },
  {
    title: "WebIf nicht erreichbar",
    hint: "Der httpport in oscam.conf ist nicht gesetzt, blockiert oder kollidiert mit einem anderen Dienst.",
  },
  {
    title: "Netzwerkproblem",
    hint: "Falsches Gateway, DNS oder Zeitserver: OSCam braucht eine korrekte Uhrzeit und einen stabilen Netzzugang.",
  },
  {
    title: "Unklare Log-Meldungen",
    hint: "Das Log kurz auf debug stellen, die erste Fehlermeldung suchen und danach wieder zurückstellen.",
  },
];

const faqItems = [
  {
    question: "Was ist OSCam?",
    answer:
      "OSCam (Open Source Conditional Access Module) ist eine quelloffene Softcam-Software für Linux-basierte Receiver. Sie vermittelt zwischen dem Receiver und einem lokal angeschlossenen Conditional-Access-Modul oder Kartenleser, damit verschlüsselte Sender mit einer rechtmäßig erworbenen Berechtigung dargestellt werden können.",
  },
  {
    question: "Auf welchen Receivern funktioniert OSCam?",
    answer:
      "Grundsätzlich auf jedem Receiver mit Enigma2-Image — darunter Marken wie VU+, Dreambox, Zgemma, GigaBlue oder Octagon — sowie auf vielen weiteren Linux-Systemen mit den passenden Bibliotheken.",
  },
  {
    question: "Was ist der Unterschied zwischen OSCam und iCam?",
    answer:
      "Beide erfüllen dieselbe Grundaufgabe. Sie unterscheiden sich in Konfigurationssyntax, Entwicklungsstand und im Detailumfang der unterstützten Protokolle. Eine Gegenüberstellung finden Sie auf der Seite iCam und im Blog.",
  },
  {
    question: "Wie wird OSCam auf Enigma2 eingerichtet?",
    answer:
      "In Kurzform: OSCam über den Plugin-Feed des Images installieren, die Dateien oscam.conf, oscam.server und oscam.user anpassen, den Reader eintragen, den Dienst starten und das Ergebnis im WebIf prüfen. Eine ausführliche Anleitung steht unter OSCam installieren.",
  },
  {
    question: "Was ist das OSCam WebIf?",
    answer:
      "Das WebIf ist die in OSCam eingebaute Weboberfläche. Über den Browser lassen sich Status, aktive Kanäle, der Zustand der Reader und die Logs einsehen, ohne jede Konfigurationsdatei einzeln zu öffnen.",
  },
  {
    question: "Welche Konfigurationsdateien sind wichtig?",
    answer:
      "oscam.conf für Grundeinstellungen und Dienste, oscam.server für die Reader, oscam.user für Zugänge und Berechtigungen sowie oscam.dvbapi für die Priorisierung der Anfragen.",
  },
  {
    question: "Was kann man tun, wenn OSCam nicht startet?",
    answer:
      "Zuerst die zuletzt geänderte Datei auf Tippfehler prüfen, dann die Schreibrechte auf dem Konfigurationsordner und schließlich das Log ansehen. Die erste Fehlermeldung nennt in der Regel die Ursache.",
  },
  {
    question: "Ist OSCam Open Source?",
    answer:
      "Ja. OSCam ist freie Open-Source-Software. Die rechtmäßige Nutzung setzt voraus, dass ausschließlich eigene, legal erworbene Zugangsberechtigungen eingebunden werden.",
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
            title="OSCam – Software, Einrichtung und Nutzung auf Enigma2"
            description="OSCam ist quelloffene Softcam-Software für Linux-Receiver. Diese Seite erklärt, wofür sie da ist, wie sie intern arbeitet und wie Sie sie auf einem Enigma2-Gerät wie VU+, Dreambox oder Zgemma sauber ans Laufen bringen."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-14">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                Für Enigma2-Nutzer ist OSCam vor allem deshalb interessant, weil das System offen
                ist: Die Software wird nicht versteckt, sondern über lesbare Textdateien und eine
                Weboberfläche gesteuert. Wer die wenigen Grundbegriffe kennt, kann jede Einstellung
                nachvollziehen und im Fehlerfall gezielt eingreifen, statt zu raten.
              </p>
              <p>
                Auf dieser Seite finden Sie eine geordnete Einführung: die Bedeutung von OSCam, den
                inneren Ablauf, die vier zentralen Konfigurationsdateien, den Weg zur Einrichtung auf
                Enigma2 sowie Hinweise zu einzelnen Receivern, zur Abgrenzung von{" "}
                <Link href="/icam" className="text-aqua underline underline-offset-4">
                  iCam
                </Link>{" "}
                und zu typischen Problemen. Vertiefende Artikel stehen im{" "}
                <Link href="/blog" className="text-aqua underline underline-offset-4">
                  Blog
                </Link>
                .
              </p>
            </div>

            <nav aria-label="Auf dieser Seite" className="flex flex-wrap gap-2.5">
              {pageNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-aqua/50 hover:text-aqua"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={ogImage}
                alt="OSCam und iCam als Softcam-Technologie für zahlreiche TV-Sender auf Enigma2-Receivern"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section id="was-ist-oscam" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Was ist OSCam?</h2>
              <p className="text-base leading-relaxed text-muted">
                OSCam steht für <strong className="text-foreground">Open Source Conditional Access Module</strong>.
                Der Name beschreibt die Aufgabe: Die Software übernimmt auf einem Linux-Receiver die
                Rolle eines Conditional-Access-Moduls in Software-Form — deshalb der Begriff{" "}
                <em>Softcam</em>. Sie prüft nicht selbst eine Berechtigung, sondern organisiert den
                Weg dorthin.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Praktisch heißt das: Der Receiver stößt beim Umschalten auf einen verschlüsselten
                Sender eine Anfrage an, OSCam reicht sie an die passende Quelle weiter — etwa eine
                lokal gesteckte Smartcard oder ein CI+-Modul — und liefert das Ergebnis zurück, damit
                das Bild freigegeben wird. Voraussetzung ist stets eine eigene, rechtmäßig erworbene
                Zugangsberechtigung; OSCam ist dafür nur das technische Bindeglied. Weil der Quellcode
                offen liegt, ist das Verhalten dokumentiert und für jeden nachvollziehbar.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {grundbegriffe.map((item) => (
                  <figure
                    key={item.src}
                    className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5"
                  >
                    <div className="relative h-16 w-16">
                      <Image src={item.src} alt={item.alt} fill loading="lazy" sizes="64px" className="object-contain" />
                    </div>
                    <figcaption className="text-sm leading-relaxed text-muted">{item.text}</figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section id="funktionsweise" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Wie funktioniert OSCam?</h2>
              <p className="text-base leading-relaxed text-muted">
                Der Ablauf ist immer gleich und wiederholt sich mehrmals pro Sekunde. Vom
                verschlüsselten Sender bis zum Klarbild durchläuft jede Anfrage dieselbe Kette:
              </p>
              <div className="w-full overflow-x-auto">
                <ol className="flex min-w-max items-stretch gap-2 text-xs font-medium">
                  {flowSteps.map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="rounded-lg border border-border bg-background-elevated px-3 py-2 text-foreground">
                        {step}
                      </span>
                      {index < flowSteps.length - 1 ? (
                        <span aria-hidden className="text-aqua">
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Die einzelnen Bausteine dieser Kette und ihre Rolle in der Konfiguration:
              </p>
              <dl className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border">
                {architektur.map((item) => (
                  <div key={item.term} className="grid gap-1 bg-background-elevated/40 p-5 sm:grid-cols-[160px_1fr] sm:gap-4">
                    <dt className="font-mono text-sm font-semibold text-gold">{item.term}</dt>
                    <dd className="text-sm leading-relaxed text-muted">{item.body}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section id="konfiguration" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Die wichtigsten OSCam-Konfigurationsdateien
              </h2>
              <p className="text-base leading-relaxed text-muted">
                OSCam wird über einfache Textdateien im Konfigurationsordner gesteuert. Vier davon
                genügen für ein funktionierendes Setup. Eine ausführliche Erklärung mit Beispielen
                steht im Blogartikel{" "}
                <Link href="/blog/oscam-konfiguration-verstehen" className="text-aqua underline underline-offset-4">
                  OSCam Konfiguration verstehen
                </Link>
                . Konkrete Zugangs- oder Serverdaten sind hier bewusst nicht Teil der Erklärung.
              </p>
              <div className="flex flex-col gap-5">
                {configFiles.map((file) => (
                  <div key={file.name} className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated/40 p-5">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="rounded bg-surface px-2 py-0.5 font-mono text-sm font-semibold text-gold">
                        {file.name}
                      </h3>
                      <span className="text-sm font-medium text-foreground">{file.role}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{file.body}</p>
                    {file.image ? (
                      <figure className="mt-1 overflow-hidden rounded-xl border border-border-strong bg-surface">
                        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                          <span className="h-2.5 w-2.5 rounded-full bg-aqua/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
                          <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
                          <span className="ml-3 font-mono text-xs font-medium text-muted">{file.name}</span>
                        </div>
                        <Image
                          src={file.image.src}
                          alt={file.image.alt}
                          width={900}
                          height={600}
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 660px"
                          className="h-auto w-full object-cover"
                        />
                      </figure>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            <section id="enigma2" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">OSCam auf Enigma2</h2>
              <p className="text-base leading-relaxed text-muted">
                Enigma2 ist die offene Linux-Oberfläche auf den meisten Sat- und Kabelreceivern im
                deutschsprachigen Raum. Weil sie Erweiterungen zulässt, lässt sich OSCam direkt aus
                dem Plugin-Feed des jeweiligen Images nachrüsten. Der grobe Weg sieht so aus:
              </p>
              <ol className="flex flex-col gap-3">
                {enigma2Steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-border bg-surface">
                <Image
                  src="/images/home page/oscam/oscam-enigma2-erstinstallation-anschluesse.png"
                  alt="Anschlüsse und Update-Modus eines Enigma2-Receivers bei der Erstinstallation für OSCam"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
              <p className="text-base leading-relaxed text-muted">
                Die vollständige Anleitung mit allen Zwischenschritten steht unter{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  OSCam installieren
                </Link>
                . Wie Sie den Receiver vorab sauber aufsetzen, beschreibt der Blogartikel{" "}
                <Link href="/blog/enigma2-receiver-oscam-vorbereiten" className="text-aqua underline underline-offset-4">
                  Enigma2-Receiver für OSCam vorbereiten
                </Link>
                .
              </p>
            </section>

            <section id="receiver" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam für verschiedene Receiver
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Das Grundprinzip ist auf allen Enigma2-Geräten identisch. Unterschiede liegen im
                Image, in den Pfaden und in der verfügbaren Rechenleistung — hier die drei im
                deutschsprachigen Raum verbreitetsten Marken.
              </p>
              <div className="flex flex-col gap-4">
                {receiverInfos.map((receiver) => (
                  <div key={receiver.name} className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                    <h3 className="text-base font-semibold text-foreground">{receiver.name}</h3>
                    <p className="text-sm leading-relaxed text-muted">{receiver.body}</p>
                    <Link href={receiver.href} className="w-fit text-sm font-semibold text-aqua underline underline-offset-4 transition-colors hover:text-aqua-soft">
                      OSCam auf {receiver.name} →
                    </Link>
                  </div>
                ))}
              </div>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-border bg-surface">
                <Image
                  src="/images/home page/oscam/oscam-vu-solo-se-enigma2-receiver.png"
                  alt="VU+ Solo SE Enigma2-Receiver mit laufender OSCam-Entschlüsselung und Signalanzeige am Fernseher"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="object-cover"
                />
              </div>
            </section>

            <section id="oscam-oder-icam" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">OSCam oder iCam?</h2>
              <p className="text-base leading-relaxed text-muted">
                Beide sind Softcam-Lösungen mit demselben Zweck, aber unterschiedlicher Umsetzung.
                OSCam ist weiter verbreitet, umfangreicher konfigurierbar und ausführlich
                dokumentiert. iCam tritt schlanker auf und weicht in Konfigurationssyntax und im
                unterstützten Protokollumfang ab. Für die meisten Enigma2-Setups ist OSCam der
                Standard; iCam kann in Frage kommen, wenn ein Setup gezielt darauf ausgelegt ist.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Die technische Gegenüberstellung steht auf der Seite{" "}
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

            <section id="anbieter" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam Anbieter – worauf sollte man achten?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Mit „OSCam Anbieter“ sind technische Dienstleister gemeint, die bei Einrichtung,
                Konfiguration oder laufendem Support helfen. Der Begriff sagt nichts über Qualität
                aus — dafür lohnt der Blick auf einige nüchterne Kriterien:
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">Technische Kompatibilität:</strong> konkrete Angabe, welche
                  Receiver und Enigma2-Images unterstützt werden.
                </li>
                <li>
                  <strong className="text-foreground">Transparenz:</strong> nachvollziehbarer Leistungsumfang, klare
                  Preise, kein Kleingedrucktes.
                </li>
                <li>
                  <strong className="text-foreground">Support:</strong> erreichbar bei Rückfragen, besonders während der
                  Ersteinrichtung.
                </li>
                <li>
                  <strong className="text-foreground">Datenschutz:</strong> klare Auskunft, welche Daten erhoben und wie
                  sie verarbeitet werden.
                </li>
                <li>
                  <strong className="text-foreground">Rechtmäßige Nutzung:</strong> das Angebot setzt eigene, legal
                  erworbene Zugangsberechtigungen voraus.
                </li>
                <li>
                  <strong className="text-foreground">Klare Leistungsbeschreibung:</strong> was genau geliefert wird —
                  und was ausdrücklich nicht.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Ausführlich behandelt das die Seite{" "}
                <Link href="/oscam-icam-anbieter" className="text-aqua underline underline-offset-4">
                  OSCam iCam Anbieter
                </Link>
                . Wer selbst Leistungen weitergeben möchte, findet Hinweise unter{" "}
                <Link href="/oscam-reseller" className="text-aqua underline underline-offset-4">
                  OSCam Reseller
                </Link>
                .
              </p>
            </section>

            <section id="probleme" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Häufige OSCam-Probleme</h2>
              <p className="text-base leading-relaxed text-muted">
                Die meisten Startprobleme lassen sich auf wenige Ursachen zurückführen. Eine kurze
                Übersicht als Einstieg in die Fehlersuche:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {probleme.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.hint}</p>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted">
                Eine strukturierte Fehlersuche mit Log-Beispielen zeigt der Blogartikel{" "}
                <Link href="/blog/oscam-fehler-loesungen" className="text-aqua underline underline-offset-4">
                  Häufige OSCam Fehler und Lösungen
                </Link>
                . Kommen Sie nicht weiter, hilft unser{" "}
                <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
                  Support-Team
                </Link>{" "}
                bei der Einrichtung.
              </p>
            </section>

            <section id="faq" className="flex scroll-mt-24 flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7">
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
              <p className="text-sm leading-relaxed text-muted">
                Weitere Antworten rund um OSCam, iCam und Enigma2 sammelt unsere{" "}
                <Link href="/faq" className="text-aqua underline underline-offset-4">
                  FAQ-Seite
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

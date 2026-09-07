import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

const ogImage = "/images/home page/icam/icam-oscam-enigma2-logo.png";

export const metadata: Metadata = {
  title: "iCam: Erklärung, Einrichtung und Nutzung auf Enigma2",
  description:
    "iCam verständlich erklärt: was iCam ist, wie es mit OSCam zusammenarbeitet und wie Sie es auf Enigma2-Receivern wie VU+, Dreambox oder Zgemma einrichten und kontrollieren.",
  keywords: [
    "iCam",
    "iCam Anleitung",
    "iCam Einrichtung",
    "iCam Enigma2",
    "iCam OSCam",
    "iCam installieren",
    "iCam Receiver",
    "iCam VU+",
    "iCam Dreambox",
    "iCam Zgemma",
    "iCam Anbieter",
  ],
  alternates: {
    canonical: "/icam",
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/icam",
    title: "iCam: Erklärung, Einrichtung und Nutzung auf Enigma2",
    description:
      "Was iCam ist, wie es mit OSCam zusammenhängt und wie es auf Enigma2-Receivern wie VU+, Dreambox und Zgemma eingebunden wird.",
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
    title: "iCam: Erklärung, Einrichtung und Nutzung auf Enigma2",
    description:
      "Was iCam ist, wie es mit OSCam zusammenhängt und wie es auf Enigma2-Receivern eingebunden wird.",
  },
};

const pageNav = [
  { href: "#was-ist-icam", label: "Was ist iCam?" },
  { href: "#funktionsweise", label: "Funktionsweise" },
  { href: "#icam-und-oscam", label: "iCam und OSCam" },
  { href: "#enigma2", label: "iCam auf Enigma2" },
  { href: "#receiver", label: "Receiver" },
  { href: "#anbieter", label: "Anbieter" },
  { href: "#probleme", label: "Häufige Probleme" },
  { href: "#faq", label: "FAQ" },
];

const bausteine = [
  {
    term: "Enigma2-Receiver",
    body: "Empfängt das verschlüsselte Signal und meldet über die DVB-Schnittstelle, welcher Sender gerade läuft und welche Freigabe er braucht.",
  },
  {
    term: "iCam",
    body: "Nimmt diese Anfrage auf einem bestimmten Protokollpfad entgegen und reicht sie an die zuständige Instanz weiter — meist an OSCam.",
  },
  {
    term: "OSCam",
    body: "Bleibt in den meisten Setups die zentrale Softcam-Instanz. Sie ordnet die Anfrage einer Quelle zu und liefert das Kontrollwort zurück.",
  },
  {
    term: "Kommunikation",
    body: "iCam und OSCam tauschen die Anfragen über ein definiertes Protokoll aus. Welcher Weg genutzt wird, steht in der Konfiguration.",
  },
  {
    term: "Konfiguration",
    body: "Reine Textdateien im Konfigurationsordner legen Pfade, Protokoll und Quellen fest. Sie lassen sich per FTP oder über die Oberfläche bearbeiten.",
  },
  {
    term: "Logs",
    body: "Das Log zeigt jeden Schritt der Kette. Bei Problemen nennt in der Regel die erste Fehlermeldung die Ursache.",
  },
  {
    term: "Kontrolle",
    body: "Das OSCam-WebIf zeigt Status, aktive Kanäle und den Zustand der Quellen im Browser — die schnellste Sicht auf ein laufendes Setup.",
  },
];

const flowSteps = [
  "Verschlüsselter Sender",
  "Enigma2 / DVB-Schnittstelle",
  "iCam",
  "OSCam",
  "Zugangsberechtigung",
  "Kontrollwort zurück",
  "Klarbild",
];

const enigma2Steps = [
  "Receiver mit aktueller Firmware und stabiler Netzwerkverbindung vorbereiten.",
  "Ein gepflegtes Enigma2-Image wie OpenATV oder OpenPLi verwenden.",
  "Die benötigten Softcam-Pakete installieren — in der Regel OSCam plus die iCam-Komponente über den Feed oder als IPK.",
  "Die Konfiguration prüfen: Pfade, Protokoll, Quelle sowie korrekte Uhrzeit und DNS.",
  "Den Dienst über den Softcam-Manager des Images starten.",
  "Das Log kontrollieren — die erste Meldung zeigt, ob der Start sauber durchgelaufen ist.",
  "Einen verschlüsselten Sender testen und im OSCam-WebIf den Status prüfen.",
];

const receiverInfos = [
  {
    name: "VU+",
    href: "/oscam-vu-plus",
    body: "Große Auswahl an Images wie OpenPLi und OpenATV, ein aktiv gepflegter Feed und auf den meisten Modellen genug Reserve, um OSCam und iCam parallel laufen zu lassen.",
  },
  {
    name: "Dreambox",
    href: "/oscam-dreambox",
    body: "Je nach Modell OpenATV oder das herstellereigene DreamOS. Die Verzeichnisse und der Weg über den Softcam-Manager weichen hier stärker ab als bei anderen Marken.",
  },
  {
    name: "Zgemma",
    href: "/oscam-zgemma",
    body: "Preiswerte Einstiegsgeräte mit knapper Ausstattung. Eine schlanke Konfiguration und wenige gleichzeitige Prozesse halten die Box stabil.",
  },
];

const anbieterKriterien = [
  {
    title: "Technische Kompatibilität",
    body: "Konkrete Angabe, welche Receiver und Enigma2-Images unterstützt werden und ob OSCam und iCam gemeinsam eingerichtet werden.",
  },
  {
    title: "Transparenz",
    body: "Nachvollziehbarer Leistungsumfang, klare Preise und ein verständlicher Ablauf ohne Kleingedrucktes.",
  },
  {
    title: "Support",
    body: "Erreichbarkeit bei Rückfragen, besonders während der Ersteinrichtung und bei späteren Änderungen.",
  },
  {
    title: "Datenschutz",
    body: "Klare Auskunft darüber, welche Daten erhoben und wie sie verarbeitet werden — nachlesbar in einer Datenschutzerklärung.",
  },
  {
    title: "Klare Leistungsbeschreibung",
    body: "Eine eindeutige Beschreibung, was geliefert wird und was ausdrücklich nicht Teil der Leistung ist.",
  },
  {
    title: "Rechtmäßige Nutzung",
    body: "Das Angebot setzt eigene, legal erworbene Zugangsberechtigungen voraus und macht keine anderslautenden Versprechen.",
  },
];

const probleme = [
  {
    title: "iCam startet nicht",
    hint: "Meist ein Tippfehler in der Konfiguration, eine fehlende Berechtigung auf dem Ordner oder ein nicht installiertes Paket.",
  },
  {
    title: "Kein Bild",
    hint: "Es kommt kein Kontrollwort zurück — Zugangsberechtigung, Quelle und den Protokollpfad zwischen iCam und OSCam prüfen.",
  },
  {
    title: "Receiver erkennt die Konfiguration nicht",
    hint: "Falscher Pfad oder falsches Verzeichnis: Der Softcam-Manager zeigt den Dienst dann gar nicht erst an.",
  },
  {
    title: "OSCam läuft nicht korrekt",
    hint: "iCam hängt in den meisten Setups an OSCam. Läuft OSCam nicht sauber, zuerst dort den Status und das Log ansehen.",
  },
  {
    title: "Verbindungsprobleme",
    hint: "Falsches Gateway, DNS oder eine abweichende Uhrzeit stören die Kommunikation. Netzwerk und Zeitserver kontrollieren.",
  },
  {
    title: "Log zeigt Fehler",
    hint: "Das Log kurz auf debug stellen, die erste konkrete Meldung suchen und die Einstellung danach wieder zurücknehmen.",
  },
  {
    title: "WebIf nicht erreichbar",
    hint: "Der httpport in der OSCam-Konfiguration ist nicht gesetzt, blockiert oder von einem anderen Dienst belegt.",
  },
];

const faqItems = [
  {
    question: "Was ist iCam?",
    answer:
      "iCam ist eine Softcam-Komponente für Linux-basierte Receiver mit Enigma2. Sie gehört in dieselbe Kategorie wie OSCam und Ncam und hilft dabei, verschlüsselte Sender mit einer rechtmäßig erworbenen Zugangsberechtigung darzustellen, indem sie zwischen Receiver und Zugangsquelle vermittelt.",
  },
  {
    question: "Wie unterscheidet sich iCam von OSCam?",
    answer:
      "OSCam ist die umfangreicher konfigurierbare, breit dokumentierte Softcam-Software und bildet meist die zentrale Instanz. iCam tritt schlanker auf und deckt oft einen bestimmten Protokoll- oder Relay-Pfad ab. In vielen Setups laufen beide zusammen, statt sich gegenseitig zu ersetzen.",
  },
  {
    question: "Auf welchen Receivern kann iCam relevant sein?",
    answer:
      "Grundsätzlich auf jedem Receiver mit einem gepflegten Enigma2-Image — darunter Marken wie VU+, Dreambox, Zgemma, GigaBlue oder Octagon. Unterschiede liegen im Image, in den Pfaden und in der Rechenleistung, nicht im Grundprinzip.",
  },
  {
    question: "Was bedeutet iCam im Enigma2-Umfeld?",
    answer:
      "Im Enigma2-Umfeld ist iCam kein eigenes Betriebssystem, sondern ein Dienst, der auf dem Receiver mitläuft. Der Begriff taucht meist zusammen mit OSCam und Ncam auf, wenn es um die Entschlüsselung autorisierter Inhalte und um Streamrelay-Pfade geht.",
  },
  {
    question: "Wie wird iCam grundsätzlich eingerichtet?",
    answer:
      "In Kurzform: gepflegtes Enigma2-Image nutzen, die Softcam-Pakete inklusive iCam-Komponente installieren, die Konfiguration mit Pfaden, Protokoll und Quelle anpassen, den Dienst über den Softcam-Manager starten und das Ergebnis im Log und im OSCam-WebIf prüfen.",
  },
  {
    question: "Welche Rolle spielt OSCam bei iCam?",
    answer:
      "In den meisten Konfigurationen bleibt OSCam die zentrale Softcam-Instanz, die Anfragen einer Quelle zuordnet und das Kontrollwort liefert. iCam übernimmt einen bestimmten Weg dorthin. Läuft OSCam nicht, funktioniert in diesen Setups auch iCam nicht.",
  },
  {
    question: "Was kann man bei iCam-Problemen prüfen?",
    answer:
      "Zuerst die zuletzt geänderte Konfigurationsdatei auf Tippfehler, dann die Schreibrechte des Konfigurationsordners, den Status von OSCam, Netzwerk und Uhrzeit sowie das Log. Die erste konkrete Fehlermeldung nennt in der Regel die Ursache.",
  },
  {
    question: "Wo findet man weitere Informationen zu iCam?",
    answer:
      "Auf unserer Seite zu OSCam, im Blogartikel zum Vergleich von OSCam und iCam sowie in den Artikeln zu Fehlerbehebung und zur Vorbereitung eines Enigma2-Receivers. Bei konkreten Fragen hilft zusätzlich unser Support.",
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
            title="iCam – Erklärung, Einrichtung und Nutzung auf Enigma2"
            description="iCam ist eine schlanke Softcam-Komponente aus dem Umfeld von OSCam und Ncam. Diese Seite erklärt, was iCam ist, wie es mit OSCam zusammenarbeitet und wie Sie es auf einem Enigma2-Receiver einbinden und kontrollieren."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-14">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                Im Enigma2-Umfeld begegnet einem der Name iCam meist im selben Atemzug wie{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam
                </Link>{" "}
                und Ncam. Alle drei sind Softcam-Lösungen für Linux-basierte Receiver und haben
                dieselbe Grundaufgabe: verschlüsselte Sender mit einer rechtmäßig erworbenen
                Berechtigung nutzbar zu machen. iCam ist dabei kein Ersatz für OSCam, sondern
                ergänzt es in vielen Setups auf einem bestimmten Übertragungsweg.
              </p>
              <p>
                Relevant wird das Thema für Nutzerinnen und Nutzer, die einen Enigma2-Receiver wie
                VU+, Dreambox oder Zgemma betreiben und in einer Anleitung oder Konfiguration
                ausdrücklich auf iCam stoßen. Die folgenden Abschnitte ordnen den Begriff ein,
                zeigen den Ablauf und die typischen Stolpersteine.
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
                alt="iCam Logo mit dem Hinweis auf OSCam, iCam und Enigma2"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            <section id="was-ist-icam" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Was ist iCam?</h2>
              <p className="text-base leading-relaxed text-muted">
                iCam ist eine <strong className="text-foreground">Softcam-Komponente</strong> für
                Receiver mit Linux und der Enigma2-Oberfläche. Sie prüft keine Berechtigung selbst,
                sondern organisiert den Weg zwischen dem Receiver und einer bereits vorhandenen,
                rechtmäßig erworbenen Zugangsquelle. Damit steht iCam in derselben Familie wie OSCam
                und Ncam.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Technisch ist iCam kein eigenes System, sondern ein Dienst, der im Hintergrund des
                Receivers mitläuft und über Textdateien konfiguriert wird. In den meisten
                Installationen übernimmt OSCam die zentrale Rolle, während iCam einen bestimmten
                Protokollpfad abdeckt — etwa im Zusammenhang mit einem Streamrelay. Die Software
                selbst ist neutral; entscheidend ist, dass ausschließlich eigene, legal erworbene
                Berechtigungen eingebunden werden.
              </p>
            </section>

            <section id="funktionsweise" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Wie funktioniert iCam?</h2>
              <p className="text-base leading-relaxed text-muted">
                Der Ablauf wiederholt sich laufend, sobald ein verschlüsselter Sender läuft. Vom
                Signal bis zum freigegebenen Bild durchläuft jede Anfrage dieselbe Kette:
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
                Die Bausteine dieser Kette und ihre Rolle in der Konfiguration:
              </p>
              <dl className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border">
                {bausteine.map((item) => (
                  <div key={item.term} className="grid gap-1 bg-background-elevated/40 p-5 sm:grid-cols-[180px_1fr] sm:gap-4">
                    <dt className="font-mono text-sm font-semibold text-gold">{item.term}</dt>
                    <dd className="text-sm leading-relaxed text-muted">{item.body}</dd>
                  </div>
                ))}
              </dl>
              <figure className="mt-1 overflow-hidden rounded-2xl border border-border-strong bg-surface">
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-aqua/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
                  <span className="ml-3 font-mono text-xs font-medium text-muted">iCam Settings</span>
                </div>
                <Image
                  src="/images/home page/icam/icam-enigma2-einstellungen-uebersicht.png"
                  alt="Übersicht der iCam Einstellungsbereiche für Enigma2: Softcam, Tuner, Netzwerk und Logs"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 660px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            <section id="icam-und-oscam" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">iCam und OSCam</h2>
              <p className="text-base leading-relaxed text-muted">
                Beide Namen stehen für Softcam-Lösungen auf Enigma2 — die Frage ist selten
                „entweder oder“, sondern wie sie zusammenspielen.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                  <h3 className="text-sm font-semibold text-foreground">Gemeinsamkeiten</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    Gleiche Kategorie, gleiche Grundaufgabe, Konfiguration über Textdateien, Betrieb
                    als Hintergrunddienst auf einem Enigma2-Receiver.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                  <h3 className="text-sm font-semibold text-foreground">Unterschiede</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    OSCam ist umfangreicher, breit dokumentiert und meist die zentrale Instanz. iCam
                    ist schlanker und deckt oft nur einen bestimmten Protokollpfad ab.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                  <h3 className="text-sm font-semibold text-foreground">Technische Beziehung</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    In vielen Setups reicht iCam die Anfrage an OSCam weiter. OSCam ordnet sie einer
                    Quelle zu und liefert das Kontrollwort zurück.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                  <h3 className="text-sm font-semibold text-foreground">Wonach man sucht</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    Wer die grundsätzliche Einrichtung sucht, landet bei OSCam. Nach iCam sucht man,
                    wenn eine Anleitung oder ein Setup ausdrücklich diesen Pfad nennt.
                  </p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Eine ausführliche Gegenüberstellung steht im Blogartikel{" "}
                <Link href="/blog/oscam-icam-unterschiede" className="text-aqua underline underline-offset-4">
                  OSCam und iCam im Vergleich
                </Link>
                . Die technische Basis erklärt die Seite{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam
                </Link>
                .
              </p>
              <figure className="mt-1 overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/home page/icam/icam-enigma2-senderliste-streamrelay.png"
                  alt="Enigma2 Senderliste eines über iCam eingebundenen SKY-DE-Bouquets im Streamrelay-Modus"
                  width={2096}
                  height={1184}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            <section id="enigma2" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">iCam auf Enigma2</h2>
              <p className="text-base leading-relaxed text-muted">
                Die Vorgehensweise ähnelt der von OSCam, weil beide über denselben Softcam-Manager
                des Images verwaltet werden. Der grobe Weg:
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
              <figure className="mt-1 overflow-hidden rounded-2xl border border-border-strong bg-surface">
                <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-aqua/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
                  <span className="ml-3 font-mono text-xs font-medium text-muted">iCam Enigma2 — Setup</span>
                </div>
                <Image
                  src="/images/home page/icam/icam-enigma2-terminal-setup-menue.png"
                  alt="iCam Setup-Menü über eine Terminalverbindung mit angezeigter OSCam- und Ncam-Version"
                  width={1888}
                  height={1180}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 660px"
                  className="h-auto w-full object-cover"
                />
              </figure>
              <p className="text-base leading-relaxed text-muted">
                Die vollständige Grundinstallation mit allen Zwischenschritten beschreibt die Seite{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  OSCam installieren
                </Link>
                ; ihr Grundprinzip lässt sich auf iCam übertragen. Wie Sie den Receiver vorab sauber
                aufsetzen, zeigt der Blogartikel{" "}
                <Link href="/blog/enigma2-receiver-oscam-vorbereiten" className="text-aqua underline underline-offset-4">
                  Enigma2-Receiver für OSCam vorbereiten
                </Link>
                . Anleitungen zum Umgehen von Zugangsbeschränkungen sind ausdrücklich nicht Teil
                dieser Seite.
              </p>
            </section>

            <section id="receiver" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                iCam für verschiedene Receiver
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Das Grundprinzip ist auf allen Enigma2-Geräten gleich. Unterschiede liegen im Image,
                in den Pfaden und in der verfügbaren Leistung — hier die drei im deutschsprachigen
                Raum verbreitetsten Marken.
              </p>
              <div className="flex flex-col gap-4">
                {receiverInfos.map((receiver) => (
                  <div key={receiver.name} className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                    <h3 className="text-base font-semibold text-foreground">{receiver.name}</h3>
                    <p className="text-sm leading-relaxed text-muted">{receiver.body}</p>
                    <Link href={receiver.href} className="w-fit text-sm font-semibold text-aqua underline underline-offset-4 transition-colors hover:text-aqua-soft">
                      OSCam und iCam auf {receiver.name} →
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <section id="anbieter" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                iCam Anbieter – worauf sollte man achten?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Mit „iCam Anbieter“ sind technische Dienstleister gemeint, die bei Einrichtung,
                Konfiguration oder laufendem Support unterstützen. Der Begriff sagt nichts über
                Qualität aus — dafür lohnt der Blick auf einige nüchterne Kriterien:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {anbieterKriterien.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                ))}
              </div>
              <figure className="mt-1 overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/home page/icam/icam-oscam-enigma2-anbieter-stadion.png"
                  alt="iCam Symbolbild mit Schlüssel vor einem Stadion und dem Hinweis auf OSCam, Enigma2 und Anbieter"
                  width={1600}
                  height={1600}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
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
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">Häufige iCam-Probleme</h2>
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
                . Kürzere Antworten sammelt unsere{" "}
                <Link href="/faq" className="text-aqua underline underline-offset-4">
                  FAQ-Seite
                </Link>
                , und bei anhaltenden Problemen hilft unser{" "}
                <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
                  Support-Team
                </Link>
                .
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
                Mehr Hintergrund zu OSCam, iCam und Enigma2 finden Sie in unserem{" "}
                <Link href="/blog" className="text-aqua underline underline-offset-4">
                  Blog
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

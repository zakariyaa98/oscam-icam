import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";

const imgDir = "/images/home page/oscam-vu-plus";
const ogImage = `${imgDir}/oscam-vu-plus-uno-4k-se-frontdisplay.webp`;

export const metadata: Metadata = {
  title: "OSCam VU+ – Installation, Einrichtung & Konfiguration",
  description:
    "OSCam auf VU+ installieren und einrichten: ausführliche Anleitung für Enigma2-Receiver wie Solo, Duo, Uno und Zero – mit Konfigurationsdateien, WebIF-Kontrolle, Modell-Hinweisen und Lösungen für typische Fehler.",
  keywords: [
    "OSCam VU+",
    "OSCam auf VU+",
    "OSCam VU+ installieren",
    "OSCam VU+ Anleitung",
    "OSCam VU+ einrichten",
    "OSCam VU+ Konfiguration",
    "OSCam Enigma2 VU+",
    "OSCam VU+ WebIF",
    "OSCam VU+ Probleme",
    "OSCam VU+ Update",
    "VU+ Solo",
    "VU+ Duo",
    "VU+ Uno 4K SE",
    "VU+ Zero",
  ],
  alternates: {
    canonical: "/oscam-vu-plus",
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam-vu-plus",
    title: "OSCam VU+ – Installation, Einrichtung & Konfiguration",
    description:
      "OSCam auf VU+ Receivern installieren, konfigurieren, im WebIF prüfen und typische Fehler lösen – Schritt für Schritt für Enigma2.",
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
    title: "OSCam VU+ – Installation, Einrichtung & Konfiguration",
    description:
      "OSCam auf VU+ Receivern installieren, konfigurieren und Fehler beheben – die Anleitung für Enigma2.",
  },
};

const pageNav = [
  { href: "#was-ist-oscam-vu", label: "OSCam auf VU+" },
  { href: "#modelle", label: "Geeignete Modelle" },
  { href: "#voraussetzungen", label: "Voraussetzungen" },
  { href: "#installation", label: "Installation" },
  { href: "#konfiguration", label: "Konfiguration" },
  { href: "#webif", label: "WebIF" },
  { href: "#modell-hinweise", label: "Modell-Hinweise" },
  { href: "#troubleshooting", label: "Fehlerbehebung" },
  { href: "#update", label: "Update" },
  { href: "#oscam-icam", label: "OSCam & iCam" },
  { href: "#anfaenger", label: "Für Anfänger" },
  { href: "#faq", label: "FAQ" },
];

const vuModelle = [
  {
    modell: "VU+ Solo / Solo SE",
    gen: "HD-Generation, MIPS",
    hinweis: "Läuft, solange ein noch gepflegtes Enigma2-Image installiert ist. Die im Feed verfügbare OSCam-Version kann bei sehr alten Modellen älter ausfallen.",
  },
  {
    modell: "VU+ Solo²",
    gen: "HD-Generation, MIPS, Dual-Tuner",
    hinweis: "Mehr Reserve als das Solo. Für mehrere gleichzeitig aktive Reader in der Regel ausreichend.",
  },
  {
    modell: "VU+ Uno",
    gen: "HD-Generation, MIPS, Single-Tuner",
    hinweis: "Solide Basis für ein Einzelplatz-Setup. Eine schlanke Konfiguration hält die Box zuverlässig.",
  },
  {
    modell: "VU+ Duo / Duo²",
    gen: "HD-Generation, MIPS, Twin-Tuner",
    hinweis: "Genug Leistung, um Twin-Empfang und OSCam parallel zu betreiben.",
  },
  {
    modell: "VU+ Zero",
    gen: "HD-Generation, MIPS, Einstiegsklasse",
    hinweis: "Am knappsten ausgestattet. Wenige Reader, moderates Log-Level, keine überflüssigen Zusatzdienste.",
  },
  {
    modell: "VU+ Uno 4K SE",
    gen: "4K-Generation, ARM, FBC-Twin-Tuner",
    hinweis: "Aktuelle Images und aktuelle OSCam-Builds, deutlich mehr Reserve für parallele Reader und Streaming.",
  },
];

const installSteps = [
  {
    title: "Receiver vorbereiten",
    body: "Schalten Sie die VU+ ein, prüfen Sie im Systemmenü die installierte Image-Version und aktualisieren Sie sie bei Bedarf. Legen Sie ein vollständiges Image-Backup an und notieren Sie sich das Administrator-Passwort. Ein FAT32-formatierter USB-Stick oder ein FTP-Zugang ist für spätere Schritte hilfreich.",
  },
  {
    title: "Netzwerkverbindung prüfen",
    body: "Die VU+ braucht Zugriff auf das lokale Netz und das Internet, damit der Feed erreichbar ist. Notieren Sie sich die IP-Adresse aus dem Netzwerkmenü und prüfen Sie, ob sich die Box vom Computer aus per Ping erreichen lässt. Ohne Netzwerk lädt weder die Paketliste noch das OSCam-Paket.",
  },
  {
    title: "Enigma2 Image und Kompatibilität prüfen",
    body: "Auf VU+ sind vor allem OpenPLi, OpenATV und das VU+ Team Image (VTi) verbreitet. Stellen Sie fest, welches Image und welche Architektur (MIPS bei der HD-Generation, ARM bei der 4K-Generation) Ihr Gerät nutzt — OSCam wird pro Kombination gebaut.",
  },
  {
    title: "Passende OSCam-Version auswählen",
    body: "Im Softwaremanager bzw. Feed des Images ist OSCam in der Regel als Softcam-Paket gelistet. Wählen Sie die zum Image passende Variante. Fehlt sie im Feed, halten Sie eine kompatible IPK-Datei für Ihre Architektur und Image-Version bereit.",
  },
  {
    title: "OSCam installieren",
    body: "Starten Sie die Installation über den Plugin-Browser bzw. den Softwaremanager. Das Paket wird geladen, entpackt und eingerichtet; Abhängigkeiten wie eine DVBAPI-Bibliothek zieht das System meist automatisch mit. Am Ende meldet die Oberfläche den Erfolg oder bricht mit einer Meldung ab.",
  },
  {
    title: "GUI oder Receiver neu starten",
    body: "Viele VU+ Images übernehmen ein frisch installiertes Softcam erst nach einem Neustart der Oberfläche (GUI-Restart) oder des Geräts. Führen Sie diesen Neustart durch, damit OSCam sauber im Softcam-Menü erscheint.",
  },
  {
    title: "OSCam aktivieren",
    body: "Öffnen Sie das Softcam-Menü — bei OpenATV der Softcam-Manager, bei VTi das SoftCam-Panel — wählen Sie OSCam als aktives Softcam und setzen Sie den Autostart, damit der Dienst nach jedem Reboot automatisch mitläuft.",
  },
  {
    title: "Installation überprüfen",
    body: "Kontrollieren Sie im Softcam-Menü, ob OSCam als aktiv angezeigt wird, und rufen Sie das WebIF im Browser auf (IP der VU+ plus Port). Zeigt die Statusseite die OSCam-Version und einen laufenden Dienst, ist die Installation abgeschlossen — die Konfiguration folgt separat.",
  },
];

const configFiles = [
  {
    name: "oscam.conf",
    role: "Grundeinstellungen und Dienste",
    body: "Steuert Logging, das WebIF (Port, Benutzer, erlaubte Netze) und die DVBAPI-Anbindung, über die die VU+ ihre Anfragen an OSCam schickt. Ohne gültige oscam.conf startet der Dienst nicht.",
  },
  {
    name: "oscam.server",
    role: "Reader und Verbindungen",
    body: "Beschreibt jede Signalquelle als eigenen Reader — einen lokal an der VU+ angeschlossenen Kartenleser, ein CI+-Modul oder eine eigene Netzwerkverbindung — mit Name, Typ und den dokumentierten Parametern.",
  },
  {
    name: "oscam.user",
    role: "Zugänge und Berechtigungen",
    body: "Legt die Zugänge innerhalb der eigenen Installation fest und ordnet ihnen Reader zu. In einem Einzelplatz-Setup mit einer VU+ genügt meist ein Eintrag, zum Beispiel example-user mit example-password.",
  },
  {
    name: "oscam.dvbapi",
    role: "Priorisierung der Anfragen",
    body: "Optional. Steuert, welcher Reader für welchen Sender bevorzugt (P), verzögert (D) oder ignoriert (I) wird — relevant, sobald mehrere Reader dieselbe Anfrage beantworten könnten.",
  },
];

const troubleshooting = [
  {
    title: "OSCam startet nicht",
    symptom: "Das Softcam-Menü zeigt OSCam kurz als aktiv, der Dienst fällt aber sofort auf „gestoppt“ zurück.",
    ursache: "Syntaxfehler in oscam.conf, ein belegter Port oder ein Reader in oscam.server, der auf ein nicht vorhandenes Gerät verweist.",
    pruefung: "Die zuletzt geänderte Datei Zeile für Zeile durchsehen und das Log direkt nach dem Startversuch öffnen — auf VU+ meist unter /var/log/oscam.log oder /tmp/oscam.log.",
    loesung: "Den fehlerhaften Eintrag korrigieren oder auskommentieren, dann neu starten. Im Zweifel mit einer minimalen oscam.conf ohne Reader beginnen und schrittweise erweitern.",
  },
  {
    title: "OSCam läuft nach einem Neustart nicht",
    symptom: "Nach jedem Reboot der VU+ ist der Dienst gestoppt und muss von Hand aktiviert werden.",
    ursache: "Der Autostart im Softcam-Menü ist nicht gesetzt, oder ein zweites Softcam übernimmt beim Start.",
    pruefung: "Im Softcam-Manager bzw. SoftCam-Panel kontrollieren, ob OSCam als Autostart-Softcam eingetragen ist und ob wirklich nur ein Softcam aktiv ist.",
    loesung: "OSCam als aktives Softcam mit Autostart festlegen, andere Softcams deaktivieren und die VU+ einmal vollständig neu starten.",
  },
  {
    title: "WebIF ist nicht erreichbar",
    symptom: "Der Browser meldet „Verbindung abgelehnt“ oder lädt endlos, obwohl OSCam läuft.",
    ursache: "Kein httpport in oscam.conf gesetzt, ein anderer Dienst belegt den Port, oder httpallowed schließt den eigenen Rechner aus.",
    pruefung: "In oscam.conf den WebIF-Abschnitt kontrollieren: Port, Benutzer, Passwort und die erlaubten IP-Bereiche.",
    loesung: "Einen freien Port eintragen, das eigene Subnetz in httpallowed aufnehmen, OSCam neu starten und die Adresse der VU+ mit Port erneut aufrufen.",
  },
  {
    title: "OSCam Konfigurationsdateien werden nicht gefunden",
    symptom: "OSCam startet, ignoriert aber offensichtlich Ihre Einstellungen oder legt neue Standarddateien an.",
    ursache: "Die Dateien liegen in einem anderen Ordner, als OSCam auf dieser VU+ erwartet, oder der Dienst wird mit abweichendem Konfigurationspfad gestartet.",
    pruefung: "Im Softcam-Startskript oder in den Startparametern nachsehen, welcher Ordner mit -c übergeben wird, und mit dem tatsächlichen Speicherort abgleichen.",
    loesung: "Die Dateien in den erwarteten Ordner (häufig /etc/tuxbox/config/ oder /etc/tuxbox/config/oscam/) verschieben oder den Startparameter anpassen, danach neu starten.",
  },
  {
    title: "Falscher Dateipfad",
    symptom: "Änderungen in oscam.server oder oscam.user zeigen keine Wirkung.",
    ursache: "Es existieren mehrere Kopien der Datei in verschiedenen Ordnern, und OSCam liest eine andere als die bearbeitete.",
    pruefung: "Mit einer Dateisuche alle Vorkommen von oscam.server auf der VU+ auflisten und mit dem im WebIF unter „Files“ angezeigten Pfad vergleichen.",
    loesung: "Überzählige Kopien entfernen, nur den korrekten Ordner pflegen und nach jeder Änderung den Dienst neu starten.",
  },
  {
    title: "Inkompatible OSCam-Version",
    symptom: "Die Installation läuft durch, aber der Dienst stürzt sofort ab oder das WebIF zeigt seltsame Fehler.",
    ursache: "Das Paket wurde für ein anderes Image, eine andere Architektur (MIPS statt ARM) oder eine deutlich abweichende Enigma2-Version gebaut.",
    pruefung: "Image-Name und Architektur der VU+ mit den Angaben des Pakets vergleichen; im WebIF oder über die Versionsabfrage am Gerät die laufende Version ablesen.",
    loesung: "Die zum Image passende OSCam-Variante aus dem offiziellen Feed installieren und die unpassende Version vorher sauber entfernen.",
  },
  {
    title: "Netzwerkproblem",
    symptom: "OSCam läuft, aber Netzwerk-Reader bleiben offline oder das Log zeigt Zeitfehler.",
    ursache: "Falsches Gateway, kein funktionierender DNS oder eine deutlich abweichende Systemzeit auf der VU+.",
    pruefung: "Im Netzwerkmenü Gateway und DNS kontrollieren, die Uhrzeit des Geräts prüfen und einen Zeitserver hinterlegen.",
    loesung: "Netzwerkdaten korrigieren, die Zeit synchronisieren und die VU+ neu starten. Erst mit korrekter Uhrzeit arbeiten Netzwerkverbindungen zuverlässig.",
  },
  {
    title: "Konfigurationsfehler",
    symptom: "Nach einer größeren Änderung funktioniert gar nichts mehr, obwohl vorher alles lief.",
    ursache: "Mehrere Änderungen auf einmal — die eigentliche Fehlerquelle ist nicht mehr eindeutig.",
    pruefung: "Auf das letzte Backup zurückgreifen und die Änderungen einzeln erneut vornehmen, jeweils mit einem Test dazwischen.",
    loesung: "Immer nur eine Einstellung pro Durchgang ändern, danach testen, das Ergebnis notieren. So bleibt jede Ursache nachvollziehbar.",
  },
  {
    title: "Berechtigungsproblem",
    symptom: "OSCam meldet beim Start, dass es eine Datei nicht lesen oder schreiben kann.",
    ursache: "Die Konfigurationsdateien wurden per FTP mit falschen Rechten übertragen oder gehören einem anderen Benutzer.",
    pruefung: "Die Rechte der Dateien im Konfigurationsordner ansehen — üblich sind Leserechte für den Dienst und Schreibrechte für den Eigentümer.",
    loesung: "Die Rechte auf einen üblichen Wert setzen (zum Beispiel 644 für Konfigurationsdateien) und den Eigentümer korrigieren, danach neu starten.",
  },
];

const anfaengerSchritte = [
  "VU+ Receiver prüfen: Modell und Generation (HD/MIPS oder 4K/ARM) feststellen, Firmware aktualisieren.",
  "Enigma2 prüfen: installiertes Image bestimmen (OpenPLi, OpenATV oder VTi) und Version notieren.",
  "Netzwerk prüfen: IP-Adresse der VU+ notieren, Verbindung ins Internet testen.",
  "Passende OSCam-Version auswählen: aus dem Feed des Images oder als IPK für die richtige Architektur.",
  "OSCam installieren: über den Plugin-Browser bzw. Softwaremanager, danach GUI oder Gerät neu starten.",
  "Konfiguration prüfen: oscam.conf, oscam.server und oscam.user an das eigene Setup anpassen.",
  "WebIF kontrollieren: im Browser öffnen, Version und laufenden Dienst bestätigen.",
  "Status prüfen: Reader auf „online“, Log ohne wiederkehrende Fehler, Autostart gesetzt.",
  "Fehler systematisch analysieren: bei Problemen immer die erste Fehlermeldung im Log zuerst lesen.",
];

const checkliste = [
  "Modell und Architektur der VU+ bekannt",
  "Enigma2-Image und Version notiert",
  "Netzwerk geprüft, IP-Adresse notiert",
  "Vollständiges Image-Backup erstellt",
  "Kompatible OSCam-Version ausgewählt",
  "OSCam über Feed oder IPK installiert",
  "GUI oder Receiver neu gestartet",
  "OSCam im Softcam-Menü aktiviert, Autostart gesetzt",
  "Konfigurationsordner und Dateipfade kontrolliert",
  "oscam.conf, oscam.server und oscam.user angepasst",
  "WebIF geöffnet, Version und Dienst bestätigt",
  "Log geprüft, Neustart der VU+ getestet",
];

const faqItems = [
  {
    question: "Was ist OSCam auf VU+?",
    answer:
      "OSCam ist eine quelloffene Softcam-Software, die auf dem Linux-System der VU+ als Hintergrunddienst läuft. Sie vermittelt zwischen dem Enigma2-Receiver und einer rechtmäßig erworbenen Zugangsberechtigung, damit verschlüsselte Sender dargestellt werden können. Auf VU+ wird OSCam über den Softcam-Manager des jeweiligen Images verwaltet.",
  },
  {
    question: "Welche VU+ Receiver unterstützen OSCam?",
    answer:
      "Grundsätzlich alle VU+ Modelle mit einem gepflegten Enigma2-Image — von der HD-Generation (Solo, Solo SE, Solo², Uno, Duo, Duo², Zero) bis zur 4K-Generation (unter anderem Uno 4K SE). Ob eine bestimmte OSCam-Version läuft, hängt von der Architektur (MIPS oder ARM), vom Image, vom Paket und von der gepflegten Feed-Version ab.",
  },
  {
    question: "Wie installiert man OSCam auf VU+?",
    answer:
      "Image und Architektur bestimmen, im Softwaremanager bzw. Feed nach dem OSCam-Softcam-Paket suchen, es installieren, die Oberfläche neu starten, OSCam im Softcam-Menü aktivieren und den Autostart setzen. Zum Schluss das WebIF im Browser öffnen und den laufenden Dienst bestätigen.",
  },
  {
    question: "Wo befinden sich die OSCam Konfigurationsdateien auf der VU+?",
    answer:
      "Häufig unter /etc/tuxbox/config/ oder /etc/tuxbox/config/oscam/. Je nach Image und Installationsmethode kann der Pfad abweichen. Der tatsächlich genutzte Ordner steht im WebIF unter „Files“ oder ergibt sich aus dem Startparameter -c des Dienstes.",
  },
  {
    question: "Was ist das OSCam WebIF?",
    answer:
      "Das WebIF ist die in OSCam eingebaute Weboberfläche. Sie erreichen es im Browser über die IP-Adresse der VU+ und den in oscam.conf gesetzten Port. Es zeigt Status, aktive Kanäle, den Zustand der Reader und die Logs und ist das wichtigste Werkzeug, um eine Installation zu kontrollieren.",
  },
  {
    question: "Warum startet OSCam auf meiner VU+ nicht?",
    answer:
      "Meist wegen eines Syntaxfehlers in oscam.conf, eines belegten Ports, eines Readers, der auf ein nicht vorhandenes Gerät zeigt, oder einer OSCam-Version, die nicht zur Architektur der VU+ passt. Die erste Zeile im Log nach dem Startversuch nennt in der Regel die Ursache.",
  },
  {
    question: "Warum ist das WebIF auf der VU+ nicht erreichbar?",
    answer:
      "Häufige Gründe sind ein nicht gesetzter oder blockierter httpport in oscam.conf, ein von einem anderen Dienst belegter Port oder ein zu eng gesetztes httpallowed, das den eigenen Rechner aussperrt. Nach einer Korrektur den Dienst neu starten und die Adresse mit Port erneut aufrufen.",
  },
  {
    question: "Welche OSCam-Version ist für VU+ geeignet?",
    answer:
      "Die Version aus dem offiziellen Feed des installierten Images, gebaut für die passende Architektur. Bei der 4K-Generation (ARM) sind das aktuelle Builds, bei sehr alten HD-Modellen kann die Feed-Version älter ausfallen. Eine für ein anderes Image oder eine andere Architektur gebaute Version führt oft zu Abstürzen.",
  },
  {
    question: "Was sollte man vor einem OSCam Update sichern?",
    answer:
      "Ein vollständiges Image-Backup und eine Kopie des gesamten Konfigurationsordners mit oscam.conf, oscam.server, oscam.user und gegebenenfalls oscam.dvbapi. Zusätzlich hilft es, die aktuell laufende OSCam-Version zu notieren, um den Ausgangszustand zu kennen.",
  },
  {
    question: "Was ist der Unterschied zwischen OSCam und iCam?",
    answer:
      "Beide sind Softcam-Lösungen für Enigma2. OSCam ist umfangreicher konfigurierbar und breit dokumentiert und bildet meist die zentrale Instanz. iCam tritt schlanker auf und deckt oft einen bestimmten Protokollpfad ab. In vielen Setups laufen beide zusammen; mehr dazu auf der Seite zu iCam.",
  },
  {
    question: "Kann man OSCam auf verschiedenen VU+ Modellen verwenden?",
    answer:
      "Ja. Das Grundprinzip ist auf allen VU+ Modellen gleich. Unterschiede liegen in der Architektur, in der verfügbaren Leistung und in der im Feed gepflegten OSCam-Version. Bei leistungsschwächeren Modellen empfiehlt sich eine schlanke Konfiguration mit wenigen Readern.",
  },
  {
    question: "Was kann man tun, wenn OSCam nach einem Neustart nicht läuft?",
    answer:
      "Im Softcam-Menü prüfen, ob OSCam als Autostart-Softcam eingetragen ist und ob nur ein Softcam aktiv ist. Dann OSCam als aktives Softcam mit Autostart festlegen, konkurrierende Softcams deaktivieren und die VU+ einmal vollständig neu starten.",
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

function CtaBlock({
  heading,
  text,
  primary,
  secondary,
}: {
  heading: string;
  text: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
}) {
  return (
    <div className="bg-noise flex flex-col gap-4 rounded-3xl border border-aqua/30 bg-background-elevated p-7">
      <h2 className="text-xl font-semibold text-foreground">{heading}</h2>
      <p className="text-sm leading-relaxed text-muted">{text}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href={primary.href} variant="primary" className="text-sm">
          {primary.label}
        </Button>
        <Button href={secondary.href} variant="outline" className="text-sm">
          {secondary.label}
        </Button>
      </div>
    </div>
  );
}

export default function OscamVuPlusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "OSCam VU+", href: "/oscam-vu-plus" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="VU+ & OSCam"
            title="OSCam auf VU+ – Installation, Einrichtung und Konfiguration"
            description="VU+ zählt zu den beliebtesten Enigma2-Marken im deutschsprachigen Raum. Dieser Ratgeber führt durch die OSCam Installation auf VU+, die wichtigsten Konfigurationsdateien, die Kontrolle über das WebIF, modellspezifische Hinweise und die Lösung typischer Fehler."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-14">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                Wer nach <strong className="text-foreground">OSCam VU+</strong> sucht, hat meist schon
                einen Receiver von VU+ im Wohnzimmer stehen und möchte OSCam sauber darauf einrichten.
                Genau darum geht es hier: Diese Seite ist speziell auf VU+ Geräte zugeschnitten — von
                der HD-Generation wie Solo, Duo oder Zero bis zur aktuellen 4K-Reihe. Sie erklärt in
                eigenständigen Worten, wie die Installation auf VU+ abläuft, worin sich die Modelle
                unterscheiden und woran es hakt, wenn der Dienst nach dem ersten Start wieder stehen
                bleibt.
              </p>
              <p>
                Grundlagen zur Software selbst stehen auf der Seite{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam
                </Link>
                , der allgemeine Ablauf unabhängig von der Marke in der{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  ausführlichen OSCam-Installationsanleitung
                </Link>
                . Diese Seite ergänzt beides um alles, was auf VU+ konkret anders ist. Alle
                technischen Beispiele verwenden Platzhalter wie{" "}
                <span className="font-mono text-sm text-foreground">example-user</span> oder{" "}
                <span className="font-mono text-sm text-foreground">&lt;vu-ip&gt;</span>.
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

            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={ogImage}
                alt="VU+ Uno 4K SE Receiver mit OSCam-Logo im Frontdisplay vor weißem Hintergrund"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            {/* 1 */}
            <section id="was-ist-oscam-vu" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was ist OSCam auf einem VU+ Receiver?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                OSCam (Open Source Conditional Access Module) ist eine Softcam — eine
                Entschlüsselungs­komponente in Form eines Programms statt einer Steckkarte. Auf einer
                VU+ läuft OSCam als eigenständiger Dienst unter dem Linux-System der Box. Wenn Sie auf
                einen verschlüsselten Sender umschalten, fragt der Receiver nach einem gültigen
                Kontrollwort; OSCam holt es von einer angebundenen Quelle und gibt es zurück, damit
                das Bild freigegeben wird.
              </p>
              <p className="text-base leading-relaxed text-muted">
                VU+ Geräte nutzen als Betriebssystem Enigma2 — dieselbe offene Linux-Oberfläche, die
                auch auf anderen Marken läuft. Weil Enigma2 Erweiterungen zulässt, lässt sich OSCam
                direkt aus dem Software-Feed des jeweiligen Images nachrüsten und über den
                Softcam-Manager verwalten. Für VU+ Nutzer ist OSCam deshalb kein Fremdkörper, sondern
                eine übliche Ergänzung des Images.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Wichtig ist die Unterscheidung zwischen{" "}
                <strong className="text-foreground">Installation</strong> und{" "}
                <strong className="text-foreground">Konfiguration</strong>: Die Installation bringt
                die OSCam-Software auf die VU+ und macht sie startbar. Die Konfiguration legt danach
                über Textdateien fest, welche Quelle genutzt wird, wie das WebIF erreichbar ist und
                wie Anfragen priorisiert werden. Ein installiertes, aber nicht konfiguriertes OSCam
                entschlüsselt noch nichts. Diese Seite behandelt beide Schritte — und alles, was auf
                VU+ dabei zu beachten ist.
              </p>
            </section>

            {/* 2 */}
            <section id="modelle" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Welche VU+ Receiver sind für OSCam geeignet?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Grundsätzlich lässt sich OSCam auf jedem VU+ Modell mit einem gepflegten
                Enigma2-Image betreiben. In der Praxis unterscheiden sich die Geräte aber in
                Architektur, Leistung und in der Frage, wie aktuell die im Feed verfügbare
                OSCam-Version ist. Die folgende Übersicht ordnet die verbreiteten Modelle ein.
              </p>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-background-elevated">
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Modell
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Generation / Architektur
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Hinweis zu OSCam
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {vuModelle.map((row, index) => (
                      <tr key={row.modell} className={index % 2 === 0 ? "bg-background" : "bg-background-elevated/40"}>
                        <td className="border-b border-border px-4 py-3 font-medium text-foreground">{row.modell}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.gen}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.hinweis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Ob eine konkrete OSCam-Version auf Ihrem Gerät läuft, hängt von mehreren Faktoren ab:
                der <strong className="text-foreground">Architektur</strong> des Receivers (MIPS bei
                der HD-Generation, ARM bei der 4K-Generation), dem installierten{" "}
                <strong className="text-foreground">Enigma2-Image</strong> (OpenPLi, OpenATV oder
                VTi), dem <strong className="text-foreground">Paket beziehungsweise Build</strong> und
                der übrigen <strong className="text-foreground">Betriebsumgebung</strong>. Eine
                pauschale Aussage „jedes VU+ Modell mit jeder OSCam-Version“ trifft daher nicht zu —
                im Feed des eigenen Images findet sich aber fast immer eine passende Variante.
              </p>
            </section>

            {/* 3 */}
            <section id="voraussetzungen" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Voraussetzungen für OSCam auf VU+
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Bevor die Installation beginnt, sollten diese Dinge bereitstehen:
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">VU+ Receiver mit aktueller Firmware:</strong> Ein
                  veraltetes Image bringt oft keine gepflegten Feeds mehr mit.
                </li>
                <li>
                  <strong className="text-foreground">Enigma2:</strong> ein installiertes und lauffähiges
                  Image — auf VU+ üblicherweise OpenPLi, OpenATV oder VTi.
                </li>
                <li>
                  <strong className="text-foreground">Netzwerkverbindung:</strong> stabil, mit Zugang ins
                  Internet für den Feed und später für Netzwerk-Reader.
                </li>
                <li>
                  <strong className="text-foreground">Kompatibles Image und passende OSCam-Version:</strong>{" "}
                  gebaut für die Architektur der VU+ (MIPS oder ARM).
                </li>
                <li>
                  <strong className="text-foreground">Zugriff auf den Receiver:</strong> die Fernbedienung
                  für die Installation, zusätzlich FTP/SFTP oder ein Terminalzugang für die
                  Konfiguration.
                </li>
                <li>
                  <strong className="text-foreground">Konfigurationsdateien:</strong> Kenntnis darüber, wo
                  oscam.conf, oscam.server und oscam.user auf dem Gerät liegen.
                </li>
                <li>
                  <strong className="text-foreground">Backup vor Änderungen:</strong> ein vollständiges
                  Image-Backup und eine Kopie des Konfigurationsordners.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Das Backup steht bewusst am Anfang: Die Installation selbst ist unkritisch, aber beim
                Bearbeiten der Konfigurationsdateien genügt ein Tippfehler, damit OSCam nicht mehr
                startet. Mit einem Backup ist der Ausgangszustand in wenigen Minuten
                wiederhergestellt. Wie Sie eine VU+ darüber hinaus sauber aufsetzen, beschreibt der
                Blogartikel{" "}
                <Link
                  href="/blog/enigma2-receiver-oscam-vorbereiten"
                  className="text-aqua underline underline-offset-4"
                >
                  Enigma2-Receiver für OSCam vorbereiten
                </Link>
                .
              </p>
            </section>

            {/* 4 */}
            <section id="installation" className="flex scroll-mt-24 flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  OSCam auf VU+ installieren
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  Der folgende Ablauf gilt für die Installation über den Software-Feed des Images —
                  der Weg, den die meisten VU+ Nutzer wählen. Jeder Schritt lässt sich einzeln
                  kontrollieren, bevor es weitergeht.
                </p>
              </div>
              <ol className="flex flex-col gap-6">
                {installSteps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-aqua text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="text-base leading-relaxed text-muted">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-vu-plus-rueckseite-anschluesse-installation.webp`}
                  alt="Technische Darstellung der VU+ Uno 4K SE Rückseite mit Anschlüssen und einer schrittweisen OSCam-Installationsübersicht"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
              <p className="text-base leading-relaxed text-muted">
                Fehlt OSCam im Feed oder benötigen Sie eine bestimmte Version, lässt sich die Softcam
                auch als IPK-Datei einspielen — die Datei muss zu Image, Architektur und
                Enigma2-Version passen. Der allgemeine Ablauf dazu steht in der{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  Installationsanleitung für Enigma2
                </Link>
                .
              </p>
            </section>

            {/* 5 */}
            <section id="konfiguration" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam VU+ Konfiguration
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nach der Installation weiß OSCam noch nicht, welche Quelle es nutzen soll. Diese
                Angaben stehen in Textdateien im Konfigurationsordner — auf VU+ häufig unter{" "}
                <span className="font-mono text-sm text-foreground">/etc/tuxbox/config/</span>. Vier
                Dateien genügen für ein funktionierendes Setup:
              </p>
              <div className="flex flex-col gap-4">
                {configFiles.map((file) => (
                  <div
                    key={file.name}
                    className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated/40 p-5"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="rounded bg-surface px-2 py-0.5 font-mono text-sm font-semibold text-gold">
                        {file.name}
                      </h3>
                      <span className="text-sm font-medium text-foreground">{file.role}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">{file.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted">
                Bauen Sie die Konfiguration von innen nach außen auf: zuerst muss OSCam mit einer
                minimalen oscam.conf sauber starten, dann muss das WebIF erreichbar sein, dann kommt
                genau ein Reader dazu, dann ein Benutzer — nach jedem Schritt ein kurzer Test. Für
                Beispiele reichen Platzhalter wie{" "}
                <span className="font-mono text-sm text-foreground">example-server</span>,{" "}
                <span className="font-mono text-sm text-foreground">example-user</span> und{" "}
                <span className="font-mono text-sm text-foreground">example-password</span>; echte
                fremde Zugangs- oder Serverdaten gehören nicht in diese Dateien. Eine ausführliche,
                eigenständige Erklärung mit Beispielen bietet der Blogartikel{" "}
                <Link
                  href="/blog/oscam-konfiguration-verstehen"
                  className="text-aqua underline underline-offset-4"
                >
                  OSCam Konfiguration verstehen
                </Link>
                .
              </p>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-vu-plus-konfigurationsdateien-editor.webp`}
                  alt="Laptop mit geöffneter oscam.conf und den Reitern oscam.server und oscam.user neben einem VU+ Uno 4K SE Receiver"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            <CtaBlock
              heading="OSCam Service für VU+ – Unterstützung bei der Einrichtung"
              text="Wenn Installation oder Konfiguration auf Ihrem VU+ Receiver klemmen, muss das kein Dauerzustand sein. Auf unserer Service-Seite erfahren Sie, wie wir bei der Einrichtung von OSCam auf Enigma2 unterstützen – von der Ersteinrichtung bis zur laufenden Betreuung."
              primary={{ href: "/oscam-service", label: "OSCam Service ansehen" }}
              secondary={{ href: "/", label: "Zur Startseite" }}
            />

            {/* 6 */}
            <section id="webif" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam WebIF auf VU+
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Das WebIF ist die in OSCam eingebaute Weboberfläche. Sie erreichen es im Browser über
                die IP-Adresse der VU+ und den in{" "}
                <span className="font-mono text-sm text-foreground">oscam.conf</span> gesetzten Port,
                zum Beispiel{" "}
                <span className="font-mono text-sm text-foreground">http://&lt;vu-ip&gt;:8888</span>.
                Nach der Installation ist es das schnellste Werkzeug, um zu sehen, ob alles läuft.
              </p>
              <p className="text-base leading-relaxed text-muted">Im WebIF prüfen Sie vor allem:</p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">Status:</strong> Läuft der Dienst? Welche OSCam-Version
                  ist aktiv, und wie lange läuft der Prozess bereits?
                </li>
                <li>
                  <strong className="text-foreground">Reader:</strong> Werden angebundene Quellen als
                  „online“ angezeigt, oder bleiben sie auf „off“ bzw. „connecting“?
                </li>
                <li>
                  <strong className="text-foreground">Users:</strong> Sind die in oscam.user angelegten
                  Zugänge sichtbar und verbunden?
                </li>
                <li>
                  <strong className="text-foreground">Live Log:</strong> Zeigt das Log einen sauberen Start
                  oder wiederkehrende Fehlermeldungen?
                </li>
                <li>
                  <strong className="text-foreground">Files:</strong> Welche Konfigurationsdateien sind mit
                  welchem Pfad geladen?
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Lässt sich das WebIF nicht öffnen, prüfen Sie den{" "}
                <span className="font-mono text-sm text-foreground">httpport</span> in oscam.conf, ob
                ein anderer Dienst diesen Port belegt und ob{" "}
                <span className="font-mono text-sm text-foreground">httpallowed</span> Ihr lokales
                Netz einschließt. Zur Sicherheit gehört: das WebIF nicht ohne Grund ins Internet
                öffnen, ein eigenes Benutzerkonto mit sicherem Passwort vergeben und den Zugriff auf
                das lokale Netz beschränken. Screenshots aus dem WebIF, die Sie teilen, sollten keine
                sensiblen Angaben enthalten.
              </p>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-vu-plus-webif-status.webp`}
                  alt="OSCam WebIF Statusseite im Browser auf einem Fernseher mit Readern im Zustand online und einer Setup-Complete-Meldung"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 7 */}
            <section id="modell-hinweise" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam auf verschiedenen VU+ Modellen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Der Installationsweg ist auf allen VU+ Geräten gleich. Die folgenden Punkte machen im
                Detail einen Unterschied:
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    HD-Generation (Solo, Solo SE, Solo², Uno, Duo, Duo², Zero)
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    Diese Geräte nutzen die MIPS-Architektur. Sie laufen mit älteren, aber teils noch
                    gepflegten Images. Die im Feed verfügbare OSCam-Version kann hinter der aktuellen
                    zurückliegen. Bei Einstiegsmodellen wie dem Zero macht sich eine schlanke
                    Konfiguration mit wenigen Readern und moderatem Log-Level bezahlt. Twin-Modelle
                    wie Duo/Duo² und das Solo² haben genügend Reserve für mehrere parallele Reader.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                  <h3 className="text-base font-semibold text-foreground">
                    4K-Generation (u. a. VU+ Uno 4K SE, Solo 4K, Duo 4K)
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    Diese Modelle setzen auf die ARM-Architektur, laufen mit aktuellen Images und
                    erhalten aktuelle OSCam-Builds aus dem Feed. Sie bieten spürbar mehr Reserve für
                    parallele Reader, Streaming und Zusatzdienste. FBC-Tuner erlauben viele
                    gleichzeitige Aufnahmen, ohne dass OSCam davon beeinträchtigt wird.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                  <h3 className="text-base font-semibold text-foreground">Image-Umgebung: OpenPLi, OpenATV, VTi</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    Die Funktion ist überall gleich, die Menüs heißen unterschiedlich: OpenATV nutzt
                    den Softcam-Manager, das VU+ Team Image (VTi) das SoftCam-Panel, OpenPLi eine
                    eigene Softcam-Auswahl. Der Konfigurationspfad und die Paketnamen können je nach
                    Image leicht abweichen — deshalb vor der ersten Änderung im WebIF unter „Files“
                    den tatsächlichen Pfad prüfen.
                  </p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Betreiben Sie neben der VU+ noch andere Enigma2-Geräte, finden Sie markenspezifische
                Hinweise unter{" "}
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

            {/* 8 */}
            <section id="troubleshooting" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam VU+ Fehlerbehebung
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die meisten Probleme nach einer OSCam Installation auf VU+ lassen sich auf wenige
                Ursachen zurückführen. Für jeden Fall gilt das Muster{" "}
                <em>Symptom → mögliche Ursache → Prüfung → Lösung</em>.
              </p>
              <div className="flex flex-col gap-4">
                {troubleshooting.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated/40 p-5"
                  >
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">
                      <strong className="text-foreground">Symptom:</strong> {item.symptom}
                    </p>
                    <p className="text-sm leading-relaxed text-muted">
                      <strong className="text-foreground">Mögliche Ursache:</strong> {item.ursache}
                    </p>
                    <p className="text-sm leading-relaxed text-muted">
                      <strong className="text-foreground">Prüfung:</strong> {item.pruefung}
                    </p>
                    <p className="text-sm leading-relaxed text-muted">
                      <strong className="text-foreground">Lösung:</strong> {item.loesung}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted">
                Weitere Beispiele mit Log-Auszügen beschreibt der Blogartikel{" "}
                <Link href="/blog/oscam-fehler-loesungen" className="text-aqua underline underline-offset-4">
                  Häufige OSCam Fehler und Lösungen
                </Link>
                .
              </p>
            </section>

            <CtaBlock
              heading="Kommen Sie bei der Fehlersuche nicht weiter?"
              text="Manche Probleme lassen sich schneller zu zweit lösen. Unser Team unterstützt bei der Fehleranalyse rund um OSCam auf VU+ und Enigma2. Was dazugehört und wie der Ablauf aussieht, steht auf der Service-Seite."
              primary={{ href: "/oscam-service", label: "OSCam Service für VU+" }}
              secondary={{ href: "/oscam", label: "Mehr über OSCam" }}
            />

            {/* 9 */}
            <section id="update" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">OSCam VU+ Update</h2>
              <p className="text-base leading-relaxed text-muted">
                Ein Update kann sinnvoll sein, wenn eine neue Version Fehler behebt, ein Protokoll
                ergänzt oder besser zu einem aktualisierten Image passt. Zwingend ist es nicht — läuft
                das Setup stabil, gibt es keinen Grund zur Eile. Wichtig ist ein geordnetes Vorgehen:
              </p>
              <ol className="flex flex-col gap-3">
                {[
                  "Ein vollständiges Image-Backup der VU+ und eine Kopie des Konfigurationsordners anlegen.",
                  "Die aktuell laufende OSCam-Version notieren (WebIF-Status oder Versionsabfrage am Gerät).",
                  "Die Kompatibilität der neuen Version mit dem installierten Image und der Architektur klären.",
                  "Die neue Version über den Feed installieren — die Konfigurationsdateien bleiben dabei in der Regel erhalten.",
                  "Den Dienst neu starten, das WebIF öffnen und die neue Versionsnummer bestätigen.",
                  "Einen verschlüsselten Sender testen und das Log auf neue Warnungen prüfen.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="text-base leading-relaxed text-muted">
                Funktioniert die neue Version nicht korrekt, spielen Sie die gesicherte Version und
                Konfiguration zurück. Einen ausführlichen Ablauf mit Sicherung und Rückweg beschreibt
                der Blogartikel{" "}
                <Link href="/blog/oscam-updates-durchfuehren" className="text-aqua underline underline-offset-4">
                  OSCam Updates sicher durchführen
                </Link>
                .
              </p>
            </section>

            {/* 10 */}
            <section id="oscam-icam" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam und iCam auf VU+
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Auf VU+ begegnet einem neben OSCam manchmal der Name iCam. Beide sind Softcam-Lösungen
                für Enigma2 mit derselben Grundaufgabe. OSCam ist umfangreicher konfigurierbar, breit
                dokumentiert und in fast jedem Image im Feed — meist die zentrale Instanz. iCam tritt
                schlanker auf und deckt oft einen bestimmten Protokollpfad ab; in vielen
                Konfigurationen reicht es Anfragen an OSCam weiter, statt es zu ersetzen.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Für die reine Einrichtung auf einer VU+ ist OSCam der Ausgangspunkt. Wie iCam
                einzuordnen ist, steht auf der Seite{" "}
                <Link href="/icam" className="text-aqua underline underline-offset-4">
                  iCam
                </Link>{" "}
                und im Blogartikel{" "}
                <Link href="/blog/oscam-icam-unterschiede" className="text-aqua underline underline-offset-4">
                  OSCam und iCam im Vergleich
                </Link>
                . Der allgemeine Installationsablauf für beide Varianten steht in der{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  Anleitung zur OSCam Installation
                </Link>
                .
              </p>
            </section>

            {/* 11 */}
            <section id="anfaenger" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam VU+ für Anfänger
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Wer OSCam zum ersten Mal auf einer VU+ einrichtet, kommt am besten in dieser
                Reihenfolge ans Ziel — Schritt für Schritt, mit einem kurzen Test nach jedem Punkt:
              </p>
              <ol className="flex flex-col gap-3">
                {anfaengerSchritte.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated/40 p-6">
                <h3 className="text-base font-semibold text-foreground">Kurz-Checkliste</h3>
                <ul className="flex flex-col gap-2">
                  {checkliste.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-vu-plus-wohnzimmer-live-tv.webp`}
                  alt="Familie sieht im Wohnzimmer über einen VU+ Receiver eine Live-Fußballübertragung, der Receiver steht unter dem Fernseher"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            <CtaBlock
              heading="OSCam für VU+ – so geht es weiter"
              text="Auf der Startseite finden Sie alle Inhalte und Leistungen rund um OSCam und iCam für Enigma2 im Überblick. Wenn Sie konkrete Hilfe für Ihren VU+ Receiver möchten, führt die Service-Seite die Möglichkeiten auf."
              primary={{ href: "/", label: "Zur Startseite" }}
              secondary={{ href: "/oscam-service", label: "OSCam Service ansehen" }}
            />

            {/* FAQ */}
            <section
              id="faq"
              className="flex scroll-mt-24 flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7"
            >
              <h2 className="text-xl font-semibold text-foreground">Häufig gestellte Fragen zu OSCam auf VU+</h2>
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
                Weitere Fragen rund um OSCam, iCam und Enigma2 beantwortet unsere{" "}
                <Link href="/faq" className="text-aqua underline underline-offset-4">
                  FAQ-Seite
                </Link>
                , Hintergrundartikel finden Sie im{" "}
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

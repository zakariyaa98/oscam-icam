import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactCTA } from "@/components/sections/ContactCTA";

const imgDir = "/images/home page/OSCam installieren";
const ogImage = `${imgDir}/oscam-installieren-usb-stick-fat32.webp`;

export const metadata: Metadata = {
  title: "OSCam installieren – Anleitung für Enigma2, VU+, Dreambox & Zgemma",
  description:
    "OSCam installieren auf Enigma2: ausführliche deutsche Anleitung mit Voraussetzungen, Schritt-für-Schritt-Installation, Konfigurationsdateien, WebIF-Kontrolle, Receiver-Hinweisen für VU+, Dreambox und Zgemma sowie Lösungen für häufige Fehler.",
  keywords: [
    "OSCam installieren",
    "OSCam Installation",
    "OSCam Enigma2 installieren",
    "OSCam installieren Enigma2",
    "OSCam Anleitung",
    "OSCam Einrichtung",
    "OSCam Enigma2",
    "OSCam Softcam",
    "OSCam Konfiguration",
    "OSCam WebIF",
    "OSCam VU+",
    "OSCam Dreambox",
    "OSCam Zgemma",
    "OSCam starten",
    "OSCam Update",
    "OSCam iCam",
  ],
  alternates: {
    canonical: "/oscam-installieren",
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam-installieren",
    title: "OSCam installieren – Anleitung für Enigma2, VU+, Dreambox & Zgemma",
    description:
      "Ausführliche deutsche Anleitung: OSCam auf einem Enigma2-Receiver installieren, konfigurieren, im WebIF prüfen und typische Fehler lösen.",
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
    title: "OSCam installieren – Anleitung für Enigma2, VU+, Dreambox & Zgemma",
    description:
      "OSCam auf Enigma2 installieren: Voraussetzungen, Schritte, Konfigurationsdateien, WebIF und Fehlerbehebung — verständlich auf Deutsch.",
  },
};

const pageNav = [
  { href: "#was-ist-oscam", label: "Was ist OSCam?" },
  { href: "#voraussetzungen", label: "Voraussetzungen" },
  { href: "#schritt-fuer-schritt", label: "Schritt für Schritt" },
  { href: "#manuelle-installation", label: "Manuelle Installation" },
  { href: "#nach-der-installation", label: "Nach der Installation" },
  { href: "#konfigurationsdateien", label: "Konfigurationsdateien" },
  { href: "#dateipfade", label: "Wo liegen die Dateien?" },
  { href: "#webif", label: "WebIF prüfen" },
  { href: "#vu-plus", label: "VU+" },
  { href: "#dreambox", label: "Dreambox" },
  { href: "#zgemma", label: "Zgemma" },
  { href: "#starten-status", label: "Starten & Status" },
  { href: "#fehler", label: "Häufige Fehler" },
  { href: "#update", label: "Update" },
  { href: "#oscam-icam", label: "OSCam & iCam" },
  { href: "#anfaenger", label: "Für Anfänger" },
  { href: "#checkliste", label: "Checkliste" },
  { href: "#faq", label: "FAQ" },
];

const installSteps = [
  {
    title: "Receiver vorbereiten",
    body: "Schalten Sie den Enigma2-Receiver ein und stellen Sie sicher, dass die Firmware aktuell ist. Ein bekanntes Administrator-Passwort und ein zweiter Bildschirm oder das Smartphone für den Zugriff auf die Weboberfläche erleichtern die weiteren Schritte. Legen Sie vor der ersten Änderung ein vollständiges Backup des Images an.",
  },
  {
    title: "Netzwerk prüfen",
    body: "Der Receiver braucht eine funktionierende Verbindung ins lokale Netz und ins Internet. Notieren Sie sich die IP-Adresse des Geräts aus dem Netzwerkmenü. Prüfen Sie, ob sich die Box vom Computer aus per Ping erreichen lässt — ohne Netzwerk lädt kein Paket und keine Paketliste.",
  },
  {
    title: "Image und Kompatibilität prüfen",
    body: "Sehen Sie im Systemmenü nach, welches Image installiert ist (zum Beispiel OpenATV oder OpenPLi) und welche Version. OSCam wird pro Image und pro Architektur gebaut; die passende Variante muss zu Ihrem Receiver passen, sonst startet der Dienst nach der Installation nicht.",
  },
  {
    title: "Passendes Paket auswählen",
    body: "In den meisten Images ist OSCam bereits im Software- oder Plugin-Feed gelistet. Suchen Sie dort nach dem Softcam-Paket. Ist es nicht vorhanden, halten Sie eine kompatible IPK-Datei für die manuelle Installation bereit — passend zu Image, Architektur und OSCam-Version.",
  },
  {
    title: "OSCam installieren",
    body: "Starten Sie die Installation über den Plugin-Browser bzw. den Softcam-Manager des Images. Das Paket wird heruntergeladen, entpackt und eingerichtet. Am Ende meldet die Oberfläche die erfolgreiche Installation; bei einem Fehler bricht sie mit einer Meldung ab, die Sie sich notieren sollten.",
  },
  {
    title: "Receiver bzw. GUI neu starten",
    body: "Viele Images übernehmen ein neu installiertes Softcam erst nach einem Neustart der Oberfläche (GUI-Restart) oder des gesamten Geräts. Führen Sie diesen Neustart durch, damit OSCam im Softcam-Menü sauber erscheint.",
  },
  {
    title: "OSCam aktivieren",
    body: "Öffnen Sie den Softcam-Manager und wählen Sie OSCam als aktives Softcam aus. Aktivieren Sie zusätzlich den Autostart, damit der Dienst nach jedem Neustart automatisch mitläuft. Erst jetzt bearbeitet OSCam Entschlüsselungsanfragen des Receivers.",
  },
  {
    title: "Installation überprüfen",
    body: "Kontrollieren Sie im Softcam-Menü, ob OSCam als aktiv angezeigt wird, und rufen Sie anschließend das WebIF im Browser auf. Zeigt die Statusseite die OSCam-Version und einen laufenden Dienst, ist die Installation abgeschlossen — die Konfiguration folgt als eigener Schritt.",
  },
];

const configFiles = [
  {
    name: "oscam.conf",
    role: "Grundeinstellungen und Dienste",
    body: "Die zentrale Datei. Sie steuert Logging, das WebIF (Port, Benutzer, erlaubte Netze), die DVBAPI-Anbindung und allgemeine Optionen. Fehlt sie oder enthält sie einen Syntaxfehler, startet OSCam nicht.",
    fehler: "Vergessene Abschnittsüberschrift in eckigen Klammern, ein Port, der bereits belegt ist, oder ein zu eng gesetztes „httpallowed“, das den eigenen Rechner aussperrt.",
  },
  {
    name: "oscam.server",
    role: "Reader und Verbindungen",
    body: "Beschreibt jede Signalquelle als eigenen Reader — einen lokal angeschlossenen Kartenleser, ein CI+-Modul oder eine eigene Netzwerkverbindung. Jeder Reader bekommt einen Namen, einen Typ und die vom Modul dokumentierten Parameter.",
    fehler: "Falscher Reader-Typ, vertauschte Geräteadresse oder ein Kartenleser, den das Image nicht ohne zusätzlichen Treiber einbindet.",
  },
  {
    name: "oscam.user",
    role: "Zugänge und Berechtigungen",
    body: "Legt die Zugänge innerhalb der eigenen Installation fest und ordnet ihnen Reader zu. In einem privaten Setup mit nur einem Receiver genügt meist ein einziger Eintrag mit einem klaren Passwort.",
    fehler: "Ein Zugang ohne zugewiesenen Reader, ein deaktivierter Benutzer oder ein Passwort, das nicht mit der Client-Seite übereinstimmt.",
  },
  {
    name: "oscam.dvbapi",
    role: "Priorisierung der Anfragen",
    body: "Steuert, welcher Reader für welchen Sender bevorzugt (P), verzögert (D) oder ignoriert (I) wird. Diese Datei ist optional, wird aber wichtig, sobald mehrere Reader dieselbe Anfrage beantworten könnten.",
    fehler: "Eine zu strenge Ignorier-Regel, die einen benötigten Sender blockiert, oder eine Regel in der falschen Reihenfolge.",
  },
];

const dateipfade = [
  { image: "OpenATV / OpenPLi (viele VU+ und Zgemma)", pfad: "/etc/tuxbox/config/ oder /etc/tuxbox/config/oscam/" },
  { image: "Einige ältere oder herstellereigene Images", pfad: "/usr/keys/ oder /var/keys/" },
  { image: "Manuelle Installation mit eigenem Startskript", pfad: "frei gewählter Ordner, per Startparameter -c übergeben" },
  { image: "Logdatei (Standard, je nach oscam.conf)", pfad: "/tmp/oscam.log oder /var/log/oscam/oscam.log" },
];

const troubleshooting = [
  {
    title: "OSCam startet nicht",
    symptom: "Der Softcam-Manager zeigt OSCam kurz als aktiv, fällt aber sofort auf „gestoppt“ zurück.",
    ursache: "Syntaxfehler in oscam.conf, ein belegter Port oder ein Reader in oscam.server, der auf ein nicht vorhandenes Gerät verweist.",
    pruefen: "Die zuletzt geänderte Datei Zeile für Zeile durchsehen, das Log direkt nach dem Startversuch öffnen und die erste Fehlermeldung lesen.",
    loesung: "Den fehlerhaften Eintrag korrigieren oder auskommentieren, dann neu starten. Im Zweifel mit einer minimalen oscam.conf ohne Reader beginnen und schrittweise erweitern.",
  },
  {
    title: "WebIF ist nicht erreichbar",
    symptom: "Der Browser meldet „Verbindung abgelehnt“ oder lädt endlos, obwohl OSCam läuft.",
    ursache: "Kein httpport in oscam.conf gesetzt, ein anderer Dienst belegt den Port, oder „httpallowed“ schließt den eigenen Rechner aus.",
    pruefen: "In oscam.conf den Abschnitt für das WebIF kontrollieren: Port, Benutzer, Passwort und die erlaubten IP-Bereiche.",
    loesung: "Einen freien Port eintragen, das eigene Subnetz in „httpallowed“ aufnehmen, OSCam neu starten und die Adresse mit Port erneut aufrufen.",
  },
  {
    title: "Konfigurationsdateien werden nicht gefunden",
    symptom: "OSCam startet, ignoriert aber offensichtlich Ihre Einstellungen oder legt neue Standarddateien an.",
    ursache: "Die Dateien liegen in einem anderen Ordner, als OSCam erwartet, oder der Dienst wird mit einem abweichenden Konfigurationspfad gestartet.",
    pruefen: "Im Softcam-Startskript oder in den Startparametern nachsehen, welcher Ordner mit -c übergeben wird, und diesen mit dem tatsächlichen Speicherort abgleichen.",
    loesung: "Die Dateien in den erwarteten Ordner verschieben oder den Startparameter anpassen. Danach den Dienst neu starten und im WebIF unter „Files“ prüfen, welche Pfade OSCam nutzt.",
  },
  {
    title: "OSCam startet nach Neustart nicht",
    symptom: "Nach jedem Reboot ist der Dienst gestoppt und muss von Hand aktiviert werden.",
    ursache: "Der Autostart im Softcam-Manager ist nicht gesetzt, oder ein konkurrierendes Softcam übernimmt beim Start.",
    pruefen: "Im Softcam-Menü kontrollieren, ob OSCam als Autostart-Softcam eingetragen ist und ob nur ein Softcam aktiv ist.",
    loesung: "OSCam als aktives Softcam mit Autostart festlegen, andere Softcams deaktivieren und den Receiver einmal vollständig neu starten.",
  },
  {
    title: "Falsche OSCam-Version",
    symptom: "Die Installation läuft durch, aber der Dienst crasht sofort oder das WebIF zeigt seltsame Fehler.",
    ursache: "Das Paket wurde für ein anderes Image, eine andere Architektur oder eine deutlich abweichende Enigma2-Version gebaut.",
    pruefen: "Image-Name und Architektur des Receivers mit den Angaben des Pakets vergleichen; im WebIF bzw. über „oscam -V“ die tatsächlich laufende Version ablesen.",
    loesung: "Die zum Image passende OSCam-Variante aus dem offiziellen Feed installieren und die unpassende Version vorher sauber entfernen.",
  },
  {
    title: "Falscher Dateipfad",
    symptom: "Änderungen in oscam.server oder oscam.user haben keine Wirkung.",
    ursache: "Es existieren mehrere Kopien der Datei in verschiedenen Ordnern, und OSCam liest eine andere als die bearbeitete.",
    pruefen: "Mit einer Dateisuche alle Vorkommen von oscam.server auf dem Gerät auflisten und mit dem im WebIF angezeigten Konfigurationspfad abgleichen.",
    loesung: "Überzählige Kopien entfernen, nur den korrekten Ordner pflegen und nach jeder Änderung den Dienst neu starten.",
  },
  {
    title: "Rechte oder Dateiberechtigungen",
    symptom: "OSCam meldet beim Start, dass es eine Datei nicht lesen oder schreiben kann.",
    ursache: "Die Konfigurationsdateien wurden per FTP mit falschen Rechten übertragen oder gehören einem anderen Benutzer.",
    pruefen: "Die Rechte der Dateien im Konfigurationsordner ansehen — üblich sind Leserechte für den Dienst und Schreibrechte für den Eigentümer.",
    loesung: "Die Rechte auf einen üblichen Wert setzen (zum Beispiel 644 für Konfigurationsdateien) und den Eigentümer korrigieren, danach neu starten.",
  },
  {
    title: "Netzwerkproblem",
    symptom: "OSCam läuft, aber Netzwerk-Reader bleiben offline oder das Log zeigt Zeitfehler.",
    ursache: "Falsches Gateway, kein funktionierender DNS oder eine deutlich abweichende Systemzeit auf dem Receiver.",
    pruefen: "Im Netzwerkmenü Gateway und DNS kontrollieren, die Uhrzeit des Geräts prüfen und einen Zeitserver hinterlegen.",
    loesung: "Netzwerkdaten korrigieren, die Zeit synchronisieren und den Receiver neu starten. Erst mit korrekter Uhrzeit arbeiten Netzwerkverbindungen zuverlässig.",
  },
  {
    title: "Konfigurationsfehler",
    symptom: "Nach einer größeren Änderung funktioniert gar nichts mehr, obwohl vorher alles lief.",
    ursache: "Mehrere Änderungen auf einmal, dadurch ist die eigentliche Fehlerquelle nicht mehr eindeutig.",
    pruefen: "Auf das zuletzt erstellte Backup zurückgreifen und die Änderungen einzeln erneut vornehmen, jeweils mit einem Test dazwischen.",
    loesung: "Immer nur eine Einstellung pro Durchgang ändern, danach testen und das Ergebnis notieren. So bleibt jede Ursache nachvollziehbar.",
  },
];

const anfaengerTipps = [
  "Legen Sie vor jeder Änderung ein Backup des Images und eine Kopie des Konfigurationsordners an.",
  "Ändern Sie immer nur eine Sache pro Durchgang und testen Sie danach sofort.",
  "Lesen Sie das Log von oben nach unten — die erste Fehlermeldung ist fast immer die entscheidende.",
  "Notieren Sie sich die installierte OSCam-Version und das Image, damit Sie bei Updates den Ausgangszustand kennen.",
  "Sichern Sie eine funktionierende Konfiguration separat, bevor Sie experimentieren.",
  "Übernehmen Sie keine fremden, unbekannten Konfigurationsdateien — sie passen selten zum eigenen Gerät und erschweren die Fehlersuche.",
];

const checkliste = [
  "Receiver eingeschaltet, Firmware aktuell, Admin-Passwort bekannt",
  "Netzwerk geprüft, IP-Adresse des Receivers notiert",
  "Vollständiges Backup des Images erstellt",
  "Image und Architektur bestimmt, kompatible OSCam-Version ausgewählt",
  "OSCam über Feed oder als IPK installiert",
  "GUI oder Receiver nach der Installation neu gestartet",
  "OSCam im Softcam-Manager aktiviert, Autostart gesetzt",
  "Konfigurationsordner und Dateien kontrolliert",
  "oscam.conf, oscam.server und oscam.user an das eigene Setup angepasst",
  "OSCam gestartet, Status im Softcam-Menü geprüft",
  "WebIF im Browser aufgerufen, Version und laufender Dienst bestätigt",
  "Log kontrolliert, Neustart getestet",
];

const faqItems = [
  {
    question: "Was ist OSCam?",
    answer:
      "OSCam (Open Source Conditional Access Module) ist eine quelloffene Softcam-Software für Linux-basierte Receiver. Sie läuft als Hintergrunddienst auf dem Gerät und vermittelt zwischen dem Receiver und einer rechtmäßig erworbenen Zugangsberechtigung, damit verschlüsselte Sender dargestellt werden können.",
  },
  {
    question: "Wie kann man OSCam auf Enigma2 installieren?",
    answer:
      "In den meisten Enigma2-Images ist OSCam im Software- oder Plugin-Feed gelistet und lässt sich dort direkt installieren. Danach wird die Oberfläche neu gestartet, OSCam im Softcam-Manager aktiviert und die Installation über das WebIF geprüft. Alternativ ist die manuelle Installation über eine passende IPK-Datei möglich.",
  },
  {
    question: "Welche Voraussetzungen braucht man für eine OSCam Installation?",
    answer:
      "Einen Enigma2-Receiver mit aktueller Firmware, ein gepflegtes und kompatibles Image, eine funktionierende Netzwerkverbindung, Zugriff auf das Gerät über die Oberfläche und optional per FTP oder Terminal, ein aktuelles Backup sowie eine eigene, rechtmäßig erworbene Zugangsquelle.",
  },
  {
    question: "Wie installiert man OSCam auf VU+?",
    answer:
      "VU+ Receiver laufen meist mit OpenPLi oder OpenATV. OSCam ist dort im Feed enthalten und wird über den Plugin-Browser oder den Paketmanager installiert, anschließend im Softcam-Manager aktiviert. Details stehen auf der Seite OSCam auf VU+.",
  },
  {
    question: "Wie installiert man OSCam auf Dreambox?",
    answer:
      "Bei der Dreambox hängt der Weg vom Image ab: OpenATV nutzt denselben Ablauf wie andere Enigma2-Geräte, das herstellereigene DreamOS weicht bei Menüführung und Pfaden ab. Mehr dazu auf der Seite OSCam auf Dreambox.",
  },
  {
    question: "Wie installiert man OSCam auf Zgemma?",
    answer:
      "Zgemma-Geräte laufen überwiegend mit OpenATV oder OpenPLi. Die Installation entspricht dem Standardablauf über den Feed. Bei leistungsschwächeren Modellen empfiehlt sich eine schlanke Konfiguration. Details stehen auf der Seite OSCam auf Zgemma.",
  },
  {
    question: "Wo befinden sich die OSCam Konfigurationsdateien?",
    answer:
      "Häufig unter /etc/tuxbox/config/ oder /etc/tuxbox/config/oscam/, je nach Image und Installationsmethode aber auch an anderer Stelle. Der tatsächlich genutzte Pfad steht im WebIF unter „Files“ oder ergibt sich aus dem Startparameter -c des Dienstes.",
  },
  {
    question: "Was ist das OSCam WebIF?",
    answer:
      "Das WebIF ist die in OSCam eingebaute Weboberfläche. Über den Browser lassen sich Status, aktive Kanäle, der Zustand der Reader und die Logs einsehen und Teile der Konfiguration bearbeiten. Es ist das wichtigste Werkzeug, um eine Installation zu kontrollieren.",
  },
  {
    question: "Warum startet OSCam nicht?",
    answer:
      "Meist wegen eines Syntaxfehlers in oscam.conf, eines belegten Ports, eines Readers, der auf ein nicht vorhandenes Gerät zeigt, oder einer unpassenden OSCam-Version für das Image. Die erste Zeile im Log nach dem Startversuch nennt in der Regel die Ursache.",
  },
  {
    question: "Was ist der Unterschied zwischen Installation und Konfiguration?",
    answer:
      "Die Installation bringt die OSCam-Software auf den Receiver und macht sie startbar. Die Konfiguration legt anschließend über Textdateien fest, welche Quellen genutzt werden, wie das WebIF erreichbar ist und wie Anfragen priorisiert werden. Eine installierte, aber nicht konfigurierte OSCam entschlüsselt noch nichts.",
  },
  {
    question: "Was ist der Unterschied zwischen OSCam und iCam?",
    answer:
      "Beide sind Softcam-Lösungen für Enigma2. OSCam ist umfangreicher konfigurierbar und breit dokumentiert und bildet meist die zentrale Instanz. iCam tritt schlanker auf und deckt oft einen bestimmten Protokollpfad ab. In vielen Setups laufen beide zusammen.",
  },
  {
    question: "Wie kann man eine OSCam Installation überprüfen?",
    answer:
      "Im Softcam-Manager sollte OSCam als aktiv angezeigt werden. Das WebIF muss im Browser erreichbar sein und die OSCam-Version sowie einen laufenden Dienst zeigen. Ein Blick ins Log bestätigt einen sauberen Start, und ein Neustart des Receivers zeigt, ob der Autostart greift.",
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
            eyebrow="Ratgeber"
            title="OSCam installieren – ausführliche Anleitung für Enigma2, VU+, Dreambox und Zgemma"
            description="Von den Voraussetzungen über die eigentliche Installation und die wichtigsten Konfigurationsdateien bis zur Kontrolle im WebIF und der Lösung typischer Fehler — dieser Leitfaden begleitet Sie durch den gesamten Ablauf auf einem Enigma2-Receiver."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-14">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                Wer OSCam installieren möchte, sucht meist keine Marketing-Seite, sondern eine
                verständliche, aktuelle Anleitung, die von Anfang bis Ende trägt. Genau darum geht es
                hier: Diese Seite erklärt in eigenständigen Worten, was bei der OSCam Installation auf
                einem Enigma2-Receiver wirklich passiert, welche Schritte in welcher Reihenfolge
                sinnvoll sind und woran es hakt, wenn der Dienst nach dem ersten Start wieder stehen
                bleibt.
              </p>
              <p>
                Der Leitfaden richtet sich an Nutzerinnen und Nutzer in Deutschland, Österreich und
                der Schweiz, die OSCam auf einem eigenen oder autorisiert verwalteten Gerät mit einer
                rechtmäßig erworbenen Zugangsberechtigung einrichten. Alle technischen Beispiele
                verwenden ausschließlich Platzhalter. Vertiefende Grundlagen zur Software selbst
                stehen auf der Seite{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam
                </Link>
                , die Abgrenzung zu iCam auf der Seite{" "}
                <Link href="/icam" className="text-aqua underline underline-offset-4">
                  iCam
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

            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={ogImage}
                alt="Infografik zur OSCam Installation: FAT32-formatierten USB-Stick vorbereiten und am Enigma2-Receiver einstecken"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            {/* 1 */}
            <section id="was-ist-oscam" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam installieren: Was ist OSCam überhaupt?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                OSCam ist eine Softcam — kurz für Software-CAM, also ein Conditional-Access-Modul in
                Form eines Programms statt einer Steckkarte. Auf einem Linux-Receiver übernimmt OSCam
                die Vermittlung: Der Receiver fragt beim Umschalten auf einen verschlüsselten Sender
                nach einem gültigen Kontrollwort, OSCam holt dieses von einer angebundenen Quelle und
                gibt es zurück, damit das Bild freigegeben wird.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Im Enigma2-Umfeld ist OSCam so verbreitet, weil das System offen für Erweiterungen
                ist und die Software über gut lesbare Textdateien gesteuert wird. Für die Installation
                ist es hilfreich, vier Ebenen sauber auseinanderzuhalten: Der{" "}
                <strong className="text-foreground">Receiver</strong> ist die Hardware. Das{" "}
                <strong className="text-foreground">Image</strong> ist das Betriebssystem mit der
                Enigma2-Oberfläche, etwa OpenATV oder OpenPLi. Die{" "}
                <strong className="text-foreground">Softcam</strong> — hier OSCam — ist ein
                zusätzliches Programm, das auf diesem Image läuft. Die{" "}
                <strong className="text-foreground">Konfiguration</strong> schließlich besteht aus den
                Textdateien, die OSCam sagen, was es tun soll. Beim „OSCam installieren“ geht es
                zunächst nur um die dritte Ebene; die vierte folgt als eigener Schritt.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Relevant ist OSCam typischerweise in drei Szenarien: beim Betrieb eines einzelnen
                Receivers mit lokaler Zugangsquelle, beim Verteilen einer eigenen, rechtmäßig
                erworbenen Berechtigung auf mehrere Geräte im selben Haushalt und beim gezielten
                Steuern, welche Quelle für welchen Sender genutzt wird. In allen Fällen bleibt OSCam
                nur das technische Bindeglied.
              </p>
            </section>

            {/* 2 */}
            <section id="voraussetzungen" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was wird für die OSCam Installation benötigt?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Bevor die eigentliche Installation beginnt, sollten einige Dinge bereitstehen. Das
                spart im Nachhinein viel Fehlersuche:
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">Enigma2-Receiver mit aktueller Firmware:</strong> Ein
                  veraltetes Image bringt oft nicht mehr gepflegte Feeds mit, aus denen sich keine
                  aktuelle OSCam-Version mehr laden lässt.
                </li>
                <li>
                  <strong className="text-foreground">Kompatibles Image:</strong> OpenATV oder OpenPLi sind weit
                  verbreitet und gut dokumentiert. Wichtig ist, Image-Name und Architektur des
                  Receivers zu kennen, da OSCam pro Kombination gebaut wird.
                </li>
                <li>
                  <strong className="text-foreground">Netzwerkverbindung:</strong> Für den Feed-Zugriff, das
                  Laden von Paketen und später für Netzwerk-Reader. Ohne stabile Verbindung schlägt
                  schon der erste Schritt fehl.
                </li>
                <li>
                  <strong className="text-foreground">Passende OSCam-Version:</strong> Aus dem offiziellen Feed
                  des Images oder als IPK-Datei, die exakt zu Image, Architektur und Enigma2-Version
                  passt.
                </li>
                <li>
                  <strong className="text-foreground">Zugriff auf das Gerät:</strong> Die Fernbedienung reicht
                  für die Installation über den Plugin-Browser. Für die Konfiguration sind FTP/SFTP
                  oder ein Terminalzugang praktisch, je nach Setup.
                </li>
                <li>
                  <strong className="text-foreground">Backup:</strong> Ein vollständiges Image-Backup sowie
                  eine Kopie des Konfigurationsordners, falls vorhanden.
                </li>
                <li>
                  <strong className="text-foreground">Grundkenntnisse:</strong> Ein grobes Verständnis von
                  Enigma2-Menüs, Dateipfaden und dem Lesen einer Logdatei genügt für den Einstieg.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Warum das Backup an erster Stelle steht: Die Installation selbst ist unkritisch, aber
                spätestens beim Bearbeiten der Konfigurationsdateien kann ein Tippfehler dazu führen,
                dass OSCam nicht mehr startet. Mit einem Backup ist der Ausgangszustand in wenigen
                Minuten wiederhergestellt, statt eine halbe Stunde nach der falschen Klammer zu
                suchen. Wie Sie den Receiver darüber hinaus sauber aufsetzen, beschreibt der
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

            {/* 3 */}
            <section id="schritt-fuer-schritt" className="flex scroll-mt-24 flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  OSCam Enigma2 installieren: Schritt für Schritt
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  Der folgende Ablauf gilt für die Installation über den Software- oder Plugin-Feed
                  des Images — der Weg, den die meisten Nutzer wählen. Jeder Schritt lässt sich
                  einzeln kontrollieren, bevor es weitergeht.
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
                  src={`${imgDir}/oscam-installieren-plugin-browser-enigma2.webp`}
                  alt="Enigma2 Plugin Browser auf dem Fernseher mit ausgewähltem OSCam-Eintrag zur Installation"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 4 */}
            <section id="manuelle-installation" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Manuelle OSCam Installation auf Enigma2
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Fehlt OSCam im Feed oder wird eine bestimmte Version benötigt, lässt sich die Softcam
                auch als Paketdatei einspielen. Der Ablauf ist bei allen Enigma2-Images ähnlich:
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">Kompatibles Paket wählen:</strong> Die IPK-Datei muss zu
                  Image, Architektur und Enigma2-Version passen. Eine unpassende Version ist die
                  häufigste Ursache für einen Dienst, der sofort wieder abstürzt.
                </li>
                <li>
                  <strong className="text-foreground">Datei auf den Receiver übertragen:</strong> per FTP/SFTP
                  in ein temporäres Verzeichnis oder über einen FAT32-formatierten USB-Stick. Übliche
                  Zielordner sind <span className="font-mono text-sm text-foreground">/tmp</span> oder{" "}
                  <span className="font-mono text-sm text-foreground">/media/usb</span>.
                </li>
                <li>
                  <strong className="text-foreground">Installation auslösen:</strong> über den Paketmanager des
                  Images oder das vorhandene Menü zur Paketinstallation. Abhängigkeiten wie eine
                  DVBAPI-Bibliothek werden dabei in der Regel automatisch mitgezogen.
                </li>
                <li>
                  <strong className="text-foreground">Neu starten:</strong> GUI-Restart oder vollständiger
                  Reboot, damit das Softcam-Menü das neue Paket erkennt.
                </li>
                <li>
                  <strong className="text-foreground">Kontrolle:</strong> im Softcam-Manager prüfen, ob OSCam
                  auftaucht und sich aktivieren lässt, danach das WebIF öffnen.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Für technische Beispiele gilt: Verwenden Sie ausschließlich Platzhalter wie{" "}
                <span className="font-mono text-sm text-foreground">&lt;box-ip&gt;</span> oder{" "}
                <span className="font-mono text-sm text-foreground">reader-lokal</span>. Fremde
                Zugangsdaten, Serveradressen oder fertige Konfigurationen aus unbekannter Quelle
                gehören nicht auf den eigenen Receiver — sie passen selten und erschweren jede
                spätere Fehlersuche.
              </p>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-installieren-terminal-befehle-enigma2.webp`}
                  alt="Terminalsitzung mit Beispielbefehlen zur manuellen OSCam Installation auf einem Enigma2-Receiver"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 5 */}
            <section id="nach-der-installation" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam Konfiguration nach der Installation
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Ein wichtiger Punkt, der oft untergeht:{" "}
                <strong className="text-foreground">Installation ist nicht gleich Konfiguration.</strong>{" "}
                Nach der Installation liegt OSCam als lauffähiger Dienst auf dem Receiver, weiß aber
                noch nicht, welche Quelle es nutzen soll und wie das WebIF erreichbar ist. Ein frisch
                installiertes OSCam ohne Konfiguration entschlüsselt daher nichts.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Die ersten sinnvollen Schritte nach der Installation sind: eine minimale{" "}
                <span className="font-mono text-sm text-foreground">oscam.conf</span> mit aktiviertem
                Logging und WebIF anlegen, den Log-Pfad festlegen, die DVBAPI-Anbindung
                sicherstellen, damit der Receiver seine Anfragen überhaupt an OSCam schickt, und das
                Startverhalten prüfen, damit der Dienst nach jedem Neustart automatisch mitläuft.
                Erst danach folgen Reader in{" "}
                <span className="font-mono text-sm text-foreground">oscam.server</span> und Zugänge in{" "}
                <span className="font-mono text-sm text-foreground">oscam.user</span>. Eine
                ausführliche, eigenständige Erklärung dieser Dateien mit Beispielen bietet der
                Blogartikel{" "}
                <Link
                  href="/blog/oscam-konfiguration-verstehen"
                  className="text-aqua underline underline-offset-4"
                >
                  OSCam Konfiguration verstehen
                </Link>
                .
              </p>
              <p className="text-base leading-relaxed text-muted">
                Als Faustregel: Bauen Sie die Konfiguration von innen nach außen auf. Zuerst muss
                OSCam sauber starten (nur oscam.conf), dann muss das WebIF erreichbar sein, dann kommt
                genau ein Reader dazu, dann ein Benutzer — und nach jedem dieser Schritte ein kurzer
                Test. So ist bei einem Fehler immer klar, welche Änderung ihn verursacht hat.
              </p>
            </section>

            {/* 6 */}
            <section id="konfigurationsdateien" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Die wichtigsten OSCam Konfigurationsdateien
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Vier Textdateien genügen für ein funktionierendes Setup. Sie liegen gemeinsam im
                Konfigurationsordner, sind reiner Text und lassen sich über FTP, einen Editor im
                WebIF oder direkt am Gerät bearbeiten. Hier jeweils Zweck, typische Funktion und die
                Fehler, die Anfängern am häufigsten passieren.
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
                    <p className="text-sm leading-relaxed text-muted">
                      <strong className="text-foreground">Typischer Anfängerfehler:</strong> {file.fehler}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted">
                Je nach Setup kommen weitere Dateien hinzu — etwa eine für feste Sender-Zuordnungen
                oder für zusätzliche Dienste. Für die erste Installation sind sie nicht nötig. Wichtig
                ist nur: In keiner dieser Dateien haben echte fremde Zugangsdaten oder
                Serverinformationen etwas zu suchen; für Beispiele reichen Platzhalter.
              </p>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-installieren-oscam-conf-konfiguration.webp`}
                  alt="Editor mit geöffneter oscam.conf sowie den Reitern oscam.server und oscam.user auf einem Laptop neben einem Enigma2-Receiver"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 7 */}
            <section id="dateipfade" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Wo liegen die OSCam Dateien?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Es gibt keinen einzigen Pfad, der auf jedem Gerät garantiert gilt. Wo OSCam seine
                Konfiguration erwartet, hängt vom Image, vom Receiver, vom installierten Paket, von
                der Installationsmethode und von der OSCam-Version ab. Die folgende Tabelle zeigt
                typische Speicherorte als technische Orientierung — nicht als feste Vorgabe.
              </p>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-background-elevated">
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Umgebung
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Typischer Pfad (Beispiel)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dateipfade.map((row, index) => (
                      <tr key={row.image} className={index % 2 === 0 ? "bg-background" : "bg-background-elevated/40"}>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.image}</td>
                        <td className="border-b border-border px-4 py-3 font-mono text-xs text-foreground">
                          {row.pfad}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Den tatsächlich verwendeten Pfad ermitteln Sie am zuverlässigsten über das WebIF: Der
                Bereich „Files“ listet alle geladenen Konfigurationsdateien mit vollständigem Pfad.
                Alternativ zeigt der Startparameter{" "}
                <span className="font-mono text-sm text-foreground">-c</span> im Softcam-Startskript,
                welchen Ordner der Dienst nutzt. Existieren mehrere Kopien einer Datei in
                unterschiedlichen Ordnern, bearbeiten Sie im Zweifel die falsche — deshalb lohnt sich
                dieser Abgleich vor der ersten Änderung.
              </p>
            </section>

            {/* 8 */}
            <section id="webif" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam WebIF: Installation kontrollieren
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Das WebIF ist die in OSCam eingebaute Weboberfläche. Sie erreichen es im Browser über
                die IP-Adresse des Receivers und den in{" "}
                <span className="font-mono text-sm text-foreground">oscam.conf</span> gesetzten Port,
                zum Beispiel{" "}
                <span className="font-mono text-sm text-foreground">http://&lt;box-ip&gt;:8888</span>.
                Nach der Installation ist es das schnellste Werkzeug, um zu sehen, ob alles läuft.
              </p>
              <p className="text-base leading-relaxed text-muted">Im WebIF prüfen Sie vor allem:</p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">Status:</strong> Läuft der Dienst? Welche OSCam-Version
                  ist aktiv? Wie lange läuft der Prozess schon (Uptime)?
                </li>
                <li>
                  <strong className="text-foreground">Reader:</strong> Werden angebundene Quellen als „online“
                  angezeigt, oder bleiben sie auf „off“ bzw. „connecting“?
                </li>
                <li>
                  <strong className="text-foreground">Clients/Users:</strong> Sind die in oscam.user angelegten
                  Zugänge sichtbar und verbunden?
                </li>
                <li>
                  <strong className="text-foreground">Log:</strong> Zeigt das Live-Log einen sauberen Start
                  oder wiederkehrende Fehlermeldungen?
                </li>
                <li>
                  <strong className="text-foreground">Files:</strong> Welche Konfigurationsdateien sind mit
                  welchem Pfad geladen?
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Zur Sicherheit gehört ein bewusster Umgang mit dem WebIF: Öffnen Sie es nicht ohne
                Grund ins Internet, vergeben Sie ein eigenes Benutzerkonto mit sicherem Passwort und
                beschränken Sie den Zugriff über{" "}
                <span className="font-mono text-sm text-foreground">httpallowed</span> möglichst auf
                das lokale Netz. Screenshots aus dem WebIF, die Sie irgendwo teilen, sollten keine
                sensiblen Informationen enthalten.
              </p>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-installieren-webif-status-erfolg.webp`}
                  alt="OSCam WebIF Statusseite im Browser mit erfolgreicher Installation und mehreren online angezeigten Readern"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 9 */}
            <section id="vu-plus" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam auf VU+ installieren
              </h2>
              <p className="text-base leading-relaxed text-muted">
                VU+ Modelle wie Solo, Uno, Duo oder die 4K-Reihe laufen fast immer mit OpenPLi oder
                OpenATV. Beide Images führen einen gut gepflegten Feed, in dem OSCam als Softcam-Paket
                enthalten ist. Die Installation über den Plugin-Browser oder den Paketmanager ist
                daher der Normalfall; eine manuelle IPK-Installation wird selten gebraucht.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Besonderheiten bei VU+: Der Softcam-Manager heißt je nach Image leicht anders, die
                Funktion ist aber gleich — OSCam auswählen, aktivieren, Autostart setzen. Die meisten
                aktuellen Modelle haben genug Rechenleistung, um mehrere Reader gleichzeitig zu
                betreiben. Nach der Installation empfiehlt sich ein GUI-Restart, damit OSCam sauber im
                Menü erscheint. Gerätespezifische Hinweise, auch zu älteren Modellen, stehen auf der
                Seite{" "}
                <Link href="/oscam-vu-plus" className="text-aqua underline underline-offset-4">
                  OSCam auf VU+
                </Link>
                .
              </p>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-installieren-vu-plus-terminal-setup.webp`}
                  alt="VU+ Receiver neben einem Laptop mit Terminalbefehlen zur OSCam Installation über den Paketmanager"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 10 */}
            <section id="dreambox" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam auf Dreambox installieren
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Bei der Dreambox hängt der Weg stärker vom Image ab als bei anderen Marken. Modelle
                wie DM900, DM920 oder DM520 laufen entweder mit OpenATV oder mit dem herstellereigenen
                DreamOS. Unter OpenATV entspricht die Installation dem üblichen Enigma2-Ablauf: OSCam
                aus dem Feed installieren, GUI neu starten, im Softcam-Manager aktivieren.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Unter DreamOS weichen Menüführung, Paketnamen und teilweise die Konfigurationspfade
                ab. Prüfen Sie deshalb zuerst im Systemmenü, welches Image installiert ist, und
                richten Sie sich danach. Aktuelle Modelle bieten reichlich Leistung; bei älteren
                Geräten hilft eine schlanke Konfiguration. Details und die typischen Unterschiede
                zwischen den Bildvarianten stehen auf der Seite{" "}
                <Link href="/oscam-dreambox" className="text-aqua underline underline-offset-4">
                  OSCam auf Dreambox
                </Link>
                .
              </p>
            </section>

            {/* 11 */}
            <section id="zgemma" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam auf Zgemma installieren
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Zgemma-Geräte wie H9, H9S oder H9 Combo sind ein günstiger Einstieg in Enigma2 und
                laufen überwiegend mit OpenATV oder OpenPLi. OSCam ist im Feed enthalten, die
                Installation folgt dem Standardablauf über den Plugin-Browser. Modelle mit Combo-Tuner
                unterstützen zusätzlich Kabel- und DVB-T2-Empfang neben Satellit.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Weil die Hardware bei einzelnen Modellen etwas schwächer ausfällt, macht sich hier
                eine aufgeräumte Konfiguration besonders bezahlt: nur die wirklich benötigten Reader,
                ein moderates Log-Level und keine überflüssigen Zusatzdienste. Nach der Installation
                die Oberfläche neu starten und OSCam im Softcam-Menü als Autostart-Softcam setzen.
                Weitere Hinweise stehen auf der Seite{" "}
                <Link href="/oscam-zgemma" className="text-aqua underline underline-offset-4">
                  OSCam auf Zgemma
                </Link>
                .
              </p>
            </section>

            {/* 12 */}
            <section id="starten-status" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam starten und Status prüfen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Im Alltag wird OSCam über den Softcam-Manager des Images gesteuert. Dort gibt es die
                Aktionen Starten, Stoppen und Neustarten sowie die Einstellung für den Autostart.
                Nach jeder Konfigurationsänderung ist ein Neustart des Dienstes nötig, damit die neue
                Fassung geladen wird — ein Neustart des ganzen Receivers ist dafür nicht
                erforderlich.
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">Start / Stop / Neustart:</strong> über das Softcam-Menü.
                  Der Neustart ist der übliche Weg, um Änderungen zu übernehmen.
                </li>
                <li>
                  <strong className="text-foreground">Autostart:</strong> sorgt dafür, dass OSCam nach jedem
                  Reboot automatisch mitläuft. Ist er nicht gesetzt, steht der Dienst nach jedem
                  Stromausfall.
                </li>
                <li>
                  <strong className="text-foreground">Prozesskontrolle:</strong> Im WebIF zeigen Uptime und
                  Load, ob der Prozess stabil läuft oder sich immer wieder neu startet.
                </li>
                <li>
                  <strong className="text-foreground">Logs:</strong> Das Live-Log im WebIF oder die Logdatei am
                  Gerät zeigen jeden Start, jede Anfrage und jeden Fehler.
                </li>
                <li>
                  <strong className="text-foreground">Statusseite:</strong> Der schnellste Gesamtblick — Dienst
                  aktiv, Version korrekt, Reader online, Clients verbunden.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Für Einsteiger ist die wichtigste Gewohnheit: Nach jeder Änderung den Dienst neu
                starten, kurz ins Log schauen und erst dann die nächste Änderung angehen. Das dauert
                wenige Sekunden und erspart lange Fehlersuchen.
              </p>
            </section>

            {/* 13 */}
            <section id="fehler" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Häufige OSCam Installationsfehler
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die meisten Probleme nach einer OSCam Installation lassen sich auf eine überschaubare
                Zahl von Ursachen zurückführen. Für jeden Fall hier das Muster{" "}
                <em>Symptom → mögliche Ursache → was prüfen → Lösungsweg</em>.
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
                      <strong className="text-foreground">Was prüfen:</strong> {item.pruefen}
                    </p>
                    <p className="text-sm leading-relaxed text-muted">
                      <strong className="text-foreground">Lösungsweg:</strong> {item.loesung}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted">
                Eine strukturierte Fehlersuche mit weiteren Log-Beispielen beschreibt der Blogartikel{" "}
                <Link href="/blog/oscam-fehler-loesungen" className="text-aqua underline underline-offset-4">
                  Häufige OSCam Fehler und Lösungen
                </Link>
                . Wenn Sie trotz allem nicht weiterkommen, hilft unser{" "}
                <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
                  Support-Team
                </Link>{" "}
                bei der Einrichtung auf Ihrem Gerät.
              </p>
            </section>

            {/* 14 */}
            <section id="update" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam Update: Was sollte man beachten?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Ein Update kann sinnvoll sein, wenn eine neue Version Fehler behebt, ein Protokoll
                ergänzt oder besser zu einem aktualisierten Image passt. Nötig ist ein Update nicht in
                jedem Fall — läuft das Setup stabil, gibt es keinen Zwang zur neuesten Revision.
                Wichtig ist ein geordnetes Vorgehen:
              </p>
              <ol className="flex flex-col gap-3">
                {[
                  "Prüfen, welche OSCam-Version aktuell läuft (WebIF-Status oder Versionsabfrage am Gerät).",
                  "Kompatibilität der neuen Version mit dem installierten Image und der Architektur klären.",
                  "Vollständiges Backup des Images und eine Kopie des Konfigurationsordners anlegen.",
                  "Die neue Version über den Feed installieren; die Konfigurationsdateien bleiben dabei in der Regel erhalten.",
                  "Dienst neu starten, WebIF öffnen und die neue Versionsnummer bestätigen.",
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
                Geht nach dem Update etwas schief, spielen Sie die gesicherte Version und
                Konfiguration zurück. Ein ausführlicher Ablauf mit Sicherung und Rückweg steht im
                Blogartikel{" "}
                <Link
                  href="/blog/oscam-updates-durchfuehren"
                  className="text-aqua underline underline-offset-4"
                >
                  OSCam Updates sicher durchführen
                </Link>
                .
              </p>
            </section>

            {/* 15 */}
            <section id="oscam-icam" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam und iCam: Was ist der Unterschied?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Beide Namen stehen für Softcam-Lösungen im Enigma2-Umfeld, und beide tauchen bei der
                Suche oft gemeinsam auf. Der Grund: Sie erfüllen dieselbe Grundaufgabe und werden in
                vielen Setups zusammen betrieben, nicht als Alternative zueinander.
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">OSCam:</strong> umfangreich konfigurierbar, breit
                  dokumentiert, in fast jedem Image im Feed. Meist die zentrale Instanz, die Reader
                  verwaltet und Kontrollwörter liefert.
                </li>
                <li>
                  <strong className="text-foreground">iCam:</strong> schlanker, oft auf einen bestimmten
                  Protokoll- oder Relay-Pfad ausgelegt. Reicht Anfragen in vielen Konfigurationen an
                  OSCam weiter.
                </li>
                <li>
                  <strong className="text-foreground">Technischer Zusammenhang:</strong> Läuft OSCam als Basis,
                  ergänzt iCam einen speziellen Weg. Ohne funktionierendes OSCam funktioniert iCam in
                  diesen Setups nicht.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Für die reine Installation dieser Seite ist OSCam der Ausgangspunkt. Wer wissen will,
                wie iCam einzuordnen ist, findet die Details auf der Seite{" "}
                <Link href="/icam" className="text-aqua underline underline-offset-4">
                  iCam
                </Link>{" "}
                und im Blogartikel{" "}
                <Link
                  href="/blog/oscam-icam-unterschiede"
                  className="text-aqua underline underline-offset-4"
                >
                  OSCam und iCam im Vergleich
                </Link>
                .
              </p>
            </section>

            {/* 16 */}
            <section id="anfaenger" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam Installation für Anfänger
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Wer OSCam zum ersten Mal installiert, macht die Sache am einfachsten, indem er
                langsam und geordnet vorgeht. Die folgenden Gewohnheiten verhindern die meisten
                typischen Sackgassen:
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                {anfaengerTipps.map((tipp) => (
                  <li key={tipp} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>{tipp}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Der rote Faden dahinter: reproduzierbar bleiben. Solange Sie jederzeit zum letzten
                funktionierenden Stand zurückkehren können und immer nur eine Sache auf einmal
                ändern, ist eine OSCam Installation kein Risiko, sondern eine überschaubare Abfolge
                kleiner, prüfbarer Schritte.
              </p>
            </section>

            {/* 17 */}
            <section id="checkliste" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam installieren: Checkliste
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Zum Abhaken — vom vorbereiteten Receiver bis zum getesteten Neustart:
              </p>
              <ol className="flex flex-col gap-2.5">
                {checkliste.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background-elevated/40 px-4 py-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-aqua/50 text-xs font-semibold text-aqua">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* FAQ */}
            <section
              id="faq"
              className="flex scroll-mt-24 flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7"
            >
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

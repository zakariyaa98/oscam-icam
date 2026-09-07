import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";

const imgDir = "/images/home page/oscam-dreambox";
const ogImage = `${imgDir}/oscam-dreambox-dm920-uhd-4k-installation-anleitung-2024.webp`;

export const metadata: Metadata = {
  title: "OSCam Dreambox – Einrichtung, Konfiguration & Fehlerbehebung",
  description:
    "OSCam auf Dreambox verständlich erklärt: Einrichtung, Konfiguration, WebIF, Dreambox-Modelle und ein diagnosebasierter Weg zur Lösung typischer OSCam-Probleme auf Enigma2.",
  keywords: [
    "OSCam Dreambox",
    "OSCam auf Dreambox",
    "OSCam Dreambox installieren",
    "OSCam Dreambox einrichten",
    "OSCam Dreambox Konfiguration",
    "OSCam Dreambox Enigma2",
    "OSCam Dreambox WebIF",
    "OSCam Dreambox Fehler",
    "OSCam Dreambox Update",
    "Dreambox OSCam",
    "DreamOS OSCam",
    "OSCam DM900",
    "OSCam DM920",
  ],
  alternates: {
    canonical: "/oscam-dreambox",
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam-dreambox",
    title: "OSCam Dreambox – Einrichtung, Konfiguration & Fehlerbehebung",
    description:
      "OSCam auf Dreambox: Einrichtung, Konfiguration, WebIF-Kontrolle, Modell-Überblick und eine diagnosebasierte Fehlersuche für Enigma2.",
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
    title: "OSCam Dreambox – Einrichtung, Konfiguration & Fehlerbehebung",
    description:
      "OSCam auf Dreambox einrichten, konfigurieren und Probleme diagnosebasiert lösen – für Enigma2 und DreamOS.",
  },
};

const flowChain = [
  "Dreambox",
  "Enigma2",
  "OSCam",
  "Einrichtung",
  "Konfiguration",
  "Kontrolle",
  "Fehlerbehebung",
];

const pageNav = [
  { href: "#zusammenhang", label: "Dreambox & OSCam" },
  { href: "#modelle", label: "Dreambox-Modelle" },
  { href: "#vor-der-installation", label: "Vor der Installation" },
  { href: "#installation", label: "Installation in 6 Phasen" },
  { href: "#dreamos-openatv", label: "DreamOS vs. OpenATV" },
  { href: "#konfiguration", label: "Konfiguration" },
  { href: "#webif", label: "WebIF" },
  { href: "#diagnose", label: "Diagnose & Fehlersuche" },
  { href: "#checkliste", label: "Checkliste" },
  { href: "#update", label: "Update" },
  { href: "#oscam-icam", label: "OSCam & iCam" },
  { href: "#faq", label: "FAQ" },
];

const dreamboxModelle = [
  {
    modell: "Dreambox DM520 / DM520HD",
    enigma2: "DreamOS oder OE-Image (z. B. OpenATV)",
    kontext: "Kompakte HD-Klasse, MIPS-Architektur. OSCam über den Feed des jeweiligen Images.",
    hinweise: "Bei sehr altem Softwarestand kann die verfügbare OSCam-Version älter ausfallen. Schlanke Konfiguration bevorzugen.",
  },
  {
    modell: "Dreambox DM525",
    enigma2: "DreamOS oder OE-Image",
    kontext: "Nachfolger des DM520 mit gleicher Grundausrichtung, HD, MIPS.",
    hinweise: "Vorgehen wie beim DM520. Vor der Installation Image und Architektur eindeutig bestimmen.",
  },
  {
    modell: "Dreambox DM900 Ultra HD",
    enigma2: "DreamOS ab Werk",
    kontext: "4K-Receiver, ARM-Architektur. OSCam über den DreamOS-Feed, Dienstverwaltung über systemctl.",
    hinweise: "Konfiguration meist unter /etc/tuxbox/config/oscam/. Aktuelle Builds, viel Reserve.",
  },
  {
    modell: "Dreambox DM920 Ultra HD",
    enigma2: "DreamOS ab Werk",
    kontext: "4K-Receiver, ARM, mit Twin-/FBC-Tuner-Optionen. Wie DM900, mehr Tuner-Reserve.",
    hinweise: "Gut geeignet für mehrere parallele Reader und gleichzeitige Aufnahmen.",
  },
  {
    modell: "Dreambox One / Two",
    enigma2: "DreamOS ab Werk, OpenATV verbreitet",
    kontext: "4K, ARM. Je nach installiertem Image unterscheiden sich Menüs, Feeds und Pfade.",
    hinweise: "Zuerst feststellen, ob DreamOS oder ein OE-Image läuft — davon hängt der gesamte weitere Ablauf ab.",
  },
];

const preflight = [
  {
    punkt: "Dreambox-Modell bestimmen",
    detail: "DM520-Klasse (HD, MIPS) oder 4K-Klasse wie DM900/DM920 (ARM)? Die Architektur entscheidet, welcher OSCam-Build passt.",
  },
  {
    punkt: "Enigma2-Image feststellen",
    detail: "Läuft das Werksimage DreamOS oder ein OE-Image wie OpenATV/OpenPLi? Menüführung, Paketmanager und Pfade unterscheiden sich deutlich.",
  },
  {
    punkt: "Softwarestand prüfen",
    detail: "Im Systemmenü nach der Image-Version sehen und bei Bedarf aktualisieren, damit der Feed erreichbar bleibt.",
  },
  {
    punkt: "Architektur / Kompatibilität",
    detail: "OSCam wird pro Architektur und Image gebaut. Ein Build für MIPS läuft nicht auf ARM und umgekehrt.",
  },
  {
    punkt: "Netzwerkverbindung",
    detail: "LAN bevorzugt. IP-Adresse der Dreambox notieren, Verbindung ins Internet testen (Feed, später Netzwerk-Reader).",
  },
  {
    punkt: "Freier Speicher",
    detail: "Für Paket, Abhängigkeiten und Logs sollte etwas Platz im Flash oder auf einem angeschlossenen Datenträger frei sein.",
  },
  {
    punkt: "Zugriff auf den Receiver",
    detail: "Fernbedienung für die Installation, zusätzlich SSH oder FTP/SFTP für die Konfiguration und die Logkontrolle.",
  },
  {
    punkt: "Backup erstellen",
    detail: "Ein vollständiges Image-Backup und eine Kopie des Konfigurationsordners, falls schon einer existiert.",
  },
  {
    punkt: "Passenden OSCam-Build wählen",
    detail: "Aus dem offiziellen Feed des installierten Images, gebaut für die richtige Architektur.",
  },
];

const installPhasen = [
  {
    phase: "Phase 1 – Vorbereitung",
    body: "Dreambox einschalten, Image-Version prüfen und aktualisieren, Backup anlegen, IP-Adresse notieren. Entscheiden, ob die Installation über das Bordmenü oder über SSH erfolgt.",
  },
  {
    phase: "Phase 2 – Kompatibilität prüfen",
    body: "Image (DreamOS oder OE) und Architektur (MIPS oder ARM) eindeutig bestimmen. Nur einen Build installieren, der zu beidem passt — das verhindert die häufigsten Fehlstarts.",
  },
  {
    phase: "Phase 3 – OSCam installieren",
    body: "Über den Paketmanager des Images (auf DreamOS via apt bzw. opkg, auf OE-Images via opkg) oder über den Plugin-/Softcam-Browser. Abhängigkeiten wie SSL-Bibliotheken zieht das System in der Regel automatisch mit.",
  },
  {
    phase: "Phase 4 – Receiver neu starten",
    body: "Einen GUI-Restart oder einen vollständigen Neustart durchführen, damit das Softcam-Menü das neue Paket erkennt.",
  },
  {
    phase: "Phase 5 – OSCam aktivieren",
    body: "OSCam als aktives Softcam auswählen und den Autostart setzen. Auf DreamOS entspricht das systemctl enable oscam, auf OE-Images dem Autostart-Schalter im Softcam-Manager.",
  },
  {
    phase: "Phase 6 – Installation kontrollieren",
    body: "Im Softcam-Menü prüfen, ob OSCam als aktiv gilt, dann das WebIF im Browser öffnen. Zeigt die Statusseite Version und laufenden Dienst, ist die Installation abgeschlossen.",
  },
];

const configFiles = [
  {
    name: "oscam.conf",
    role: "Grundeinstellungen und Dienste",
    body: "Steuert Logging, das WebIF (Port, Benutzer, erlaubte Netze) und die DVBAPI-Anbindung, über die die Dreambox ihre Anfragen an OSCam schickt. Ohne gültige oscam.conf startet der Dienst nicht.",
  },
  {
    name: "oscam.server",
    role: "Reader und Verbindungen",
    body: "Beschreibt jede Signalquelle als eigenen Reader — einen lokal an der Dreambox angeschlossenen Kartenleser, ein CI+-Modul oder eine eigene Netzwerkverbindung — mit Name, Typ und den dokumentierten Parametern.",
  },
  {
    name: "oscam.user",
    role: "Zugänge und Berechtigungen",
    body: "Legt die Zugänge innerhalb der eigenen Installation fest und ordnet ihnen Reader zu. Für eine einzelne Dreambox genügt meist ein Eintrag, zum Beispiel example-user mit example-password.",
  },
  {
    name: "oscam.dvbapi",
    role: "Priorisierung der Anfragen",
    body: "Optional. Steuert, welcher Reader für welchen Sender bevorzugt (P), verzögert (D) oder ignoriert (I) wird — relevant, sobald mehrere Reader dieselbe Anfrage beantworten könnten.",
  },
];

const diagnoseSchritte = [
  {
    titel: "1. Receiver prüfen",
    body: "Läuft die Dreambox stabil? Zeigt das Front-Display eine Fehlermeldung? Ist genug Speicher frei? Ein voller Flash ist eine häufige, leicht übersehene Ursache.",
  },
  {
    titel: "2. Netzwerk prüfen",
    body: "Ist die Dreambox unter ihrer IP erreichbar? Stimmen Gateway und DNS? Geht die Systemzeit richtig? OSCam braucht eine korrekte Uhrzeit für Netzwerkverbindungen.",
  },
  {
    titel: "3. OSCam-Prozess prüfen",
    body: "Läuft der Dienst überhaupt? Auf DreamOS gibt systemctl status oscam Auskunft, auf OE-Images das Softcam-Menü. Ist der Autostart gesetzt?",
  },
  {
    titel: "4. WebIF prüfen",
    body: "Öffnet sich das WebIF unter IP und Port? Klappt der Login? Lädt die Statusseite vollständig? Wenn ja, verlagert sich die Fehlersuche von der Installation zur Konfiguration.",
  },
  {
    titel: "5. Konfiguration prüfen",
    body: "Liegen oscam.conf, oscam.server und oscam.user im erwarteten Ordner? Ist die Syntax fehlerfrei? Sind Reader und Benutzer sauber definiert und einander zugeordnet?",
  },
  {
    titel: "6. Logs prüfen",
    body: "Das Log direkt nach einem Startversuch öffnen und die erste konkrete Fehlermeldung suchen. Für die Analyse das Log-Level kurz erhöhen und danach wieder zurücksetzen.",
  },
  {
    titel: "7. Version prüfen",
    body: "Passt der installierte OSCam-Build zu Image und Architektur (MIPS/ARM, DreamOS/OE)? Ein unpassender Build ist die klassische Ursache für einen sofort abstürzenden Dienst.",
  },
];

const fehlerMatrix = [
  {
    problem: "OSCam startet nicht",
    ursache: "Syntaxfehler in oscam.conf oder ein belegter Port",
    pruefen: "Log direkt nach dem Start, oscam.conf Zeile für Zeile",
    schritt: "Fehlerhaften Eintrag entfernen, mit minimaler Konfiguration starten, schrittweise erweitern",
  },
  {
    problem: "WebIF ist nicht erreichbar",
    ursache: "httpport nicht gesetzt oder httpallowed zu eng gefasst",
    pruefen: "WebIF-Abschnitt in oscam.conf: Port, Benutzer, erlaubte Netze",
    schritt: "Freien Port setzen, eigenes Subnetz freigeben, Dienst neu starten",
  },
  {
    problem: "Konfigurationsdateien werden nicht gefunden",
    ursache: "Falscher Ordner, oder OSCam legt neue Standarddateien an",
    pruefen: "Startparameter -c bzw. Pfad im WebIF unter „Files“",
    schritt: "Dateien in den erwarteten Ordner verschieben oder den Startparameter anpassen",
  },
  {
    problem: "Falscher Dateipfad",
    ursache: "Mehrere Kopien einer Datei in verschiedenen Ordnern",
    pruefen: "Alle Vorkommen von oscam.server auf der Dreambox auflisten",
    schritt: "Überzählige Kopien löschen, nur einen Ordner pflegen",
  },
  {
    problem: "Inkompatibler Build",
    ursache: "Paket für andere Architektur oder anderes Image (MIPS statt ARM, OE statt DreamOS)",
    pruefen: "Image, Architektur und Build-Bezeichnung vergleichen",
    schritt: "Passenden Build aus dem richtigen Feed installieren, alten vorher entfernen",
  },
  {
    problem: "Berechtigungsproblem",
    ursache: "Dateien per FTP mit falschen Rechten oder falschem Eigentümer übertragen",
    pruefen: "Rechte und Eigentümer im Konfigurationsordner",
    schritt: "Rechte auf einen üblichen Wert (z. B. 644) setzen, Eigentümer korrigieren, neu starten",
  },
  {
    problem: "Netzwerkproblem",
    ursache: "Falsches Gateway oder DNS, abweichende Systemzeit",
    pruefen: "Netzwerkmenü, Systemzeit, hinterlegter Zeitserver",
    schritt: "Netzwerkdaten korrigieren, Zeit synchronisieren, Dreambox neu starten",
  },
  {
    problem: "Konfigurationssyntax",
    ursache: "Vergessene Abschnittsüberschrift oder Klammer, Tippfehler",
    pruefen: "Die zuletzt geänderte Datei",
    schritt: "Backup zurückspielen, Änderungen einzeln wiederholen, jeweils testen",
  },
  {
    problem: "OSCam stoppt nach einem Neustart",
    ursache: "Autostart nicht gesetzt oder ein zweites Softcam übernimmt",
    pruefen: "Softcam-Menü bzw. systemctl is-enabled oscam",
    schritt: "OSCam als Autostart-Softcam festlegen, konkurrierende Softcams deaktivieren",
  },
  {
    problem: "Probleme nach einem Update",
    ursache: "Neuer Build inkompatibel oder geänderte Konfigurationsoptionen",
    pruefen: "OSCam-Version im WebIF, Log auf neue Warnungen",
    schritt: "Gesicherte Version und Konfiguration zurückspielen, Update später erneut versuchen",
  },
];

const checklisteVor = [
  "Dreambox-Modell und Architektur (MIPS oder ARM) bestimmt",
  "Enigma2-Image erkannt (DreamOS oder OE-Image wie OpenATV)",
  "Image-Version geprüft und bei Bedarf aktualisiert",
  "Netzwerk geprüft, IP-Adresse der Dreambox notiert",
  "Vollständiges Backup erstellt",
];

const checklisteNach = [
  "OSCam-Status im Softcam-Menü bzw. über systemctl geprüft",
  "WebIF im Browser geöffnet, Version und Dienst bestätigt",
  "Konfigurationsdateien und ihr Pfad kontrolliert",
  "Neustart der Dreambox getestet, Autostart greift",
  "Log ohne wiederkehrende Fehlermeldungen",
];

const faqItems = [
  {
    question: "Was ist OSCam auf einer Dreambox?",
    answer:
      "OSCam ist eine quelloffene Softcam-Software, die auf dem Linux-System der Dreambox als Hintergrunddienst läuft. Sie vermittelt zwischen dem Enigma2-Receiver und einer rechtmäßig erworbenen Zugangsberechtigung, damit verschlüsselte Sender dargestellt werden können. Verwaltet wird OSCam je nach Image über systemctl (DreamOS) oder den Softcam-Manager (OE-Images).",
  },
  {
    question: "Welche Dreambox Modelle eignen sich für OSCam?",
    answer:
      "Grundsätzlich alle Dreambox-Modelle mit einem gepflegten Enigma2-Image — von der DM520-Klasse (HD, MIPS) über DM900 und DM920 Ultra HD (4K, ARM) bis zu Dreambox One und Two. Ob eine bestimmte OSCam-Version läuft, hängt von Architektur, Image und der im Feed verfügbaren Build-Version ab.",
  },
  {
    question: "Wie installiert man OSCam auf einer Dreambox?",
    answer:
      "In sechs Phasen: vorbereiten (Backup, IP notieren), Kompatibilität prüfen (Image und Architektur), OSCam über den Paketmanager des Images installieren, den Receiver neu starten, OSCam als aktives Softcam mit Autostart setzen und die Installation im WebIF kontrollieren. Der allgemeine Ablauf steht in der Installationsanleitung für Enigma2.",
  },
  {
    question: "Welche Voraussetzungen gibt es?",
    answer:
      "Eine Dreambox mit gepflegtem Enigma2-Image, eine stabile Netzwerkverbindung, etwas freier Speicher, Zugriff über Fernbedienung und optional SSH oder FTP, ein aktuelles Backup und ein OSCam-Build, der zur Architektur und zum Image passt.",
  },
  {
    question: "Wo liegen die OSCam Konfigurationsdateien auf der Dreambox?",
    answer:
      "Auf DreamOS häufig unter /etc/tuxbox/config/oscam/, auf OE-Images oft unter /etc/tuxbox/config/. Je nach Installationsmethode kann der Pfad abweichen. Den tatsächlich genutzten Ordner zeigt das WebIF unter „Files“ oder der Startparameter -c des Dienstes.",
  },
  {
    question: "Was ist das OSCam WebIF?",
    answer:
      "Das WebIF ist die in OSCam eingebaute Weboberfläche. Sie erreichen es im Browser über die IP-Adresse der Dreambox und den in oscam.conf gesetzten Port. Es zeigt Status, aktive Kanäle, den Zustand der Reader und die Logs und ist das wichtigste Werkzeug zur lokalen Kontrolle.",
  },
  {
    question: "Warum startet OSCam auf der Dreambox nicht?",
    answer:
      "Meist wegen eines Syntaxfehlers in oscam.conf, eines belegten Ports, eines Readers, der auf ein nicht vorhandenes Gerät zeigt, oder eines Builds, der nicht zur Architektur bzw. zum Image passt. Die erste Zeile im Log nach dem Startversuch nennt in der Regel die Ursache.",
  },
  {
    question: "Warum ist das WebIF auf der Dreambox nicht erreichbar?",
    answer:
      "Häufige Gründe sind ein nicht gesetzter oder blockierter httpport in oscam.conf, ein von einem anderen Dienst belegter Port oder ein zu eng gesetztes httpallowed, das den eigenen Rechner aussperrt. Nach einer Korrektur den Dienst neu starten und die Adresse mit Port erneut aufrufen.",
  },
  {
    question: "Wie prüft man die OSCam Version auf der Dreambox?",
    answer:
      "Am schnellsten über die Statusseite des WebIF, dort steht die laufende Version samt Build-Nummer. Alternativ über die Kommandozeile per Versionsabfrage des OSCam-Binaries. Die Version sollte zum installierten Image und zur Architektur passen.",
  },
  {
    question: "Was sollte man vor einem OSCam Update sichern?",
    answer:
      "Ein vollständiges Image-Backup und eine Kopie des gesamten Konfigurationsordners mit oscam.conf, oscam.server, oscam.user und gegebenenfalls oscam.dvbapi. Zusätzlich hilft es, die aktuell laufende OSCam-Version zu notieren.",
  },
  {
    question: "Was ist der Unterschied zwischen OSCam und iCam?",
    answer:
      "Beide sind Softcam-Lösungen für Enigma2. OSCam ist umfangreicher konfigurierbar und breit dokumentiert und bildet meist die zentrale Instanz. iCam tritt schlanker auf und deckt oft einen bestimmten Protokollpfad ab. In vielen Setups laufen beide zusammen; mehr dazu auf der Seite zu iCam.",
  },
  {
    question: "Was kann man tun, wenn OSCam nach einem Neustart nicht läuft?",
    answer:
      "Prüfen, ob der Autostart gesetzt ist — auf DreamOS mit systemctl is-enabled oscam, auf OE-Images im Softcam-Menü. Dann OSCam als aktives Autostart-Softcam festlegen, konkurrierende Softcams deaktivieren und die Dreambox einmal vollständig neu starten.",
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

export default function OscamDreamboxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "OSCam Dreambox", href: "/oscam-dreambox" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Dreambox & OSCam"
            title="OSCam auf Dreambox – Einrichtung, Konfiguration und Fehlerbehebung"
            description="Diese Seite ist kein weiteres Installations-Tutorial, sondern ein Dreambox-eigener Leitfaden: Was OSCam auf einer Dreambox leistet, welche Modelle in Frage kommen, wie Einrichtung und Konfiguration zusammenhängen und wie Sie Probleme diagnosebasiert eingrenzen."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-12">
            {/* Quick answer */}
            <div className="flex flex-col gap-4 rounded-3xl border border-gold/30 bg-background-elevated p-7">
              <h2 className="text-lg font-semibold text-foreground">Kurz erklärt: OSCam auf Dreambox</h2>
              <p className="text-sm leading-relaxed text-muted">
                OSCam ist eine Softcam — eine Entschlüsselungs­komponente in Software-Form. Auf einer
                Dreambox läuft sie als Hintergrunddienst unter Enigma2 und beantwortet die Anfragen
                des Receivers nach einem gültigen Kontrollwort mithilfe einer rechtmäßig erworbenen
                Zugangsquelle. Die Dreambox liefert also Hardware und Enigma2-Oberfläche, OSCam
                übernimmt die Vermittlung.
              </p>
              <p className="text-sm leading-relaxed text-muted">
                Vor dem Start brauchen Sie: das Dreambox-Modell und seine Architektur (MIPS oder ARM),
                das installierte Image (DreamOS ab Werk oder ein OE-Image wie OpenATV), eine
                Netzwerkverbindung, etwas freien Speicher und ein Backup. Diese Seite führt vom
                Verständnis über Einrichtung und Konfiguration bis zur Kontrolle und zur strukturierten
                Fehlersuche.
              </p>
              <div className="w-full overflow-x-auto">
                <ol className="flex min-w-max items-center gap-2 text-xs font-medium">
                  {flowChain.map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="rounded-lg border border-border bg-background px-3 py-2 text-foreground">
                        {step}
                      </span>
                      {index < flowChain.length - 1 ? (
                        <span aria-hidden className="text-aqua">
                          →
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ol>
              </div>
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

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={ogImage}
                alt="Dreambox DM920 Ultra HD mit einem Front-Display, das OSCam im Zustand „running“ mit Reader- und Client-Informationen anzeigt"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            {/* 1 — concept */}
            <section id="zusammenhang" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Dreambox, Enigma2 und OSCam – wie das zusammenhängt
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Eine Dreambox ist zunächst nur Hardware: Tuner, Prozessor, Netzwerk, Front-Display. Was
                die Box bedienbar macht, ist <strong className="text-foreground">Enigma2</strong> — die
                offene Linux-Oberfläche, die auf Dreambox-Geräten je nach Modell als Werksimage{" "}
                <strong className="text-foreground">DreamOS</strong> oder als OE-Image wie OpenATV
                läuft. Enigma2 selbst entschlüsselt nichts; es reicht die Anfrage eines
                verschlüsselten Senders über eine Schnittstelle namens DVBAPI weiter.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Genau hier setzt <strong className="text-foreground">OSCam</strong> an. Als Softcam
                nimmt es diese Anfrage entgegen, holt das passende Kontrollwort von einer angebundenen
                Quelle — einem lokalen Kartenleser, einem CI+-Modul oder einer eigenen
                Netzwerkverbindung — und gibt es an die Dreambox zurück. Erst dann wird das Bild
                freigegeben. OSCam ist damit das Bindeglied zwischen Enigma2 und der
                Zugangsberechtigung, nicht die Berechtigung selbst.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Für die Praxis heißt das: Auf der Dreambox laufen zwei getrennte Aufgaben. Die{" "}
                <strong className="text-foreground">Einrichtung</strong> bringt OSCam auf das Gerät und
                macht es startbar. Die <strong className="text-foreground">Konfiguration</strong> legt
                über Textdateien fest, welche Quelle genutzt wird und wie das WebIF erreichbar ist.
                Grundlagen zur Software selbst finden Sie unter{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam Grundlagen
                </Link>
                ; hier bleibt der Fokus durchgehend auf der Dreambox.
              </p>
            </section>

            {/* 2 — models */}
            <section id="modelle" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Welche Dreambox-Modelle eignen sich für OSCam?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                OSCam lässt sich grundsätzlich auf jeder Dreambox mit gepflegtem Enigma2-Image
                betreiben. Die Unterschiede liegen in der Architektur, im Werksimage und in der Frage,
                wie aktuell der im Feed verfügbare Build ist.
              </p>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-background-elevated">
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Dreambox Modell
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Enigma2
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        OSCam-Kontext
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Hinweise
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {dreamboxModelle.map((row, index) => (
                      <tr key={row.modell} className={index % 2 === 0 ? "bg-background" : "bg-background-elevated/40"}>
                        <td className="border-b border-border px-4 py-3 font-medium text-foreground">{row.modell}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.enigma2}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.kontext}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.hinweise}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Verlässliche Kompatibilität lässt sich nur am konkreten Gerät bestätigen: Die
                Kombination aus Architektur, Image und Build entscheidet. Im Feed des jeweils
                installierten Images findet sich aber fast immer eine passende OSCam-Variante.
              </p>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-dreambox-dm520-mini-hd-box-kompakt-design-v11802.webp`}
                  alt="Kompakte Dreambox DM520 mini als Beispiel für die HD-Klasse mit MIPS-Architektur"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 3 — before you install */}
            <section id="vor-der-installation" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Vor der Installation prüfen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Statt sofort Befehle einzugeben, lohnt sich ein kurzer Blick auf neun Punkte. Wer sie
                vorab klärt, verhindert die meisten Fehlstarts:
              </p>
              <div className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border">
                {preflight.map((item) => (
                  <div key={item.punkt} className="grid gap-1 bg-background-elevated/40 p-5 sm:grid-cols-[220px_1fr] sm:gap-4">
                    <span className="text-sm font-semibold text-foreground">{item.punkt}</span>
                    <span className="text-sm leading-relaxed text-muted">{item.detail}</span>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted">
                Das Backup steht bewusst auf der Liste: Die Installation selbst ist unkritisch, aber
                beim Bearbeiten der Konfigurationsdateien genügt ein Tippfehler, damit OSCam nicht mehr
                startet. Wie Sie eine Dreambox darüber hinaus sauber aufsetzen, beschreibt der
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

            {/* 4 — install phases */}
            <section id="installation" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam auf Dreambox installieren – in sechs Phasen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die eigentliche Installation lässt sich in sechs überschaubare Phasen gliedern. Der
                vollständige, markenunabhängige Ablauf mit allen Zwischenschritten steht in der{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  allgemeinen OSCam-Installationsanleitung
                </Link>{" "}
                — hier die auf die Dreambox verdichtete Fassung.
              </p>
              <div className="flex flex-col gap-3">
                {installPhasen.map((p) => (
                  <div key={p.phase} className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                    <h3 className="text-base font-semibold text-foreground">{p.phase}</h3>
                    <p className="text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                ))}
              </div>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-dreambox-dm900-rueckseite-anschluesse-lan-usb-hdmi-tutorial.webp`}
                  alt="Technische Übersicht der Dreambox DM900 UHD Rückseite mit Anschlüssen und einer sechsstufigen OSCam-Installationsanleitung"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 5 — DreamOS vs OpenATV */}
            <section id="dreamos-openatv" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                DreamOS oder OpenATV – der entscheidende Unterschied auf der Dreambox
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Auf keiner anderen Enigma2-Marke ist die Frage nach dem Image so wichtig wie bei der
                Dreambox. Aktuelle Modelle kommen ab Werk mit{" "}
                <strong className="text-foreground">DreamOS</strong>, einem Debian-basierten Enigma2.
                Auf manchen Geräten wird stattdessen ein <strong className="text-foreground">OE-Image</strong>{" "}
                wie OpenATV oder OpenPLi geflasht. Das ändert den gesamten Ablauf im Detail:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                  <h3 className="text-sm font-semibold text-foreground">DreamOS (Werksimage)</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    Dienste laufen über <span className="font-mono text-xs text-foreground">systemctl</span> (start,
                    restart, enable). Pakete kommen über apt bzw. opkg aus dem DreamOS-Feed. Die
                    OSCam-Konfiguration liegt häufig unter{" "}
                    <span className="font-mono text-xs text-foreground">/etc/tuxbox/config/oscam/</span>.
                  </p>
                </div>
                <div className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                  <h3 className="text-sm font-semibold text-foreground">OpenATV / OpenPLi (OE-Image)</h3>
                  <p className="text-sm leading-relaxed text-muted">
                    Verwaltung über den Softcam-Manager und{" "}
                    <span className="font-mono text-xs text-foreground">/etc/init.d/softcam</span>. Pakete über
                    opkg aus dem OE-Feed. Die Konfiguration liegt oft direkt unter{" "}
                    <span className="font-mono text-xs text-foreground">/etc/tuxbox/config/</span>.
                  </p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Bevor Sie irgendetwas installieren, klären Sie also im Systemmenü, welches Image läuft.
                Danach richten sich Paketquelle, Startbefehle und Konfigurationspfad. Ein Build oder
                eine Anleitung für das falsche Image ist eine der häufigsten Ursachen dafür, dass
                OSCam auf der Dreambox nicht startet. Andere Marken behandeln die Seiten zu{" "}
                <Link href="/oscam-vu-plus" className="text-aqua underline underline-offset-4">
                  OSCam auf VU+
                </Link>{" "}
                und{" "}
                <Link href="/oscam-zgemma" className="text-aqua underline underline-offset-4">
                  OSCam auf Zgemma
                </Link>
                .
              </p>
            </section>

            {/* 6 — configuration */}
            <section id="konfiguration" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam auf Dreambox konfigurieren
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nach der Installation weiß OSCam noch nicht, welche Quelle es nutzen soll. Diese
                Angaben stehen in Textdateien im Konfigurationsordner. Vier Dateien genügen für ein
                funktionierendes Setup:
              </p>
              <div className="flex flex-col gap-4">
                {configFiles.map((file) => (
                  <div key={file.name} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated/40 p-5">
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
                  src={`${imgDir}/oscam-dreambox-putty-terminal-ssh-opkg-install-anleitung.webp`}
                  alt="Laptop mit einer Terminalsitzung zur Dreambox, daneben eine DM920 mit laufender OSCam-Anzeige und handschriftliche Notizen zum Konfigurationspfad"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            <CtaBlock
              heading="Mehr über OSCam erfahren"
              text="Einrichtung und Konfiguration sind erledigt? Auf der Startseite finden Sie alle Inhalte rund um OSCam und iCam für Enigma2 gebündelt – von den Grundlagen bis zu weiterführenden Anleitungen und Leistungen."
              primary={{ href: "/", label: "Zur OSCam-Übersicht" }}
              secondary={{ href: "/oscam", label: "OSCam Grundlagen lesen" }}
            />

            {/* 7 — WebIF */}
            <section id="webif" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam WebIF auf Dreambox
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Das WebIF ist die in OSCam eingebaute Weboberfläche für die{" "}
                <strong className="text-foreground">lokale Administration</strong> der eigenen
                Dreambox. Sie erreichen es im Browser über die IP der Box und den in{" "}
                <span className="font-mono text-sm text-foreground">oscam.conf</span> gesetzten Port,
                zum Beispiel{" "}
                <span className="font-mono text-sm text-foreground">http://&lt;dreambox-ip&gt;:8888</span>.
              </p>
              <p className="text-base leading-relaxed text-muted">Damit prüfen Sie im Alltag:</p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">Läuft OSCam?</strong> Die Statuszeile zeigt „online“
                  bzw. „running“ samt Version und Laufzeit.
                </li>
                <li>
                  <strong className="text-foreground">Status im Detail:</strong> Reader-Zustand, verbundene
                  Zugänge, Anfragen und Fehlerzähler auf einen Blick.
                </li>
                <li>
                  <strong className="text-foreground">Konfigurationsprobleme erkennen:</strong> Bleibt ein
                  Reader auf „off“, stimmt in oscam.server etwas nicht. Fehlt ein Benutzer, liegt es an
                  oscam.user oder oscam.dvbapi.
                </li>
                <li>
                  <strong className="text-foreground">Geladene Dateien:</strong> Der Bereich „Files“ zeigt,
                  welche Konfigurationsdateien mit welchem Pfad aktiv sind.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Lässt sich das WebIF nicht öffnen, prüfen Sie den{" "}
                <span className="font-mono text-sm text-foreground">httpport</span>, ob ein anderer
                Dienst diesen Port belegt und ob{" "}
                <span className="font-mono text-sm text-foreground">httpallowed</span> Ihr lokales Netz
                einschließt. Zur Sicherheit: das WebIF nicht ohne Grund ins Internet öffnen, ein
                eigenes Konto mit sicherem Passwort vergeben und den Zugriff aufs Heimnetz beschränken.
              </p>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-dreambox-webif-status-online-wohnzimmer-setup-2024.webp`}
                  alt="Fernseher im Wohnzimmer zeigt die OSCam WebIF Statusseite mit einem Server im Zustand online und mehreren aktiven Readern"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 8 — diagnostic-first troubleshooting */}
            <section id="diagnose" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Diagnose zuerst: OSCam-Probleme auf der Dreambox eingrenzen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Statt wahllos Einstellungen zu ändern, arbeiten Sie die Kette von der Hardware bis zur
                Version ab. Nach jeder Stufe wissen Sie besser, wo das Problem <em>nicht</em> liegt.
              </p>
              <div className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border">
                {diagnoseSchritte.map((s) => (
                  <div key={s.titel} className="flex flex-col gap-1 bg-background-elevated/40 p-5">
                    <h3 className="text-sm font-semibold text-foreground">{s.titel}</h3>
                    <p className="text-sm leading-relaxed text-muted">{s.body}</p>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted">
                Hat die Diagnose die grobe Richtung ergeben, hilft diese Matrix beim nächsten Schritt:
              </p>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-background-elevated">
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Problem
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Wahrscheinliche Ursache
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Was prüfen?
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Nächster Schritt
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fehlerMatrix.map((row, index) => (
                      <tr key={row.problem} className={index % 2 === 0 ? "bg-background" : "bg-background-elevated/40"}>
                        <td className="border-b border-border px-4 py-3 font-medium text-foreground">{row.problem}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.ursache}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.pruefen}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.schritt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
              heading="OSCam Service für Dreambox"
              text="Wenn die Diagnose keine klare Ursache liefert, muss das kein Dauerzustand sein. Auf der Service-Seite steht, wie wir bei der technischen Einrichtung und der Fehleranalyse rund um OSCam auf Dreambox und Enigma2 unterstützen."
              primary={{ href: "/oscam-service", label: "OSCam Service ansehen" }}
              secondary={{ href: "/oscam-installieren", label: "Zur Installationsanleitung" }}
            />

            {/* 9 — checklist */}
            <section id="checkliste" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Dreambox OSCam Checkliste
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Zwei kurze Listen — eine vor, eine nach der Installation:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated/40 p-6">
                  <h3 className="text-base font-semibold text-foreground">Vor der Installation</h3>
                  <ul className="flex flex-col gap-2">
                    {checklisteVor.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated/40 p-6">
                  <h3 className="text-base font-semibold text-foreground">Nach der Installation</h3>
                  <ul className="flex flex-col gap-2">
                    {checklisteNach.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                        <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 10 — update */}
            <section id="update" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam auf Dreambox aktualisieren
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Ein Update ist sinnvoll, wenn eine neue Version Fehler behebt oder besser zu einem
                aktualisierten Image passt — zwingend ist es nicht. Wichtig ist ein geordnetes
                Vorgehen:
              </p>
              <ol className="flex flex-col gap-3">
                {[
                  "Zuerst ein vollständiges Image-Backup der Dreambox und eine Kopie des Konfigurationsordners anlegen.",
                  "Die aktuell installierte OSCam-Version notieren (WebIF-Status oder Versionsabfrage).",
                  "Die Kompatibilität der neuen Version mit Image und Architektur prüfen.",
                  "Die Konfiguration bleibt beim Update über den Feed in der Regel erhalten — trotzdem vorher sichern.",
                  "Update über den Paketmanager durchführen und die Dreambox bzw. den Dienst neu starten.",
                  "Im WebIF die neue Versionsnummer bestätigen, einen Sender testen, das Log auf neue Warnungen prüfen.",
                  "Funktioniert der neue Build nicht, die gesicherte Version und Konfiguration zurückspielen.",
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
                Einen ausführlichen Ablauf mit Sicherung und Rückweg beschreibt der Blogartikel{" "}
                <Link href="/blog/oscam-updates-durchfuehren" className="text-aqua underline underline-offset-4">
                  OSCam Updates sicher durchführen
                </Link>
                .
              </p>
            </section>

            {/* 11 — OSCam vs iCam */}
            <section id="oscam-icam" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam und iCam auf Dreambox – was ist der Unterschied?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Beide sind Softcam-Lösungen für Enigma2 mit derselben Grundaufgabe. OSCam ist
                umfangreicher konfigurierbar, breit dokumentiert und in fast jedem Image im Feed —
                meist die zentrale Instanz. iCam tritt schlanker auf und deckt oft einen bestimmten
                Protokollpfad ab; in vielen Konfigurationen reicht es Anfragen an OSCam weiter, statt
                es zu ersetzen.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Für die Einrichtung auf einer Dreambox ist OSCam der Ausgangspunkt. Wie{" "}
                <Link href="/icam" className="text-aqua underline underline-offset-4">
                  iCam im Enigma2-Umfeld
                </Link>{" "}
                einzuordnen ist, steht auf der eigenen Seite dazu und im Blogartikel{" "}
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

            <CtaBlock
              heading="OSCam für Dreambox – so geht es weiter"
              text="Auf der Startseite finden Sie den vollständigen Überblick zu OSCam und iCam für Enigma2. Wenn Sie konkrete Unterstützung für Ihre Dreambox möchten, führt die Service-Seite die Möglichkeiten auf."
              primary={{ href: "/", label: "Zur OSCam-Übersicht" }}
              secondary={{ href: "/oscam-service", label: "OSCam Service ansehen" }}
            />

            {/* FAQ */}
            <section
              id="faq"
              className="flex scroll-mt-24 flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7"
            >
              <h2 className="text-xl font-semibold text-foreground">
                Häufig gestellte Fragen zu OSCam auf Dreambox
              </h2>
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

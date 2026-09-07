import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";

const imgDir = "/images/home page/oscam-zgemma";
const ogImage = `${imgDir}/oscam-zgemma-h9-twin-4k-uhd-box-front-display-oscam-installation-anleitung-2027.webp`;

export const metadata: Metadata = {
  title: "OSCam Zgemma – Installation, Einrichtung & Fehlerbehebung",
  description:
    "OSCam Zgemma verständlich erklärt: Kompatibilität prüfen, Installation in Phasen, Konfiguration, WebIF-Kontrolle und ein Diagnose-Ablauf für typische OSCam-Probleme auf Zgemma Enigma2 Receivern.",
  keywords: [
    "OSCam Zgemma",
    "OSCam auf Zgemma",
    "OSCam Zgemma installieren",
    "OSCam Zgemma einrichten",
    "OSCam Zgemma Konfiguration",
    "OSCam Zgemma Enigma2",
    "OSCam Zgemma WebIF",
    "OSCam Zgemma Fehler",
    "OSCam Zgemma Update",
    "Zgemma OSCam",
    "Zgemma Softcam",
    "OSCam H9 Twin",
    "OSCam H9S",
  ],
  alternates: {
    canonical: "/oscam-zgemma",
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: "/oscam-zgemma",
    title: "OSCam Zgemma – Installation, Einrichtung & Fehlerbehebung",
    description:
      "OSCam auf Zgemma: Kompatibilität, Installation in Phasen, Konfiguration, WebIF und eine diagnosebasierte Fehlersuche für Enigma2.",
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
    title: "OSCam Zgemma – Installation, Einrichtung & Fehlerbehebung",
    description:
      "OSCam auf Zgemma installieren, konfigurieren und Probleme diagnosebasiert lösen – für Enigma2.",
  },
};

const journeyChain = [
  "Zgemma-Receiver",
  "Enigma2-Umgebung",
  "OSCam-Kompatibilität",
  "Installation",
  "Konfiguration",
  "Statuskontrolle",
  "Fehlersuche",
  "Wartung",
];

const pageNav = [
  { href: "#schnelluebersicht", label: "Schnellüberblick" },
  { href: "#modelle", label: "Zgemma-Modelle" },
  { href: "#vorbereitet", label: "Ist mein Zgemma bereit?" },
  { href: "#installation", label: "Installation in 7 Phasen" },
  { href: "#konfiguration", label: "Konfiguration" },
  { href: "#dateipfade", label: "Wo liegen die Dateien?" },
  { href: "#webif", label: "WebIF prüfen" },
  { href: "#diagnose", label: "Diagnose-Ablauf" },
  { href: "#matrix", label: "Fehlermatrix" },
  { href: "#systematisch", label: "Systematisch vorgehen" },
  { href: "#wartung", label: "Sichern & Warten" },
  { href: "#update", label: "Update" },
  { href: "#enigma2", label: "Warum Enigma2 zählt" },
  { href: "#oscam-icam", label: "OSCam & iCam" },
  { href: "#service", label: "OSCam Service" },
  { href: "#faq", label: "FAQ" },
];

const schnellueberblick = [
  { thema: "Receiver", wichtig: "Genaues Zgemma-Modell und Tuner-Ausstattung feststellen (z. B. H9S, H9 Twin, H7)." },
  { thema: "System", wichtig: "Welches Enigma2-Image ist installiert (OpenATV, OpenPLi, OpenBH) und in welcher Version?" },
  { thema: "Installation", wichtig: "Nur einen OSCam-Build verwenden, der zu Image und Architektur der Box passt." },
  { thema: "Konfiguration", wichtig: "oscam.conf, oscam.server und oscam.user prüfen — und wissen, in welchem Ordner sie liegen." },
  { thema: "Kontrolle", wichtig: "Nach der Installation Status im Softcam-Menü und im WebIF bestätigen, nicht nur ein Bild abwarten." },
  { thema: "Fehler", wichtig: "Von der Hardware zur Version durchprüfen, statt wahllos Einstellungen zu ändern." },
  { thema: "Updates", wichtig: "Vorher Backup und Konfiguration sichern, Kompatibilität der neuen Version klären." },
];

const zgemmaModelle = [
  {
    modell: "Zgemma H9S / H9S SE",
    umgebung: "OE-Image (OpenATV, OpenPLi u. a.), ARM",
    kontext: "4K, Single-Tuner. OSCam über den Feed des installierten Images.",
    hinweis: "Kompakte Hardware — eine schlanke Konfiguration mit wenigen Readern läuft am zuverlässigsten.",
  },
  {
    modell: "Zgemma H9 Twin / H9 Twin SE",
    umgebung: "OE-Image, ARM",
    kontext: "4K, zwei Sat-Tuner. Genug Reserve für parallele Reader und gleichzeitige Aufnahmen.",
    hinweis: "Für Mehr-Raum-Setups im Haushalt die gängigste Zgemma-Wahl.",
  },
  {
    modell: "Zgemma H9 Combo / H9.2H",
    umgebung: "OE-Image, ARM",
    kontext: "4K, Kombi-Tuner (Sat plus Kabel oder DVB-T2). OSCam-Ablauf identisch zu den anderen H9-Modellen.",
    hinweis: "Der zusätzliche Tuner ändert an OSCam nichts, nur an der Sendersuche.",
  },
  {
    modell: "Zgemma H7 / H7S / H7C",
    umgebung: "OE-Image, ARM",
    kontext: "Ältere 4K-Generation. OSCam über den Feed verfügbar.",
    hinweis: "Je nach Pflege des Images kann der verfügbare OSCam-Build älter ausfallen.",
  },
  {
    modell: "Zgemma H2S / H2H",
    umgebung: "OE-Image, MIPS",
    kontext: "HD-Einstiegsklasse mit knapper Ausstattung.",
    hinweis: "Besonders sparsam konfigurieren: wenige Reader, moderates Log-Level, keine Zusatzdienste.",
  },
];

const preflight = [
  {
    punkt: "Genaues Modell",
    detail: "Die Modellbezeichnung steht auf dem Typenschild und im Systemmenü. H9S, H9 Twin, H7 und H2 unterscheiden sich in Architektur und Reserve.",
  },
  {
    punkt: "Enigma2-Version",
    detail: "Im Menü unter „Über“ bzw. „System“ nachsehen. Eine sehr alte Version bringt oft keine gepflegten Feeds mehr mit.",
  },
  {
    punkt: "Installiertes Image",
    detail: "OpenATV, OpenPLi oder OpenBH? Das Image bestimmt Feed, Menüführung und Konfigurationspfad.",
  },
  {
    punkt: "Architektur",
    detail: "H7 und H9 sind ARM, ältere H2-Modelle MIPS. Ein OSCam-Build für die falsche Architektur startet nicht.",
  },
  {
    punkt: "Freier Speicher",
    detail: "Für Paket, Abhängigkeiten und Logs sollte im Flash oder auf einem USB-Datenträger etwas Platz frei sein.",
  },
  {
    punkt: "Netzwerkverbindung",
    detail: "LAN bevorzugt. IP-Adresse der Zgemma notieren, Verbindung ins Internet und die Systemzeit prüfen.",
  },
  {
    punkt: "Zugriff auf die Box",
    detail: "Fernbedienung für die Installation, zusätzlich FTP/SFTP oder SSH für Konfiguration und Logkontrolle.",
  },
  {
    punkt: "Konfigurations-Backup",
    detail: "Falls schon eine OSCam-Konfiguration existiert: den ganzen Ordner kopieren, bevor etwas geändert wird.",
  },
];

const installPhasen = [
  {
    phase: "Phase 1 – Receiver vorbereiten",
    body: "Zgemma einschalten, IP-Adresse notieren, ein vollständiges Image-Backup anlegen. Klären, ob die Installation über das Bordmenü oder über SSH erfolgen soll.",
  },
  {
    phase: "Phase 2 – System und Image prüfen",
    body: "Modell, Architektur (ARM oder MIPS) und installiertes Image samt Version bestimmen. Diese drei Angaben entscheiden über den passenden OSCam-Build.",
  },
  {
    phase: "Phase 3 – Passende OSCam-Version auswählen",
    body: "Aus dem offiziellen Feed des installierten Images. Nur wenn OSCam dort fehlt, kommt eine IPK-Datei in Frage — passend zu Image und Architektur.",
  },
  {
    phase: "Phase 4 – Installation durchführen",
    body: "Über den Plugin- bzw. Softwaremanager des Images oder per opkg über die Kommandozeile. Abhängigkeiten wie SSL-Bibliotheken werden in der Regel automatisch mitgezogen.",
  },
  {
    phase: "Phase 5 – Receiver oder GUI neu starten",
    body: "Einen GUI-Restart oder einen vollständigen Neustart durchführen, damit das Softcam-Menü das neue Paket erkennt.",
  },
  {
    phase: "Phase 6 – OSCam aktivieren",
    body: "Im Softcam-Manager OSCam als aktives Softcam auswählen und den Autostart setzen, damit der Dienst nach jedem Neustart mitläuft.",
  },
  {
    phase: "Phase 7 – Installation kontrollieren",
    body: "Im Softcam-Menü den Status prüfen und das WebIF im Browser öffnen. Zeigt die Statusseite Version und laufenden Dienst, ist die Installation abgeschlossen.",
  },
];

const configFiles = [
  {
    name: "oscam.conf",
    role: "Grundeinstellungen und Dienste",
    body: "Steuert Logging, das WebIF (Port, Benutzer, erlaubte Netze) und die DVBAPI-Anbindung, über die die Zgemma ihre Anfragen an OSCam schickt. Ohne gültige oscam.conf startet der Dienst nicht.",
  },
  {
    name: "oscam.server",
    role: "Reader und Verbindungen",
    body: "Beschreibt jede Signalquelle als eigenen Reader — einen lokal an der Zgemma angeschlossenen Kartenleser, ein CI+-Modul oder eine eigene Netzwerkverbindung — mit Name, Typ und den dokumentierten Parametern.",
  },
  {
    name: "oscam.user",
    role: "Zugänge und Berechtigungen",
    body: "Legt die Zugänge innerhalb der eigenen Installation fest und ordnet ihnen Reader zu. Für eine einzelne Zgemma genügt meist ein Eintrag, zum Beispiel example-user mit example-password.",
  },
  {
    name: "oscam.dvbapi",
    role: "Priorisierung der Anfragen",
    body: "Optional. Steuert, welcher Reader für welchen Sender bevorzugt (P), verzögert (D) oder ignoriert (I) wird — relevant, sobald mehrere Reader dieselbe Anfrage beantworten könnten.",
  },
];

const diagnoseTree = [
  {
    frage: "Schritt 1: Läuft der Receiver normal?",
    body: "Bootet die Zgemma sauber durch, kommt ein Bild, zeigt das Front-Display keine Fehlermeldung? Ist genug Speicher frei?",
    ja: "Weiter zu Schritt 2.",
    nein: "Zuerst Hardware, Speicher und Image prüfen. Ein voller Flash oder ein instabiles Image macht jede OSCam-Fehlersuche sinnlos.",
  },
  {
    frage: "Schritt 2: Ist das Netzwerk erreichbar?",
    body: "Antwortet die Zgemma auf einen Ping? Stimmen IP, Gateway und DNS? Geht die Systemzeit richtig?",
    ja: "Weiter zu Schritt 3.",
    nein: "Netzwerkmenü korrigieren, Zeitserver hinterlegen, neu starten. OSCam braucht Netz und korrekte Uhrzeit.",
  },
  {
    frage: "Schritt 3: Läuft OSCam?",
    body: "Zeigt das Softcam-Menü OSCam als aktiv? Bleibt der Dienst nach dem Start stehen? Ist der Autostart gesetzt?",
    ja: "Weiter zu Schritt 4.",
    nein: "Log direkt nach dem Startversuch öffnen, mit minimaler oscam.conf ohne Reader starten und schrittweise erweitern.",
  },
  {
    frage: "Schritt 4: Ist das WebIF erreichbar?",
    body: "Öffnet sich das WebIF unter IP und Port? Funktioniert der Login? Lädt die Statusseite vollständig?",
    ja: "Weiter zu Schritt 5.",
    nein: "httpport, belegte Ports und httpallowed in oscam.conf prüfen. Danach Dienst neu starten und Adresse erneut aufrufen.",
  },
  {
    frage: "Schritt 5: Werden Konfigurationsdateien gefunden?",
    body: "Zeigt das WebIF unter „Files“ die erwarteten Dateien mit korrektem Pfad? Oder legt OSCam neue Standarddateien an?",
    ja: "Weiter zu Schritt 6.",
    nein: "Den mit -c übergebenen Ordner mit dem tatsächlichen Speicherort abgleichen und die Dateien an die richtige Stelle bringen.",
  },
  {
    frage: "Schritt 6: Gibt es Konfigurationsfehler?",
    body: "Bleibt ein Reader auf „off“? Fehlt ein Benutzer? Meldet das Log einen Syntaxfehler in einer bestimmten Zeile?",
    ja: "Die betreffende Datei gezielt korrigieren — oscam.server für Reader, oscam.user für Zugänge, oscam.dvbapi für die Priorisierung.",
    nein: "Weiter zu Schritt 7.",
  },
  {
    frage: "Schritt 7: Ist die OSCam-Version kompatibel?",
    body: "Passt der installierte Build zu Image und Architektur (ARM/MIPS)? Ist er über ein Image-Update eventuell unpassend geworden?",
    ja: "Wenn bis hier alles stimmt, liegt ein tieferes Problem vor. Log mit erhöhtem Level auswerten oder Unterstützung hinzuziehen.",
    nein: "Den zum aktuellen Image passenden Build aus dem offiziellen Feed neu installieren, den alten vorher entfernen.",
  },
];

const fehlerMatrix = [
  {
    problem: "OSCam startet nicht",
    ursache: "Syntaxfehler in oscam.conf oder ein belegter Port",
    pruefung: "Log direkt nach dem Start, oscam.conf Zeile für Zeile",
    loesung: "Fehlerhaften Eintrag entfernen, mit minimaler Konfiguration starten, schrittweise erweitern",
  },
  {
    problem: "OSCam startet nach Neustart nicht",
    ursache: "Autostart nicht gesetzt oder ein zweites Softcam übernimmt",
    pruefung: "Softcam-Menü: aktives Softcam und Autostart-Eintrag",
    loesung: "OSCam als Autostart-Softcam festlegen, konkurrierende Softcams deaktivieren",
  },
  {
    problem: "WebIF nicht erreichbar",
    ursache: "httpport fehlt oder httpallowed schließt den eigenen Rechner aus",
    pruefung: "WebIF-Abschnitt in oscam.conf: Port, Benutzer, erlaubte Netze",
    loesung: "Freien Port setzen, eigenes Subnetz freigeben, Dienst neu starten",
  },
  {
    problem: "Konfigurationsdateien fehlen",
    ursache: "Falscher Ordner, oder OSCam legt neue Standarddateien an",
    pruefung: "Startparameter -c bzw. Pfad im WebIF unter „Files“",
    loesung: "Dateien in den erwarteten Ordner verschieben oder den Startparameter anpassen",
  },
  {
    problem: "Falscher Konfigurationspfad",
    ursache: "Mehrere Kopien einer Datei in verschiedenen Ordnern",
    pruefung: "Alle Vorkommen von oscam.server auf der Zgemma auflisten",
    loesung: "Überzählige Kopien löschen, nur einen Ordner pflegen",
  },
  {
    problem: "Inkompatible Version",
    ursache: "Build für andere Architektur oder anderes Image",
    pruefung: "Image, Architektur und Build-Bezeichnung vergleichen",
    loesung: "Passenden Build aus dem richtigen Feed installieren, alten vorher entfernen",
  },
  {
    problem: "Netzwerkproblem",
    ursache: "Falsches Gateway oder DNS, abweichende Systemzeit",
    pruefung: "Netzwerkmenü, Systemzeit, hinterlegter Zeitserver",
    loesung: "Netzwerkdaten korrigieren, Zeit synchronisieren, Zgemma neu starten",
  },
  {
    problem: "Berechtigungsproblem",
    ursache: "Dateien per FTP mit falschen Rechten oder falschem Eigentümer übertragen",
    pruefung: "Rechte und Eigentümer im Konfigurationsordner",
    loesung: "Rechte auf einen üblichen Wert (z. B. 644) setzen, Eigentümer korrigieren, neu starten",
  },
  {
    problem: "Konfigurationsfehler",
    ursache: "Vergessene Abschnittsüberschrift oder Klammer, Tippfehler",
    pruefung: "Die zuletzt geänderte Datei",
    loesung: "Backup zurückspielen, Änderungen einzeln wiederholen, jeweils testen",
  },
  {
    problem: "OSCam beendet sich unerwartet",
    ursache: "Zu knapper Speicher, ein defekter Reader-Eintrag oder ein instabiler Build",
    pruefung: "Freien RAM/Flash prüfen, Log auf wiederkehrende Abbrüche, Reader einzeln deaktivieren",
    loesung: "Konfiguration verschlanken, defekten Reader entfernen, auf einen stabilen Build wechseln",
  },
  {
    problem: "Probleme nach einem Image-Update",
    ursache: "Der bisherige OSCam-Build passt nicht mehr zur neuen Image-Version",
    pruefung: "OSCam-Version gegen die neue Image-/Feed-Version abgleichen",
    loesung: "OSCam aus dem aktuellen Feed neu installieren, Konfiguration aus dem Backup übernehmen",
  },
  {
    problem: "Probleme nach einem OSCam-Update",
    ursache: "Neuer Build inkompatibel oder geänderte Konfigurationsoptionen",
    pruefung: "OSCam-Version im WebIF, Log auf neue Warnungen",
    loesung: "Gesicherte Version und Konfiguration zurückspielen, Update später erneut versuchen",
  },
];

const systematisch = [
  "Immer nur eine Sache pro Durchgang ändern — sonst ist die eigentliche Ursache nicht mehr zuzuordnen.",
  "Vor jeder Änderung ein Backup des Konfigurationsordners anlegen.",
  "Notieren, was geändert wurde: Datei, Zeile, alter und neuer Wert.",
  "Nach jeder Änderung den Dienst neu starten und den Status prüfen.",
  "Log und WebIF-Status auswerten, statt zu raten — die erste Fehlermeldung zählt.",
  "Keine fremden, unbekannten Konfigurationsdateien übernehmen — sie passen selten und verschleiern die Ursache.",
];

const wartung = [
  {
    titel: "Konfiguration sichern",
    body: "Nach jeder funktionierenden Änderung den gesamten Konfigurationsordner mit oscam.conf, oscam.server, oscam.user und oscam.dvbapi kopieren — datiert, damit ältere Stände erhalten bleiben.",
  },
  {
    titel: "Receiver-Einstellungen sichern",
    body: "Zusätzlich zum OSCam-Ordner ein vollständiges Image-Backup der Zgemma anlegen. So ist im Ernstfall auch das Enigma2-System schnell wiederhergestellt.",
  },
  {
    titel: "Softwarestand festhalten",
    body: "Image-Name, Image-Version und OSCam-Build-Nummer notieren. Diese drei Angaben braucht man bei jeder späteren Fehlersuche und vor jedem Update.",
  },
  {
    titel: "Updates vorbereiten",
    body: "Vor einem OSCam- oder Image-Update Backup und Notizen aktualisieren und die Kompatibilität der neuen Version prüfen, bevor sie installiert wird.",
  },
  {
    titel: "Rückweg einplanen",
    body: "Immer wissen, wie der letzte funktionierende Stand wiederhergestellt wird — gesicherte Konfiguration zurückkopieren, gegebenenfalls den vorherigen OSCam-Build erneut installieren.",
  },
];

const faqItems = [
  {
    question: "Was ist OSCam auf Zgemma?",
    answer:
      "OSCam ist eine quelloffene Softcam-Software, die auf dem Linux-System der Zgemma unter Enigma2 als Hintergrunddienst läuft. Sie vermittelt zwischen dem Receiver und einer rechtmäßig erworbenen Zugangsberechtigung, damit verschlüsselte Sender dargestellt werden können. Verwaltet wird OSCam über den Softcam-Manager des installierten Images.",
  },
  {
    question: "Welche Zgemma Receiver sind für OSCam geeignet?",
    answer:
      "Grundsätzlich alle Zgemma-Modelle mit einem gepflegten Enigma2-Image — von der HD-Einstiegsklasse (H2S, H2H) über die 4K-Modelle H7 bis zur H9-Reihe (H9S, H9 Twin, H9 Combo). Ob eine bestimmte OSCam-Version läuft, hängt von Hardware, Architektur (ARM oder MIPS), Image und dem im Feed verfügbaren Build ab.",
  },
  {
    question: "Wie installiert man OSCam auf Zgemma?",
    answer:
      "In sieben Phasen: Receiver vorbereiten (Backup, IP notieren), System und Image prüfen, passende OSCam-Version wählen, Installation über den Softwaremanager oder opkg durchführen, Receiver neu starten, OSCam als aktives Softcam mit Autostart setzen und die Installation im WebIF kontrollieren. Der allgemeine Ablauf steht in der ausführlichen OSCam-Installationsanleitung.",
  },
  {
    question: "Welche Voraussetzungen gibt es?",
    answer:
      "Eine Zgemma mit gepflegtem Enigma2-Image, eine stabile Netzwerkverbindung, etwas freier Speicher, Zugriff über Fernbedienung und optional SSH oder FTP, ein aktuelles Backup und ein OSCam-Build, der zur Architektur und zum Image passt.",
  },
  {
    question: "Welche Enigma2-Version ist relevant?",
    answer:
      "Wichtig ist weniger eine bestimmte Versionsnummer als ein aktiv gepflegtes Image (zum Beispiel OpenATV oder OpenPLi) mit funktionierendem Feed. Eine sehr alte Image-Version bringt oft keine aktuelle OSCam-Variante mehr mit.",
  },
  {
    question: "Wo liegen die OSCam Konfigurationsdateien auf Zgemma?",
    answer:
      "Häufig unter /etc/tuxbox/config/ oder /etc/tuxbox/config/oscam/. Je nach Image, Paket und Installationsmethode kann der Pfad abweichen. Den tatsächlich genutzten Ordner zeigt das WebIF unter „Files“ oder der Startparameter -c des Dienstes.",
  },
  {
    question: "Was ist das OSCam WebIF?",
    answer:
      "Das WebIF ist die in OSCam eingebaute Weboberfläche. Sie erreichen es im Browser über die IP-Adresse der Zgemma und den in oscam.conf gesetzten Port. Es zeigt Status, aktive Kanäle, den Zustand der Reader und die Logs und ist das wichtigste Werkzeug zur lokalen Kontrolle.",
  },
  {
    question: "Warum startet OSCam auf Zgemma nicht?",
    answer:
      "Meist wegen eines Syntaxfehlers in oscam.conf, eines belegten Ports, eines Readers, der auf ein nicht vorhandenes Gerät zeigt, oder eines Builds, der nicht zur Architektur bzw. zum Image passt. Bei knappen Modellen kommt zu wenig freier Speicher als Ursache hinzu. Die erste Zeile im Log nach dem Startversuch nennt in der Regel die Ursache.",
  },
  {
    question: "Warum ist das WebIF auf der Zgemma nicht erreichbar?",
    answer:
      "Häufige Gründe sind ein nicht gesetzter oder blockierter httpport in oscam.conf, ein von einem anderen Dienst belegter Port oder ein zu eng gesetztes httpallowed, das den eigenen Rechner aussperrt. Nach einer Korrektur den Dienst neu starten und die Adresse mit Port erneut aufrufen.",
  },
  {
    question: "Was sollte man vor einem OSCam Update sichern?",
    answer:
      "Ein vollständiges Image-Backup und eine Kopie des gesamten Konfigurationsordners mit oscam.conf, oscam.server, oscam.user und gegebenenfalls oscam.dvbapi. Zusätzlich Image-Version und die aktuell laufende OSCam-Build-Nummer notieren.",
  },
  {
    question: "Was ist der Unterschied zwischen OSCam und iCam?",
    answer:
      "Beide sind Softcam-Lösungen für Enigma2. OSCam ist umfangreicher konfigurierbar und breit dokumentiert und bildet meist die zentrale Instanz. iCam tritt schlanker auf und deckt oft einen bestimmten Protokollpfad ab. In vielen Setups laufen beide zusammen; mehr dazu auf der Seite zu iCam.",
  },
  {
    question: "Was kann man tun, wenn OSCam nach einem Neustart nicht läuft?",
    answer:
      "Im Softcam-Menü prüfen, ob OSCam als Autostart-Softcam eingetragen ist und ob nur ein Softcam aktiv ist. Dann OSCam als aktives Autostart-Softcam festlegen, konkurrierende Softcams deaktivieren und die Zgemma einmal vollständig neu starten.",
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

export default function OscamZgemmaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Breadcrumbs items={[{ label: "Startseite", href: "/" }, { label: "OSCam Zgemma", href: "/oscam-zgemma" }]} />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Zgemma & OSCam"
            title="OSCam auf Zgemma – Einrichtung, Konfiguration und Fehlerbehebung"
            description="Ein Leitfaden entlang des Zgemma-Nutzerwegs: Ist mein Receiver geeignet, was muss ich vorher prüfen, wie läuft die Installation, was ändert sich danach, wie erkenne ich, dass OSCam wirklich arbeitet — und was tun, wenn nicht."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-12">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                Wer nach <strong className="text-foreground">OSCam Zgemma</strong> sucht, hat meist
                eine konkrete Ausgangslage: eine preiswerte Zgemma-Box mit Enigma2, eine eigene,
                rechtmäßig erworbene Zugangsberechtigung — und die Frage, wie beides zusammenkommt.
                Zgemma-Receiver werden fast nie mit einem Herstellerimage betrieben, sondern mit einem
                selbst gewählten Enigma2-Image wie OpenATV oder OpenPLi. Deshalb hängt bei Zgemma
                besonders viel davon ab, welche Software-Umgebung auf der Box läuft.
              </p>
              <p>
                Enigma2 selbst entschlüsselt nichts; es reicht die Anfrage eines verschlüsselten
                Senders nur weiter. OSCam ist die Softcam, die diese Anfrage beantwortet. Damit das
                funktioniert, müssen <strong className="text-foreground">Installation</strong> (OSCam
                auf die Box bringen) und <strong className="text-foreground">Konfiguration</strong>{" "}
                (OSCam sagen, was es tun soll) sauber getrennt betrachtet werden. Diese Seite führt
                Schritt für Schritt durch beides und legt den Schwerpunkt auf die Kontrolle und die
                strukturierte Fehlersuche. Grundlagen zur Software stehen unter{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam Grundlagen
                </Link>
                .
              </p>
              <div className="w-full overflow-x-auto">
                <ol className="flex min-w-max items-center gap-2 text-xs font-medium">
                  {journeyChain.map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="rounded-lg border border-border bg-background-elevated px-3 py-2 text-foreground">
                        {step}
                      </span>
                      {index < journeyChain.length - 1 ? (
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
                alt="Zgemma H9 Twin 4K-UHD Receiver, dessen Front-Display OSCam im Status „active“ mit erkannter Karte anzeigt"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            {/* 1 — quick overview */}
            <section id="schnelluebersicht" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam auf Zgemma: Schnellüberblick
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die sieben Themen, um die es bei OSCam auf einer Zgemma geht — und worauf es jeweils
                ankommt:
              </p>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-background-elevated">
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Thema
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Was ist wichtig?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {schnellueberblick.map((row, index) => (
                      <tr key={row.thema} className={index % 2 === 0 ? "bg-background" : "bg-background-elevated/40"}>
                        <td className="border-b border-border px-4 py-3 font-medium text-foreground">{row.thema}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.wichtig}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 2 — models */}
            <section id="modelle" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Zgemma-Modelle im Überblick
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Zgemma-Geräte sind reine Enigma2-Boxen ohne festes Herstellerimage. Die Modelle
                unterscheiden sich vor allem in Tuner-Ausstattung, Architektur und verfügbarer
                Reserve.
              </p>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-background-elevated">
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Zgemma Modell
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Enigma2-Umgebung
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        OSCam-Kontext
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Hinweis
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {zgemmaModelle.map((row, index) => (
                      <tr key={row.modell} className={index % 2 === 0 ? "bg-background" : "bg-background-elevated/40"}>
                        <td className="border-b border-border px-4 py-3 font-medium text-foreground">{row.modell}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.umgebung}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.kontext}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.hinweis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Diese Einordnung ist eine Orientierung, keine Kompatibilitätsgarantie: Ob ein
                konkreter OSCam-Build läuft, entscheidet die Kombination aus Hardware, Architektur,
                installiertem Image und Feed-Version. Verlässlich lässt sich das nur am jeweiligen
                Gerät bestätigen.
              </p>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-zgemma-h9s-se-4k-linux-android-single-tuner-box-kompakt.webp`}
                  alt="Kompakter Zgemma H9S SE 4K-Receiver mit zwei WLAN-Antennen als Beispiel für ein Single-Tuner-Modell"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 3 — is my zgemma ready */}
            <section id="vorbereitet" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Ist mein Zgemma für OSCam vorbereitet?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Bevor Sie irgendetwas installieren, lohnt sich eine kurze Bestandsaufnahme. Wer diese
                acht Punkte vorab klärt, spart sich die meisten Fehlstarts:
              </p>
              <div className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border">
                {preflight.map((item) => (
                  <div key={item.punkt} className="grid gap-1 bg-background-elevated/40 p-5 sm:grid-cols-[190px_1fr] sm:gap-4">
                    <span className="text-sm font-semibold text-foreground">{item.punkt}</span>
                    <span className="text-sm leading-relaxed text-muted">{item.detail}</span>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted">
                Das Backup steht bewusst auf der Liste: Die Installation selbst ist unkritisch, aber
                beim Bearbeiten der Konfigurationsdateien genügt ein Tippfehler, damit OSCam nicht mehr
                startet. Wie Sie eine Enigma2-Box grundsätzlich sauber aufsetzen, beschreibt der
                Blogartikel{" "}
                <Link
                  href="/blog/enigma2-receiver-oscam-vorbereiten"
                  className="text-aqua underline underline-offset-4"
                >
                  Enigma2-Receiver für OSCam vorbereiten
                </Link>
                .
              </p>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-zgemma-h9-twin-se-unboxing-zubehoer-quick-start-guide.webp`}
                  alt="Ausgepackter Zgemma H9 Twin SE mit Fernbedienung, Netzteil, HDMI-Kabel und Schnellstartanleitung auf einem Holztisch"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 4 — install phases */}
            <section id="installation" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam auf Zgemma installieren – in sieben Phasen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die Installation lässt sich in sieben klar abgrenzbare Phasen gliedern. Der
                vollständige, markenunabhängige Ablauf steht in der{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  ausführlichen OSCam-Installationsanleitung
                </Link>{" "}
                — hier die auf Zgemma verdichtete Fassung.
              </p>
              <div className="flex flex-col gap-3">
                {installPhasen.map((p) => (
                  <div key={p.phase} className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                    <h3 className="text-base font-semibold text-foreground">{p.phase}</h3>
                    <p className="text-sm leading-relaxed text-muted">{p.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 5 — configuration */}
            <section id="konfiguration" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam Zgemma konfigurieren
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
            </section>

            {/* 6 — file paths */}
            <section id="dateipfade" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Wo liegen die OSCam-Dateien auf Zgemma?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Es gibt keinen Pfad, der auf jeder Zgemma garantiert stimmt. Wo OSCam seine
                Konfiguration erwartet, hängt vom installierten Image, vom Paket, vom Build und von
                der Installationsmethode ab. Statt einen Pfad blind anzunehmen, ermitteln Sie den
                aktiven Speicherort:
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">Im WebIF nachsehen:</strong> Der Bereich „Files“ listet
                  alle geladenen Konfigurationsdateien mit vollständigem Pfad. Das ist die
                  zuverlässigste Quelle.
                </li>
                <li>
                  <strong className="text-foreground">Startparameter prüfen:</strong> Im Softcam-Startskript
                  oder in der laufenden Prozessliste steht, welcher Ordner OSCam mit{" "}
                  <span className="font-mono text-sm text-foreground">-c</span> übergeben wird.
                </li>
                <li>
                  <strong className="text-foreground">Übliche Kandidaten prüfen:</strong> Häufig{" "}
                  <span className="font-mono text-sm text-foreground">/etc/tuxbox/config/</span> oder{" "}
                  <span className="font-mono text-sm text-foreground">/etc/tuxbox/config/oscam/</span> — aber
                  eben nicht immer.
                </li>
                <li>
                  <strong className="text-foreground">Auf Doppelungen achten:</strong> Existiert dieselbe
                  Datei in mehreren Ordnern, bearbeiten Sie im Zweifel die falsche. Alle Vorkommen
                  auflisten und aufräumen.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Diese Prüfung vor der ersten Änderung erspart die häufige Situation, dass
                Anpassungen „keine Wirkung zeigen“, weil OSCam eine andere Datei liest als die
                bearbeitete.
              </p>
            </section>

            {/* 7 — WebIF */}
            <section id="webif" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam WebIF auf Zgemma prüfen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Das WebIF ist die in OSCam eingebaute Weboberfläche für die lokale Administration der
                eigenen Zgemma. Sie erreichen es im Browser über die IP der Box und den in{" "}
                <span className="font-mono text-sm text-foreground">oscam.conf</span> gesetzten Port,
                zum Beispiel{" "}
                <span className="font-mono text-sm text-foreground">http://&lt;zgemma-ip&gt;:8888</span>.
                Nach der Installation ist es der schnellste Weg, um eine Installation zu bestätigen.
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">Läuft OSCam?</strong> Die Statuszeile zeigt „online“
                  bzw. „active“ mit Version und Laufzeit.
                </li>
                <li>
                  <strong className="text-foreground">Status verstehen:</strong> Reader im Zustand „online“,
                  verbundene Zugänge, ECM-Zähler und Fehlerzähler geben Auskunft über den laufenden
                  Betrieb.
                </li>
                <li>
                  <strong className="text-foreground">Konfigurationsprobleme erkennen:</strong> Bleibt ein
                  Reader auf „off“, liegt es an oscam.server. Fehlt ein Benutzer, an oscam.user oder
                  oscam.dvbapi.
                </li>
                <li>
                  <strong className="text-foreground">WebIF nicht erreichbar?</strong> httpport prüfen, ob
                  ein anderer Dienst den Port belegt, und ob{" "}
                  <span className="font-mono text-sm text-foreground">httpallowed</span> das eigene Netz
                  einschließt.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Zur Sicherheit: das WebIF nicht ohne Grund ins Internet öffnen, ein eigenes Konto mit
                sicherem Passwort vergeben und den Zugriff aufs Heimnetz beschränken.
              </p>
            </section>

            <CtaBlock
              heading="OSCam auf einen Blick"
              text="Installation und Konfiguration sind erledigt? Auf der Startseite sind alle Inhalte rund um OSCam und iCam für Enigma2 gebündelt – Grundlagen, Anleitungen und weiterführende Ressourcen an einem Ort."
              primary={{ href: "/", label: "Zur OSCam-Übersicht" }}
              secondary={{ href: "/oscam", label: "OSCam Grundlagen lesen" }}
            />

            {/* 8 — diagnostic tree */}
            <section id="diagnose" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Diagnose-Ablauf: OSCam-Probleme auf der Zgemma eingrenzen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Statt an Einstellungen zu raten, arbeiten Sie diesen Entscheidungsweg von oben nach
                unten ab. Jede Stufe beantwortet eine Ja/Nein-Frage und zeigt, wo es weitergeht.
              </p>
              <div className="flex flex-col gap-3">
                {diagnoseTree.map((s) => (
                  <div key={s.frage} className="flex flex-col gap-2 rounded-2xl border border-border bg-background-elevated/40 p-5">
                    <h3 className="text-base font-semibold text-foreground">{s.frage}</h3>
                    <p className="text-sm leading-relaxed text-muted">{s.body}</p>
                    <p className="text-sm leading-relaxed text-muted">
                      <strong className="text-foreground">Wenn ja:</strong> {s.ja}
                    </p>
                    <p className="text-sm leading-relaxed text-muted">
                      <strong className="text-foreground">Wenn nein:</strong> {s.nein}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 9 — troubleshooting matrix */}
            <section id="matrix" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Fehlermatrix: Symptom, Ursache, Prüfung, Lösung
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Wenn der Diagnose-Ablauf die grobe Richtung ergeben hat, hilft diese Matrix beim
                konkreten nächsten Schritt.
              </p>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-background-elevated">
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Problem
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Mögliche Ursache
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Prüfung
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Lösung
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fehlerMatrix.map((row, index) => (
                      <tr key={row.problem} className={index % 2 === 0 ? "bg-background" : "bg-background-elevated/40"}>
                        <td className="border-b border-border px-4 py-3 font-medium text-foreground">{row.problem}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.ursache}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.pruefung}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.loesung}</td>
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

            {/* 10 — systematic approach */}
            <section id="systematisch" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Bei Fehlern systematisch vorgehen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die meisten hartnäckigen OSCam-Probleme entstehen nicht durch einen einzelnen Fehler,
                sondern dadurch, dass zu viel auf einmal geändert wurde. Sechs Regeln halten die
                Fehlersuche nachvollziehbar:
              </p>
              <ol className="flex flex-col gap-3">
                {systematisch.map((regel, index) => (
                  <li key={regel} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{regel}</span>
                  </li>
                ))}
              </ol>
            </section>

            <CtaBlock
              heading="OSCam Service für Zgemma"
              text="Wenn die Diagnose keine klare Ursache liefert oder Ihnen die Zeit für die Fehlersuche fehlt: Auf der Service-Seite steht, wie wir bei der Einrichtung, der Konfiguration und der Fehleranalyse rund um OSCam auf Zgemma und Enigma2 unterstützen."
              primary={{ href: "/oscam-service", label: "OSCam Service ansehen" }}
              secondary={{ href: "/oscam-installieren", label: "Zur Installationsanleitung" }}
            />

            {/* 11 — backup & maintenance */}
            <section id="wartung" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam Zgemma sichern und warten
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Ein funktionierendes Setup bleibt nur dann stressfrei, wenn ein Rückweg existiert.
                Fünf Bausteine gehören zur Wartung:
              </p>
              <div className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border">
                {wartung.map((item) => (
                  <div key={item.titel} className="flex flex-col gap-1 bg-background-elevated/40 p-5">
                    <h3 className="text-sm font-semibold text-foreground">{item.titel}</h3>
                    <p className="text-sm leading-relaxed text-muted">{item.body}</p>
                  </div>
                ))}
              </div>
              <figure className="overflow-hidden rounded-2xl border border-border">
                <Image
                  src={`${imgDir}/oscam-zgemma-h9-twin-wohnzimmer-fussball-live-setup-4k-tv-erlebnis.webp`}
                  alt="Wohnzimmer mit wandmontiertem Fernseher, der eine Live-Fußballübertragung zeigt, und einem Zgemma H9 Twin Receiver auf der Media-Konsole"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
              </figure>
            </section>

            {/* 12 — update */}
            <section id="update" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam auf Zgemma aktualisieren
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Ein Update ist sinnvoll, wenn eine neue Version Fehler behebt oder besser zu einem
                aktualisierten Image passt — zwingend ist es nicht. Wichtig ist ein geordnetes
                Vorgehen:
              </p>
              <ol className="flex flex-col gap-3">
                {[
                  "Aktuelle OSCam-Version prüfen (WebIF-Status oder Versionsabfrage am Gerät).",
                  "Kompatibilität der neuen Version mit Image und Architektur klären.",
                  "Konfigurationsordner und ein vollständiges Image-Backup sichern.",
                  "Update über den Softwaremanager bzw. per opkg durchführen.",
                  "Receiver oder Dienst neu starten.",
                  "Im WebIF die neue Versionsnummer bestätigen und einen Sender testen.",
                  "Wenn sich etwas verändert hat: das Log auf neue Warnungen prüfen und im Zweifel die gesicherte Version zurückspielen.",
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

            {/* 13 — why enigma2 matters */}
            <section id="enigma2" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Warum Enigma2 für OSCam auf Zgemma wichtig ist
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Bei Zgemma bringt kein Herstellerimage eine feste Vorgabe mit — die Enigma2-Umgebung
                bestimmt jeder Nutzer selbst. Genau deshalb kann dasselbe OSCam-Paket nicht auf jeder
                Box gleich behandelt werden. Fünf Ebenen der Umgebung wirken direkt auf OSCam:
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">Das Image:</strong> OpenATV, OpenPLi oder OpenBH
                  liefern jeweils eigene Feeds, Menüs und Standardpfade.
                </li>
                <li>
                  <strong className="text-foreground">Die Softwarepakete:</strong> OSCam wird pro Image und
                  Architektur gebaut. Ein Paket aus dem falschen Feed passt schlicht nicht.
                </li>
                <li>
                  <strong className="text-foreground">Die Konfigurationsorte:</strong> Wo oscam.conf und die
                  übrigen Dateien liegen, legt das Image bzw. das Plugin fest — nicht OSCam selbst.
                </li>
                <li>
                  <strong className="text-foreground">Dienste und Prozesse:</strong> Wie OSCam gestartet,
                  gestoppt und beim Booten aktiviert wird, hängt am Softcam-System des Images.
                </li>
                <li>
                  <strong className="text-foreground">Die Reserve:</strong> RAM, Flash und CPU der Zgemma
                  setzen der Konfiguration Grenzen — kleinere Modelle vertragen weniger Reader und
                  Zusatzdienste.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Aus demselben Grund lassen sich Anleitungen für andere Marken nicht eins zu eins
                übertragen. Wie es bei anderen Receivern aussieht, zeigen die Seiten zu{" "}
                <Link href="/oscam-vu-plus" className="text-aqua underline underline-offset-4">
                  OSCam auf VU+
                </Link>{" "}
                und{" "}
                <Link href="/oscam-dreambox" className="text-aqua underline underline-offset-4">
                  OSCam auf Dreambox
                </Link>
                .
              </p>
            </section>

            {/* 14 — OSCam vs iCam */}
            <section id="oscam-icam" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam und iCam auf Zgemma
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Beide sind Softcam-Lösungen für Enigma2 mit derselben Grundaufgabe. OSCam ist
                umfangreicher konfigurierbar, breit dokumentiert und in fast jedem Image im Feed —
                meist die zentrale Instanz. iCam tritt schlanker auf und deckt oft einen bestimmten
                Protokollpfad ab; in vielen Konfigurationen reicht es Anfragen an OSCam weiter, statt
                es zu ersetzen.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Für die Einrichtung auf einer Zgemma ist OSCam der Ausgangspunkt. Wie{" "}
                <Link href="/icam" className="text-aqua underline underline-offset-4">
                  iCam im Enigma2-Umfeld
                </Link>{" "}
                einzuordnen ist, steht auf der eigenen Seite dazu und im Blogartikel{" "}
                <Link href="/blog/oscam-icam-unterschiede" className="text-aqua underline underline-offset-4">
                  OSCam und iCam im Vergleich
                </Link>
                .
              </p>
            </section>

            {/* 15 — service section */}
            <section id="service" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam Service für Zgemma
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Nicht jede Einrichtung läuft auf Anhieb, und nicht jeder hat Zeit für eine lange
                Fehlersuche. Wer bei einem der folgenden Punkte Unterstützung möchte, findet die
                Möglichkeiten auf der Service-Seite:
              </p>
              <ul className="flex flex-col gap-2 text-base leading-relaxed text-muted">
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Einrichtung eines Zgemma-Receivers unter Enigma2</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Aufbau und Prüfung der OSCam-Konfiguration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Fehleranalyse, wenn OSCam nicht startet oder das WebIF fehlt</span>
                </li>
                <li className="flex items-start gap-3">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>Allgemeiner technischer Support rund um OSCam auf Enigma2</span>
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Wir geben keine Zugangsdaten und keine Kanäle aus, sondern helfen ausschließlich
                technisch bei Ihrer eigenen, rechtmäßig erworbenen Konfiguration. Ergebnisse hängen
                immer vom konkreten Gerät und Setup ab.
              </p>
              <CtaBlock
                heading="Unterstützung für Ihre Zgemma"
                text="Die Service-Seite führt auf, wie die technische Hilfe rund um OSCam auf Zgemma und Enigma2 abläuft. Einen Gesamtüberblick über alle OSCam-Themen der Website gibt die Startseite."
                primary={{ href: "/oscam-service", label: "OSCam Service für Zgemma" }}
                secondary={{ href: "/", label: "OSCam auf einen Blick" }}
              />
            </section>

            {/* FAQ */}
            <section
              id="faq"
              className="flex scroll-mt-24 flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7"
            >
              <h2 className="text-xl font-semibold text-foreground">
                Häufig gestellte Fragen zu OSCam auf Zgemma
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

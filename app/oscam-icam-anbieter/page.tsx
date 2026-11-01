import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { FeaturedPlanCard } from "@/components/plans/FeaturedPlanCard";
import { featuredPlans } from "@/lib/plans";

const SITE_URL = "https://oscam-icam.de";
const PAGE_PATH = "/oscam-icam-anbieter";
const imgDir = "/images/home page/oscam-icam-anbieter";
const ogImage = `${imgDir}/oscam-icam-anbieter-vu-plus-uno-4k-se-icam-front-display.webp`;

// Prices are always derived from lib/plans.ts (the same source the homepage and the
// price cards below use), so text, table, FAQ and structured data can never drift apart.
const toNumber = (price: string) => Number(price.replace(/[^\d,]/g, "").replace(",", "."));
const toMonths = (period: string) => Number(period.replace(/\D/g, ""));
const euro = (value: number) =>
  value.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €";

const planRows = featuredPlans.map((plan) => {
  const price = toNumber(plan.price);
  const months = toMonths(plan.period);
  return { id: plan.id, name: plan.duration, period: plan.period, price, months, perMonth: price / months };
});
const cheapestPlan = planRows.reduce((min, row) => (row.price < min.price ? row : min), planRows[0]);

export const metadata: Metadata = {
  title: "OSCam iCam Anbieter – Preise, Einrichtung & Support",
  description:
    "OSCam iCam Anbieter im Überblick: Preise und Laufzeiten, was Einrichtung und Support umfassen und wie Sie VU+, Dreambox oder Zgemma auf Kompatibilität prüfen.",
  keywords: [
    "OSCam iCam Anbieter",
    "OSCam Anbieter",
    "OSCam iCam",
    "OSCam kaufen",
    "OSCam Preise",
    "OSCam iCam Preise",
    "OSCam Service",
    "OSCam Einrichtung",
    "OSCam Support",
    "OSCam für Enigma2",
    "OSCam VU+",
    "OSCam Dreambox",
    "OSCam Zgemma",
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: "article",
    locale: "de_DE",
    siteName: "OSCam-iCam",
    url: PAGE_PATH,
    title: "OSCam iCam Anbieter – Preise, Einrichtung & Support",
    description:
      "Was ein OSCam iCam Anbieter leistet, was Einrichtung und Support kosten und wie Sie Receiver, Architektur und Image vorab prüfen.",
    images: [{ url: ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    images: [ogImage],
    title: "OSCam iCam Anbieter – Preise, Einrichtung & Support",
    description:
      "Leistungsumfang, Preise und Kompatibilitäts-Check für OSCam und iCam auf VU+, Dreambox und Zgemma.",
  },
};

const pageNav = [
  { href: "#auf-einen-blick", label: "Auf einen Blick" },
  { href: "#was-ist", label: "Was ist ein Anbieter?" },
  { href: "#leistungsumfang", label: "Leistungsumfang" },
  { href: "#unterschied", label: "OSCam vs. OSCam iCam" },
  { href: "#auswaehlen", label: "Auswahlkriterien" },
  { href: "#preise", label: "Pakete & Preise" },
  { href: "#preise-verstehen", label: "Preise verstehen" },
  { href: "#welches-paket", label: "Welches Paket?" },
  { href: "#ablauf", label: "Ablauf & Vorbereitung" },
  { href: "#oscam-kaufen", label: "OSCam kaufen" },
  { href: "#kompatibilitaet", label: "Kompatibilität prüfen" },
  { href: "#receiver", label: "VU+, Dreambox, Zgemma" },
  { href: "#checkliste", label: "Checkliste" },
  { href: "#fehler", label: "Häufige Fehler" },
  { href: "#vertrauen", label: "Seriosität" },
  { href: "#faq", label: "FAQ" },
];

const aufEinenBlick = [
  "Klare Paketinformationen – was ist enthalten, was nicht",
  "Transparente Preise ohne versteckte Zusatzkosten",
  "Verständliche technische Voraussetzungen für Enigma2",
  "Passende Unterstützung für Ihren Receiver und Ihr Image",
  "Nachvollziehbare Aktivierung und ein klarer Ablauf",
  "Erreichbarer Support bei technischen Fragen",
];

const begriffe = [
  {
    begriff: "OSCam",
    text: "Quelloffene Softcam-Software für Linux-Receiver. Sie ist kostenlos verfügbar und wird nicht verkauft — bezahlt wird höchstens die technische Dienstleistung rund um Einrichtung und Support.",
  },
  {
    begriff: "iCam",
    text: "Eine schlanke Softcam-Variante aus demselben Umfeld. Wird häufig zusammen mit OSCam eingesetzt und deckt einen bestimmten Protokollpfad ab.",
  },
  {
    begriff: "Enigma2",
    text: "Die offene Linux-Oberfläche der meisten Sat- und Kabelreceiver. Das installierte Image (OpenATV, OpenPLi, DreamOS u. a.) bestimmt Feeds, Menüs und Pfade.",
  },
  {
    begriff: "Receiver",
    text: "Die Hardware — etwa VU+, Dreambox oder Zgemma. Architektur und Leistung entscheiden mit, welcher OSCam-Build passt.",
  },
  {
    begriff: "Anbieter",
    text: "Ein technischer Dienstleister, der bei Installation, Konfiguration oder laufendem Support hilft. Der Begriff beschreibt die Leistung, nicht ein bestimmtes Unternehmen.",
  },
  {
    begriff: "Service / Support",
    text: "Die konkrete Betreuung: gemeinsame Einrichtung, Fehleranalyse anhand von Logdateien, Hilfe bei Bouquets und EPG, Erreichbarkeit bei Rückfragen.",
  },
];

const unterschiedRows = [
  {
    dimension: "Technische Umgebung",
    oscam: "Fokus auf OSCam als zentrale Softcam-Instanz",
    icam: "OSCam plus iCam-Komponente, oft für einen speziellen Protokollpfad",
  },
  {
    dimension: "Receiver-Kompatibilität",
    oscam: "Sehr breit — nahezu jedes Enigma2-Gerät",
    icam: "Ebenfalls breit, aber die iCam-Komponente muss zum Setup passen",
  },
  {
    dimension: "Konfigurationsaufwand",
    oscam: "oscam.conf, oscam.server, oscam.user, optional oscam.dvbapi",
    icam: "zusätzlich die Abstimmung zwischen iCam und OSCam",
  },
  {
    dimension: "iCam-Relevanz",
    oscam: "nicht zwingend erforderlich",
    icam: "ausdrücklicher Bestandteil des Setups",
  },
  {
    dimension: "Support-Bedarf",
    oscam: "meist Standard-Einrichtung und Fehleranalyse",
    icam: "häufig etwas mehr Abstimmung bei der Ersteinrichtung",
  },
  {
    dimension: "Einstiegskomplexität",
    oscam: "gut dokumentiert, viele Anleitungen",
    icam: "schlanker, aber weniger allgemeine Dokumentation",
  },
  {
    dimension: "Image-Voraussetzung",
    oscam: "jedes gängige Enigma2-Image mit OSCam im Feed",
    icam: "Image und OSCam-Build müssen die iCam-Komponente bzw. den Streamrelay-Pfad unterstützen",
  },
  {
    dimension: "Kontrolle nach der Einrichtung",
    oscam: "Reader-Status im WebIF und Log",
    icam: "zusätzlich prüfen, ob die iCam-Komponente aktiv ist",
  },
];

// What is (and is not) part of the service. The "enthalten" items mirror homeFeatures
// in lib/plans.ts (what every package card lists); the exclusions are the ones the site
// already states on /oscam-service, /icam and in the FAQ — nothing new is promised here.
const leistungEnthalten = [
  {
    titel: "Persönliche Fernunterstützung",
    text: "bei der OSCam- bzw. iCam-Einrichtung auf Ihrem konkreten Enigma2-Receiver.",
  },
  {
    titel: "Gemeinsame Konfiguration",
    text: "von oscam.conf, oscam.server und oscam.user — nachvollziehbar, damit Sie es später selbst pflegen können.",
  },
  {
    titel: "Bouquets und EPG",
    text: "Einrichtung und Organisation der Senderlisten unter Enigma2, sofern gewünscht.",
  },
  {
    titel: "Hilfe bei der Fehlersuche",
    text: "anhand Ihrer Logdateien statt Rätselraten.",
  },
  {
    titel: "Erreichbarer Support auf Deutsch",
    text: "per WhatsApp, innerhalb der Paketlaufzeit auch für Rückfragen nach der Einrichtung.",
  },
];

const leistungNichtEnthalten = [
  "Zugangsdaten, Server- oder Line-Zugänge",
  "Kartenfreigaben Dritter (Cardsharing)",
  "Kanäle, Senderpakete oder Abonnements",
  "Smartcard oder Zugangsberechtigung — diese bringen Sie rechtmäßig erworben selbst mit",
  "Garantien zu Sendern, Verfügbarkeit oder Ergebnis",
];

const kriterien = [
  {
    titel: "Transparente Paketinformationen",
    warum: "Nur wenn klar ist, welche Leistung enthalten ist und welche nicht, lässt sich einschätzen, ob ein Paket zum eigenen Bedarf passt.",
    pruefen: "Achten Sie auf eine ausformulierte Leistungsbeschreibung statt reiner Schlagworte. Fehlt die Angabe, was ausdrücklich nicht enthalten ist, fragen Sie nach.",
  },
  {
    titel: "Klare Preise",
    warum: "Ein nachvollziehbarer Preis ohne versteckte Zusatzkosten ist die Grundlage jeder seriösen Entscheidung. Rabatte oder „Originalpreise“ sollten belegbar sein.",
    pruefen: "Der Endpreis und die Laufzeit sollten vor der Buchung feststehen. Zeitdruck durch „nur heute“-Angebote ist ein Warnzeichen, kein Vorteil.",
  },
  {
    titel: "Technische Kompatibilität",
    warum: "OSCam-Builds werden pro Image und Architektur erstellt. Ein Anbieter sollte vor der Beauftragung sagen können, ob Ihr Setup unterstützt wird.",
    pruefen: "Nennen Sie Modell, Image und Version — ein geeigneter Anbieter kann daraufhin eine konkrete Einschätzung geben, statt pauschal „läuft immer“ zu sagen.",
  },
  {
    titel: "Unterstützte Receiver",
    warum: "VU+, Dreambox und Zgemma verhalten sich im Detail unterschiedlich. Eine konkrete Geräteliste ist ein gutes Zeichen.",
    pruefen: "Suchen Sie nach einer Aufzählung konkreter Modellreihen. Steht dort nur „alle Receiver“, ist das eher Marketing als eine technische Aussage.",
  },
  {
    titel: "Unterstützte Enigma2-Umgebung",
    warum: "OpenATV, OpenPLi oder DreamOS bringen eigene Feeds und Pfade mit. Der Anbieter sollte wissen, mit welchem Image Sie arbeiten.",
    pruefen: "Wird beim Erstkontakt nach dem Image gefragt, spricht das für Erfahrung. Wird das Thema übergangen, drohen später Pfad- und Versionsprobleme.",
  },
  {
    titel: "Verständliche Einrichtung",
    warum: "Ein klarer Ablauf — was passiert wann, was brauchen Sie dafür — verhindert Missverständnisse und spätere Frustration.",
    pruefen: "Lassen Sie sich den Ablauf in wenigen Schritten schildern. Wenn niemand erklären kann, was genau getan wird, fehlt die Grundlage für Vertrauen.",
  },
  {
    titel: "Support",
    warum: "Gerade bei der Ersteinrichtung entstehen Rückfragen. Wichtig ist, dass jemand erreichbar ist und Logdateien lesen kann.",
    pruefen: "Klären Sie vorab den Kontaktweg und ob der Support auch nach der Einrichtung bei Rückfragen erreichbar bleibt.",
  },
  {
    titel: "Klare Kommunikation",
    warum: "Ein seriöser Anbieter erklärt auch, was nicht geleistet wird — und macht keine Angaben zu Inhalten, die er nicht bereitstellt.",
    pruefen: "Ehrliche Grenzen („das übernehmen wir nicht“) sind ein Qualitätsmerkmal. Wer alles verspricht, hat selten alles im Griff.",
  },
  {
    titel: "Aktualität der Informationen",
    warum: "Enigma2-Images und OSCam-Builds ändern sich. Veraltete Pfad- oder Versionsangaben sind ein Warnzeichen.",
    pruefen: "Ein Blick auf Datum und Versionsbezüge der Anleitungen zeigt, ob die Inhalte gepflegt werden.",
  },
  {
    titel: "Hinweise zu Backup und Konfiguration",
    warum: "Ein guter Anbieter weist darauf hin, vor Änderungen ein Backup anzulegen und die Konfiguration zu sichern — das schützt Sie, nicht ihn.",
    pruefen: "Kommt der Hinweis auf ein Backup von selbst, arbeitet der Anbieter sorgfältig. Fehlt er ganz, fehlt oft auch die Sorgfalt.",
  },
];

const paketEmpfehlung = [
  {
    wenn: "Sie brauchen einmalig Hilfe bei der Ersteinrichtung auf einem Receiver",
    dann: "Starter",
    hinweis: "kürzeste Laufzeit, für den schnellen Einstieg",
  },
  {
    wenn: "Sie möchten etwas länger Begleitung, auch bei Anpassungen",
    dann: "Basic",
    hinweis: "mittlere Laufzeit, mehr Spielraum für Rückfragen",
  },
  {
    wenn: "Sie planen längerfristig und wollen bei Updates abgesichert sein",
    dann: "Standard",
    hinweis: "12 Monate, gutes Verhältnis aus Laufzeit und Preis",
  },
  {
    wenn: "Sie wollen die längste Absicherung und maximale Planungssicherheit",
    dann: "Beliebtestes Angebot",
    hinweis: "24 Monate, der längste Betreuungszeitraum",
  },
];

// The original seven compatibility points, now with where to find each answer.
const kompatibilitaet = [
  {
    punkt: "Receiver-Modell und Baujahr",
    warum: "Bestimmt Architektur und Leistungsreserve.",
    finden: "Typenschild auf der Geräteunterseite oder im Informationsmenü des Images.",
  },
  {
    punkt: "Architektur (ARM oder MIPS)",
    warum: "Ein OSCam-Build für MIPS läuft nicht auf ARM und umgekehrt.",
    finden: "Per Telnet/SSH mit „uname -m“ (z. B. armv7l, aarch64 oder mips) — oder grob: 4K-Generation meist ARM, ältere HD-Modelle oft MIPS.",
  },
  {
    punkt: "Enigma2-Image und Version",
    warum: "Das Image bestimmt Feed, Softcam-Menü und Konfigurationspfad.",
    finden: "Menü „Information“ bzw. „Über“ des Images (OpenATV, OpenPLi, VTi, DreamOS u. a.).",
  },
  {
    punkt: "Passender OSCam-Build aus dem richtigen Feed",
    warum: "Fremde Pakete für ein anderes Image starten oft nicht oder ohne Funktionen.",
    finden: "Plugin-Browser bzw. Softcam-Manager des Images; im Zweifel den Support fragen.",
  },
  {
    punkt: "Vorhandene Konfigurationsdateien",
    warum: "Alte Dateien können zu einer neuen Version oder einem anderen Pfad nicht passen.",
    finden: "Je nach Image unter /etc/tuxbox/config/ oder /etc/tuxbox/config/oscam/.",
  },
  {
    punkt: "Netzwerk und Systemzeit",
    warum: "Ohne stabile Verbindung und korrekte Uhrzeit scheitern Updates und Verbindungen.",
    finden: "Netzwerkeinstellungen und Uhrzeit-/NTP-Einstellung im Image-Menü.",
  },
  {
    punkt: "Benötigte Plugins oder Zusatzkomponenten",
    warum: "Etwa für iCam oder den Softcam-Start — fehlen sie, bleibt die Einrichtung unvollständig.",
    finden: "Plugin-Browser des Images; welche Komponenten nötig sind, klärt das Vorgespräch.",
  },
  {
    punkt: "Erreichbarkeit des OSCam WebIF",
    warum: "Darüber werden Status, Reader und Log geprüft.",
    finden: "Im Browser unter http://<IP des Receivers>:<WebIF-Port> aus dem Heimnetz aufrufen.",
  },
];

const receiverBloecke = [
  {
    name: "VU+",
    href: "/oscam-vu-plus",
    linkLabel: "OSCam auf VU+ im Detail",
    images: "OpenPLi, OpenATV, VU+ Team Image (VTi)",
    architektur: "HD-Generation MIPS, 4K-Generation ARM",
    text: "Die Images haben meist einen gut gepflegten Feed. Prüfen Sie Modellreihe (HD oder 4K) und ob der Softcam-Manager OSCam bereits kennt.",
  },
  {
    name: "Dreambox",
    href: "/oscam-dreambox",
    linkLabel: "Einrichtung auf der Dreambox",
    images: "DreamOS oder ein OE-Image (z. B. OpenATV)",
    architektur: "DM520-Klasse MIPS, DM900/DM920 ARM",
    text: "Aktuelle Modelle laufen mit DreamOS, andere mit einem OE-Image. Das entscheidet über Paketquelle, Startbefehle und Konfigurationspfad.",
  },
  {
    name: "Zgemma",
    href: "/oscam-zgemma",
    linkLabel: "Anleitung für Zgemma-Receiver",
    images: "OpenATV, OpenPLi u. a. (kein Herstellerimage)",
    architektur: "H7 und H9 ARM, ältere H2-Modelle MIPS",
    text: "Reine Enigma2-Boxen ohne Herstellerimage. Feed-Qualität und Reserve hängen vom selbst gewählten Image ab — kleinere Modelle brauchen eine schlanke Konfiguration.",
  },
  {
    name: "Weitere Enigma2-Receiver",
    href: "/oscam-installieren",
    linkLabel: "Allgemeine OSCam-Installationsanleitung",
    images: "meist OpenATV oder OpenPLi",
    architektur: "modellabhängig — vorab prüfen",
    text: "GigaBlue, Octagon, Edision und andere Enigma2-Geräte folgen demselben Prinzip. Nennen Sie Modell und Image, dann lässt sich die Eignung konkret einschätzen.",
  },
];

// What to have ready before contacting support — distinct from the selection checklist.
const vorbereitung = [
  { was: "Receiver-Modell und Image mit Version", hinweis: "z. B. „VU+ Uno 4K SE, OpenATV 7.x“" },
  { was: "Architektur", hinweis: "Ausgabe von „uname -m“, falls bekannt" },
  { was: "IP-Adresse des Receivers im Heimnetz", hinweis: "steht in den Netzwerkeinstellungen oder im Router" },
  { was: "Ein aktuelles Backup", hinweis: "Image-Backup oder zumindest die Konfigurationsdateien" },
  { was: "Kurze Problembeschreibung", hinweis: "was erreicht werden soll bzw. was seit wann nicht funktioniert" },
  { was: "Logauszug, falls OSCam bereits läuft", hinweis: "die letzten Zeilen aus dem WebIF-Log genügen" },
];

// Configuration mistakes (as opposed to the selection mistakes above), each with the fix.
const konfigFehler = [
  {
    fehler: "Build für die falsche Architektur installiert",
    loesung: "Architektur mit „uname -m“ prüfen und OSCam aus dem Feed des eigenen Images installieren.",
  },
  {
    fehler: "Konfiguration im falschen Verzeichnis",
    loesung: "Je nach Image liegen die Dateien unter /etc/tuxbox/config/ oder /etc/tuxbox/config/oscam/ — nur dort wirken Änderungen.",
  },
  {
    fehler: "Falsche Systemzeit",
    loesung: "NTP bzw. automatische Zeitsynchronisierung im Image aktivieren; eine falsche Uhrzeit stört Verbindungen und Updates.",
  },
  {
    fehler: "Mehrere Softcams gleichzeitig aktiv",
    loesung: "Im Softcam-Manager genau eine Softcam als aktiv festlegen, andere stoppen.",
  },
  {
    fehler: "Änderungen ohne Neustart von OSCam",
    loesung: "Nach jeder Änderung den OSCam-Dienst vollständig neu starten und das Log prüfen.",
  },
  {
    fehler: "Mehrere Dateien auf einmal geändert",
    loesung: "Immer nur eine Datei anpassen, testen und vorher sichern — so bleibt die Ursache nachvollziehbar.",
  },
];

const checkliste = [
  "Receiver-Modell und Architektur geprüft",
  "Enigma2-Version und Image bestimmt",
  "Technische Voraussetzungen verstanden",
  "Paketumfang vollständig gelesen",
  "Preis und Laufzeit geprüft",
  "Support-Möglichkeiten geklärt",
  "Installationsweg besprochen",
  "Backup und Konfiguration gesichert",
];

const fehler = [
  "Nur auf den Preis schauen und die technische Eignung ausblenden",
  "Receiver-Kompatibilität nicht prüfen",
  "Image und OSCam-Version nicht abgleichen",
  "Einen unklaren Paketumfang akzeptieren",
  "OSCam-Software mit einer bezahlten Dienstleistung verwechseln",
  "Konfiguration ohne vorheriges Backup ändern",
  "Erwarten, dass jede Receiver-Image-Kombination identisch funktioniert",
  "Bei unklarer Kompatibilität nicht vorab den Support fragen",
];

const seriositaet = [
  "Transparente, vollständige Paketinformationen",
  "Klar benannte technische Voraussetzungen",
  "Verständliche Dokumentation und ein nachvollziehbarer Ablauf",
  "Realistische Erwartungen statt Erfolgsversprechen",
  "Eine erreichbare Kontakt- und Supportmöglichkeit",
  "Keine versteckten technischen Annahmen über Ihr Setup",
];

const faqItems = [
  {
    question: "Was ist ein OSCam iCam Anbieter?",
    answer:
      "Ein technischer Dienstleister, der bei Installation, Konfiguration oder laufendem Support rund um OSCam und iCam auf Enigma2-Receivern hilft. Der Begriff beschreibt die Art der Leistung, nicht ein bestimmtes Unternehmen. Die OSCam-Software selbst ist quelloffen und kostenlos.",
  },
  {
    question: "Was kostet ein OSCam iCam Anbieter?",
    answer: `Auf dieser Seite und auf der Startseite finden Sie die aktuellen Einrichtungspakete: ${(() => {
      const parts = planRows.map((p) => `${p.name} für ${euro(p.price)} (${p.period})`);
      return parts.length > 1 ? `${parts.slice(0, -1).join(", ")} und ${parts[parts.length - 1]}` : parts.join("");
    })()}. Preisstufen für 1 bis 3 Receiver stehen auf der Support-Seite.`,
  },
  {
    question: "Was bedeutet „OSCam kaufen“?",
    answer:
      "Die OSCam-Software wird nicht verkauft — sie ist Open Source und frei verfügbar. Gemeint ist in der Regel der Kauf einer technischen Dienstleistung: Unterstützung bei der Einrichtung, Konfiguration und dem laufenden Support für den eigenen Receiver.",
  },
  {
    question: "Welches OSCam Paket passt zu mir?",
    answer:
      "Das hängt von Laufzeit und Betreuungsbedarf ab. Für eine einmalige Ersteinrichtung genügt oft „Starter“. Wer länger Begleitung möchte, wählt „Basic“ oder „Standard“. Für maximale Planungssicherheit über 24 Monate gibt es das „Beliebteste Angebot“.",
  },
  {
    question: "Gibt es OSCam iCam Anbieter speziell für Deutschland?",
    answer:
      "OSCam-iCam richtet sich an deutschsprachige Nutzer und bietet Support auf Deutsch, erreichbar per WhatsApp. Wichtiger als der Standort ist, dass der Support Ihre Enigma2-Umgebung kennt und erreichbar ist.",
  },
  {
    question: "Worauf sollte ich bei der Auswahl eines OSCam Anbieters achten?",
    answer:
      "Auf transparente Paketinformationen, klare Preise, benannte technische Voraussetzungen, unterstützte Receiver und Images, einen verständlichen Ablauf, erreichbaren Support und Hinweise zu Backup und Konfiguration.",
  },
  {
    question: "Ist OSCam für VU+, Dreambox und Zgemma gleich?",
    answer:
      "Das Grundprinzip ja, die Details nicht. Image, Architektur, Paketquelle und Konfigurationspfad unterscheiden sich je Marke. Deshalb gibt es eigene Seiten zu OSCam auf VU+, Dreambox und Zgemma.",
  },
  {
    question: "Was sollte ich vor der Beauftragung technisch prüfen?",
    answer:
      "Receiver-Modell und Architektur, installiertes Image und Version, die passende OSCam-Build-Variante, die Kompatibilität vorhandener Konfigurationsdateien, die Netzwerkverbindung und die Erreichbarkeit des WebIF im Heimnetz.",
  },
  {
    question: "Enthält ein Paket Zugangsdaten oder Kanäle?",
    answer:
      "Nein. Ein seriöser OSCam iCam Anbieter liefert technische Unterstützung für Ihre eigene, rechtmäßig erworbene Zugangsberechtigung — keine Zugangsdaten, keine Serverdaten und keine Kanäle.",
  },
  {
    question: "Wie läuft der Support ab?",
    answer:
      "Die Einrichtungspakete umfassen persönliche Fernunterstützung, die gemeinsame Konfiguration von oscam.conf, oscam.server und oscam.user, auf Wunsch Bouquets und EPG sowie Hilfe bei der Fehlersuche anhand Ihrer Logdateien. Das Support-Team ist auf Deutsch per WhatsApp erreichbar.",
  },
  {
    question: "Was ist der Unterschied zwischen einem OSCam Anbieter und einem Reseller?",
    answer:
      "Ein Anbieter richtet sich an Endnutzer, die Hilfe für ihren eigenen Receiver suchen. Ein Reseller gibt technische Dienstleistungen im Rahmen eines Partnerprogramms an eigene Kunden weiter. Details dazu stehen auf der Seite zu OSCam Reseller.",
  },
  {
    question: "Kann ich OSCam auch selbst einrichten?",
    answer:
      "Ja. OSCam ist frei verfügbar und dokumentiert. Die allgemeine Anleitung steht unter „OSCam installieren“, vertiefende Artikel im Blog. Ein Anbieterpaket spart Zeit und hilft, wenn die Kompatibilität unklar ist oder etwas nicht startet.",
  },
  {
    question: "Was kann ich tun, wenn OSCam nach der Einrichtung nicht startet?",
    answer:
      "Zuerst die zuletzt geänderte Konfigurationsdatei prüfen, dann Log und WebIF-Status ansehen und die OSCam-Version gegen Image und Architektur abgleichen. Der Blogartikel zu häufigen OSCam-Fehlern hilft weiter, ebenso der technische Support.",
  },
  {
    question: "Ändern sich die Preise?",
    answer:
      "Die auf dieser Seite genannten Preise entsprechen dem aktuellen Stand der Startseite. Es gibt keine künstlichen Rabatte oder zeitlich begrenzten Aktionen — maßgeblich ist immer der aktuell angezeigte Preis.",
  },
  {
    question: "Brauche ich für OSCam einen Kartenleser oder ein CI+-Modul?",
    answer:
      "Das hängt von Ihrer Zugangsquelle ab. OSCam vermittelt zwischen dem Receiver und einer rechtmäßig erworbenen Berechtigung — je nach Setup über einen lokal angeschlossenen Kartenleser, ein CI+-Modul oder eine eigene Netzwerkverbindung. Ein Anbieter kann im Vorgespräch klären, was in Ihrem Fall nötig ist.",
  },
  {
    question: "Wie schnell ist OSCam nach der Buchung eingerichtet?",
    answer:
      "Die reine Einrichtung dauert meist ein überschaubares Zeitfenster, das vorab vereinbart wird. Wie schnell alles läuft, hängt vom Zustand des Receivers, vom Image und davon ab, ob Backup und Zugriff bereitstehen. Feste Zeitgarantien nennt ein seriöser Anbieter nicht.",
  },
  {
    question: "Kann ich zwischen den Paketen wechseln?",
    answer:
      "Die Pakete unterscheiden sich vor allem in der Laufzeit der Betreuung. Wenn Sie unsicher sind, starten Sie mit einer kürzeren Laufzeit und stimmen sich mit dem Support ab — Fragen vor und nach der Buchung sind ausdrücklich erwünscht.",
  },
  {
    question: "Welche Angaben braucht der Support für die Einrichtung?",
    answer:
      "Receiver-Modell, Image mit Version und – falls bekannt – die Architektur, dazu die IP-Adresse des Receivers im Heimnetz, ein aktuelles Backup und eine kurze Beschreibung, was erreicht werden soll. Läuft OSCam bereits, hilft ein Auszug aus dem Log.",
  },
  {
    question: "Unterstützen Sie auch GigaBlue, Octagon oder andere Enigma2-Receiver?",
    answer:
      "Die Pakete sind für VU+, Dreambox, Zgemma und weitere Enigma2-Receiver gedacht. Entscheidend sind Architektur, Image und der verfügbare OSCam-Build. Nennen Sie Modell und Image vorab, dann lässt sich die Eignung konkret einschätzen.",
  },
  {
    question: "Brauche ich für iCam ein bestimmtes Image?",
    answer:
      "Ja, Image und OSCam-Build müssen die iCam-Komponente unterstützen. Nicht jedes Enigma2-Image bringt sie im Feed mit, und nicht jede Version passt zu jeder Receiver-Generation. Klären Sie das deshalb vor der Einrichtung — Grundlagen dazu stehen auf der Seite zu iCam.",
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

// Describes exactly what the visible price cards show: a technical support service
// with four fixed-term packages. No ratings or reviews are claimed.
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PAGE_PATH}#service`,
  name: "OSCam und iCam Einrichtung & technischer Support",
  serviceType: "Technischer Support für OSCam und iCam auf Enigma2-Receivern",
  description:
    "Persönliche Fernunterstützung bei Einrichtung, Konfiguration und Fehlersuche von OSCam und iCam auf eigenen Enigma2-Receivern. Keine Zugangsdaten, keine Serverdaten, keine Kanäle.",
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: "DE",
  availableLanguage: "de",
  url: `${SITE_URL}${PAGE_PATH}`,
  offers: planRows.map((p) => ({
    "@type": "Offer",
    name: `${p.name} (${p.period} Betreuung)`,
    price: p.price.toFixed(2),
    priceCurrency: "EUR",
    url: `${SITE_URL}${PAGE_PATH}#preise`,
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

export default function OscamIcamAnbieterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Breadcrumbs
        items={[{ label: "Startseite", href: "/" }, { label: "OSCam iCam Anbieter", href: PAGE_PATH }]}
      />

      <section className="py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-14">
          <SectionHeading
            as="h1"
            eyebrow="Anbieter & Pakete"
            title="OSCam iCam Anbieter – Einrichtung, Support und Preise für Enigma2"
            description="Was ein OSCam iCam Anbieter tatsächlich leistet, was Einrichtung und Support kosten und wie Sie vorab prüfen, ob Ihr VU+-, Dreambox- oder Zgemma-Receiver passt — transparent und ohne Versprechen zu Kanälen."
          />

          <div className="mx-auto flex w-full max-w-3xl flex-col gap-12">
            <div className="flex flex-col gap-4 text-base leading-relaxed text-muted">
              <p>
                Ein <strong className="text-foreground">OSCam iCam Anbieter</strong> ist ein
                technischer Dienstleister, der bei der Einrichtung, Konfiguration und Betreuung von
                OSCam und iCam auf Enigma2-Receivern hilft. Die OSCam-Software selbst ist quelloffen
                und kostenlos — bezahlt wird die Dienstleistung, nicht das Programm. Wer nach{" "}
                <strong className="text-foreground">OSCam Anbieter</strong> oder{" "}
                <strong className="text-foreground">OSCam kaufen</strong> sucht, meint in der Regel
                genau das: professionelle Unterstützung, damit die eigene, rechtmäßig erworbene
                Zugangsberechtigung sauber am Receiver funktioniert.
              </p>
              <p className="rounded-2xl border border-border bg-background-elevated/40 p-4 text-sm">
                <strong className="text-foreground">Kurz gesagt:</strong> Die Software kostet nichts,
                bezahlt wird Zeit und Erfahrung. Die Einrichtungspakete beginnen bei{" "}
                <strong className="text-foreground">{euro(cheapestPlan.price)}</strong> für{" "}
                {cheapestPlan.period} Betreuung. Zugangsdaten, Server-Zugänge oder Kanäle sind bei
                keinem Paket enthalten.
              </p>
              <p>
                Im Folgenden finden Sie den genauen Leistungsumfang, die aktuellen Pakete mit Preisen
                von der Startseite, einen Kompatibilitäts-Check für Ihren Receiver und die häufigsten
                Fehler bei Anbieterwahl und Konfiguration. Allgemeine Grundlagen stehen unter{" "}
                <Link href="/oscam" className="text-aqua underline underline-offset-4">
                  OSCam
                </Link>{" "}
                und{" "}
                <Link href="/icam" className="text-aqua underline underline-offset-4">
                  iCam
                </Link>
                .
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="#preise" variant="primary" className="text-sm">
                  Pakete &amp; Preise ansehen
                </Button>
                <Button href="/oscam-service" variant="outline" className="text-sm">
                  OSCam Service ansehen
                </Button>
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
                alt="VU+ Uno 4K SE Enigma2-Receiver, dessen Front-Display einen aktiven iCam-Status anzeigt"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-cover"
              />
            </div>

            {/* auf einen blick */}
            <section id="auf-einen-blick" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was ein guter OSCam iCam Anbieter bieten sollte – auf einen Blick
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {aufEinenBlick.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-background-elevated/40 p-4 text-sm leading-relaxed text-muted"
                  >
                    <span aria-hidden className="mt-0.5 text-aqua">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* was ist */}
            <section id="was-ist" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was ist ein OSCam iCam Anbieter?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Hinter dem Begriff steckt kein Produkt im klassischen Sinn, sondern eine
                Dienstleistung. Um die Frage sauber zu beantworten, hilft es, die beteiligten
                Bausteine zu trennen:
              </p>
              <dl className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border">
                {begriffe.map((item) => (
                  <div key={item.begriff} className="grid gap-1 bg-background-elevated/40 p-5 sm:grid-cols-[150px_1fr] sm:gap-4">
                    <dt className="text-sm font-semibold text-foreground">{item.begriff}</dt>
                    <dd className="text-sm leading-relaxed text-muted">{item.text}</dd>
                  </div>
                ))}
              </dl>
              <p className="text-base leading-relaxed text-muted">
                Anbieter unterscheiden sich im Umfang: Manche helfen nur einmalig bei der
                Ersteinrichtung, andere begleiten über Monate hinweg, inklusive Updates und
                Fehleranalyse. Der Begriff „OSCam iCam Anbieter“ sagt zunächst nichts über diesen
                Umfang aus — deshalb ist die Paketbeschreibung so wichtig.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Was ein Anbieter <strong className="text-foreground">nicht</strong> ist: eine Quelle
                für Zugangsdaten, Serveradressen oder Kanäle. Ein seriöser Anbieter unterstützt
                ausschließlich technisch bei Ihrer eigenen, rechtmäßig erworbenen
                Zugangsberechtigung. Alles andere gehört nicht zu einer legitimen Dienstleistung.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Was genau möglich ist, hängt von Ihrer konkreten technischen Umgebung ab. Wer die
                Dienstleistung geschäftlich weitergeben möchte, findet Hinweise unter{" "}
                <Link href="/oscam-reseller" className="text-aqua underline underline-offset-4">
                  OSCam Reseller
                </Link>
                .
              </p>
            </section>

            {/* leistungsumfang */}
            <section id="leistungsumfang" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Leistungsumfang: Was zum OSCam Service gehört – und was nicht
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die wichtigste Frage vor jeder Buchung ist, was Sie für Ihr Geld konkret bekommen. Bei
                OSCam-iCam ist der Umfang in allen Paketen gleich; die Pakete unterscheiden sich nur
                in der Laufzeit der Betreuung.
              </p>
              <div className="grid gap-4 md:grid-cols-[1.4fr_1fr]">
                <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated/40 p-5">
                  <h3 className="text-base font-semibold text-foreground">Enthalten</h3>
                  <ul className="flex flex-col gap-2.5">
                    {leistungEnthalten.map((item) => (
                      <li key={item.titel} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                        <span aria-hidden className="mt-0.5 text-aqua">
                          ✓
                        </span>
                        <span>
                          <strong className="text-foreground">{item.titel}</strong> {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated/40 p-5">
                  <h3 className="text-base font-semibold text-foreground">Nicht enthalten</h3>
                  <ul className="flex flex-col gap-2.5">
                    {leistungNichtEnthalten.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                        <span aria-hidden className="mt-0.5 text-muted">
                          ✕
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Für die Senderlisten-Pflege nach der Einrichtung gibt der Artikel{" "}
                <Link href="/blog/enigma2-bouquets-epg-organisieren" className="text-aqua underline underline-offset-4">
                  Bouquets und EPG unter Enigma2 organisieren
                </Link>{" "}
                praktische Tipps.
              </p>
            </section>

            {/* unterschied */}
            <section id="unterschied" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam Anbieter oder OSCam iCam Anbieter – wo liegt der Unterschied?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Im Alltag werden beide Begriffe oft synonym verwendet. Technisch gibt es einen
                feinen Unterschied: Ein reiner OSCam-Kontext kommt ohne die iCam-Komponente aus, ein
                OSCam-iCam-Kontext bindet sie ausdrücklich ein. Das wirkt sich vor allem auf den
                Konfigurations- und Abstimmungsaufwand aus.
              </p>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-background-elevated">
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        Dimension
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        OSCam-Anbieter
                      </th>
                      <th scope="col" className="border-b border-border px-4 py-3 font-semibold text-foreground">
                        OSCam iCam Anbieter
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {unterschiedRows.map((row, index) => (
                      <tr key={row.dimension} className={index % 2 === 0 ? "bg-background" : "bg-background-elevated/40"}>
                        <td className="border-b border-border px-4 py-3 font-medium text-foreground">{row.dimension}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.oscam}</td>
                        <td className="border-b border-border px-4 py-3 text-muted">{row.icam}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Für die Praxis heißt das: Bei einer reinen OSCam-Einrichtung genügt meist ein Build
                aus dem Feed Ihres Images. Soll iCam mit eingebunden werden, prüfen Sie vorab, ob Image
                und Build die Komponente überhaupt unterstützen — wie iCam grundsätzlich arbeitet,
                erklärt die Seite{" "}
                <Link href="/icam" className="text-aqua underline underline-offset-4">
                  iCam auf Enigma2
                </Link>
                . Eine ausführliche technische Gegenüberstellung steht im Blogartikel{" "}
                <Link href="/blog/oscam-icam-unterschiede" className="text-aqua underline underline-offset-4">
                  OSCam und iCam im Vergleich
                </Link>
                .
              </p>
            </section>

            {/* deutschland */}
            <section id="deutschland" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam iCam in Deutschland – was im deutschsprachigen Raum zählt
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Im deutschsprachigen Raum ist Enigma2 auf Sat- und Kabelreceivern besonders
                verbreitet, und viele Nutzer betreiben Geräte von VU+, Dreambox, Zgemma, GigaBlue
                oder Octagon. Für die Suche nach einem <strong className="text-foreground">OSCam iCam
                Anbieter in Deutschland</strong> ist deshalb weniger der Firmensitz entscheidend als
                die Frage, ob der Support diese Geräte- und Image-Landschaft kennt.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Praktisch bedeutsam sind drei Dinge: <strong className="text-foreground">deutschsprachiger
                Support</strong>, damit technische Details verständlich besprochen werden können; ein{" "}
                <strong className="text-foreground">niederschwelliger Kontaktweg</strong> — bei
                OSCam-iCam ist das Team auf Deutsch per WhatsApp erreichbar; und die klare
                Erwartungshaltung, dass ein Anbieter ausschließlich technisch unterstützt und keine
                Zugangsdaten oder Kanäle bereitstellt.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Rechtlich gilt in Deutschland, Österreich und der Schweiz gleichermaßen: OSCam und
                iCam sind neutrale Software. Die rechtmäßige Nutzung setzt voraus, dass ausschließlich
                eigene, legal erworbene Zugangsberechtigungen eingebunden werden. Ein seriöser
                Anbieter kommuniziert das offen und macht keine anderslautenden Versprechen.
              </p>
            </section>

            {/* auswählen */}
            <section id="auswaehlen" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam iCam Anbieter auswählen: zehn Kriterien
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Der Markt an technischen Dienstleistern ist unübersichtlich. Diese zehn Kriterien
                helfen, einen passenden Anbieter von einem ungeeigneten zu unterscheiden — jeweils mit
                der Begründung, warum der Punkt zählt.
              </p>
              <ol className="flex flex-col gap-3">
                {kriterien.map((k, index) => (
                  <li key={k.titel} className="flex gap-4 rounded-2xl border border-border bg-background-elevated/40 p-5">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-base font-semibold text-foreground">{k.titel}</h3>
                      <p className="text-sm leading-relaxed text-muted">
                        <strong className="text-foreground">Warum das zählt:</strong> {k.warum}
                      </p>
                      <p className="text-sm leading-relaxed text-muted">
                        <strong className="text-foreground">So prüfen Sie es:</strong> {k.pruefen}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            {/* preise */}
            <section id="preise" className="flex scroll-mt-24 flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  OSCam iCam Preise – aktuelle Pakete
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  Die folgenden Einrichtungspakete entsprechen dem aktuellen Stand der Startseite.
                  Jedes Paket umfasst persönliche Fernunterstützung bei der OSCam- bzw.
                  iCam-Einrichtung, die gemeinsame Konfiguration der wichtigsten Dateien, auf Wunsch
                  Bouquets und EPG sowie Hilfe bei der Fehlersuche. Der Unterschied liegt in der
                  Laufzeit der Betreuung.
                </p>
              </div>
              <div className="grid w-full items-start gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredPlans.map((plan) => (
                  <FeaturedPlanCard key={plan.id} plan={plan} />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted">
                Preisstufen für 1 bis 3 Receiver sowie die Pakete „Basis-Einrichtung“, „Erweiterte
                Einrichtung“ und „Premium-Support“ finden Sie auf der{" "}
                <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
                  Support-Seite
                </Link>
                . Es gibt keine künstlichen Rabatte, keine zeitlich begrenzten Aktionen und keine
                versteckten Zusatzkosten — maßgeblich ist der aktuell angezeigte Preis.
              </p>
            </section>

            {/* preise verstehen */}
            <section id="preise-verstehen" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam Preise verstehen: Laufzeit statt Verbrauch
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Ein häufiges Missverständnis bei den Begriffen <strong className="text-foreground">OSCam
                Preis</strong> und <strong className="text-foreground">OSCam Kosten</strong>: Es geht
                nicht um ein Datenvolumen oder ein Abonnement für Inhalte. Bezahlt wird ein{" "}
                <strong className="text-foreground">Betreuungszeitraum</strong> — also über welche
                Dauer der technische Support für Ihre Einrichtung erreichbar ist und Anpassungen
                begleitet.
              </p>
              <div className="w-full overflow-x-auto rounded-2xl border border-border">
                {/* Fits a 320px phone without horizontal scrolling: below `sm` the Laufzeit
                    column is folded into the package cell, so the per-month column stays visible. */}
                <table className="w-full border-collapse text-left text-xs sm:text-sm">
                  <caption className="sr-only">OSCam iCam Pakete mit Laufzeit, Gesamtpreis und rechnerischem Monatspreis</caption>
                  <thead>
                    <tr className="bg-background-elevated">
                      <th scope="col" className="border-b border-border px-2.5 py-3 font-semibold text-foreground sm:px-4">
                        Paket
                      </th>
                      <th scope="col" className="hidden border-b border-border px-2.5 py-3 font-semibold text-foreground sm:table-cell sm:px-4">
                        Laufzeit
                      </th>
                      <th scope="col" className="border-b border-border px-2.5 py-3 text-right font-semibold text-foreground sm:px-4">
                        Preis
                      </th>
                      <th scope="col" className="border-b border-border px-2.5 py-3 text-right font-semibold text-foreground sm:px-4">
                        pro Monat*
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {planRows.map((row, index) => (
                      <tr key={row.id} className={index % 2 === 0 ? "bg-background" : "bg-background-elevated/40"}>
                        <td className="border-b border-border px-2.5 py-3 font-medium text-foreground sm:px-4">
                          {row.name}
                          <span className="block text-xs font-normal text-muted sm:hidden">{row.period}</span>
                        </td>
                        <td className="hidden whitespace-nowrap border-b border-border px-2.5 py-3 text-muted sm:table-cell sm:px-4">{row.period}</td>
                        <td className="whitespace-nowrap border-b border-border px-2.5 py-3 text-right text-foreground sm:px-4">{euro(row.price)}</td>
                        <td className="whitespace-nowrap border-b border-border px-2.5 py-3 text-right text-muted sm:px-4">{euro(row.perMonth)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs leading-relaxed text-muted">
                * Rechnerischer Wert (Gesamtpreis geteilt durch Monate), gerundet — nur zur
                Orientierung. Angegeben ist jeweils der Gesamtpreis für die genannte Laufzeit.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Die Tabelle zeigt: Bei 3 und 6 Monaten liegt der rechnerische Monatspreis gleich auf,
                ab 12 Monaten sinkt er deutlich, weil sich der einmalige Einrichtungsaufwand auf mehr
                Zeit verteilt. Für die Entscheidung sind zwei Fragen hilfreich: Wie sicher ist Ihr Setup
                schon heute — und wie wahrscheinlich sind in den nächsten Monaten Änderungen wie ein
                Image-Update oder ein neuer Receiver? Je mehr sich noch ändern kann, desto eher lohnt
                eine längere Betreuung.
              </p>
              <p className="text-base leading-relaxed text-muted">
                Wichtig für einen fairen Vergleich: Achten Sie auf den Gesamtpreis über die gesamte
                Laufzeit, nicht nur auf die erste Zahl. Ein seriöser Anbieter nennt beide Angaben
                offen und rechnet nichts klein.
              </p>
            </section>

            {/* welches paket */}
            <section id="welches-paket" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Welches OSCam Paket passt zu mir?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Das teuerste Paket ist nicht automatisch das richtige. Entscheidend sind Ihr
                Betreuungsbedarf, die gewünschte Laufzeit und wie viel Sie selbst übernehmen möchten.
                Eine grobe Orientierung:
              </p>
              <div className="flex flex-col gap-3">
                {paketEmpfehlung.map((p) => (
                  <div key={p.dann} className="flex flex-col gap-1.5 rounded-2xl border border-border bg-background-elevated/40 p-5">
                    <p className="text-sm leading-relaxed text-muted">
                      <strong className="text-foreground">Wenn</strong> {p.wenn} —{" "}
                      <strong className="text-foreground">dann</strong> kann das Paket „{p.dann}“ passen{" "}
                      <span className="text-muted">({p.hinweis})</span>.
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted">
                Sind Sie unsicher, welches Paket zu Ihrem Receiver und Ihrem Kenntnisstand passt,
                fragen Sie vor der Beauftragung kurz beim{" "}
                <Link href="/oscam-service" className="text-aqua underline underline-offset-4">
                  Support
                </Link>{" "}
                nach — das ist ausdrücklich erwünscht.
              </p>
            </section>

            {/* ablauf */}
            <section id="ablauf" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Ablauf der OSCam Einrichtung: von der Anfrage bis zum Betrieb
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Bei einem seriösen Anbieter ist der Ablauf nachvollziehbar. So sieht ein typischer
                Weg von der Anfrage bis zum laufenden Betrieb aus:
              </p>
              <ol className="flex flex-col gap-3">
                {[
                  "Erstkontakt: Sie schildern Receiver-Modell, Enigma2-Image und was Sie erreichen möchten.",
                  "Kurze Einschätzung: Der Support prüft, ob Ihr Setup unterstützt wird, und nennt ein passendes Paket.",
                  "Paketwahl: Sie entscheiden sich für eine Laufzeit — von der einmaligen Einrichtung bis zur längeren Betreuung.",
                  "Termin: Ein Zeitfenster für die Ferneinrichtung wird vereinbart; Sie halten Zugangsdaten zum Receiver und ein Backup bereit.",
                  "Ferneinrichtung: Gemeinsame Konfiguration von oscam.conf, oscam.server und oscam.user, auf Wunsch Bouquets und EPG.",
                  "Kontrolle: Der Status wird im OSCam WebIF geprüft, ein verschlüsselter Sender getestet, das Log gesichtet.",
                  "Nachbetreuung: Innerhalb der Paketlaufzeit klären Sie Rückfragen und Anpassungen mit dem Support.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-aqua text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-muted">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated/40 p-5">
                <h3 className="text-base font-semibold text-foreground">
                  Vor der Support-Anfrage: Das sollten Sie bereithalten
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Je vollständiger diese Angaben sind, desto schneller lässt sich die Eignung
                  einschätzen und desto kürzer wird die eigentliche Einrichtung:
                </p>
                <ul className="grid gap-2.5 sm:grid-cols-2">
                  {vorbereitung.map((item) => (
                    <li key={item.was} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span>
                        <strong className="text-foreground">{item.was}</strong> — {item.hinweis}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed text-muted">
                  Wie Sie den Receiver vorab technisch vorbereiten, erklärt der Artikel{" "}
                  <Link href="/blog/enigma2-receiver-oscam-vorbereiten" className="text-aqua underline underline-offset-4">
                    Enigma2-Receiver für OSCam vorbereiten
                  </Link>
                  .
                </p>
              </div>
              <p className="text-base leading-relaxed text-muted">
                Wichtig: Für die Fernunterstützung geben Sie Zugriff auf Ihren eigenen Receiver. Ein
                Anbieter braucht dafür keine Zugangsdaten zu Diensten Dritter — und ein seriöser
                Anbieter fragt auch nicht danach.
              </p>
            </section>

            {/* oscam kaufen */}
            <section id="oscam-kaufen" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam kaufen – was bedeutet das eigentlich?
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die Suchanfrage „OSCam kaufen“ ist verbreitet, aber genau genommen missverständlich.
                Die OSCam-Software ist <strong className="text-foreground">Open Source</strong> und
                frei verfügbar — sie kann und muss nicht gekauft werden. Was tatsächlich angeboten
                wird, sind Dienstleistungen und Support rund um die Software.
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                <li>
                  <strong className="text-foreground">OSCam-Software:</strong> quelloffen, kostenlos, aus dem
                  Feed des jeweiligen Enigma2-Images installierbar.
                </li>
                <li>
                  <strong className="text-foreground">Receiver-Konfiguration:</strong> die Anpassung der
                  Textdateien an Ihr Setup — Zeitaufwand, kein Warenwert.
                </li>
                <li>
                  <strong className="text-foreground">Technischer Service:</strong> die Leistung, die
                  tatsächlich einen Preis hat: Einrichtung, Fehleranalyse, Support.
                </li>
                <li>
                  <strong className="text-foreground">Anbieter- bzw. Servicepakete:</strong> gebündelte
                  Betreuung mit fester Laufzeit, wie in den Paketen oben.
                </li>
              </ul>
              <p className="text-base leading-relaxed text-muted">
                Wer also „OSCam kaufen“ sucht, sucht meist ein{" "}
                <strong className="text-foreground">Einrichtungs- oder Supportpaket</strong> — nicht die
                Software. Ein seriöser Anbieter macht diesen Unterschied transparent und verkauft
                keine Zugangsdaten oder Kanäle. Was ein solides Einrichtungspaket konkret enthält,
                steht oben im Abschnitt{" "}
                <a href="#leistungsumfang" className="text-aqua underline underline-offset-4">
                  Leistungsumfang
                </a>
                .
              </p>
            </section>

            {/* kompatibilität */}
            <section id="kompatibilitaet" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Kompatibilität prüfen: Receiver, Architektur, Image und Version
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Bevor Sie ein Paket buchen oder etwas an der Konfiguration ändern, sollten diese
                Punkte geklärt sein. Sie entscheiden darüber, ob ein Anbieter Ihr Setup überhaupt
                unterstützen kann — und die meisten lassen sich in wenigen Minuten selbst
                herausfinden:
              </p>
              <ol className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border">
                {kompatibilitaet.map((item, index) => (
                  <li key={item.punkt} className="flex gap-4 bg-background-elevated/40 p-4 sm:p-5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-aqua/50 text-xs font-semibold text-aqua">
                      {index + 1}
                    </span>
                    <div className="flex min-w-0 flex-col gap-1">
                      <h3 className="text-sm font-semibold text-foreground">{item.punkt}</h3>
                      <p className="text-sm leading-relaxed text-muted">{item.warum}</p>
                      <p className="break-words text-sm leading-relaxed text-muted">
                        <strong className="text-foreground">So finden Sie es heraus:</strong> {item.finden}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-base leading-relaxed text-muted">
                Können Sie einzelne Punkte nicht sicher beantworten, klären Sie sie vor der
                Entscheidung mit dem Support ab. Wie eine Grundinstallation abläuft, zeigt die{" "}
                <Link href="/oscam-installieren" className="text-aqua underline underline-offset-4">
                  allgemeine OSCam-Installationsanleitung
                </Link>
                ; die Bearbeitung der Konfigurationsdateien erklärt der Blogartikel{" "}
                <Link href="/blog/oscam-konfiguration-verstehen" className="text-aqua underline underline-offset-4">
                  OSCam Konfiguration verstehen
                </Link>
                . Wie Sie den Receiver vorab vorbereiten, steht im Artikel{" "}
                <Link href="/blog/enigma2-receiver-oscam-vorbereiten" className="text-aqua underline underline-offset-4">
                  Enigma2-Receiver für OSCam vorbereiten
                </Link>
                .
              </p>
              <figure className="flex flex-col gap-2 overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/home page/oscam-dreambox/oscam-dreambox-dm900-rueckseite-anschluesse-lan-usb-hdmi-tutorial.webp"
                  alt="Rückseite einer Dreambox DM900 mit beschrifteten Anschlüssen für Satellit, LAN, USB und HDMI sowie die Schritte zur OSCam-Einrichtung per SSH"
                  width={1920}
                  height={1280}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 700px"
                  className="h-auto w-full object-cover"
                />
                <figcaption className="px-4 pb-3 text-xs leading-relaxed text-muted">
                  LAN-Verbindung, SSH-Zugang und der Konfigurationspfad sind die Grundlage jeder
                  Fernunterstützung — hier am Beispiel einer Dreambox DM900.
                </figcaption>
              </figure>
            </section>

            {/* receiver */}
            <section id="receiver" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                OSCam für VU+, Dreambox und Zgemma: Kompatibilität nach Receiver
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Die Marke Ihres Receivers ändert nicht das Grundprinzip, aber die Details. Welche
                Images verbreitet sind, welche Architektur vorliegt und was Sie je Gerät prüfen sollten:
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {receiverBloecke.map((r) => (
                  <div key={r.name} className="flex flex-col gap-3 rounded-2xl border border-border bg-background-elevated/40 p-5">
                    <h3 className="text-base font-semibold text-foreground">{r.name}</h3>
                    <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm leading-relaxed">
                      <dt className="text-foreground">Images</dt>
                      <dd className="text-muted">{r.images}</dd>
                      <dt className="text-foreground">Architektur</dt>
                      <dd className="text-muted">{r.architektur}</dd>
                    </dl>
                    <p className="text-sm leading-relaxed text-muted">{r.text}</p>
                    <Link href={r.href} className="mt-auto w-fit text-sm font-semibold text-aqua underline underline-offset-4 transition-colors hover:text-aqua-soft">
                      {r.linkLabel} →
                    </Link>
                  </div>
                ))}
              </div>
            </section>

            <CtaBlock
              heading="Nicht sicher, welches Paket oder Setup passt?"
              text="Wenn die technische Eignung unklar ist oder Sie vor der Buchung Fragen haben: Auf der Service-Seite steht, wie die Unterstützung bei Einrichtung, Konfiguration und Fehleranalyse rund um OSCam auf Enigma2 abläuft."
              primary={{ href: "/oscam-service", label: "OSCam Service ansehen" }}
              secondary={{ href: "/", label: "Zur Startseite" }}
            />

            {/* checkliste */}
            <section id="checkliste" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Checkliste vor der Entscheidung
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Kurz zum Abhaken, bevor Sie sich für ein Paket oder einen Anbieter entscheiden:
              </p>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {checkliste.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-border bg-background-elevated/40 px-4 py-3 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-aqua/50 text-xs font-semibold text-aqua">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* fehler */}
            <section id="fehler" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Häufige Fehler bei Anbieterwahl und Konfiguration
              </h2>
              <h3 className="text-base font-semibold text-foreground">Bei der Auswahl eines OSCam Anbieters</h3>
              <p className="text-base leading-relaxed text-muted">
                Diese Fehler kosten am Ende Zeit oder Geld — und lassen sich alle vermeiden:
              </p>
              <ul className="flex flex-col gap-3 text-base leading-relaxed text-muted">
                {fehler.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden className="mt-1 text-aqua">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-2 text-base font-semibold text-foreground">Bei der Konfiguration</h3>
              <p className="text-base leading-relaxed text-muted">
                Auch nach der richtigen Anbieterwahl scheitern viele Einrichtungen an denselben
                technischen Details:
              </p>
              <div className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border">
                {konfigFehler.map((item) => (
                  <div key={item.fehler} className="grid gap-1 bg-background-elevated/40 p-4 sm:grid-cols-[220px_1fr] sm:gap-4">
                    <p className="text-sm font-semibold text-foreground">{item.fehler}</p>
                    <p className="break-words text-sm leading-relaxed text-muted">{item.loesung}</p>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted">
                Wenn nach der Einrichtung etwas nicht läuft, hilft der Blogartikel{" "}
                <Link href="/blog/oscam-fehler-loesungen" className="text-aqua underline underline-offset-4">
                  Häufige OSCam Fehler und Lösungen
                </Link>
                . Vor einem Versionswechsel lohnt der Artikel{" "}
                <Link href="/blog/oscam-updates-durchfuehren" className="text-aqua underline underline-offset-4">
                  OSCam Updates sicher durchführen
                </Link>
                .
              </p>
            </section>

            {/* vertrauen */}
            <section id="vertrauen" className="flex scroll-mt-24 flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                Was Sie von einem seriösen OSCam iCam Anbieter erwarten dürfen
              </h2>
              <p className="text-base leading-relaxed text-muted">
                Eine professionelle Anbieter- oder Serviceseite erkennt man weniger an großen
                Versprechen als an nüchterner Transparenz:
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {seriositaet.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-background-elevated/40 p-4 text-sm leading-relaxed text-muted"
                  >
                    <span aria-hidden className="mt-0.5 text-aqua">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-base leading-relaxed text-muted">
                Umgekehrt sind das typische Warnzeichen: konkrete Kanal- oder Senderlisten als
                Verkaufsargument, „unbegrenzt“ ohne jede technische Erklärung, Zeitdruck durch
                ständig ablaufende Aktionen, keine Angabe zu unterstützten Receivern und Images, sowie
                Support, der nur bis zum Kauf erreichbar ist. Wo eines dieser Merkmale auftritt, lohnt
                ein zweiter Blick.
              </p>
              <p className="text-base leading-relaxed text-muted">
                OSCam-iCam informiert ausschließlich über die technische Funktionsweise und
                unterstützt bei der Einrichtung mit eigenen, rechtmäßig erworbenen Berechtigungen. Es
                werden keine Zugangsdaten, keine Serverdaten und keine Kanäle bereitgestellt und keine
                Erfolgs- oder Verfügbarkeitsgarantien gegeben.
              </p>
            </section>

            <CtaBlock
              heading="OSCam iCam Anbieter gesucht? Sprechen Sie uns an."
              text="Auf der Startseite finden Sie den vollständigen Überblick zu OSCam und iCam für Enigma2. Für die persönliche Einschätzung, welches Paket und welches technische Setup zu Ihrem Receiver passt, führt die Service-Seite die Möglichkeiten auf."
              primary={{ href: "/oscam-service", label: "OSCam Service für Ihren Receiver" }}
              secondary={{ href: "/", label: "OSCam auf einen Blick" }}
            />

            {/* FAQ */}
            <section
              id="faq"
              className="flex scroll-mt-24 flex-col gap-5 rounded-3xl border border-border bg-background-elevated p-7"
            >
              <h2 className="text-xl font-semibold text-foreground">
                Häufige Fragen zu OSCam iCam Anbietern, Paketen und Preisen
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
                Weitere Antworten rund um OSCam, iCam und Enigma2 sammelt unsere{" "}
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

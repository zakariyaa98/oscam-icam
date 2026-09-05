export type BlogImage = {
  src: string;
  alt: string;
};

export type BlogTable = {
  headers: string[];
  rows: string[][];
  caption?: string;
};

export type BlogSection = {
  heading: string;
  body: string[];
  image?: BlogImage;
  list?: string[];
  table?: BlogTable;
  subsections?: { heading: string; body: string[]; list?: string[] }[];
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogSource = {
  label: string;
  url: string;
};

/**
 * Topic-cluster IDs used to group posts into pillar/spoke structures for
 * internal linking, "Related Articles" relevance scoring, and the
 * TopicCluster navigation component.
 */
export const BLOG_CLUSTERS = {
  grundlagen: "OSCam & iCam Grundlagen",
  konfiguration: "OSCam Konfiguration & Wartung",
  enigma2: "Enigma2 Receiver & Organisation",
} as const;

export type BlogClusterId = keyof typeof BLOG_CLUSTERS;

export const BLOG_CATEGORIES = [
  "Grundlagen",
  "Konfiguration",
  "Troubleshooting",
  "Updates",
  "Enigma2",
  "Vergleich",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes: number;
  category: BlogCategory;
  gradient?: "aurora" | "signal" | "midnight" | "circuit" | "horizon";
  image?: BlogImage;
  toc?: boolean;
  /** Short, self-contained answer bullets shown right under the intro — written for
   * AI Overviews / featured snippets / voice assistants that quote a page verbatim. */
  tldr?: string[];
  /** Focus + secondary keywords, used for the meta keywords hint and the Article
   * schema's `keywords` property (an actual entity signal, unlike the legacy meta tag). */
  keywords?: string[];
  clusterId?: BlogClusterId;
  /** Marks this post as the hub/pillar page of its cluster (broadest, most comprehensive). */
  isPillar?: boolean;
  intro: string[];
  sections: BlogSection[];
  conclusion: string[];
  faq: BlogFaqItem[];
  sources?: BlogSource[];
};

/**
 * Scores every other post by topical relevance to `post` (shared cluster, shared
 * category, shared significant title/excerpt words) and returns the top matches.
 * Replaces a fixed "first 2 other posts" list with genuine semantic relevance.
 */
const STOPWORDS = new Set([
  "und", "oder", "der", "die", "das", "des", "dem", "den", "für", "mit",
  "ihr", "ihre", "sind", "ist", "diese", "dieser", "dieses", "von", "auf",
  "über", "wie", "was", "eine", "einen", "einem", "einer", "nicht", "auch",
  "oscam", "icam", "2026",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-zäöüßa-z0-9]+/)
    .filter((word) => word.length > 3 && !STOPWORDS.has(word));
}

export function getRelatedPosts(post: BlogPost, allPosts: BlogPost[], limit = 3): BlogPost[] {
  const postTokens = new Set([...tokenize(post.title), ...tokenize(post.excerpt)]);

  const scored = allPosts
    .filter((candidate) => candidate.slug !== post.slug)
    .map((candidate) => {
      let score = 0;
      if (candidate.clusterId && candidate.clusterId === post.clusterId) score += 5;
      if (candidate.clusterId === post.clusterId && candidate.isPillar) score += 2;
      if (candidate.category === post.category) score += 2;

      const candidateTokens = new Set([...tokenize(candidate.title), ...tokenize(candidate.excerpt)]);
      for (const token of candidateTokens) {
        if (postTokens.has(token)) score += 1;
      }

      return { post: candidate, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.post.publishedAt < b.post.publishedAt ? 1 : -1;
    });

  return scored.slice(0, limit).map((entry) => entry.post);
}

export function getClusterPosts(clusterId: BlogClusterId, allPosts: BlogPost[]): BlogPost[] {
  return allPosts
    .filter((candidate) => candidate.clusterId === clusterId)
    .sort((a, b) => (a.isPillar === b.isPillar ? 0 : a.isPillar ? -1 : 1));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export const blogPosts: BlogPost[] = [
  {
    slug: "oscam-konfiguration-verstehen",
    title: "OSCam Konfiguration verstehen: oscam.conf, oscam.server und oscam.user erklärt",
    seoTitle: "OSCam Konfiguration verstehen: Die wichtigsten Dateien erklärt",
    metaDescription:
      "OSCam Konfiguration Schritt für Schritt erklärt: Aufbau von oscam.conf, oscam.server und oscam.user, mit Beispielen und den wichtigsten Begriffen.",
    excerpt:
      "Die drei zentralen OSCam-Konfigurationsdateien im Überblick: Was sie regeln, wie sie aufgebaut sind und worauf Sie bei der Bearbeitung achten sollten.",
    publishedAt: "2026-08-28",
    readingTimeMinutes: 10,
    category: "Grundlagen",
    gradient: "aurora",
    toc: true,
    isPillar: true,
    clusterId: "grundlagen",
    tldr: [
      "OSCam wird über drei zentrale Textdateien konfiguriert: oscam.conf, oscam.server und oscam.user.",
      "oscam.conf regelt allgemeine Einstellungen wie Ports, Logging und Verhalten des Dienstes.",
      "oscam.server definiert die Reader — also die Verbindungen zu Kartenlesern oder CI+-Modulen.",
      "oscam.user legt Benutzerkonten und deren Zugriffsrechte innerhalb der lokalen Konfiguration fest.",
      "Nach jeder Änderung sollte OSCam neu gestartet und die Logdatei auf Fehler geprüft werden.",
    ],
    keywords: [
      "OSCam Konfiguration",
      "oscam.conf",
      "oscam.server",
      "oscam.user",
      "OSCam Einrichtung",
    ],
    intro: [
      "Wer sich zum ersten Mal mit OSCam beschäftigt, stößt schnell auf eine Handvoll Dateinamen, die zunächst kryptisch wirken: oscam.conf, oscam.server, oscam.user. Dabei folgt die Konfiguration einem klaren, gut dokumentierten Schema — sobald man weiß, welche Datei wofür zuständig ist, verliert OSCam einen Großteil seines Schreckens.",
      "Dieser Artikel erklärt die drei zentralen Konfigurationsdateien, ihren grundsätzlichen Aufbau und die Begriffe, die dabei am häufigsten auftauchen. Er ersetzt keine vollständige Referenz, gibt aber die Grundlage, um die offizielle Dokumentation und weiterführende Anleitungen besser einordnen zu können.",
    ],
    sections: [
      {
        heading: "Wo liegen die Konfigurationsdateien?",
        body: [
          "Bei den meisten Enigma2-Installationen liegen die OSCam-Konfigurationsdateien im Verzeichnis /etc/tuxbox/config/oscam oder einem vergleichbaren Pfad, abhängig vom installierten Image. Der Zugriff erfolgt in der Regel über FTP, Telnet oder direkt über das OSCam WebIf, sofern dieses bereits eingerichtet ist.",
        ],
      },
      {
        heading: "oscam.conf: die Grundeinstellungen",
        body: [
          "oscam.conf ist die zentrale Konfigurationsdatei für das allgemeine Verhalten von OSCam. Sie ist in Abschnitte (sogenannte Sections) unterteilt, die jeweils mit eckigen Klammern beginnen, etwa [global] oder [webif].",
        ],
        list: [
          "[global]: grundlegende Einstellungen wie Logging-Verhalten und allgemeine Parameter.",
          "[webif]: Port, Benutzername und Passwort für die browserbasierte WebIf-Oberfläche.",
          "[monitor]: Einstellungen für die Monitor-Schnittstelle, etwa für Statusabfragen.",
        ],
        subsections: [
          {
            heading: "Typische Stolperfallen",
            body: [
              "Ein häufiger Fehler ist ein fehlendes oder falsch gesetztes Gleichheitszeichen zwischen Parameter und Wert. Auch doppelte Sections mit demselben Namen führen dazu, dass OSCam die Datei nicht korrekt einliest.",
            ],
          },
        ],
      },
      {
        heading: "oscam.server: Reader definieren",
        body: [
          "In oscam.server werden die sogenannten Reader eingetragen — also die Verbindungen zu einem lokal angeschlossenen Kartenleser oder einem CI+-Modul. Jeder Reader erhält einen eigenen Abschnitt mit einem frei wählbaren Namen.",
        ],
        table: {
          headers: ["Parameter", "Bedeutung"],
          rows: [
            ["label", "Frei wählbarer Name des Readers, wird auch im WebIf angezeigt"],
            ["protocol", "Art der Verbindung, z. B. für einen physisch angeschlossenen Kartenleser"],
            ["device", "Pfad zum Gerät, über das der Kartenleser angesprochen wird"],
            ["group", "Gruppenzuordnung, über die Nutzer später Zugriff auf den Reader erhalten"],
          ],
          caption: "Auszug typischer Parameter innerhalb eines Reader-Abschnitts in oscam.server.",
        },
      },
      {
        heading: "oscam.user: Benutzerkonten und Rechte",
        body: [
          "oscam.user verwaltet die lokalen Benutzerkonten, über die andere Programme oder Receiver auf die OSCam-Instanz zugreifen dürfen. Jeder Benutzer erhält eigene Zugangsdaten sowie Gruppenrechte, die festlegen, welche Reader er nutzen darf.",
          "Diese Trennung zwischen Reader (oscam.server) und Benutzer (oscam.user) über Gruppen ist ein zentrales Konzept: Sie erlaubt eine feingliedrige Steuerung, welcher Nutzer auf welche Quelle zugreifen darf, statt allen Beteiligten pauschal vollen Zugriff zu geben.",
        ],
      },
      {
        heading: "Das WebIf als Alternative zur manuellen Bearbeitung",
        body: [
          "Wer die direkte Bearbeitung der Textdateien scheut, kann viele Einstellungen auch über das browserbasierte OSCam WebIf vornehmen. Es zeigt zudem den aktuellen Status aller Reader übersichtlich an und erleichtert so die spätere Fehlersuche erheblich.",
        ],
      },
      {
        heading: "Nach Änderungen: Neustart und Log prüfen",
        body: [
          "Nach jeder Anpassung der Konfigurationsdateien sollte OSCam neu gestartet werden, damit die Änderungen wirksam werden. Ein Blick in die Logdatei zeigt anschließend, ob die Konfiguration fehlerfrei eingelesen wurde oder ob ein Syntaxfehler die Ursache für ausbleibende Funktion ist.",
        ],
      },
    ],
    conclusion: [
      "OSCam wirkt beim ersten Kontakt komplexer, als es tatsächlich ist. Sind die drei zentralen Dateien — oscam.conf für die Grundeinstellungen, oscam.server für die Reader und oscam.user für die Benutzerverwaltung — einmal verstanden, lässt sich die Konfiguration Schritt für Schritt nachvollziehen und gezielt anpassen.",
      "Eine praktische Anleitung zur Erstinstallation finden Sie auf unserer Seite [OSCam installieren](/oscam-installieren). Stoßen Sie dabei auf Fehler, hilft unser Blogartikel zu [häufigen OSCam-Fehlern](/blog/oscam-fehler-loesungen) weiter.",
    ],
    faq: [
      {
        question: "Wo finde ich die OSCam-Konfigurationsdateien auf meinem Receiver?",
        answer:
          "In der Regel im Verzeichnis /etc/tuxbox/config/oscam, erreichbar über FTP, Telnet oder das OSCam WebIf. Der genaue Pfad kann je nach Image leicht abweichen.",
      },
      {
        question: "Muss ich alle drei Dateien manuell bearbeiten?",
        answer:
          "Nicht zwingend — viele Einstellungen lassen sich auch über das WebIf vornehmen. Für ein grundlegendes Verständnis der Struktur lohnt sich aber ein Blick in die Rohdateien.",
      },
      {
        question: "Was passiert, wenn ich einen Syntaxfehler in oscam.conf mache?",
        answer:
          "OSCam kann die Datei dann nicht korrekt einlesen und startet möglicherweise nicht oder ignoriert den fehlerhaften Abschnitt. Die Logdatei zeigt in der Regel an, wo das Problem liegt.",
      },
      {
        question: "Was ist der Unterschied zwischen Reader und Benutzer?",
        answer:
          "Ein Reader (oscam.server) beschreibt eine Quelle, etwa einen angeschlossenen Kartenleser. Ein Benutzer (oscam.user) beschreibt, wer auf welche Reader zugreifen darf.",
      },
    ],
    sources: [
      {
        label: "Conditional Access – Wikipedia",
        url: "https://de.wikipedia.org/wiki/Conditional_Access",
      },
    ],
  },
  {
    slug: "oscam-fehler-loesungen",
    title: "Häufige OSCam Fehler und Lösungen",
    seoTitle: "OSCam Fehler: Häufige Ursachen und Lösungen",
    metaDescription:
      "Die häufigsten OSCam Fehler im Überblick: Reader verbindet nicht, Dienst startet nicht, Logdatei richtig lesen — mit praktischen Lösungsansätzen.",
    excerpt:
      "Reader verbindet nicht, OSCam startet nicht, Logdatei bleibt kryptisch: die häufigsten Ursachen für OSCam-Probleme und wie Sie sie eingrenzen.",
    publishedAt: "2026-08-29",
    readingTimeMinutes: 9,
    category: "Troubleshooting",
    gradient: "signal",
    toc: true,
    clusterId: "konfiguration",
    tldr: [
      "Die meisten OSCam-Probleme lassen sich anhand der Logdatei eingrenzen — sie ist der erste Ansprechpartner bei jeder Fehlersuche.",
      "Ein nicht startender Dienst deutet meist auf einen Syntaxfehler in einer der Konfigurationsdateien hin.",
      "Ein Reader, der auf 'nicht verbunden' steht, hat häufig eine falsche Geräteangabe oder ein Hardwareproblem.",
      "Nach jeder Änderung an der Konfiguration hilft ein vollständiger Neustart von OSCam, statt nur die Datei neu zu laden.",
      "Bleibt das Problem bestehen, lohnt sich der Vergleich mit einer bekannt funktionierenden Beispielkonfiguration.",
    ],
    keywords: ["OSCam Fehler", "OSCam Troubleshooting", "OSCam startet nicht", "OSCam Reader Problem"],
    intro: [
      "Kaum eine OSCam-Einrichtung verläuft komplett ohne Umwege. Ein Reader verbindet nicht, der Dienst startet gar nicht erst, oder die Logdatei wirft Meldungen aus, die auf den ersten Blick wenig aussagekräftig erscheinen. Die gute Nachricht: Die allermeisten Probleme lassen sich auf eine überschaubare Anzahl bekannter Ursachen zurückführen.",
      "Dieser Artikel sammelt die häufigsten OSCam-Fehlerbilder und zeigt, wie Sie systematisch vorgehen, um die Ursache einzugrenzen — von der Logdatei bis zur Reader-Konfiguration.",
    ],
    sections: [
      {
        heading: "Der erste Schritt: die Logdatei lesen",
        body: [
          "Bevor Sie an der Konfiguration herumprobieren, lohnt sich immer zuerst ein Blick in die OSCam-Logdatei. Sie protokolliert Startvorgänge, Verbindungsversuche der Reader und aufgetretene Fehler mit Zeitstempel — meist reicht das, um die Fehlerquelle grob einzugrenzen.",
        ],
      },
      {
        heading: "OSCam startet nicht",
        body: [
          "Startet der Dienst gar nicht erst, liegt die Ursache in den meisten Fällen an einem Syntaxfehler in einer der Konfigurationsdateien — häufig ein fehlendes Gleichheitszeichen, eine doppelte Section oder ein nicht geschlossener Klammerausdruck.",
        ],
        subsections: [
          {
            heading: "Vorgehensweise",
            body: [
              "Prüfen Sie zunächst oscam.conf auf offensichtliche Tippfehler. Kommentieren Sie im Zweifel zuletzt geänderte Abschnitte testweise aus, um herauszufinden, welcher Teil der Konfiguration den Start verhindert.",
            ],
          },
        ],
      },
      {
        heading: "Reader zeigt 'nicht verbunden'",
        body: [
          "Ein Reader, der dauerhaft als nicht verbunden angezeigt wird, hat meist eine falsche Geräteangabe in oscam.server, ein Kabel- oder Kontaktproblem am Kartenleser oder eine nicht kompatible Hardware-Konfiguration.",
        ],
        list: [
          "Geräteangabe (device) in oscam.server auf Korrektheit prüfen.",
          "Physische Verbindung zum Kartenleser bzw. CI+-Modul kontrollieren.",
          "Reader testweise in einer minimalen, bekannt funktionierenden Konfiguration einbinden.",
        ],
      },
      {
        heading: "OSCam WebIf lässt sich nicht öffnen",
        body: [
          "Lässt sich das WebIf nicht im Browser aufrufen, ist häufig der in oscam.conf hinterlegte Port bereits belegt, falsch eingetragen oder durch eine Firewall blockiert. Ein Blick in den [webif]-Abschnitt der Konfiguration schafft meist Klarheit.",
        ],
      },
      {
        heading: "Nach einem Update funktioniert nichts mehr",
        body: [
          "Nach einem Update kann es vorkommen, dass sich das Format einzelner Konfigurationsparameter geändert hat. Ein Vergleich der eigenen Konfiguration mit der mitgelieferten Beispieldatei (oft mit der Endung .default) hilft, veraltete oder nicht mehr unterstützte Parameter zu identifizieren.",
        ],
      },
      {
        heading: "Wenn gar nichts hilft",
        body: [
          "Bleibt die Ursache trotz Logdatei und Konfigurationsvergleich unklar, kann eine minimale Testkonfiguration mit nur einem Reader helfen, das Problem einzugrenzen. Kommen Sie eigenständig nicht weiter, unterstützt Sie unser [Support-Team](/oscam-service) persönlich bei der Fehlersuche.",
        ],
      },
    ],
    conclusion: [
      "Die meisten OSCam-Probleme sind keine Blackbox: Logdatei prüfen, Konfiguration auf Syntaxfehler kontrollieren und Reader-Einstellungen mit einer funktionierenden Referenz vergleichen, löst einen Großteil der Fälle. Wie die Konfigurationsdateien grundsätzlich aufgebaut sind, erklärt unser Artikel [OSCam Konfiguration verstehen](/blog/oscam-konfiguration-verstehen).",
    ],
    faq: [
      {
        question: "Wo finde ich die OSCam-Logdatei?",
        answer:
          "Der genaue Pfad hängt vom Image ab, meist lässt sich das Log aber direkt über das OSCam WebIf einsehen oder liegt im Konfigurationsverzeichnis.",
      },
      {
        question: "Warum startet OSCam nach einer Konfigurationsänderung nicht mehr?",
        answer:
          "Meist wegen eines Syntaxfehlers in der zuletzt geänderten Datei. Ein Vergleich mit der vorherigen, funktionierenden Version hilft bei der Eingrenzung.",
      },
      {
        question: "Mein Reader war verbunden und ist plötzlich offline. Was tun?",
        answer:
          "Prüfen Sie zunächst die physische Verbindung und ob sich an der Geräteangabe in oscam.server etwas geändert hat, etwa durch ein Firmware-Update.",
      },
      {
        question: "Hilft ein Neustart des Receivers bei OSCam-Problemen?",
        answer:
          "In manchen Fällen ja, insbesondere bei blockierten Ports oder hängenden Prozessen. Er ersetzt aber keine Prüfung der Konfiguration bei strukturellen Fehlern.",
      },
    ],
  },
  {
    slug: "oscam-updates-durchfuehren",
    title: "OSCam Updates richtig durchführen",
    seoTitle: "OSCam Updates durchführen: So geht es sicher",
    metaDescription:
      "OSCam Updates richtig durchführen: Warum Aktualisierungen wichtig sind, wie Sie vorgehen und wie Sie Ihre Konfiguration vorher sichern.",
    excerpt:
      "Warum regelmäßige OSCam-Updates sinnvoll sind, wie der Aktualisierungsprozess abläuft und wie Sie Ihre bestehende Konfiguration dabei absichern.",
    publishedAt: "2026-08-30",
    readingTimeMinutes: 8,
    category: "Updates",
    gradient: "midnight",
    toc: true,
    clusterId: "konfiguration",
    tldr: [
      "OSCam-Updates bringen Fehlerbehebungen, Kompatibilitätsverbesserungen und gelegentlich neue Funktionen.",
      "Vor jedem Update sollte die bestehende Konfiguration gesichert werden, um im Zweifel zurückkehren zu können.",
      "Die Aktualisierung erfolgt je nach Image über den Plugin-Feed, ein Online-Update-Skript oder eine manuelle IPK-Installation.",
      "Nach einem Update lohnt sich ein Vergleich der Konfiguration mit der aktuellen Beispieldatei, da sich Parameter ändern können.",
      "Ein kurzer Funktionstest aller Reader nach dem Update verhindert unangenehme Überraschungen im Alltag.",
    ],
    keywords: ["OSCam Update", "OSCam aktualisieren", "OSCam Version"],
    intro: [
      "Wie jede aktiv weiterentwickelte Software profitiert auch OSCam von regelmäßigen Updates — sei es wegen Fehlerbehebungen, verbesserter Kompatibilität mit neuer Hardware oder gelegentlich neuen Funktionen. Gleichzeitig kann ein unvorsichtig durchgeführtes Update eine zuvor funktionierende Konfiguration durcheinanderbringen.",
      "Dieser Artikel zeigt, wie Sie ein OSCam-Update strukturiert angehen, ohne bestehende Einstellungen zu riskieren.",
    ],
    sections: [
      {
        heading: "Warum überhaupt aktualisieren?",
        body: [
          "Updates schließen bekannte Fehler, verbessern die Stabilität und sorgen dafür, dass OSCam mit aktuellen Enigma2-Images kompatibel bleibt. Wer über längere Zeit keine Updates durchführt, riskiert Inkompatibilitäten mit neueren Plugins oder Firmware-Versionen.",
        ],
      },
      {
        heading: "Vor dem Update: Konfiguration sichern",
        body: [
          "Bevor Sie ein Update starten, sollten Sie die bestehenden Konfigurationsdateien (oscam.conf, oscam.server, oscam.user) auf einen PC oder ein anderes Verzeichnis kopieren. So lässt sich im Fehlerfall problemlos zur vorherigen, funktionierenden Version zurückkehren.",
        ],
      },
      {
        heading: "Update über den Plugin-Feed",
        body: [
          "Bei den meisten Enigma2-Images lässt sich OSCam bequem über den Plugin-Feed aktualisieren: Menü öffnen, nach verfügbaren Updates suchen, OSCam-Eintrag auswählen und die Installation bestätigen. Diese Variante ist am wenigsten fehleranfällig, da das Image die Kompatibilität der Version bereits geprüft hat.",
        ],
      },
      {
        heading: "Manuelles Update per IPK-Datei",
        body: [
          "Ist die gewünschte Version nicht über den Feed verfügbar, lässt sich OSCam auch manuell über eine passende IPK-Datei aktualisieren — etwa per FTP-Upload und anschließender Installation über Telnet. Diese Methode erfordert etwas mehr technisches Verständnis und sollte nur mit einer zur Receiver-Architektur passenden Datei erfolgen.",
        ],
      },
      {
        heading: "Nach dem Update: Konfiguration prüfen",
        body: [
          "Nach der Aktualisierung sollten Sie die Konfigurationsdateien mit der aktuellen Beispieldatei vergleichen, da sich Parameter zwischen Versionen gelegentlich ändern oder umbenannt werden. Ein Blick ins Änderungsprotokoll (Changelog) der jeweiligen Version gibt Aufschluss über relevante Anpassungen.",
        ],
      },
      {
        heading: "Reader-Funktion nach dem Update testen",
        body: [
          "Prüfen Sie abschließend über das WebIf, ob alle Reader wie gewohnt als verbunden angezeigt werden. Bleibt ein Reader offline, hilft unser Artikel zu [häufigen OSCam-Fehlern](/blog/oscam-fehler-loesungen) bei der weiteren Eingrenzung.",
        ],
      },
    ],
    conclusion: [
      "Ein OSCam-Update ist in der Regel unkompliziert, sofern die Konfiguration vorher gesichert und danach überprüft wird. Wer diese beiden Schritte konsequent einhält, profitiert von den Verbesserungen neuer Versionen, ohne eine bestehende Einrichtung zu riskieren.",
    ],
    faq: [
      {
        question: "Wie oft sollte ich OSCam aktualisieren?",
        answer:
          "Es gibt keine feste Regel — sinnvoll ist ein Update, sobald eine neue stabile Version im Plugin-Feed Ihres Images verfügbar ist oder ein bekanntes Problem behoben wurde.",
      },
      {
        question: "Was passiert mit meiner Konfiguration bei einem Update?",
        answer:
          "In der Regel bleiben die Konfigurationsdateien erhalten, eine Sicherung vorab ist aber dennoch empfehlenswert, falls sich Parameter zwischen Versionen ändern.",
      },
      {
        question: "Kann ich ein Update rückgängig machen?",
        answer:
          "Mit einer vorherigen Sicherung der Konfigurationsdateien und, falls verfügbar, der vorherigen IPK-Datei lässt sich der vorige Zustand meist wiederherstellen.",
      },
      {
        question: "Muss ich nach einem Update alle Reader neu einrichten?",
        answer:
          "In der Regel nicht — die Reader-Konfiguration bleibt bestehen. Prüfen Sie nach dem Update dennoch, ob alle Reader weiterhin korrekt verbunden sind.",
      },
    ],
  },
  {
    slug: "oscam-icam-unterschiede",
    title: "OSCam und iCam: Die wichtigsten Unterschiede erklärt",
    seoTitle: "OSCam vs. iCam: Die Unterschiede im Überblick",
    metaDescription:
      "OSCam und iCam im Vergleich: gemeinsames Grundprinzip, Unterschiede bei Konfiguration und Protokollen sowie Entscheidungshilfen für Ihr Setup.",
    excerpt:
      "OSCam und iCam verfolgen ein ähnliches Grundprinzip, unterscheiden sich aber in Details. Ein strukturierter Vergleich beider Softcam-Lösungen.",
    publishedAt: "2026-08-31",
    readingTimeMinutes: 8,
    category: "Vergleich",
    gradient: "circuit",
    toc: true,
    clusterId: "grundlagen",
    tldr: [
      "OSCam und iCam sind beides Softcam-Clients für Linux-basierte Receiver mit einem ähnlichen Grundprinzip.",
      "Unterschiede zeigen sich vor allem in Konfigurationssyntax, Entwicklungsstand und unterstützten Protokollen.",
      "Beide lassen sich grundsätzlich auf denselben Enigma2-Receivern einbinden.",
      "Welche Variante besser passt, hängt von der konkreten Hardware und den persönlichen Präferenzen ab.",
    ],
    keywords: ["OSCam iCam Unterschiede", "OSCam vs iCam", "iCam oder OSCam"],
    intro: [
      "OSCam und iCam werden häufig in einem Atemzug genannt — kein Zufall, denn beide Programme lösen dieselbe grundlegende Aufgabe: die Vermittlung zwischen einem Enigma2-Receiver und einem angeschlossenen Conditional-Access-Modul oder Kartenleser. Trotzdem unterscheiden sie sich in einigen technischen Details, die für die Wahl der passenden Lösung relevant sein können.",
      "Dieser Artikel stellt beide Ansätze gegenüber und ordnet ein, worauf es bei der Entscheidung ankommt.",
    ],
    sections: [
      {
        heading: "Das gemeinsame Grundprinzip",
        body: [
          "Sowohl [OSCam](/oscam) als auch [iCam](/icam) laufen als eigenständiger Dienst im Hintergrund eines Linux-basierten Receivers. Beide nehmen Entschlüsselungsanfragen des Receivers entgegen und leiten sie an einen konfigurierten Reader weiter — einen lokal angeschlossenen Kartenleser oder ein CI+-Modul.",
        ],
      },
      {
        heading: "Unterschiede im Überblick",
        body: [
          "Auf den ersten Blick wirken beide Lösungen sehr ähnlich. Bei genauerem Hinsehen zeigen sich jedoch einige Unterschiede:",
        ],
        table: {
          headers: ["Aspekt", "OSCam", "iCam"],
          rows: [
            ["Konfigurationssyntax", "Mehrere Textdateien (conf/server/user)", "Eigene Syntax, in Teilen abweichend"],
            ["WebIf", "Umfangreiche browserbasierte Oberfläche", "Je nach Version unterschiedlich ausgeprägt"],
            ["Community & Dokumentation", "Breit etabliert, viele Anleitungen", "Kleinere, spezialisierte Community"],
            ["Protokollunterstützung", "Breite Unterstützung verschiedener Protokolle", "Fokus auf bestimmte Anwendungsfälle"],
          ],
          caption: "Vereinfachte Gegenüberstellung — der konkrete Funktionsumfang hängt von der jeweiligen Version ab.",
        },
      },
      {
        heading: "Welche Lösung passt zu welchem Setup?",
        body: [
          "Für Einsteiger, die von einer breiten Dokumentation und einer etablierten Community profitieren möchten, ist OSCam meist der naheliegendere Einstieg. iCam kann in spezifischen Setups eine sinnvolle Alternative sein, etwa wenn bestimmte Protokolleigenschaften benötigt werden.",
        ],
      },
      {
        heading: "Lässt sich zwischen beiden gewechselt werden?",
        body: [
          "Grundsätzlich ja — beide Programme laufen unabhängig voneinander, ein Wechsel bedeutet aber, die Konfiguration (Reader, Benutzer) im jeweils anderen Format neu anzulegen. Ein paralleler Betrieb beider Dienste auf demselben Receiver ist technisch möglich, aber selten sinnvoll.",
        ],
      },
    ],
    conclusion: [
      "OSCam und iCam unterscheiden sich weniger im grundsätzlichen Zweck als in Detailfragen rund um Konfiguration, Dokumentation und Protokollunterstützung. Für die meisten Standardanwendungen auf Enigma2-Receivern ist OSCam aufgrund seiner breiten Verbreitung der pragmatischere Einstieg — eine ausführliche Installationsanleitung finden Sie unter [OSCam installieren](/oscam-installieren).",
    ],
    faq: [
      {
        question: "Ist iCam eine Weiterentwicklung von OSCam?",
        answer:
          "Nein, beide sind eigenständige Softwareprojekte mit ähnlichem Zweck, aber unterschiedlicher Entwicklungsgeschichte.",
      },
      {
        question: "Kann ich OSCam und iCam gleichzeitig nutzen?",
        answer:
          "Technisch ist ein paralleler Betrieb möglich, in der Praxis aber selten notwendig und erhöht die Komplexität der Konfiguration unnötig.",
      },
      {
        question: "Welches Programm hat mehr Anleitungen und Dokumentation?",
        answer:
          "OSCam ist deutlich weiter verbreitet und verfügt entsprechend über mehr frei verfügbare Dokumentation und Community-Ressourcen.",
      },
    ],
  },
  {
    slug: "enigma2-receiver-oscam-vorbereiten",
    title: "Enigma2 Receiver für OSCam vorbereiten: Systemvoraussetzungen & Grundlagen",
    seoTitle: "Enigma2 für OSCam vorbereiten: Voraussetzungen im Überblick",
    metaDescription:
      "Enigma2 Receiver richtig auf OSCam vorbereiten: Firmware-Update, Netzwerkverbindung, Speicherplatz und weitere Voraussetzungen im Überblick.",
    excerpt:
      "Bevor OSCam installiert wird, sollten einige Grundvoraussetzungen stimmen. Ein Überblick über Firmware, Netzwerk und Hardware-Anforderungen.",
    publishedAt: "2026-09-01",
    readingTimeMinutes: 7,
    category: "Enigma2",
    gradient: "horizon",
    toc: true,
    clusterId: "enigma2",
    isPillar: true,
    tldr: [
      "Ein aktuelles Enigma2-Image ist die wichtigste Grundvoraussetzung für eine reibungslose OSCam-Installation.",
      "Eine stabile Netzwerkverbindung, idealerweise per LAN-Kabel, verhindert spätere Verbindungsprobleme.",
      "Ausreichend freier Speicherplatz auf dem Receiver wird für Plugin und Logdateien benötigt.",
      "Ein funktionierender Kartenleser bzw. ein CI+-Modul mit rechtmäßiger Berechtigung muss physisch vorhanden sein.",
      "FTP- oder Telnet-Zugriff erleichtert die spätere Konfiguration erheblich.",
    ],
    keywords: ["Enigma2 OSCam vorbereiten", "Enigma2 Systemvoraussetzungen", "OSCam Voraussetzungen"],
    intro: [
      "Eine funktionierende OSCam-Installation beginnt nicht mit der Konfigurationsdatei, sondern mit einem gut vorbereiteten Receiver. Wer die grundlegenden Voraussetzungen vorab prüft, erspart sich bei der eigentlichen Einrichtung einige der häufigsten Stolperfallen.",
      "Dieser Artikel fasst zusammen, worauf Sie achten sollten, bevor Sie mit der eigentlichen OSCam-Installation beginnen.",
    ],
    sections: [
      {
        heading: "Aktuelles Enigma2-Image",
        body: [
          "Prüfen Sie zunächst, ob auf Ihrem Receiver ein aktuelles Enigma2-Image installiert ist. Ein veraltetes Image kann dazu führen, dass OSCam gar nicht erst im Plugin-Feed erscheint oder mit neueren Versionen nicht kompatibel ist. Das Update erfolgt in der Regel über das Einstellungsmenü des Receivers.",
        ],
      },
      {
        heading: "Stabile Netzwerkverbindung",
        body: [
          "Auch wenn OSCam selbst nicht zwingend eine Internetverbindung benötigt, ist eine stabile Netzwerkanbindung für WebIf-Zugriff, Updates und die Fernwartung über FTP oder Telnet praktisch unverzichtbar. Eine LAN-Verbindung ist einer WLAN-Verbindung in puncto Stabilität meist vorzuziehen.",
        ],
        image: {
          src: "/images/internet-speed.png",
          alt: "Symbolbild: Geschwindigkeitstest und Router als Sinnbild für eine stabile Netzwerkverbindung",
        },
      },
      {
        heading: "Ausreichend Speicherplatz",
        body: [
          "OSCam selbst ist vergleichsweise sparsam, Logdateien können bei intensiver Nutzung aber wachsen. Prüfen Sie vorab den verfügbaren Speicherplatz auf dem Receiver, insbesondere bei älteren Modellen mit begrenztem internen Flash-Speicher.",
        ],
      },
      {
        heading: "Kartenleser oder CI+-Modul",
        body: [
          "OSCam benötigt eine physische Quelle für die Entschlüsselung — einen kompatiblen Kartenleser mit einer rechtmäßig erworbenen Smartcard oder ein CI+-Modul. Ohne eine solche Quelle lässt sich zwar die Software installieren, ein sinnvoller Betrieb ist jedoch nicht möglich.",
        ],
      },
      {
        heading: "FTP- oder Telnet-Zugriff einrichten",
        body: [
          "Für die komfortable Bearbeitung der Konfigurationsdateien empfiehlt sich vorab die Aktivierung von FTP- oder Telnet-Zugriff im Receiver-Menü. Das erspart bei der eigentlichen Konfiguration den Umweg über die Fernbedienung.",
        ],
      },
    ],
    conclusion: [
      "Mit einem aktuellen Image, stabiler Netzwerkverbindung, ausreichend Speicherplatz und vorbereitetem Fernzugriff steht einer reibungslosen OSCam-Installation kaum noch etwas im Weg. Die eigentliche Einrichtung beschreibt unsere Anleitung [OSCam installieren](/oscam-installieren) Schritt für Schritt.",
    ],
    faq: [
      {
        question: "Brauche ich zwingend eine Internetverbindung für OSCam?",
        answer:
          "Für den reinen Betrieb nicht zwingend, für WebIf-Zugriff, Updates und Fernwartung ist eine Netzwerkverbindung aber praktisch unverzichtbar.",
      },
      {
        question: "Wie viel Speicherplatz benötigt OSCam?",
        answer:
          "OSCam selbst benötigt wenig Speicherplatz, Logdateien können bei intensiver Nutzung über die Zeit aber anwachsen und sollten gelegentlich geprüft werden.",
      },
      {
        question: "Funktioniert OSCam ohne Kartenleser?",
        answer:
          "Die Software lässt sich zwar installieren, ein sinnvoller Betrieb setzt aber einen angeschlossenen Kartenleser oder ein CI+-Modul mit rechtmäßiger Berechtigung voraus.",
      },
    ],
  },
  {
    slug: "enigma2-bouquets-epg-organisieren",
    title: "Bouquets und EPG unter Enigma2 organisieren",
    seoTitle: "Enigma2 Bouquets und EPG organisieren: Praxistipps",
    metaDescription:
      "Bouquets und EPG unter Enigma2 sinnvoll organisieren: Struktur, Favoriten und typische Ursachen, wenn der Programmführer nicht korrekt lädt.",
    excerpt:
      "Eine gut organisierte Kanalliste und ein funktionierender Programmführer machen den Alltag mit Enigma2-Receivern deutlich angenehmer.",
    publishedAt: "2026-09-02",
    readingTimeMinutes: 8,
    category: "Enigma2",
    gradient: "aurora",
    toc: true,
    clusterId: "enigma2",
    tldr: [
      "Bouquets sind die Kanallisten in Enigma2 und lassen sich frei nach eigenen Kriterien organisieren.",
      "Ein separates Favoriten-Bouquet spart im Alltag Zeit gegenüber einer langen Gesamtliste.",
      "EPG-Daten (elektronischer Programmführer) stammen bei Enigma2 aus mehreren möglichen Quellen.",
      "Ein leerer Programmführer liegt häufiger an einer falschen EPG-Quelle als an der Bouquet-Konfiguration selbst.",
    ],
    keywords: ["Enigma2 Bouquets", "Enigma2 EPG", "Enigma2 Kanalliste organisieren"],
    intro: [
      "Eine unübersichtliche Kanalliste ist einer der häufigsten Frustpunkte im Alltag mit Enigma2-Receivern. Dabei lässt sich mit wenigen gezielten Anpassungen an Bouquets und Programmführer viel gewinnen — unabhängig davon, ob der Receiver mit OSCam, iCam oder klassisch per Satellit betrieben wird.",
      "Dieser Artikel zeigt, wie Bouquets grundsätzlich aufgebaut sind, wie Sie sie sinnvoll strukturieren und woran es liegt, wenn der elektronische Programmführer (EPG) nicht wie erwartet funktioniert.",
    ],
    sections: [
      {
        heading: "Was sind Bouquets?",
        body: [
          "Bouquets sind die Kanallisten in Enigma2 — vergleichbar mit Favoritenlisten, die sich frei benennen, sortieren und nach eigenen Kriterien gruppieren lassen. Jeder Sender lässt sich einem oder mehreren Bouquets zuordnen.",
        ],
      },
      {
        heading: "Bouquets sinnvoll strukturieren",
        body: [
          "Statt einer einzigen, sehr langen Senderliste lohnt sich eine thematische Aufteilung.",
        ],
        list: [
          "Ein eigenes Favoriten-Bouquet für regelmäßig genutzte Sender anlegen.",
          "Selten genutzte Kategorien ausblenden oder in ein eigenes, nachrangiges Bouquet verschieben.",
          "Reihenfolge über den Bouquet-Editor der Fernbedienung an die eigene Nutzung anpassen.",
          "Nach größeren Änderungen die Bouquet-Liste neu laden, statt alte und neue Einträge zu vermischen.",
        ],
      },
      {
        heading: "Woher kommen EPG-Daten unter Enigma2?",
        body: [
          "Der elektronische Programmführer bezieht seine Daten je nach Konfiguration aus unterschiedlichen Quellen: aus dem Satellitensignal selbst, aus einer separaten XMLTV-Quelle oder über ein zusätzliches EPG-Plugin. Welche Quelle aktiv ist, lässt sich in den EPG-Einstellungen des jeweiligen Images einsehen.",
        ],
      },
      {
        heading: "Wenn der Programmführer leer bleibt",
        body: [
          "Bleibt die Programmvorschau leer, liegt das häufiger an einer fehlenden oder falsch hinterlegten EPG-Quelle als an der Bouquet-Konfiguration selbst. Ein Blick in die EPG-Einstellungen sowie ein manuelles Neuladen der Daten löst dieses Problem in vielen Fällen.",
        ],
      },
    ],
    conclusion: [
      "Eine aufgeräumte Bouquet-Struktur und eine korrekt eingerichtete EPG-Quelle machen den größten Unterschied im täglichen Umgang mit einem Enigma2-Receiver. Gerätespezifische Hinweise dazu finden Sie auf unseren Seiten zu [VU+](/oscam-vu-plus), [Dreambox](/oscam-dreambox) und [Zgemma](/oscam-zgemma).",
    ],
    faq: [
      {
        question: "Wie erstelle ich ein neues Bouquet?",
        answer:
          "Über den Bouquet-Editor, erreichbar über die Fernbedienung oder das WebIf des Receivers — dort lassen sich neue Listen anlegen und Sender per Drag-and-drop oder Tastenkombination zuordnen.",
      },
      {
        question: "Warum funktioniert mein EPG nicht?",
        answer:
          "Meist, weil keine oder eine falsche EPG-Quelle hinterlegt ist. Prüfen Sie die EPG-Einstellungen Ihres Images und laden Sie die Daten testweise manuell neu.",
      },
      {
        question: "Kann ich Bouquets zwischen Receivern übertragen?",
        answer:
          "Ja, die entsprechenden Bouquet-Dateien lassen sich per FTP kopieren, sofern beide Receiver ein kompatibles Enigma2-Image nutzen.",
      },
    ],
  },
];

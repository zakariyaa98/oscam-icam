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
  grundlagen: "IPTV Grundlagen & Umstieg vom Kabel",
  geraete: "IPTV Geräte & Einrichtung",
  anbieter: "IPTV Anbieter, Qualität & Vergleich",
} as const;

export type BlogClusterId = keyof typeof BLOG_CLUSTERS;

export const BLOG_CATEGORIES = [
  "IPTV Ratgeber",
  "Live-Streaming",
  "Fire TV Stick",
  "Smart TV",
  "Unterhaltung",
  "Anleitungen",
  "Tipps",
  "Vergleich",
  "News",
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
  "iptv", "2026", "guide",
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

export const blogPosts: BlogPost[] = [
  {
    slug: "iptv-player-vergleich",
    title: "IPTV Player im Vergleich: Die richtige App für Ihr Gerät finden",
    seoTitle: "IPTV Player Vergleich: Die passende App für Ihr Gerät (2026)",
    metaDescription:
      "IPTV Player im Vergleich: Wie sich TiviMate, IPTV Smarters Pro und andere Apps unterscheiden und welcher Player zu Smart TV, Fire TV Stick oder Android TV passt.",
    excerpt:
      "Der IPTV Player entscheidet mit über Bildqualität, Bedienkomfort und Stabilität. Ein Überblick über gängige Apps und welche zu welchem Gerät passt.",
    publishedAt: "2026-08-28",
    readingTimeMinutes: 9,
    category: "Vergleich",
    gradient: "signal",
    image: {
      src: "/images/streaming-geraete.png",
      alt: "IPTV Player App mit Senderübersicht auf einem Fernsehbildschirm",
    },
    toc: true,
    tldr: [
      "Ein IPTV Player ist die App, die Zugangsdaten oder eine Playlist-URL lädt und Sender, EPG und VOD-Bibliothek anzeigt — getrennt vom eigentlichen IPTV Anbieter.",
      "Gängige Player unterscheiden sich vor allem bei EPG-Darstellung, Favoritenverwaltung, Mehrgeräte-Unterstützung und Bedienkomfort.",
      "TiviMate und ähnliche Apps sind vor allem auf Android TV und Fire TV Stick verbreitet, Samsung- und LG-Fernseher nutzen meist herstellereigene Stores.",
      "Die meisten Player unterstützen die Formate M3U/M3U8 und Xtream Codes — beide erhalten Sie in der Regel direkt von Ihrem IPTV Anbieter.",
      "Bei Problemen mit Ruckeln oder einer leeren Senderliste liegt die Ursache häufiger an der Internetverbindung oder veralteten App-Daten als am Anbieter selbst.",
    ],
    keywords: [
      "IPTV Player",
      "IPTV Player Vergleich",
      "IPTV App",
      "TiviMate",
      "IPTV Smarters Pro",
      "IPTV auf Smart TV",
    ],
    intro: [
      "Wer sich zum ersten Mal mit IPTV beschäftigt, stößt schnell auf einen Begriff, der leicht mit dem eigentlichen Abo verwechselt wird: den IPTV Player. Dabei handelt es sich um die App auf Ihrem Gerät, die Ihre Zugangsdaten entgegennimmt und daraus eine nutzbare Oberfläche mit Sendern, Programmführer und Filmbibliothek baut. Der Anbieter liefert die Inhalte, der Player entscheidet mit darüber, wie komfortabel Sie sie nutzen können.",
      "Dieser Artikel erklärt, was ein IPTV Player genau macht, worauf ein gutes Exemplar achten sollte und welche Apps auf welchen Geräten verbreitet sind. Ziel ist nicht, eine einzelne App als „beste Wahl für alle“ auszurufen — je nach Gerät, Vorliebe und technischem Anspruch fällt die passende Antwort unterschiedlich aus.",
    ],
    sections: [
      {
        heading: "Was ist ein IPTV Player überhaupt?",
        body: [
          "Ein IPTV Player ist eine Anwendung, die eine Playlist oder Zugangsdaten lädt und daraus eine bedienbare Oberfläche macht: Senderliste, elektronischer Programmführer (EPG), Favoriten und häufig auch eine Video-on-Demand-Bibliothek. Der Player selbst liefert keine Inhalte — dafür ist Ihr IPTV Anbieter zuständig. Die App ist vielmehr das Werkzeug, mit dem Sie auf diese Inhalte zugreifen und sie organisieren.",
          "Diese Trennung ist wichtig zu verstehen: Ruckelt ein Stream oder fehlt ein Sender, liegt die Ursache meist beim Anbieter oder der Internetverbindung, nicht am Player. Lädt dagegen der Programmführer nicht richtig oder lässt sich die Senderliste schwer sortieren, ist häufig die App-Wahl entscheidend. Mehr zu den technischen Grundlagen von IPTV lesen Sie auf unserer Seite zu [IPTV Deutschland](/iptv-service).",
        ],
      },
      {
        heading: "Worauf es bei einem guten IPTV Player ankommt",
        body: [
          "Nicht jeder Player eignet sich gleich gut für jeden Anwendungsfall. Diese Kriterien lohnen sich beim Vergleich besonders:",
        ],
        list: [
          "EPG-Darstellung: Eine übersichtliche Programmvorschau erleichtert die Sendersuche erheblich, gerade bei einer großen Senderanzahl.",
          "Favoriten und Kategorien: Sortierbare Listen sparen Zeit, wenn nur eine Handvoll Sender regelmäßig genutzt wird.",
          "Unterstützte Formate: Die meisten seriösen Player akzeptieren sowohl M3U-Playlists als auch Xtream-Codes-Zugänge.",
          "Mehrgeräte-Nutzung: Manche Apps synchronisieren Favoriten und Einstellungen geräteübergreifen, andere nicht.",
          "Stabilität bei Neustarts: Ein guter Player merkt sich zuletzt geschaute Sender und Einstellungen auch nach einem Geräteneustart.",
        ],
        subsections: [
          {
            heading: "Kostenlos oder kostenpflichtig?",
            body: [
              "Viele Player sind kostenlos nutzbar, einige bieten eine optionale Bezahlversion mit zusätzlichen Funktionen wie Werbefreiheit oder erweiterten EPG-Ansichten. Für die grundsätzliche Funktion — Playlist laden, Sender anzeigen — reicht in aller Regel die kostenlose Variante völlig aus.",
            ],
          },
        ],
      },
      {
        heading: "Gängige IPTV Player im Überblick",
        body: [
          "Der App-Markt für IPTV Player ist groß. Die folgenden Apps gehören zu den am weitesten verbreiteten und unterscheiden sich vor allem in Bedienkonzept und Funktionsumfang.",
        ],
        subsections: [
          {
            heading: "TiviMate",
            body: [
              "Ein auf Android TV, Fire TV Stick und Android-Boxen verbreiteter Player mit einer für den Fernseher optimierten Kachel-Oberfläche und einem detaillierten EPG. Beliebt bei Nutzern, die Wert auf eine übersichtliche Senderverwaltung mit vielen Sortier- und Filtermöglichkeiten legen.",
            ],
          },
          {
            heading: "IPTV Smarters Pro",
            body: [
              "Läuft plattformübergreifend auf Android, iOS, Windows und einigen Smart-TV-Systemen und gilt als vergleichsweise einsteigerfreundlich. Die Einrichtung per Xtream-Codes-Zugang ist unkompliziert, der Funktionsumfang deckt die Grundlagen solide ab.",
            ],
          },
          {
            heading: "IBO Player",
            body: [
              "Eine ebenfalls weit verbreitete App mit ähnlichem Funktionsumfang wie IPTV Smarters Pro, verfügbar für Android, iOS und Android TV. Die Oberfläche wirkt etwas technischer, bietet dafür einige zusätzliche Einstellmöglichkeiten für Wiedergabe und Puffergröße.",
            ],
          },
          {
            heading: "GSE Smart IPTV",
            body: [
              "Unterstützt eine besonders breite Palette an Plattformen, darunter auch Apple TV. Der Funktionsumfang ist umfangreich, was die Einrichtung für Einsteiger etwas unübersichtlicher machen kann als bei schlankeren Alternativen.",
            ],
          },
          {
            heading: "Perfect Player",
            body: [
              "Ein schlanker, ressourcenschonender Player, der sich besonders auf älteren Android-Geräten oder leistungsschwächeren Android-Boxen bewährt, allerdings mit einem eher zurückhaltenden Funktionsumfang bei EPG und Favoriten.",
            ],
          },
        ],
      },
      {
        heading: "Welcher Player passt zu welchem Gerät?",
        body: [
          "Die Geräteplattform schränkt die Auswahl meist bereits deutlich ein — nicht jede App ist für jedes Betriebssystem verfügbar.",
        ],
        table: {
          headers: ["Gerät", "Typische App-Quelle", "Verbreitete Player"],
          rows: [
            ["Android TV / Android-Box", "Google Play Store oder APK", "TiviMate, IPTV Smarters Pro, IBO Player"],
            ["Fire TV Stick", "Amazon App Store oder Downloader-App", "TiviMate, IPTV Smarters Pro"],
            ["Samsung Smart TV (Tizen)", "Samsung App Store", "Herstellerkompatible Apps aus dem Store"],
            ["LG Smart TV (webOS)", "LG Content Store", "Herstellerkompatible Apps aus dem Store"],
            ["iPhone / iPad", "Apple App Store", "IPTV Smarters Pro, GSE Smart IPTV"],
          ],
        },
        subsections: [
          {
            heading: "Detaillierte Einrichtungsschritte je Gerät",
            body: [
              "Eine ausführliche Anleitung zur Einrichtung auf Ihrem konkreten Gerät finden Sie auf unseren Geräteseiten für [Smart TV](/iptv-smart-tv), [Fire TV Stick](/iptv-fire-tv-stick) und [Android TV](/iptv-android-tv).",
            ],
          },
        ],
      },
      {
        heading: "M3U und Xtream Codes: die beiden gängigen Zugangsarten",
        body: [
          "Fast alle IPTV Player akzeptieren zwei Arten von Zugangsdaten. Eine M3U-Playlist ist eine einfache Textdatei mit Links zu den einzelnen Sendern, die der Player einliest. Ein Xtream-Codes-Zugang besteht dagegen aus Server-Adresse, Benutzername und Passwort und bietet meist zusätzlich einen strukturierten Programmführer sowie eine geordnete VOD-Bibliothek direkt in der App.",
          "Welche der beiden Varianten Sie erhalten, hängt von Ihrem IPTV Anbieter ab — beide funktionieren zuverlässig, sofern der Anbieter stabile Server betreibt. Bei der Bestellung teilt Ihnen der Support in der Regel direkt mit, welche Zugangsart Sie erhalten und wie Sie sie im gewählten Player eintragen.",
        ],
      },
      {
        heading: "Player einrichten: die grundsätzlichen Schritte",
        body: [
          "Unabhängig von der konkreten App läuft die Einrichtung meist nach demselben Muster ab:",
        ],
        list: [
          "Player-App aus dem passenden Store oder per APK auf dem Gerät installieren.",
          "App öffnen und die Option zum Hinzufügen einer Playlist bzw. eines Xtream-Codes-Zugangs wählen.",
          "Zugangsdaten oder Playlist-URL eingeben, die Sie von Ihrem Anbieter erhalten haben.",
          "Warten, bis die Senderliste und der Programmführer automatisch laden.",
          "Häufig genutzte Sender als Favoriten markieren, um sie später schneller zu finden.",
        ],
      },
      {
        heading: "Häufige Probleme und wie Sie sie vermeiden",
        body: [
          "Die meisten Schwierigkeiten mit einem IPTV Player lassen sich auf wenige, gut bekannte Ursachen zurückführen.",
        ],
        subsections: [
          {
            heading: "Der Programmführer lädt nicht oder ist leer",
            body: [
              "Oft hilft ein manuelles Aktualisieren der Playlist in den App-Einstellungen. Bleibt der EPG dauerhaft leer, kann auch der Anbieter für den jeweiligen Sender aktuell keine Programmdaten liefern.",
            ],
          },
          {
            heading: "Der Stream ruckelt oder puffert häufig",
            body: [
              "In den meisten Fällen liegt das an der Internetverbindung, nicht am Player selbst. Eine LAN-Verbindung statt WLAN sowie eine ausreichende Bandbreite verbessern die Stabilität in aller Regel spürbar.",
            ],
          },
          {
            heading: "Die Senderliste aktualisiert sich nicht von selbst",
            body: [
              "Viele Player laden neue Inhalte erst nach einem manuellen Neuladen der Playlist. Ein Blick in die App-Einstellungen unter „Playlist aktualisieren“ oder ein Neustart der App löst dieses Problem meist zuverlässig.",
            ],
          },
        ],
      },
    ],
    conclusion: [
      "Der richtige IPTV Player ist letztlich Geschmackssache: Wer eine übersichtliche, TV-optimierte Oberfläche mit vielen Sortiermöglichkeiten sucht, ist mit TiviMate meist gut beraten. Wer es schlank und einsteigerfreundlich mag, kommt mit IPTV Smarters Pro oder ähnlichen Apps schneller ans Ziel. Entscheidend ist am Ende weniger die App als die Kombination aus stabilem Anbieter, passender App für das eigene Gerät und einer ausreichend schnellen Internetverbindung.",
      "Wenn Sie noch auf der Suche nach einem passenden Abo sind, vergleichen Sie unsere [Tarife](/plans) oder lesen Sie, worauf Sie bei der Wahl eines [IPTV Anbieters](/iptv-providers) grundsätzlich achten sollten.",
    ],
    faq: [
      {
        question: "Brauche ich zwingend eine spezielle App für IPTV?",
        answer:
          "Ja, ein gewöhnlicher Webbrowser reicht für Live-TV in der Regel nicht aus. Eine dedizierte Player-App verwaltet Zugangsdaten, Programmführer und Favoriten in einer Oberfläche, die für das jeweilige Gerät optimiert ist.",
      },
      {
        question: "Kann ich denselben Player auf mehreren Geräten nutzen?",
        answer:
          "Grundsätzlich ja, sofern die App für die jeweilige Plattform verfügbar ist. Ob Ihr Abo mehrere gleichzeitige Verbindungen erlaubt, hängt vom gebuchten Tarif Ihres Anbieters ab.",
      },
      {
        question: "Was ist der Unterschied zwischen M3U und Xtream Codes?",
        answer:
          "Eine M3U-Playlist ist eine einfache Liste mit Senderlinks. Ein Xtream-Codes-Zugang besteht aus Serveradresse, Benutzername und Passwort und liefert häufig zusätzlich einen strukturierten Programmführer und eine geordnete VOD-Bibliothek.",
      },
      {
        question: "Warum zeigt mein Player nicht alle gebuchten Sender an?",
        answer:
          "Meist hilft ein manuelles Aktualisieren der Playlist in den App-Einstellungen. Bleibt das Problem bestehen, lohnt sich eine kurze Nachricht an den Support Ihres Anbieters.",
      },
      {
        question: "Ist ein kostenpflichtiger Player besser als eine kostenlose App?",
        answer:
          "Nicht zwangsläufig. Kostenpflichtige Versionen bieten meist zusätzlichen Komfort wie Werbefreiheit, die grundlegende Funktion — Sender anzeigen und wiedergeben — leisten aber auch kostenlose Player zuverlässig.",
      },
    ],
  },
  {
    slug: "iptv-enigma2-installieren",
    title: "IPTV auf Enigma2 installieren – Anleitung für VU+, Dreambox & Zgemma",
    seoTitle: "IPTV auf Enigma2 installieren: VU+, Dreambox, Zgemma",
    metaDescription:
      "IPTV auf Enigma2 einrichten: Schritt-für-Schritt-Anleitung für VU+, Dreambox und Zgemma mit M3U, Xtream Codes, Bouquets und EPG – praxisnah erklärt.",
    excerpt:
      "Schritt-für-Schritt-Anleitung zur IPTV-Einrichtung auf Enigma2-Receivern wie VU+, Dreambox und Zgemma – inklusive M3U, Xtream Codes, Bouquets und EPG.",
    publishedAt: "2026-08-29",
    readingTimeMinutes: 14,
    category: "Anleitungen",
    gradient: "circuit",
    image: {
      src: "/images/iptv-deutschland-2026-guide.webp",
      alt: "IPTV Streaming-Oberfläche als Symbolbild für die Einrichtung auf Enigma2 Receivern",
    },
    toc: true,
    tldr: [
      "Enigma2 ist das Betriebssystem hinter VU+, Dreambox, Zgemma, GigaBlue und vielen weiteren Sat-Receivern und lässt sich per Plugin auch für IPTV nutzen.",
      "Es gibt zwei gängige Zugangsarten: eine M3U-Playlist (einfache Senderliste) oder ein Xtream-Codes-Zugang (Server, Benutzername, Passwort mit strukturiertem EPG).",
      "Tools wie E2m3u2bouquet oder Jedi Maker Xtream wandeln eine Playlist automatisch in native Enigma2-Bouquets um, inklusive Kategorien und Senderlogos.",
      "Die meisten Plugins installieren Sie direkt über das Blue-Button-Menü; nicht gelistete Plugins lassen sich per IPK-Datei über Telnet oder USB nachrüsten.",
      "Buffering und ein leeres Bild liegen häufiger an der Internetverbindung oder einer veralteten Playlist als am Receiver selbst — ein Neuladen der Bouquets löst viele Probleme bereits.",
    ],
    keywords: [
      "IPTV auf Enigma2",
      "IPTV VU+",
      "IPTV Dreambox",
      "IPTV Zgemma",
      "IPTV installieren",
      "IPTV M3U",
      "IPTV Xtream Codes",
      "Enigma2 IPTV Plugin",
      "IPTV Bouquet",
      "IPTV EPG",
    ],
    intro: [
      "Enigma2-Receiver wie VU+, Dreambox oder Zgemma sind ursprünglich für den Satellitenempfang gedacht, lassen sich dank ihrer offenen Linux-Basis aber auch hervorragend für IPTV nutzen. Statt einer separaten Streaming-Box laden Sie Ihre Sender direkt über ein Plugin in die gewohnte Receiver-Oberfläche — inklusive Fernbedienung, Bouquets und elektronischem Programmführer.",
      "Dieser Ratgeber zeigt Schritt für Schritt, wie Sie IPTV auf Enigma2 einrichten: von den unterstützten Receivern über M3U- und Xtream-Codes-Zugänge bis hin zu Tools wie E2m3u2bouquet, der Organisation Ihrer Bouquets und der Behebung typischer Probleme. Sie benötigen dafür keine Programmierkenntnisse, aber etwas Geduld beim ersten Einrichten.",
    ],
    sections: [
      {
        heading: "Was ist Enigma2 IPTV?",
        body: [
          "Enigma2 ist die Linux-basierte Benutzeroberfläche, die auf den meisten modernen Sat-Receivern läuft — vergleichbar mit einem eigenen kleinen Betriebssystem für den Fernseher. Weil das System offen für Erweiterungen ist, existiert für Enigma2 ein umfangreiches Angebot an kostenlosen Plugins, die weit über den klassischen Satellitenempfang hinausgehen.",
          "„Enigma2 IPTV“ bezeichnet also keinen eigenen Dienst, sondern die Nutzung eines IPTV-Zugangs über ein passendes Plugin auf einem Enigma2-Receiver. Die Sender erscheinen dabei als ganz normale Bouquets in der Kanalliste, oft direkt neben Ihren gewohnten Sat-Sendern — inklusive Umschalten per Zifferntaste und EPG-Anzeige, so wie Sie es vom klassischen Fernsehen kennen.",
        ],
        image: {
          src: "/images/streaming-technologie.png",
          alt: "Symbolbild für Streaming-Technologie und Datenübertragung bei IPTV",
        },
      },
      {
        heading: "Welche Enigma2 Receiver unterstützen IPTV?",
        body: [
          "Grundsätzlich funktioniert IPTV auf jedem Receiver, der mit Enigma2 läuft und über eine Netzwerkverbindung verfügt — unabhängig vom Hersteller. Die folgenden Marken sind im deutschsprachigen Raum am weitesten verbreitet.",
        ],
        table: {
          headers: ["Hersteller", "Bekannte Modellreihen", "Hinweis"],
          rows: [
            ["VU+", "Duo, Uno, Zero, Solo", "Große Community, viele Plugins direkt im Feed verfügbar"],
            ["Dreambox", "DM900, DM920, DM520", "Eigene Bildvarianten (OpenDroid, Dream Elite u. a.)"],
            ["Zgemma", "H9, H9S, H9 Combo", "Preisgünstiger Einstieg, oft mit OpenATV oder OpenPLi"],
            ["GigaBlue", "UE 4K, Quad 4K", "Solide Hardware, ähnliche Bedienung wie VU+"],
            ["Edision", "OS Mini, Argus", "Kompakte Modelle, teils ohne Sat-Tuner als reine IPTV-Box"],
          ],
          caption: "Beispielhafte, gängige Modellreihen — die genaue Verfügbarkeit hängt vom Händler und Modelljahr ab.",
        },
        subsections: [
          {
            heading: "VU+ Receiver",
            body: [
              "VU+ zählt zu den beliebtesten Enigma2-Marken, unter anderem wegen der großen Auswahl an vorinstallierten Images wie OpenPLi oder OpenATV. Für VU+ Receiver stehen die meisten gängigen IPTV-Plugins direkt über das Plugin-Menü zur Verfügung, ohne dass Sie manuell etwas nachinstallieren müssen.",
            ],
          },
          {
            heading: "Dreambox",
            body: [
              "Dreambox-Receiver laufen je nach Modell mit unterschiedlichen Enigma2-Varianten. Die Grundfunktionen für IPTV unterscheiden sich kaum von anderen Marken, allerdings kann die Bezeichnung einzelner Menüpunkte je nach installiertem Image leicht abweichen.",
            ],
          },
          {
            heading: "Zgemma",
            body: [
              "Zgemma-Geräte sind eine günstige Alternative mit vollwertiger Enigma2-Unterstützung. Da die Hardware teils etwas leistungsschwächer ausfällt als bei Premium-Modellen, lohnt sich bei sehr großen Bouquets etwas mehr Geduld beim Laden der Senderliste.",
            ],
          },
          {
            heading: "Gigablue und weitere Receiver",
            body: [
              "Auch GigaBlue, Edision, Octagon oder Xtrend basieren auf Enigma2 und unterstützen dieselben IPTV-Plugins. Entscheidend ist nicht die Marke, sondern ob ein aktuelles Enigma2-Image installiert ist und der Receiver über eine funktionierende Internetverbindung verfügt.",
            ],
          },
        ],
      },
      {
        heading: "Welche Voraussetzungen benötigt man?",
        body: [
          "Bevor Sie mit der Einrichtung beginnen, sollten folgende Punkte erfüllt sein:",
        ],
        list: [
          "Ein Enigma2-Receiver mit aktueller Firmware (Image-Update über das Einstellungsmenü).",
          "Eine stabile Internetverbindung, idealerweise per LAN-Kabel statt WLAN.",
          "Zugangsdaten Ihres IPTV Anbieters: entweder eine M3U-Playlist-URL oder Xtream-Codes-Zugangsdaten (Server, Benutzername, Passwort).",
          "Ausreichend freier Speicherplatz auf dem Receiver für Plugin und Senderlisten.",
          "Optional: Zugriff auf OpenWebif oder FTP für die komfortable Dateiverwaltung am PC.",
        ],
      },
      {
        heading: "IPTV über M3U auf Enigma2 einrichten",
        body: [
          "Der einfachste Einstieg in IPTV auf Enigma2 führt über eine M3U-Playlist. Diese Textdatei enthält für jeden Sender einen Verweis auf den zugehörigen Stream und lässt sich mit den meisten IPTV-Plugins direkt einlesen.",
        ],
        subsections: [
          {
            heading: "M3U Playlist vorbereiten",
            body: [
              "Von Ihrem IPTV Anbieter erhalten Sie in der Regel einen direkten Link zur Playlist-Datei. Diesen Link benötigen Sie später im Plugin — ein Herunterladen auf einen PC ist normalerweise nicht nötig, da die meisten Plugins die URL direkt vom Receiver aus abrufen.",
            ],
          },
          {
            heading: "Playlist hinzufügen",
            body: [
              "Öffnen Sie das installierte IPTV-Plugin über das Blue-Button-Menü oder den Plugin-Browser, wählen Sie die Option zum Hinzufügen einer neuen Playlist per URL und fügen Sie den M3U-Link ein. Nach dem Speichern lädt das Plugin die Senderliste automatisch.",
            ],
          },
          {
            heading: "Senderliste erstellen",
            body: [
              "Je nach Plugin wird die Playlist entweder direkt als eigenes Bouquet angezeigt oder muss über einen zusätzlichen Schritt („Bouquets aktualisieren“ bzw. „Playlist konvertieren“) in die Kanalliste des Receivers übernommen werden. Ein Neustart der GUI nach diesem Schritt stellt sicher, dass alle Sender korrekt geladen sind.",
            ],
          },
        ],
      },
      {
        heading: "IPTV über Xtream Codes API einrichten",
        body: [
          "Ein Xtream-Codes-Zugang unterscheidet sich von einer reinen M3U-Playlist dadurch, dass er zusätzlich strukturierte Kategorien, ein passendes EPG und häufig eine VOD-Bibliothek mitbringt. Statt eines einzelnen Links geben Sie hier drei Angaben ein: die Server-Adresse, Ihren Benutzernamen und Ihr Passwort.",
          "Die meisten modernen Enigma2-IPTV-Plugins bieten neben der M3U-Option einen eigenen Xtream-Codes-Modus an. Nach Eingabe der drei Zugangsdaten ruft das Plugin die verfügbaren Kategorien automatisch über die Xtream-API ab und baut daraus die Bouquet-Struktur auf — meist übersichtlicher vorsortiert als bei einer reinen M3U-Playlist.",
        ],
      },
      {
        heading: "IPTV mit E2m3u2bouquet",
        body: [
          "E2m3u2bouquet ist eines der bekanntesten Tools der Enigma2-Community zur Umwandlung von IPTV-Playlists in native Bouquets. Das Plugin unterstützt sowohl M3U- als auch Xtream-Codes-Zugänge und erstellt daraus automatisch sortierte, mit Logos versehene Kanallisten.",
          "Nach der Installation über das Plugin-Menü konfigurieren Sie E2m3u2bouquet über das zugehörige Einstellungsmenü: Zugangsdaten eintragen, gewünschte Kategorien auswählen und die Erstellung der Bouquets starten. Das Tool kann außerdem automatisch aktualisieren, sodass neue oder entfernte Sender regelmäßig übernommen werden, ohne dass Sie den Vorgang manuell wiederholen müssen.",
        ],
      },
      {
        heading: "IPTV mit Jedi Maker Xtream",
        body: [
          "Jedi Maker Xtream ist eine Alternative, die sich besonders auf Xtream-Codes-Zugänge spezialisiert hat und eine feingliedrige Kontrolle über die erzeugten Bouquets erlaubt — etwa welche Kategorien als eigenes Bouquet erscheinen und welche zusammengefasst werden.",
          "Die grundsätzliche Bedienung ähnelt der von E2m3u2bouquet: Zugangsdaten eingeben, Kategorien auswählen, Bouquets generieren lassen. Welches der beiden Tools besser passt, hängt oft von persönlichen Vorlieben bei der Bouquet-Struktur ab — ein Ausprobieren beider Varianten schadet nicht, da sich unpassende Bouquets jederzeit wieder löschen lassen.",
        ],
      },
      {
        heading: "Bouquets und Senderlisten organisieren",
        body: [
          "Eine gut sortierte Kanalliste macht den größten Unterschied im Alltag. Statt Hunderter Sender in einer einzigen langen Liste lohnt es sich, thematische Bouquets anzulegen — etwa nach Genre, Sprache oder Nutzung.",
        ],
        list: [
          "Häufig genutzte Sender in ein eigenes „Favoriten“-Bouquet verschieben, statt sie in der Gesamtliste zu suchen.",
          "Nicht benötigte Kategorien (z. B. fremdsprachige Sender) ausblenden oder gar nicht erst importieren.",
          "Bouquet-Reihenfolge über den Bouquet-Editor der Fernbedienung anpassen, damit wichtige Sender vorne stehen.",
          "Nach größeren Aktualisierungen der Playlist die Bouquets neu generieren, statt alte und neue Listen zu vermischen.",
        ],
        image: {
          src: "/images/dashbord.png",
          alt: "Fernseher mit Senderübersicht und Kategorien in einer Streaming-Oberfläche",
        },
      },
      {
        heading: "EPG einrichten",
        body: [
          "Der elektronische Programmführer zeigt aktuelle und kommende Sendungen direkt in der Kanalübersicht an. Bei IPTV auf Enigma2 stammen diese Daten in der Regel nicht vom Satellitensignal, sondern von einer separaten EPG-Quelle, die Ihr IPTV Anbieter bereitstellt — häufig im XMLTV-Format.",
          "Tools wie E2m3u2bouquet können die EPG-URL automatisch mit den erzeugten Bouquets verknüpfen, sodass keine zusätzliche manuelle Konfiguration nötig ist. Bleibt der Programmführer trotzdem leer, lohnt sich ein Blick in die EPG-Einstellungen des Plugins, ob die richtige XMLTV-Adresse hinterlegt ist.",
        ],
      },
      {
        heading: "Typische IPTV-Probleme auf Enigma2",
        body: [
          "Die meisten Schwierigkeiten bei IPTV auf Enigma2 lassen sich auf eine überschaubare Anzahl an Ursachen zurückführen.",
        ],
        subsections: [
          {
            heading: "Kein Bild",
            body: [
              "Ein schwarzes Bild bei laufendem Ton oder ganz ohne Reaktion deutet meist auf ein nicht unterstütztes Stream-Format oder einen abgelaufenen Zugang hin. Prüfen Sie zunächst, ob der Sender auch in einer anderen App funktioniert, um Receiver- und Anbieter-Probleme voneinander zu unterscheiden.",
            ],
          },
          {
            heading: "Buffering",
            body: [
              "Häufiges Puffern liegt in den meisten Fällen an der Internetverbindung, seltener am Receiver selbst. Eine LAN-Verbindung statt WLAN sowie ausreichend Bandbreite für die gewünschte Auflösung verbessern die Stabilität spürbar.",
            ],
          },
          {
            heading: "Sender lädt nicht",
            body: [
              "Lädt ein einzelner Sender dauerhaft nicht, kann die Ursache auf Seiten des Anbieters liegen (Sender vorübergehend offline). Ein manuelles Aktualisieren der Bouquets über das IPTV-Plugin behebt zudem viele Fälle, in denen sich lediglich die Stream-Adresse geändert hat.",
            ],
          },
          {
            heading: "EPG funktioniert nicht",
            body: [
              "Fehlt die Programmübersicht komplett, ist meist die XMLTV-Adresse falsch hinterlegt oder gar nicht erst eingetragen. Ein Blick in die Plugin-Einstellungen und ein erneutes Speichern der EPG-Quelle lösen dieses Problem in der Regel zuverlässig.",
            ],
          },
        ],
        image: {
          src: "/images/troubleshooting.png",
          alt: "Nutzer vor eingefrorenem Fernsehbild mit Ladesymbol",
        },
      },
      {
        heading: "Wie verbessert man die IPTV-Wiedergabe?",
        body: [
          "Ein paar grundlegende Anpassungen an Netzwerk und Konfiguration sorgen häufig für eine spürbar stabilere Wiedergabe:",
        ],
        list: [
          "LAN-Kabel statt WLAN verwenden, besonders bei 4K-Inhalten oder mehreren gleichzeitig genutzten Geräten im Heimnetz.",
          "Regelmäßig prüfen, ob eine aktuellere Firmware für den Receiver verfügbar ist.",
          "Bouquets nach größeren Playlist-Änderungen komplett neu erstellen statt nur zu ergänzen.",
          "Bei anhaltenden Aussetzern testweise die DNS-Server in den Netzwerkeinstellungen des Receivers wechseln.",
        ],
        image: {
          src: "/images/internet-speed.png",
          alt: "Geschwindigkeitstest und Router als Symbolbild für eine stabile Internetverbindung",
        },
      },
      {
        heading: "IPTV auf VU+ – wichtige Tipps",
        body: [
          "Bei VU+ Receivern lohnt sich ein Blick in den offiziellen Plugin-Feed des jeweiligen Images (etwa OpenPLi oder OpenATV) — die gängigen IPTV-Tools sind dort meist bereits gelistet und lassen sich ohne manuelle IPK-Installation einrichten. Nutzen Sie zudem die Möglichkeit, mehrere Bouquets parallel zu pflegen, etwa getrennt nach Sat- und IPTV-Sendern.",
        ],
      },
      {
        heading: "IPTV auf Dreambox – wichtige Tipps",
        body: [
          "Da Dreambox-Modelle mit unterschiedlichen Enigma2-Images ausgeliefert werden, kann die genaue Menüführung leicht variieren. Prüfen Sie im Zweifel, welches Image installiert ist, um die passende Anleitung für Plugin-Installation und Bouquet-Verwaltung zu finden.",
        ],
      },
      {
        heading: "IPTV auf Zgemma – wichtige Tipps",
        body: [
          "Zgemma-Receiver bieten ein gutes Preis-Leistungs-Verhältnis, sind bei sehr umfangreichen Bouquets mit mehreren Tausend Sendern aber etwas langsamer beim Laden als leistungsstärkere Modelle. Eine sinnvoll aufgeräumte Bouquet-Struktur mit thematisch getrennten Listen wirkt sich hier besonders positiv auf die Bedienung aus.",
        ],
      },
      {
        heading: "IPTV Anbieter auswählen – worauf sollte man achten?",
        body: [
          "Die Technik rund um Enigma2 ist nur die eine Hälfte einer stabilen IPTV-Erfahrung — die andere Hälfte ist die Wahl eines zuverlässigen IPTV Anbieters. Achten Sie auf transparente Preise, klare Angaben zur Senderanzahl und darauf, ob sowohl M3U als auch Xtream Codes unterstützt werden, damit Sie beim Enigma2-Plugin Ihrer Wahl flexibel bleiben.",
          "Ebenso wichtig ist erreichbarer Support: Bei der Ersteinrichtung auf einem Enigma2-Receiver können durchaus Rückfragen entstehen, etwa zur richtigen Server-Adresse oder zum EPG-Link. Ein ausführlicher Überblick über seriöse Auswahlkriterien findet sich auf unserer Seite [IPTV Anbieter](/iptv-providers).",
        ],
      },
      {
        heading: "Unser IPTV TV Angebot",
        body: [
          "Wenn du einen passenden IPTV Anbieter für deinen Enigma2 Receiver suchst, kannst du unser [IPTV TV](/) Angebot ansehen. Unser [IPTV Shop](/plans) bietet Zugänge sowohl per M3U-Playlist als auch per Xtream Codes API an, sodass Sie je nach bevorzugtem Plugin — etwa E2m3u2bouquet oder Jedi Maker Xtream — die passende Zugangsart wählen können.",
          "Vor der Bestellung beraten wir Sie über WhatsApp gerne dazu, welche Zugangsart sich für Ihren VU+, Ihre Dreambox oder Ihren Zgemma-Receiver am besten eignet. Alle Details zu Laufzeiten und Geräteanzahl finden Sie auf unserer [Tarifseite](/plans).",
        ],
      },
    ],
    conclusion: [
      "IPTV auf Enigma2 einzurichten ist kein Hexenwerk, sobald der grundsätzliche Ablauf klar ist: Zugangsdaten besorgen, passendes Plugin installieren, Bouquets erzeugen und bei Bedarf das EPG verknüpfen. Ob Sie dabei auf VU+, Dreambox, Zgemma oder ein anderes Enigma2-Modell setzen, spielt für die grundsätzliche Vorgehensweise kaum eine Rolle — entscheidend sind eine stabile Internetverbindung und ein zuverlässiger IPTV Anbieter.",
      "Bei technischen Rückfragen zur Einrichtung auf Ihrem konkreten Receiver hilft unser Support-Team gerne weiter. Einen Überblick über unsere [Abonnements](/plans) sowie weitere Hintergründe zum Thema IPTV finden Sie zudem in unserem [Blog](/blog), etwa in unserem Artikel zum [Vergleich gängiger IPTV Player](/blog/iptv-player-vergleich).",
    ],
    faq: [
      {
        question: "Kann man IPTV auf jedem Enigma2 Receiver installieren?",
        answer:
          "Grundsätzlich ja, sofern der Receiver über eine funktionierende Internetverbindung und ein aktuelles Enigma2-Image verfügt. Die Marke — VU+, Dreambox, Zgemma, GigaBlue und andere — spielt dabei keine entscheidende Rolle.",
      },
      {
        question: "Wie funktioniert IPTV auf einem VU+ Receiver?",
        answer:
          "Über ein IPTV-Plugin aus dem Plugin-Feed des Images tragen Sie Ihre M3U- oder Xtream-Codes-Zugangsdaten ein. Das Plugin erstellt daraus automatisch Bouquets, die anschließend wie gewohnte Sat-Sender in der Kanalliste erscheinen.",
      },
      {
        question: "Was ist der Unterschied zwischen M3U und Xtream Codes?",
        answer:
          "Eine M3U-Playlist ist eine einfache Liste mit Senderlinks. Ein Xtream-Codes-Zugang besteht aus Server-Adresse, Benutzername und Passwort und liefert meist zusätzlich strukturierte Kategorien und ein passendes EPG.",
      },
      {
        question: "Wie installiert man ein IPTV Plugin auf Enigma2?",
        answer:
          "Am einfachsten über das Blue-Button-Menü unter „Plugins herunterladen“, sofern das gewünschte Plugin im Feed Ihres Images gelistet ist. Ist das nicht der Fall, lässt es sich alternativ per IPK-Datei über Telnet, FTP oder einen USB-Stick manuell nachinstallieren.",
      },
      {
        question: "Warum funktioniert die IPTV Playlist nicht?",
        answer:
          "Häufige Ursachen sind ein abgelaufener Zugang, eine falsch eingegebene URL oder Zugangsdaten sowie eine unterbrochene Internetverbindung. Ein erneutes Speichern der Zugangsdaten und ein manuelles Aktualisieren der Bouquets lösen viele dieser Fälle.",
      },
      {
        question: "Wie richtet man EPG ein?",
        answer:
          "Die meisten IPTV-Plugins für Enigma2 verknüpfen die vom Anbieter bereitgestellte XMLTV-Adresse automatisch mit den erzeugten Bouquets. Bleibt der Programmführer leer, sollten Sie in den Plugin-Einstellungen prüfen, ob die EPG-URL korrekt hinterlegt ist.",
      },
      {
        question: "Was kann man bei Buffering auf Enigma2 tun?",
        answer:
          "Zunächst die Internetverbindung prüfen, idealerweise per LAN statt WLAN nutzen und die verfügbare Bandbreite mit dem Bedarf der gewählten Auflösung abgleichen. Bleibt das Problem bestehen, kann auch ein DNS-Wechsel in den Netzwerkeinstellungen helfen.",
      },
      {
        question: "Welche Internetverbindung wird empfohlen?",
        answer:
          "Für Full-HD-Inhalte genügt in der Regel eine Verbindung im mittleren einstelligen Mbit-Bereich, für 4K sollte deutlich mehr Reserve eingeplant werden. Eine kabelgebundene LAN-Verbindung liefert tendenziell stabilere Ergebnisse als WLAN.",
      },
      {
        question: "Kann man IPTV Sender als Bouquet speichern?",
        answer:
          "Ja, genau das ist die Aufgabe von Tools wie E2m3u2bouquet oder Jedi Maker Xtream: Sie wandeln die Playlist in native Enigma2-Bouquets um, die sich wie gewohnte Kanallisten sortieren, umbenennen und als Favoriten markieren lassen.",
      },
      {
        question: "Welcher IPTV Anbieter eignet sich für Enigma2?",
        answer:
          "Am besten eignet sich ein Anbieter, der sowohl M3U- als auch Xtream-Codes-Zugänge unterstützt und transparente Angaben zu Sendern und Support macht. Worauf Sie bei der Auswahl konkret achten sollten, lesen Sie auf unserer Seite IPTV Anbieter.",
      },
    ],
    sources: [
      {
        label: "M3U – Wikipedia",
        url: "https://de.wikipedia.org/wiki/M3U",
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

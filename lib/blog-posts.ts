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
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

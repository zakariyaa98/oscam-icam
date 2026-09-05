export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  items: FaqItem[];
};

export const faqCategories: FaqCategory[] = [
  {
    category: "Einstieg",
    items: [
      {
        question: "Was ist OSCam?",
        answer:
          "OSCam ist eine quelloffene Softcam-Software für Linux-basierte Receiver wie Enigma2-Geräte. Sie verwaltet den Zugriff auf Conditional-Access-Module und leitet Entschlüsselungsanfragen an lokal angeschlossene, rechtmäßig erworbene Smartcards oder CI+-Module weiter.",
      },
      {
        question: "Was ist iCam und wie unterscheidet es sich von OSCam?",
        answer:
          "iCam ist ein Softcam-Client, der nach einem ähnlichen Prinzip wie OSCam arbeitet, sich in Detailfragen wie Konfigurationssyntax und unterstützten Protokollen aber unterscheidet. Mehr dazu lesen Sie auf unserer Seite iCam.",
      },
      {
        question: "Ist die Nutzung von OSCam oder iCam legal?",
        answer:
          "Die Software selbst ist frei verfügbare Open-Source-Software. Ihre Nutzung ist Teil einer legalen technischen Konfiguration, solange sie ausschließlich mit eigenen, rechtmäßig erworbenen Zugangsberechtigungen erfolgt. Wir erklären hier ausschließlich die technische Funktionsweise und bieten keine Zugangsdaten oder Kartenserver an.",
      },
    ],
  },
  {
    category: "Enigma2 & Receiver",
    items: [
      {
        question: "Welche Receiver unterstützen OSCam?",
        answer:
          "Grundsätzlich jeder Receiver, der mit einem Enigma2-Image läuft — darunter VU+, Dreambox, Zgemma, GigaBlue und viele weitere Modelle. Details finden Sie auf unseren Geräteseiten.",
      },
      {
        question: "Brauche ich Programmierkenntnisse für die Einrichtung?",
        answer:
          "Nein, die Grundkonfiguration erfolgt über Textdateien mit klar dokumentierter Struktur beziehungsweise über die Weboberfläche (WebIf). Etwas technisches Interesse ist hilfreich, Programmierkenntnisse sind aber nicht erforderlich.",
      },
      {
        question: "Was ist der Unterschied zwischen den Enigma2-Images (OpenATV, OpenPLi, etc.)?",
        answer:
          "Die Images unterscheiden sich in Oberfläche, vorinstallierten Paketen und Plugin-Feed, teilen sich aber dieselbe Enigma2-Grundlage. OSCam und iCam lassen sich auf den gängigen Images vergleichbar einrichten.",
      },
    ],
  },
  {
    category: "Konfiguration",
    items: [
      {
        question: "Welche Konfigurationsdateien sind bei OSCam wichtig?",
        answer:
          "Die zentralen Dateien sind oscam.conf (allgemeine Einstellungen), oscam.server (Kartenleser/Reader) und oscam.user (Benutzerkonten). Mehr dazu in unserem Blogartikel zur OSCam-Konfiguration.",
      },
      {
        question: "Was ist das OSCam WebIf?",
        answer:
          "Das WebIf ist die browserbasierte Weboberfläche von OSCam. Darüber lassen sich Status, Logs und viele Einstellungen bequem einsehen und anpassen, ohne jede Datei manuell zu bearbeiten.",
      },
    ],
  },
  {
    category: "Support",
    items: [
      {
        question: "Wie schnell kann ich Unterstützung bekommen?",
        answer:
          "In der Regel antworten wir innerhalb weniger Stunden über WhatsApp und vereinbaren einen Termin für die Fernunterstützung.",
      },
      {
        question: "Welche Support-Pakete bietet OSCam-iCam an?",
        answer:
          "Von der einmaligen Basis-Einrichtung bis zum laufenden Premium-Support über mehrere Monate. Details und Preise finden Sie auf unserer Service-Seite.",
      },
      {
        question: "Was tue ich, wenn OSCam nach einem Update nicht mehr startet?",
        answer:
          "Meist hilft ein Blick in die Logdatei sowie eine Prüfung der zuletzt geänderten Konfigurationsdateien auf Syntaxfehler. Eine ausführliche Anleitung finden Sie in unserem Blogartikel zu häufigen OSCam-Fehlern, bei Bedarf hilft unser Support-Team gerne weiter.",
      },
      {
        question: "Bietet ihr Zugangsdaten oder Kartenserver an?",
        answer:
          "Nein. Wir bieten ausschließlich technische Aufklärung und Unterstützung bei der Konfiguration von OSCam/iCam auf Ihrem eigenen Receiver mit Ihren eigenen, rechtmäßig erworbenen Berechtigungen.",
      },
    ],
  },
];

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
        question: "Was ist IPTV TV?",
        answer:
          "IPTV TV ist ein Streaming-Abo, das Live-TV, Sport, Filme und Serien über Ihre Internetverbindung liefert — statt über Kabel oder Satellit. Sie erhalten persönliche Zugangsdaten, die Sie in einer App auf Ihrem Gerät hinterlegen.",
      },
      {
        question: "Wie funktioniert IPTV grundsätzlich?",
        answer:
          "IPTV überträgt Fernsehprogramme als Datenstrom über das Internet. Statt eines Tuners genügt eine stabile Verbindung und eine kompatible App, die Sender, Programmführer und Filmbibliothek lädt.",
      },
      {
        question: "Wie funktioniert der kostenlose Test?",
        answer:
          "Schreiben Sie uns über WhatsApp, und wir richten Ihnen einen kurzen Testzugang ein, damit Sie Bildqualität und Senderauswahl vorab in Ruhe prüfen können.",
      },
    ],
  },
  {
    category: "Geräte",
    items: [
      {
        question: "Welche Geräte werden unterstützt?",
        answer:
          "Smart TV (Samsung, LG), Android TV, Fire TV Stick, iPhone, Android-Smartphones sowie PC und Laptop — Sie brauchen kein zusätzliches Gerät, wenn eines davon schon vorhanden ist.",
      },
      {
        question: "Funktioniert es auf Samsung Smart TV?",
        answer:
          "Ja. Über den integrierten Samsung App Store installieren Sie eine kompatible App, geben Ihre Zugangsdaten ein, und die Senderliste lädt automatisch.",
      },
      {
        question: "Funktioniert es auch auf LG-Fernsehern?",
        answer:
          "Ja, über den LG Content Store (webOS) nach demselben Prinzip wie bei Samsung — App installieren, anmelden, loslegen.",
      },
      {
        question: "Wie funktioniert die Einrichtung auf dem Fire TV Stick?",
        answer:
          "App aus dem Amazon App Store installieren, mit Ihren Zugangsdaten anmelden — in der Regel ist der Stick in wenigen Minuten startklar.",
      },
    ],
  },
  {
    category: "Funktionen",
    items: [
      {
        question: "Ist ein Programmführer (EPG) enthalten?",
        answer:
          "Ja, der elektronische Programmführer ist automatisch Teil jedes Abos und zeigt Ihnen das aktuelle und kommende Programm über alle Sender hinweg.",
      },
      {
        question: "Sind auch Filme und Serien auf Abruf verfügbar?",
        answer:
          "Ja, neben dem Live-Programm steht eine umfangreiche VOD-Bibliothek zur Verfügung, jederzeit abrufbar in derselben App.",
      },
    ],
  },
  {
    category: "Abo & Support",
    items: [
      {
        question: "Wie schnell wird der Zugang aktiviert?",
        answer:
          "Meist innerhalb weniger Minuten nach Zahlungsbestätigung. In Ausnahmefällen kann es bis zu einigen Stunden dauern.",
      },
      {
        question: "Welche Abonnementoptionen gibt es?",
        answer:
          "Sie wählen zwischen 6 Monaten, 1 Jahr oder 2 Jahren Laufzeit — je länger die Laufzeit, desto günstiger der Preis pro Monat. Details finden Sie auf unserer Tarifseite.",
      },
      {
        question: "Wie kann ich den Support kontaktieren?",
        answer:
          "Am schnellsten über WhatsApp. Alternativ erreichen Sie uns per E-Mail — beide Kanäle finden Sie auf unserer Kontaktseite.",
      },
      {
        question: "Was tue ich bei Verbindungsproblemen?",
        answer:
          "Prüfen Sie zunächst Ihre Internetgeschwindigkeit (mindestens 10 Mbit/s empfohlen) und starten Sie die App neu. Hilft das nicht, ist unser Support-Team direkt für Sie da.",
      },
    ],
  },
];

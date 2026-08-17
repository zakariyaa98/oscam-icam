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
    category: "Abo & Bestellung",
    items: [
      {
        question: "Wie funktioniert ein IPTV Abo bei Deutschland IPTV?",
        answer:
          "Sie wählen eine Laufzeit (6 Monate, 1 Jahr oder 2 Jahre), kontaktieren uns über WhatsApp, und nach der Bestätigung erhalten Sie Ihre persönlichen Zugangsdaten samt Einrichtungsanleitung für Ihr Gerät.",
      },
      {
        question: "Wie lange dauert die Aktivierung?",
        answer:
          "Ihr Zugang wird in der Regel innerhalb weniger Minuten nach Zahlungsbestätigung aktiviert. In seltenen Fällen kann es bis zu einigen Stunden dauern.",
      },
      {
        question: "Kann ich meinen Tarif später verlängern oder wechseln?",
        answer:
          "Ja. Sie können Ihr Abo jederzeit über WhatsApp verlängern oder auf einen längeren Tarif upgraden, um von besseren Preisen zu profitieren.",
      },
    ],
  },
  {
    category: "Geräte & Einrichtung",
    items: [
      {
        question: "Welche Geräte werden unterstützt?",
        answer:
          "Deutschland IPTV funktioniert auf Smart TVs (Samsung, LG), Android TV, Fire TV Stick, Apple TV, iPhone, Android-Smartphones sowie PC und Laptop.",
      },
      {
        question: "Benötige ich zusätzliche Hardware?",
        answer:
          "Nein. Eine stabile Internetverbindung und ein kompatibles Gerät reichen aus. Für ältere Fernseher empfehlen wir einen Fire TV Stick oder eine Android-Box.",
      },
      {
        question: "Wie installiere ich die App auf meinem Gerät?",
        answer:
          "Nach Ihrer Bestellung erhalten Sie eine Schritt-für-Schritt-Anleitung passend zu Ihrem Gerät, inklusive App-Empfehlung und Hilfe bei der Eingabe Ihrer Zugangsdaten.",
      },
    ],
  },
  {
    category: "Zahlung & Support",
    items: [
      {
        question: "Welche Zahlungsmethoden werden akzeptiert?",
        answer:
          "Die Zahlungsdetails teilen wir Ihnen individuell über WhatsApp mit. Wir bieten flexible und sichere Zahlungsoptionen.",
      },
      {
        question: "Welche Laufzeiten stehen zur Verfügung?",
        answer: "Wir bieten Tarife mit 6 Monaten, 1 Jahr und 2 Jahren Laufzeit — je länger die Laufzeit, desto besser der Preis.",
      },
      {
        question: "Wie erreiche ich den Kundenservice?",
        answer:
          "Unser Support-Team ist über WhatsApp und E-Mail erreichbar und hilft schnell bei Fragen zu Einrichtung, Zahlung oder technischen Problemen.",
      },
    ],
  },
  {
    category: "Problembehebung",
    items: [
      {
        question: "Was tue ich bei Bild- oder Verbindungsproblemen?",
        answer:
          "Prüfen Sie zunächst Ihre Internetgeschwindigkeit (mindestens 10 Mbit/s empfohlen), starten Sie die App neu und stellen Sie sicher, dass kein VPN aktiv ist. Bestehen die Probleme weiterhin, hilft Ihnen unser Support-Team direkt weiter.",
      },
      {
        question: "Was mache ich, wenn Sender nicht laden?",
        answer:
          "Das liegt meist an einer instabilen Verbindung oder einer veralteten App-Version. Ein Neustart der App und ein Aktualisieren der Senderliste löst das Problem in den meisten Fällen.",
      },
    ],
  },
];

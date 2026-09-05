import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type TechCard = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

const iconClass = "h-5 w-5";

const cards: TechCard[] = [
  {
    title: "OSCam",
    description: "Architektur, Konfigurationsdateien und Grundbegriffe verständlich erklärt.",
    href: "/oscam",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 11h4M15 15h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "iCam",
    description: "Wie sich iCam von OSCam unterscheidet und wann welche Lösung sinnvoll ist.",
    href: "/icam",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Enigma2",
    description: "Die Linux-Basis von VU+, Dreambox, Zgemma und weiteren Receiver-Marken.",
    href: "/oscam-installieren",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Linux Receiver",
    description: "Gerätespezifische Hinweise für die gängigen Enigma2-Marken im deutschsprachigen Raum.",
    href: "/oscam-vu-plus",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <rect x="3" y="5" width="18" height="6" rx="1.5" />
        <rect x="3" y="13" width="18" height="6" rx="1.5" />
        <path d="M7 8h.01M7 16h.01" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Konfiguration",
    description: "oscam.conf, oscam.server und oscam.user im Detail — mit Beispielen und Begriffen.",
    href: "/blog/oscam-konfiguration-verstehen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 1h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 23h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2Z" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Fehlerbehebung",
    description: "Logdateien lesen, häufige Fehlerursachen erkennen und gezielt beheben.",
    href: "/blog/oscam-fehler-loesungen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <path d="M12 3l9 16H3z" strokeLinejoin="round" />
        <path d="M12 9v5M12 17h.01" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function TechnologyGrid() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Themen im Überblick"
          title="OSCam, iCam und Enigma2 — strukturiert erklärt"
          description="Sechs Bereiche, die den Unterschied zwischen einer frustrierenden und einer reibungslosen Einrichtung ausmachen."
        />

        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <ScrollReveal key={card.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <Link
                href={card.href}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6 transition-all duration-300 hover:-translate-y-1 hover:border-aqua/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-gold transition-colors duration-300 group-hover:border-aqua/40">
                  {card.icon}
                </span>
                <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-aqua">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{card.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type SupportOption = {
  title: string;
  description: string;
  href: string;
  cta: string;
  icon: ReactNode;
};

const iconClass = "h-5 w-5";

// Simple, non-priced overview of the technical help we offer. The detailed
// support packages (with real prices) live on /oscam-service — this section
// only points there instead of duplicating the pricing system.
const options: SupportOption[] = [
  {
    title: "OSCam Einrichtung",
    description:
      "Unterstützung bei Installation und Konfiguration von OSCam auf Ihrem Enigma2-Receiver — bis zur ersten funktionierenden Konfiguration.",
    href: "/oscam-installieren",
    cta: "Zur Anleitung",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 11h4M15 15h2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "iCam Einrichtung",
    description:
      "Hilfe bei Einrichtung und Konfiguration einer iCam-Umgebung sowie bei der Abgrenzung zu OSCam.",
    href: "/icam",
    cta: "Mehr zu iCam",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <path d="M4 6h16M4 12h16M4 18h9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Technischer Support",
    description:
      "Persönliche Hilfe bei Konfiguration, Fehleranalyse und allgemeinen technischen Fragen rund um OSCam, iCam und Enigma2.",
    href: "/oscam-service",
    cta: "Support anfragen",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <path d="M4 12a8 8 0 0 1 16 0M4 12v3a2 2 0 0 0 2 2h1v-5H6a2 2 0 0 0-2 2Zm16 0v3a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2Z" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function PricingPreview() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Technischer Support"
          title="Womit wir Sie bei OSCam und iCam unterstützen"
          description="Technische Unterstützung rund um OSCam, iCam und Enigma2 — Sie wählen, wobei Sie Begleitung brauchen."
        />

        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {options.map((option, index) => (
            <ScrollReveal key={option.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
              <Link
                href={option.href}
                className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6 transition-colors duration-300 hover:border-aqua/40"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-gold transition-colors duration-300 group-hover:border-aqua/40">
                  {option.icon}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{option.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{option.description}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-aqua">
                  {option.cta}
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

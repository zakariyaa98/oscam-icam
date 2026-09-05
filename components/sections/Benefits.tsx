import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Benefit = {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
};

const iconClass = "h-6 w-6";

const benefits: Benefit[] = [
  {
    title: "Enigma2",
    description: "Die Linux-Oberfläche moderner Sat-Receiver und Basis für OSCam und iCam.",
    href: "/oscam-installieren",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <rect x="3" y="4" width="18" height="13" rx="2" strokeLinecap="round" />
        <path d="M8 21h8M12 17v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "OSCam",
    description: "Quelloffene Softcam-Software für lokal angeschlossene Kartenleser und CI+-Module.",
    href: "/oscam",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <rect x="3" y="7" width="18" height="10" rx="2" />
        <path d="M7 12h4M16 11.5v1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "iCam",
    description: "Softcam-Client mit ähnlichem Prinzip, aber eigener Konfigurationssyntax.",
    href: "/icam",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Technische Anleitungen",
    description: "Schritt für Schritt erklärt — ohne unnötigen Fachjargon, mit Support auf Deutsch.",
    href: "/blog",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} className={iconClass} aria-hidden="true">
        <path d="M6 4h9l4 4v12H6z" strokeLinejoin="round" />
        <path d="M14 4v5h5M9 13h6M9 16h6" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function Benefits() {
  return (
    <section className="border-b border-border py-16 sm:py-20">
      <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <ScrollReveal key={benefit.title} delay={((index % 4) + 1) as 1 | 2 | 3 | 4}>
            <Link
              href={benefit.href}
              className="group flex h-full flex-col gap-3 rounded-2xl border border-border bg-background-elevated p-6 transition-colors duration-300 hover:border-gold/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-gold transition-colors duration-300 group-hover:border-gold/40">
                {benefit.icon}
              </span>
              <h3 className="text-base font-semibold text-foreground">{benefit.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{benefit.description}</p>
            </Link>
          </ScrollReveal>
        ))}
      </Container>
    </section>
  );
}

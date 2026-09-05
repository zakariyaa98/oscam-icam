import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const guides = [
  { title: "OSCam Grundlagen", description: "oscam.conf, oscam.server und oscam.user erklärt.", href: "/blog/oscam-konfiguration-verstehen" },
  { title: "iCam Grundlagen", description: "Prinzip, Syntax und Abgrenzung zu OSCam.", href: "/icam" },
  { title: "Enigma2 einrichten", description: "Systemvoraussetzungen und Vorbereitung des Receivers.", href: "/blog/enigma2-receiver-oscam-vorbereiten" },
  { title: "Konfiguration & Wartung", description: "Updates sicher durchführen und Konfiguration sichern.", href: "/blog/oscam-updates-durchfuehren" },
  { title: "Fehlerbehebung", description: "Logdatei lesen und Reader-Probleme eingrenzen.", href: "/blog/oscam-fehler-loesungen" },
  { title: "Receiver-Tipps", description: "Bouquets und EPG unter Enigma2 organisieren.", href: "/blog/enigma2-bouquets-epg-organisieren" },
];

export function Knowledge() {
  return (
    <section className="border-b border-border bg-background-elevated/40 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <ScrollReveal className="flex flex-col items-start gap-6">
          <SectionHeading
            align="left"
            eyebrow="Wissen"
            title="Anleitungen und technisches Hintergrundwissen"
            description="Praxisnahe Artikel rund um OSCam, iCam und Enigma2 — als Einstieg und als Nachschlagewerk bei konkreten Fragen."
          />
          <div className="relative w-full max-w-md">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-gold/10 blur-[70px]"
            />
            <figure className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-aqua/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
                <span className="ml-3 text-xs font-medium text-muted">oscam.provid</span>
              </div>
              <Image
                src="/images/home page/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-oscam-provid.png"
                alt="OSCam-Datei oscam.provid mit Provider-Kennungen für einen Enigma2-Receiver"
                width={900}
                height={600}
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 420px"
                className="h-auto w-full object-cover"
              />
            </figure>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2} className="grid gap-4 sm:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={guide.href}
              className="group flex flex-col gap-1.5 rounded-2xl border border-border bg-background p-5 transition-colors duration-300 hover:border-aqua/40"
            >
              <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                {guide.title}
                <span aria-hidden className="text-aqua opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  →
                </span>
              </span>
              <p className="text-sm leading-relaxed text-muted">{guide.description}</p>
            </Link>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}

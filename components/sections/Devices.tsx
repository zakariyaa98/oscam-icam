import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const supportedReceivers = [
  { label: "VU+", href: "/oscam-vu-plus" },
  { label: "Dreambox", href: "/oscam-dreambox" },
  { label: "Zgemma", href: "/oscam-zgemma" },
  { label: "GigaBlue", href: "/oscam" },
  { label: "Edision", href: "/oscam" },
  { label: "Octagon", href: "/oscam" },
];

export function Devices() {
  return (
    <section className="border-b border-border bg-background-elevated/40 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <ScrollReveal className="flex flex-col items-start gap-6">
          <SectionHeading
            align="left"
            eyebrow="Receiver"
            title="Ein Prinzip, viele Enigma2-Receiver"
            description="OSCam und iCam laufen grundsätzlich auf jedem Receiver mit Enigma2-Image — unabhängig vom Hersteller. Diese Marken sind im deutschsprachigen Raum besonders verbreitet."
          />

          <div className="flex flex-wrap gap-2.5">
            {supportedReceivers.map((device) => (
              <Link
                key={device.label}
                href={device.href}
                className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-muted transition-colors hover:border-aqua/50 hover:text-aqua"
              >
                {device.label}
              </Link>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2} className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-aqua/12 blur-[80px]"
          />
          <figure className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-aqua/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
              <span className="ml-3 text-xs font-medium text-muted">oscam.services</span>
            </div>
            <Image
              src="/images/home page/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-oscam-services.png"
              alt="OSCam-Datei oscam.services mit Service-IDs für einen Enigma2-Receiver"
              width={900}
              height={600}
              loading="lazy"
              sizes="(max-width: 1024px) 90vw, 512px"
              className="h-auto w-full object-cover"
            />
          </figure>
        </ScrollReveal>
      </Container>
    </section>
  );
}

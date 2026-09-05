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

        <ScrollReveal delay={2} className="relative mx-auto w-full max-w-md">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-aqua/15 blur-[80px] sm:-inset-8"
          />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl">
            <Image
              src="/images/streaming-technologie.png"
              alt="Symbolbild: Netzwerktechnik im Hintergrund einer Enigma2-Konfiguration"
              width={640}
              height={720}
              sizes="(max-width: 1024px) 90vw, 480px"
              className="h-auto w-full object-cover"
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

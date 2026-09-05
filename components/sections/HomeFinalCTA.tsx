import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function HomeFinalCTA() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <ScrollReveal className="relative overflow-hidden rounded-3xl border border-border-strong bg-background-elevated px-6 py-14 sm:px-14 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-aqua/20 blur-[110px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 rounded-full bg-gold/10 blur-[90px]"
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col items-start gap-5">
              <span className="inline-flex w-fit items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                OSCam &amp; iCam
              </span>
              <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Mehr über OSCam &amp; iCam erfahren
              </h2>
              <p className="max-w-lg text-base leading-relaxed text-secondary sm:text-lg">
                Verständliche Erklärungen, praxisnahe Anleitungen und persönlicher Support für Ihren
                Enigma2-Receiver — von der ersten Installation bis zur laufenden Wartung.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button href="/oscam-installieren" variant="primary" className="px-8 py-4 text-base">
                  Jetzt starten
                </Button>
                <Button href="/oscam-service" variant="outline" className="px-8 py-4 text-base">
                  Support anfragen
                </Button>
              </div>
            </div>

            <div className="relative mx-auto hidden w-full max-w-xs lg:block">
              <Image
                src="/images/home page/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-24h-Support-Deutschland.png"
                alt="Illustration: Support-Mitarbeiter mit Headset an einem Arbeitsplatz"
                width={1600}
                height={1600}
                loading="lazy"
                sizes="320px"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "@/components/home/HeroBackground";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

const quickFacts = ["Open Source", "Enigma2", "VU+ · Dreambox · Zgemma"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <HeroBackground />

      <Container className="relative z-10 grid items-center gap-14 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div className="flex max-w-2xl flex-col items-start gap-6">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Technische Anleitungen · Deutsch
          </span>

          <h1 className="animate-fade-up-delay-1 text-4xl font-bold leading-[1.1] tracking-tight text-foreground drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
            OSCam &amp; iCam für <span className="text-aqua">Enigma2</span>
          </h1>

          <p className="animate-fade-up-delay-2 max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
            Installation, Konfiguration und Fehlerbehebung von OSCam und iCam auf Enigma2-Receivern
            wie VU+, Dreambox und Zgemma — technisch fundiert erklärt, mit persönlichem Support auf
            Deutsch, wenn Sie einmal nicht weiterkommen.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col gap-4 pt-2 sm:flex-row">
            <Button href={WHATSAPP_DEFAULT_LINK} external variant="primary" className="px-8 py-4 text-base">
              Testline
            </Button>
            <Button href="/oscam" variant="outline" className="px-8 py-4 text-base">
              OSCam &amp; iCam verstehen
            </Button>
          </div>

          <ul className="animate-fade-up-delay-3 flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 text-xs font-medium text-muted">
            {quickFacts.map((fact) => (
              <li key={fact} className="flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-up-delay-2 relative w-full">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-aqua/15 blur-[90px]"
          />
          <figure className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface shadow-2xl">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-aqua/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-gold/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-muted/50" />
              <span className="ml-3 text-xs font-medium text-muted">oscam.conf</span>
            </div>
            <Image
              src="/images/home page/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-oscam-conf.png"
              alt="OSCam-Konfigurationsdatei oscam.conf mit den Abschnitten global, cache und cccam"
              width={900}
              height={600}
              priority
              sizes="(max-width: 1024px) 92vw, 560px"
              className="h-auto w-full object-cover"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}

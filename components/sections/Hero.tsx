import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { HeroBackground } from "@/components/home/HeroBackground";
import { WHATSAPP_FREE_TRIAL_LINK } from "@/lib/whatsapp";

const stats = [
  { value: "OSCam", label: "& iCam für Enigma2" },
  { value: "VU+ · Dreambox · Zgemma", label: "und weitere Receiver" },
  { value: "DE", label: "Support auf Deutsch" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <HeroBackground />

      <Container className="relative z-10 flex flex-col items-center gap-14 py-20 text-center sm:py-28 lg:items-start lg:py-32 lg:text-left">
        <div className="flex max-w-2xl flex-col items-center gap-6 lg:items-start">
          <span className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            OSCam & iCam für Enigma2
          </span>
          <h1 className="animate-fade-up-delay-1 text-4xl font-bold leading-[1.1] tracking-tight text-foreground drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
            OSCam-iCam — <span className="text-aqua">OSCam</span> und <span className="text-aqua">iCam</span> für Enigma2 verständlich erklärt
          </h1>
          <p className="animate-fade-up-delay-2 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Installation, Konfiguration und Troubleshooting von OSCam und iCam auf VU+, Dreambox,
            Zgemma und weiteren Enigma2-Receivern — technisch fundiert erklärt, mit persönlichem
            Support auf Deutsch, wenn Sie einmal nicht weiterkommen.
          </p>

          <div className="animate-fade-up-delay-3 flex flex-col gap-4 pt-2 sm:flex-row">
            <Button href="/oscam-installieren" variant="primary" className="px-8 py-4 text-base">
              OSCam installieren
            </Button>
            <Button
              href={WHATSAPP_FREE_TRIAL_LINK}
              external
              variant="whatsapp-white"
              className="px-8 py-4 text-base"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.3-1.39a9.9 9.9 0 0 0 4.69 1.19h.01c5.46 0 9.9-4.45 9.9-9.9 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Z" />
              </svg>
              Unverbindlich fragen
            </Button>
          </div>
        </div>

        <ScrollReveal className="grid w-full max-w-2xl grid-cols-3 gap-4 rounded-3xl border border-border bg-background-elevated/60 p-6 backdrop-blur-sm sm:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-lg font-bold text-aqua sm:text-xl">{stat.value}</span>
              <span className="text-xs text-muted sm:text-sm">{stat.label}</span>
            </div>
          ))}
        </ScrollReveal>
      </Container>
    </section>
  );
}

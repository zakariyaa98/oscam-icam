import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function VisualBreak() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_80%_40%,rgba(227,6,19,0.12),transparent_60%)]"
      />
      <Container className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <ScrollReveal className="flex flex-col items-start gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Von der Einrichtung bis zum Betrieb
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Ein stabiler Enigma2-Receiver im Alltag
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-secondary sm:text-lg">
            Ist OSCam oder iCam einmal sauber eingerichtet, läuft der Receiver im Hintergrund weiter —
            ohne leere Kanäle nach einem Update und ohne Reader, der sich nicht verbindet. Wir zeigen,
            wie Sie dorthin kommen und was zu tun ist, wenn es doch einmal hakt.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/oscam-service" variant="primary" className="px-8 py-4 text-base">
              Support-Pakete ansehen
            </Button>
            <Button href="/blog/oscam-fehler-loesungen" variant="outline" className="px-8 py-4 text-base">
              Häufige Fehler lösen
            </Button>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2} className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-aqua/10 blur-[90px]"
          />
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-4 shadow-2xl sm:p-8">
            <Image
              src="/images/home page/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-Bundesliga-Live.png"
              alt="Illustration: Live-Übertragung auf einem großen Bildschirm über einen Enigma2-Receiver"
              width={1824}
              height={1184}
              loading="lazy"
              sizes="(max-width: 1024px) 92vw, 620px"
              className="h-auto w-full object-contain"
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

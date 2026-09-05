import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TechShowcase() {
  return (
    <section className="border-b border-border bg-background-elevated/40 py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <ScrollReveal className="flex flex-col items-start gap-6">
          <SectionHeading
            align="left"
            eyebrow="Grundlagen"
            title="Was OSCam und iCam auf Enigma2 leisten"
            description="OSCam ist eine quelloffene Softcam-Software für Linux-basierte Receiver. Sie verwaltet Conditional-Access-Module und leitet Entschlüsselungsanfragen an lokal angeschlossene, rechtmäßig erworbene Smartcards oder CI+-Module weiter. iCam verfolgt dasselbe Grundprinzip, unterscheidet sich aber in Konfigurationssyntax und unterstützten Protokollen."
          />
          <p className="max-w-xl text-base leading-relaxed text-muted">
            Weil Enigma2 offen für Erweiterungen ist, lassen sich beide über den Plugin-Feed des
            jeweiligen Images installieren und über Textdateien oder das OSCam WebIf konfigurieren.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/oscam"
              className="text-sm font-semibold text-aqua underline underline-offset-4 transition-colors hover:text-aqua-soft"
            >
              Mehr über OSCam
            </Link>
            <span aria-hidden className="text-border-strong">·</span>
            <Link
              href="/icam"
              className="text-sm font-semibold text-aqua underline underline-offset-4 transition-colors hover:text-aqua-soft"
            >
              Mehr über iCam
            </Link>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2} className="relative mx-auto w-full max-w-lg">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-gold/10 blur-[80px]"
          />
          <div className="relative flex items-center justify-center overflow-hidden rounded-3xl border border-border bg-surface p-6 shadow-2xl sm:p-10">
            <Image
              src="/images/home page/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-TV-Erlebnis-Paare.png"
              alt="Illustration: Zwei Personen sehen gemeinsam über einen Enigma2-Receiver fern"
              width={1920}
              height={1280}
              sizes="(max-width: 1024px) 90vw, 512px"
              className="h-auto w-full object-contain"
            />
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

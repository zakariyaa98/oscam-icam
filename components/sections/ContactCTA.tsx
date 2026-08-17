import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { WHATSAPP_DEFAULT_LINK } from "@/lib/whatsapp";

const TELEGRAM_LINK = "https://t.me/+971505743472";

export function ContactCTA() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <ScrollReveal className="bg-noise relative overflow-hidden rounded-3xl border border-aqua/30 bg-background-elevated px-6 py-16 text-center sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-aqua/20 blur-[100px]"
          />
          <div className="relative flex flex-col items-center gap-6">
            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Bereit für Premium-Streaming ohne Kompromisse?
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Schreiben Sie uns jetzt und erhalten Sie innerhalb weniger Minuten eine persönliche
              Empfehlung für den passenden Tarif.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                href={WHATSAPP_DEFAULT_LINK}
                external
                variant="whatsapp-white"
                className="px-8 py-4 text-base"
              >
                Auf WhatsApp schreiben
              </Button>
              <Button href={TELEGRAM_LINK} external variant="telegram" className="px-8 py-4 text-base">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
                Telegram
              </Button>
              <Button href="/contact" variant="outline" className="px-8 py-4 text-base">
                Kontaktformular öffnen
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

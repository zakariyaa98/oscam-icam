import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

// Visual customer voices — the review content (stars, text, attribution) lives
// entirely inside the images provided in public/images/home page/reveiw/.
// Nothing about the reviews is written or claimed in code.
const reviews = [
  {
    src: "/images/home page/reveiw/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-OSCam-Deutsch-Handy-1.png",
    alt: "Fünf-Sterne-Kundenbewertung auf einem Smartphone: OSCam läuft stabil auf einer Dreambox One",
  },
  {
    src: "/images/home page/reveiw/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-OSCam-Deutsch-Handy-2.png",
    alt: "Fünf-Sterne-Kundenbewertung auf einem Smartphone: OSCam-Einrichtung auf einem VU+ Uno 4K SE",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-border bg-background-elevated/40 py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Kundenstimmen"
          title="Was unsere Kunden sagen"
          description="Rückmeldungen von Nutzern, die OSCam oder iCam mit unserer Unterstützung auf ihrem Enigma2-Receiver eingerichtet haben."
        />

        <div className="grid w-full max-w-3xl gap-6 sm:grid-cols-2">
          {reviews.map((review, index) => (
            <ScrollReveal key={review.src} delay={((index % 2) + 1) as 1 | 2} className="relative mx-auto w-full max-w-sm">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 rounded-[3rem] bg-gold/10 blur-[70px]"
              />
              <figure className="relative overflow-hidden rounded-3xl border border-border bg-background-elevated p-3 shadow-[0_4px_24px_rgba(0,0,0,0.4)] sm:p-4">
                <Image
                  src={review.src}
                  alt={review.alt}
                  width={1120}
                  height={2240}
                  loading="lazy"
                  sizes="(max-width: 640px) 88vw, 360px"
                  className="h-auto w-full rounded-2xl"
                />
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

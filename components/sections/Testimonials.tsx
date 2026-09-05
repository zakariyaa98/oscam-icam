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
    width: 1120,
    height: 2240,
  },
  {
    src: "/images/home page/reveiw/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-Bewertung-Handy-Dreambox-One-OpenATV.png",
    alt: "Fünf-Sterne-Kundenbewertung auf einem Smartphone: OSCam- und iCam-Einrichtung auf einer Dreambox One mit OpenATV",
    width: 1344,
    height: 1792,
  },
  {
    src: "/images/home page/reveiw/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-Bewertung-Handy-VU-Duo-4K-SE.png",
    alt: "Fünf-Sterne-Kundenbewertung auf einem Smartphone: OSCam-Anleitung für den VU+ Duo 4K SE",
    width: 1280,
    height: 1920,
  },
  {
    src: "/images/home page/reveiw/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-Bewertung-Handy-Zgemma-H11S-DAZN.png",
    alt: "Fünf-Sterne-Kundenbewertung auf einem Smartphone: iCam-Einrichtung auf einer Zgemma H11S",
    width: 1280,
    height: 1920,
  },
  {
    src: "/images/home page/reveiw/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-Bewertung-Handy-Gigablue-UHD-Quad-4K-iCam.png",
    alt: "Fünf-Sterne-Kundenbewertung auf einem Smartphone: iCam läuft stabil auf einer Gigablue UHD Quad 4K",
    width: 1920,
    height: 1280,
  },
  {
    src: "/images/home page/reveiw/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-OSCam-Deutsch-Handy-2.png",
    alt: "Fünf-Sterne-Kundenbewertung auf einem Smartphone: OSCam-Einrichtung auf einem VU+ Uno 4K SE",
    width: 1120,
    height: 2240,
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

        <div className="w-full columns-1 gap-6 sm:columns-2 lg:columns-3">
          {reviews.map((review, index) => (
            <ScrollReveal
              key={review.src}
              delay={((index % 3) + 1) as 1 | 2 | 3}
              className="mb-6 break-inside-avoid"
            >
              <figure className="overflow-hidden rounded-3xl border border-border bg-background-elevated p-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-colors duration-300 hover:border-gold/40">
                <Image
                  src={review.src}
                  alt={review.alt}
                  width={review.width}
                  height={review.height}
                  loading="lazy"
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 45vw, 360px"
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

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type Feature = {
  number: string;
  title: string;
  description: string;
  /** Optional, existing project image used as an extremely subtle, blurred
   *  hover backdrop — never shown as a card. Omitted where no image fits. */
  image?: string;
};

const features: Feature[] = [
  {
    number: "01",
    title: "HD, Full HD & 4K",
    description: "Kristallklares Streaming ohne Kompromisse.",
  },
  {
    number: "02",
    title: "Tausende IPTV Sender",
    description: "Live-TV aus Deutschland und der ganzen Welt.",
    image: "/images/dashbord.png",
  },
  {
    number: "03",
    title: "Filme & Serien",
    description: "Große Auswahl an Filmen und Serien auf Abruf.",
    image: "/images/filme%20pictures/Filme1.jpg",
  },
  {
    number: "04",
    title: "Elektronischer EPG",
    description: "Alle Sendungen und Startzeiten übersichtlich im Blick.",
  },
  {
    number: "05",
    title: "Schnelle & stabile Server",
    description: "Flüssiges Streaming mit kurzen Ladezeiten.",
    image: "/images/internet-speed.png",
  },
  {
    number: "06",
    title: "Persönlicher Kundenservice",
    description: "Wir sind bei Fragen schnell für dich erreichbar.",
  },
];

export function Features() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-16">
        <SectionHeading
          title="Warum Deutschland IPTV?"
          description="Alles, was du für dein perfektes Streaming-Erlebnis brauchst."
        />

        <div className="w-full columns-1 lg:columns-2 lg:gap-x-20">
          {features.map((feature, index) => (
            <ScrollReveal
              key={feature.number}
              delay={((index % 5) + 1) as 1 | 2 | 3 | 4 | 5}
              className="break-inside-avoid-column"
            >
              <div
                className={`group relative flex items-start gap-5 overflow-hidden py-7 transition-transform duration-300 ease-out hover:-translate-y-1 sm:gap-8 sm:py-8 ${
                  index !== features.length - 1 ? "border-b border-border hover:border-aqua/30" : ""
                }`}
              >
                {feature.image ? (
                  <div className="feature-bg-mask pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.09]">
                    <Image
                      src={feature.image}
                      alt=""
                      fill
                      loading="lazy"
                      decoding="async"
                      sizes="400px"
                      className="scale-125 object-cover"
                    />
                  </div>
                ) : null}

                <span className="relative z-10 shrink-0 pt-1 font-display text-4xl font-bold tabular-nums text-white/10 transition-colors duration-300 group-hover:text-aqua sm:text-5xl">
                  {feature.number}
                </span>

                <div className="relative z-10 flex flex-col gap-2 pt-1">
                  <h3 className="text-lg font-semibold text-foreground transition-colors duration-300 group-hover:text-aqua sm:text-xl">
                    {feature.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

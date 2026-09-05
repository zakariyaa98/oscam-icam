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
    title: "OSCam verständlich erklärt",
    description: "Architektur, Konfigurationsdateien und Grundbegriffe, ohne unnötigen Fachjargon.",
  },
  {
    number: "02",
    title: "iCam im Vergleich",
    description: "Was iCam von OSCam unterscheidet und wann welche Lösung sinnvoll ist.",
  },
  {
    number: "03",
    title: "Schritt-für-Schritt-Installation",
    description: "Von der Plugin-Installation bis zur ersten funktionierenden Konfiguration.",
    image: "/images/streaming-technologie.png",
  },
  {
    number: "04",
    title: "Für gängige Enigma2-Receiver",
    description: "VU+, Dreambox, Zgemma und weitere Marken — mit gerätespezifischen Hinweisen.",
  },
  {
    number: "05",
    title: "Troubleshooting bei Problemen",
    description: "Logdateien lesen, häufige Fehlerursachen erkennen und gezielt beheben.",
    image: "/images/troubleshooting.png",
  },
  {
    number: "06",
    title: "Support, der wirklich hilft",
    description: "Wenn Sie einmal nicht weiterkommen, erreichen Sie unser Team direkt auf Deutsch.",
  },
];

export function Features() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-16">
        <SectionHeading
          title="Was Sie auf OSCam-iCam erwarten dürfen"
          description="Sechs Bausteine, die den Unterschied zwischen einer frustrierenden und einer reibungslosen OSCam/iCam-Einrichtung ausmachen."
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

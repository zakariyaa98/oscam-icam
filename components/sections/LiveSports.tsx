import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const sports = [
  { image: "/images/football.jpg", title: "Fußball" },
  { image: "/images/bascketball.jpg", title: "Basketball" },
  { image: "/images/baseball.jpg", title: "Baseball" },
  { image: "/images/Tennis.jpg", title: "Tennis" },
  { image: "/images/car-racing.jpg", title: "Motorsport" },
  { image: "/images/motorcycle-racing.jpg", title: "Motorradrennen" },
];

export function LiveSports() {
  return (
    <section className="border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Live-Sport"
          title="Kein Anpfiff verpasst, keine Ausrede mehr"
          description="Fußball, Basketball, Tennis, Motorsport und viele weitere Disziplinen live verfolgen — in Full HD und 4K, auf dem Gerät Ihrer Wahl."
        />

        <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {sports.map((sport, index) => (
            <ScrollReveal
              key={sport.title}
              delay={((index % 3) + 1) as 1 | 2 | 3}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"
            >
              <Image
                src={sport.image}
                alt={`${sport.title} live in Full HD und 4K mit IPTV TV`}
                fill
                loading="lazy"
                decoding="async"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
              <span className="absolute bottom-4 left-4 text-lg font-semibold tracking-tight text-white sm:text-xl">
                {sport.title}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

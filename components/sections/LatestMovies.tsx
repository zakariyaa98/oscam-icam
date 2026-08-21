import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const movies = [
  { src: "/images/zootopia-2.jpeg", title: "Zootopia 2" },
  { src: "/images/black-phone-2.jpg", title: "Black Phone 2" },
  { src: "/images/the-pitt-two.jpg", title: "The Pitt – Season 2" },
  { src: "/images/michael-jackson-2026.jpg", title: "Michael" },
  { src: "/images/the_batman_part_ii.jpg", title: "The Batman Part II" },
  { src: "/images/dune-2.jpg", title: "Dune: Part Two" },
  { src: "/images/caladiat-2.jpg", title: "Gladiator II" },
  { src: "/images/a-knight-of-seven-kingkdoms.jpg", title: "A Knight of the Seven Kingdoms" },
  { src: "/images/ringhs-of-the-pawer.jpg", title: "The Lord of the Rings: The Rings of Power" },
  {
    src: "/images/Demon-Slayer_-Kimetsu-no-Yaiba-Infinity-Castle.jpg",
    title: "Demon Slayer: Infinity Castle",
  },
];

const marqueeItems = [...movies, ...movies];

export function LatestMovies() {
  return (
    <section className="overflow-hidden border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          eyebrow="Neu im Katalog"
          title="Was gerade läuft, läuft auch bei uns"
          description="Aktuelle Blockbuster und gefragte Serien, sobald sie verfügbar sind — kein separates Abo, keine Wartezeit."
        />
      </Container>

      <div className="w-full overflow-hidden">
        <div className="marquee-track animate-marquee flex w-max gap-5">
          {marqueeItems.map((movie, index) => (
            <div
              key={`marquee-item-${index}`}
              className="group relative h-[300px] w-[200px] shrink-0 overflow-hidden rounded-xl border border-border shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-aqua/10"
            >
              <Image
                src={movie.src}
                alt={`${movie.title} streamen mit Sub Zero IPTV`}
                width={200}
                height={300}
                sizes="200px"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

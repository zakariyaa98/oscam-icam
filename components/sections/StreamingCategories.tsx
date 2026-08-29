import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

type StripItem = { src: string; alt: string };

// Every path below points at a real file inside the four asset folders you
// provided (spaces URL-encoded as %20) — nothing invented, nothing outside
// those folders. Folder name is "serian pictures" on disk (not "serien").
// ALT text below was written after visually inspecting every file, so each
// one names what's actually on the poster/logo rather than a generic
// "Filmposter N" placeholder.
const filmeItems: StripItem[] = [
  { src: "/images/filme%20pictures/Filme1.jpg", alt: "The Dark Knight Filmplakat mit brennendem Fledermaus-Symbol" },
  { src: "/images/filme%20pictures/Filme2.jpg", alt: "John Wick Kapitel 4 Filmposter mit Keanu Reeves" },
  { src: "/images/filme%20pictures/Filme3.jpg", alt: "Avengers Filmposter mit mehreren Marvel-Superhelden" },
  { src: "/images/filme%20pictures/Filme4.jpg", alt: "Interstellar Filmplakat mit Astronaut im Schnee" },
  { src: "/images/filme%20pictures/Filme5.jpg", alt: "Inception Filmposter mit Leonardo DiCaprio und Ensemble" },
  { src: "/images/filme%20pictures/Filme6.jpg", alt: "Joker Filmplakat mit Clown-Maske in Nahaufnahme" },
  { src: "/images/filme%20pictures/Filme7.jpg", alt: "Fast X Filmposter mit dem Fast-and-Furious-Cast" },
  { src: "/images/filme%20pictures/Filme8.jpg", alt: "Fantasy-Filmplakat mit Elfen und goldenem Ring-Emblem" },
  { src: "/images/filme%20pictures/Filme9.jpg", alt: "Venom Filmposter mit der Marvel-Antiheldenfigur" },
  { src: "/images/filme%20pictures/Filme10.jpg", alt: "Spider-Man Filmplakat beim Sprung über die Stadt" },
];

// File #5 in this folder is actually named "Serirn5.jpg" (typo in the source
// asset) rather than "Serien5.jpg" — kept exactly as-is since that's the real
// filename on disk.
const serienItems: StripItem[] = [
  { src: "/images/serian%20pictures/Serien1.jpg", alt: "The Walking Dead Serienplakat mit Reiter auf verlassener Straße" },
  { src: "/images/serian%20pictures/Serien2.jpg", alt: "Stranger Things Serienposter mit vier Freunden auf Fahrrädern" },
  { src: "/images/serian%20pictures/Serien3.jpg", alt: "The Last of Us Serienplakat mit den beiden Hauptfiguren" },
  { src: "/images/serian%20pictures/Serien4.jpg", alt: "Lucifer Serienposter mit Hauptfigur auf brennendem Thron" },
  { src: "/images/serian%20pictures/Serirn5.jpg", alt: "Game of Thrones Serienplakat mit dem Eisernen Thron" },
  { src: "/images/serian%20pictures/Serien6.jpg", alt: "Lost Serienposter mit der Besetzung am Strand" },
  { src: "/images/serian%20pictures/Serien7.jpg", alt: "House of the Dragon Serienplakat mit zwei Königinnen" },
  { src: "/images/serian%20pictures/Serien8.jpg", alt: "Peaky Blinders Serienposter mit Silhouette in Schiebermütze" },
  { src: "/images/serian%20pictures/Serien9.jpg", alt: "La Casa de Papel Serienplakat mit roten Overalls und Masken" },
  { src: "/images/serian%20pictures/Serien10.jpg", alt: "Vikings Serienposter mit Nahaufnahme von Auge und Schwert" },
];

const kinderItems: StripItem[] = [
  { src: "/images/kinder%20pictures/Kinder1.jpg", alt: "Frozen II Filmplakat mit Elsa, Anna und Olaf" },
  { src: "/images/kinder%20pictures/Kinder2.jpg", alt: "The Smurfs Filmposter mit der blauen Schlumpf-Familie" },
  { src: "/images/kinder%20pictures/Kinder3.jpg", alt: "The Boss Baby Filmplakat mit Baby im Anzug" },
  { src: "/images/kinder%20pictures/Kinder4.jpg", alt: "The Good Dinosaur Filmposter mit Junge auf Dinosaurier" },
  { src: "/images/kinder%20pictures/Kinder5.jpg", alt: "Trolls Band Together Filmplakat mit bunten Trollfiguren" },
  { src: "/images/kinder%20pictures/Kinder6.jpg", alt: "Toy Story 2 Filmposter mit Buzz, Woody und Jessie" },
  { src: "/images/kinder%20pictures/Kinder7.jpg", alt: "Cars Filmplakat mit Rennwagen Lightning McQueen" },
  { src: "/images/kinder%20pictures/Kinder8.jpg", alt: "Tangled Filmposter mit Laternen am Nachthimmel" },
  { src: "/images/kinder%20pictures/Kinder9.jpg", alt: "Minions Filmplakat mit drei gelben Comicfiguren" },
  { src: "/images/kinder%20pictures/Kinder10.jpg", alt: "SpongeBob Schwammkopf Serienposter mit SpongeBob und Patrick" },
];

// This folder's numbering has a gap — #17 doesn't exist on disk — so it's
// simply skipped rather than guessed at. Every file here is an official
// league/competition logo (not an action photo) — described as such below.
const sportItems: StripItem[] = [
  { src: "/images/sport%20picture/Sport1.jpg", alt: "Logo der spanischen Fußballliga LaLiga" },
  { src: "/images/sport%20picture/Sport2.jpg", alt: "Logo der französischen Fußballliga Ligue 1" },
  { src: "/images/sport%20picture/Sport3.jpg", alt: "Logo der UEFA Euro Fußball-Europameisterschaft" },
  { src: "/images/sport%20picture/Sport4.jpg", alt: "Logo der UEFA Nations League" },
  { src: "/images/sport%20picture/Sport5.jpg", alt: "Logo der UEFA Europa League" },
  { src: "/images/sport%20picture/Sport6.jpg", alt: "Logo der UEFA Champions League" },
  { src: "/images/sport%20picture/Sport7.jpg", alt: "Logo der italienischen Fußballliga Serie A" },
  { src: "/images/sport%20picture/Sport8.jpg", alt: "Logo der deutschen Fußball-Bundesliga" },
  { src: "/images/sport%20picture/Sport9.jpg", alt: "Logo des FIFA World Cup" },
  { src: "/images/sport%20picture/Sport10.jpg", alt: "Logo des FIFA Club World Cup" },
  { src: "/images/sport%20picture/Sport11.jpg", alt: "Logo der englischen Premier League" },
  { src: "/images/sport%20picture/Sport12.jpg", alt: "Logo des Africa Cup of Nations der CAF" },
  { src: "/images/sport%20picture/Sport13.jpg", alt: "Logo der portugiesischen Liga Portugal" },
  { src: "/images/sport%20picture/Sport14.jpg", alt: "Logo der niederländischen Eredivisie" },
  { src: "/images/sport%20picture/Sport15.jpg", alt: "Logo der Basketball-Liga NBA" },
  { src: "/images/sport%20picture/Sport16.jpg", alt: "Logo der Kampfsportorganisation UFC" },
  { src: "/images/sport%20picture/Sport18.jpg", alt: "Logo der Kampfsportliga ONE Championship" },
  { src: "/images/sport%20picture/Sport19.jpg", alt: "Logo der Formel 1" },
  { src: "/images/sport%20picture/Sport20.jpg", alt: "Olympische Ringe als Symbol der Olympischen Spiele" },
  { src: "/images/sport%20picture/Sport21.jpg", alt: "Logo der Tennisturniere von Wimbledon" },
];

// Cycles a list until it comfortably exceeds one screen width, so the
// "render the sequence twice, scroll one copy's width" loop below never
// shows a gap, even on very wide monitors.
function repeatToMinLength(items: StripItem[], minLength: number): StripItem[] {
  const out: StripItem[] = [];
  while (out.length < minLength) out.push(...items);
  return out;
}

type Strip = {
  key: string;
  label: string;
  items: StripItem[];
  direction: "marquee" | "marquee-reverse";
  /** Fixed card size per breakpoint — every image in a row shares this exact
   *  box, chosen to match that category's real, measured aspect ratio. */
  cardSize: string;
};

const strips: Strip[] = [
  {
    key: "filme",
    label: "Filme",
    items: repeatToMinLength(filmeItems, 16),
    direction: "marquee",
    // Real Filme assets measure ~2:3 (e.g. 640×960, 1000×1500).
    cardSize: "h-[150px] w-[100px] sm:h-[195px] sm:w-[130px]",
  },
  {
    key: "serien",
    label: "Serien",
    items: repeatToMinLength(serienItems, 16),
    direction: "marquee-reverse",
    // Real Serien assets also measure ~2:3 (e.g. 2000×3000, 667×1000).
    cardSize: "h-[150px] w-[100px] sm:h-[195px] sm:w-[130px]",
  },
  {
    key: "kinder",
    label: "Kinder",
    items: repeatToMinLength(kinderItems, 16),
    direction: "marquee",
    // Real Kinder assets run slightly wider, ~3:4 (e.g. 2250×3000, 540×810).
    cardSize: "h-[144px] w-[108px] sm:h-[180px] sm:w-[135px]",
  },
  {
    key: "sport",
    label: "Sport",
    items: repeatToMinLength(sportItems, 16),
    direction: "marquee-reverse",
    // Real Sport assets are landscape, ~4:3 (e.g. 1824×1360, 1080×810).
    cardSize: "h-[120px] w-[160px] sm:h-[150px] sm:w-[200px]",
  },
];

export function StreamingCategories() {
  return (
    <section className="overflow-hidden border-b border-border py-20 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          title="Für jede Stimmung das passende Programm"
          description="Von Blockbustern über Serienmarathons bis zum Nachmittag mit den Kleinen — ein Katalog, viele Wege hinein."
        />
      </Container>

      <div className="flex w-full flex-col gap-10 sm:gap-12">
        {strips.map((strip, index) => {
          const trackItems = [...strip.items, ...strip.items];

          return (
            <ScrollReveal key={strip.key} delay={((index % 4) + 1) as 1 | 2 | 3 | 4} className="flex flex-col gap-4">
              <Container>
                <h3 className="text-center text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                  {strip.label}
                </h3>
              </Container>

              <div className="marquee-fade w-full overflow-hidden">
                <div
                  className={`marquee-track animate-${strip.direction} flex w-max gap-3 rounded-2xl border border-aqua/15 bg-background-elevated/40 p-3 shadow-[0_0_30px_rgba(227,6,19,0.06)] sm:gap-4 sm:p-4`}
                >
                  {trackItems.map((item, itemIndex) => (
                    <div
                      key={`${strip.key}-${itemIndex}`}
                      className={`group relative shrink-0 overflow-hidden rounded-xl border border-border shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-aqua/10 ${strip.cardSize}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        loading="lazy"
                        decoding="async"
                        sizes="200px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}

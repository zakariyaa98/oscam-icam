import Image from "next/image";

type PosterTile = {
  src: string;
  rotate?: string;
};

// Cinematic poster wall built entirely from the project's own existing movie/
// series/sport assets under /public/images — no external images. The scrim
// gradient in globals.css (.hero-poster-scrim) darkens it heavily on the left,
// where the Hero text sits, and lets it read more clearly toward the right.
// Sport tiles intentionally use the generic action photos already used
// elsewhere on the site (components/sections/LiveSports.tsx) rather than the
// numbered "sport picture" folder, since several of those show official
// tournament logos (UEFA, CAF, etc.) that shouldn't appear as marketing
// background art without those organizations' rights.
const posters: PosterTile[] = [
  { src: "/images/filme%20pictures/Filme2.jpg" },
  { src: "/images/serian%20pictures/Serien3.jpg", rotate: "-rotate-1" },
  { src: "/images/football.jpg" },
  { src: "/images/filme%20pictures/Filme6.jpg", rotate: "rotate-1" },
  { src: "/images/car-racing.jpg" },
  { src: "/images/serian%20pictures/Serien8.jpg", rotate: "-rotate-1" },
  { src: "/images/filme%20pictures/Filme9.jpg" },
  { src: "/images/bascketball.jpg", rotate: "rotate-1" },
  { src: "/images/serian%20pictures/Serien9.jpg" },
];

/**
 * Purely decorative Hero backdrop — pointer-events are disabled throughout so
 * it never intercepts clicks on the Hero content above it. No client JS: this
 * replaced a mouse-reactive canvas particle network with a static image grid,
 * so the whole component now renders on the server.
 */
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="hero-bg-base absolute inset-0" />

      <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-80">
        {posters.map((poster) => (
          <div key={poster.src} className={`relative overflow-hidden ${poster.rotate ?? ""}`}>
            <Image
              src={poster.src}
              alt=""
              fill
              loading="lazy"
              decoding="async"
              quality={60}
              sizes="(max-width: 768px) 34vw, 20vw"
              className="scale-110 object-cover"
            />
          </div>
        ))}
      </div>

      <div className="hero-poster-scrim absolute inset-0" />
      <div className="hero-beam" />
      <div className="hero-grain absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
    </div>
  );
}

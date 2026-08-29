import Image from "next/image";

// Cinematic moving poster wall built entirely from the project's own existing
// movie/series/kids/sport assets under /public/images — no external images.
// Reuses the exact marquee mechanism already proven elsewhere on the site
// (.marquee-track / animate-marquee / animate-marquee-reverse, defined once
// in globals.css and used by components/sections/StreamingCategories.tsx):
// each row renders its poster list twice back to back and animates exactly
// -50% — as the first copy scrolls fully off-screen, the identical second
// copy is already filling its place, so the loop never visibly resets or
// jumps. Pure CSS, no client JS needed.
//
// Sport row intentionally uses the generic action photos already used
// elsewhere on the site (components/sections/LiveSports.tsx) rather than the
// numbered "sport picture" folder, since several of those images show
// official tournament logos (UEFA, CAF, etc.) that shouldn't appear as
// marketing background art without those organizations' rights.

const filmeRow = Array.from({ length: 10 }, (_, i) => `/images/filme%20pictures/Filme${i + 1}.jpg`);

// File #5 in this folder is actually named "Serirn5.jpg" (typo in the source
// asset) rather than "Serien5.jpg" — kept exactly as-is since that's the real
// filename on disk (see the same note in StreamingCategories.tsx).
const serienRow = [
  "/images/serian%20pictures/Serien1.jpg",
  "/images/serian%20pictures/Serien2.jpg",
  "/images/serian%20pictures/Serien3.jpg",
  "/images/serian%20pictures/Serien4.jpg",
  "/images/serian%20pictures/Serirn5.jpg",
  "/images/serian%20pictures/Serien6.jpg",
  "/images/serian%20pictures/Serien7.jpg",
  "/images/serian%20pictures/Serien8.jpg",
  "/images/serian%20pictures/Serien9.jpg",
  "/images/serian%20pictures/Serien10.jpg",
];

const kinderRow = Array.from({ length: 10 }, (_, i) => `/images/kinder%20pictures/Kinder${i + 1}.jpg`);

const sportRow = [
  "/images/football.jpg",
  "/images/car-racing.jpg",
  "/images/bascketball.jpg",
  "/images/motorcycle-racing.jpg",
  "/images/baseball.jpg",
  "/images/Tennis.jpg",
];

// Repeats a short list until it comfortably exceeds one screen width, so even
// a very wide monitor never sees the loop repeat too obviously.
function repeatToMinLength(items: string[], minLength: number): string[] {
  const out: string[] = [];
  while (out.length < minLength) out.push(...items);
  return out;
}

type Row = {
  key: string;
  items: string[];
  direction: "marquee" | "marquee-reverse";
  durationS: number;
};

// Alternating directions (→ ← → ←) and distinct speeds per row are what make
// this read as a living wall rather than one flat scrolling strip.
const rows: Row[] = [
  { key: "filme", items: repeatToMinLength(filmeRow, 16), direction: "marquee", durationS: 60 },
  { key: "serien", items: repeatToMinLength(serienRow, 16), direction: "marquee-reverse", durationS: 75 },
  { key: "kinder", items: repeatToMinLength(kinderRow, 16), direction: "marquee", durationS: 50 },
  { key: "sport", items: repeatToMinLength(sportRow, 16), direction: "marquee-reverse", durationS: 65 },
];

/**
 * Purely decorative Hero backdrop — pointer-events are disabled throughout so
 * it never intercepts clicks on the Hero content above it. The scroll itself
 * is driven entirely by CSS (animate-marquee / animate-marquee-reverse),
 * which are already disabled under prefers-reduced-motion sitewide, so this
 * component needs no client-side motion check of its own.
 */
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="hero-bg-base absolute inset-0" />

      <div className="absolute inset-0 flex flex-col opacity-80">
        {rows.map((row) => {
          const trackItems = [...row.items, ...row.items];

          return (
            <div key={row.key} className="flex-1 overflow-hidden">
              <div
                className={`marquee-track flex h-full w-max gap-1 animate-${row.direction}`}
                style={{ animationDuration: `${row.durationS}s` }}
              >
                {trackItems.map((src, index) => (
                  <div key={`${row.key}-${index}`} className="relative h-full aspect-[2/3] shrink-0 overflow-hidden">
                    <Image
                      src={src}
                      alt=""
                      fill
                      loading="lazy"
                      decoding="async"
                      quality={60}
                      sizes="140px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="hero-poster-scrim absolute inset-0" />
      <div className="hero-beam" />
      <div className="hero-grain absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
    </div>
  );
}

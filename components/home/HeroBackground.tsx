"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Cinematic poster wall built entirely from the project's own existing movie/
// series/sport assets under /public/images — no external images. The scrim
// gradient in globals.css (.hero-poster-scrim) darkens it heavily on the left,
// where the Hero text sits, and lets it read more clearly toward the right.
// Sport tiles intentionally use the generic action photos already used
// elsewhere on the site (components/sections/LiveSports.tsx) rather than the
// numbered "sport picture" folder, since several of those show official
// tournament logos (UEFA, CAF, etc.) that shouldn't appear as marketing
// background art without those organizations' rights.
const posters = [
  "/images/filme%20pictures/Filme2.jpg",
  "/images/serian%20pictures/Serien3.jpg",
  "/images/football.jpg",
  "/images/filme%20pictures/Filme6.jpg",
  "/images/car-racing.jpg",
  "/images/serian%20pictures/Serien8.jpg",
  "/images/filme%20pictures/Filme9.jpg",
  "/images/bascketball.jpg",
  "/images/serian%20pictures/Serien9.jpg",
];

// Fixed per-cell tilt — a property of the grid *position*, not of whichever
// poster currently occupies it, so the wall's composition/rhythm never
// changes even as the pictures inside it change.
const cellRotations = ["", "-rotate-1", "", "rotate-1", "", "-rotate-1", "", "rotate-1", ""];

const CYCLE_MS = 9000; // how often the wall's target arrangement advances
const STAGGER_MS = 550; // delay between each cell's own crossfade, so change ripples across the wall instead of happening all at once
const CROSSFADE_MS = 1800; // slow, elegant dissolve — no cell ever "blinks" to black

function PosterCell({
  cellIndex,
  rotate,
  generation,
}: {
  cellIndex: number;
  rotate: string;
  generation: number;
}) {
  const targetSrc = posters[(cellIndex + generation * 3) % posters.length];
  const [displayedSrc, setDisplayedSrc] = useState(targetSrc);
  const [incomingSrc, setIncomingSrc] = useState<string | null>(null);

  useEffect(() => {
    if (targetSrc === displayedSrc) return;

    // Staggering per cell (rather than swapping every cell in lockstep) is
    // what makes this read as a living wall where individual posters change
    // over time, not a synchronized slideshow cut.
    const revealDelay = cellIndex * STAGGER_MS;
    const revealTimer = setTimeout(() => setIncomingSrc(targetSrc), revealDelay);
    const settleTimer = setTimeout(() => {
      setDisplayedSrc(targetSrc);
      setIncomingSrc(null);
    }, revealDelay + CROSSFADE_MS);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(settleTimer);
    };
    // Intentionally reacts only to `generation` — `displayedSrc`/`targetSrc`
    // are read from the latest render closure, not tracked as dependencies,
    // so a settle doesn't re-trigger this same effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generation, cellIndex]);

  return (
    <div className={`relative overflow-hidden ${rotate}`}>
      <Image
        src={displayedSrc}
        alt=""
        fill
        loading="lazy"
        decoding="async"
        quality={60}
        sizes="(max-width: 768px) 34vw, 20vw"
        className="hero-poster-img object-cover"
        style={{ animationDelay: `${-cellIndex * 2.4}s` }}
      />
      {incomingSrc ? (
        <Image
          src={incomingSrc}
          alt=""
          fill
          loading="lazy"
          decoding="async"
          quality={60}
          sizes="(max-width: 768px) 34vw, 20vw"
          className="hero-poster-img hero-poster-fade-in object-cover"
          // .hero-poster-fade-in applies two animations (fade-in, then the
          // continuous zoom): the delay list below matches that order —
          // the fade always starts immediately, only the zoom is desynced.
          style={{ animationDelay: `0s, ${-cellIndex * 2.4}s` }}
        />
      ) : null}
    </div>
  );
}

/**
 * Purely decorative Hero backdrop — pointer-events are disabled throughout so
 * it never intercepts clicks on the Hero content above it.
 *
 * The 9 posters stay in the same fixed 3x3 grid at all times (same
 * dimensions, same tilts, same overlay/scrim/glow) — only *which* poster
 * occupies each cell slowly changes. Each cell crossfades independently, on
 * its own staggered delay, so a poster is always just finishing a slow
 * dissolve somewhere on the wall rather than the whole background cutting at
 * once — plus a very subtle, continuous Ken Burns-style zoom on every tile —
 * for a "living poster wall" feel instead of a standard carousel. All 9
 * images are visible from first paint, so every image a cell could ever show
 * is already cached before it's needed; swapping never triggers a fetch or a
 * loading flash.
 */
export function HeroBackground() {
  const [generation, setGeneration] = useState(0);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    const id = setInterval(() => setGeneration((g) => g + 1), CYCLE_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="hero-bg-base absolute inset-0" />

      <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-80">
        {cellRotations.map((rotate, cellIndex) => (
          <PosterCell key={cellIndex} cellIndex={cellIndex} rotate={rotate} generation={generation} />
        ))}
      </div>

      <div className="hero-poster-scrim absolute inset-0" />
      <div className="hero-beam" />
      <div className="hero-grain absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
    </div>
  );
}

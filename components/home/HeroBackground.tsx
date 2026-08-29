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
// changes even as the pictures inside it rotate.
const cellRotations = ["", "-rotate-1", "", "rotate-1", "", "-rotate-1", "", "rotate-1", ""];

const CYCLE_MS = 6000; // each arrangement holds for ~6s (within the requested 5–7s)
const FADE_MS = 900; // one-way fade duration; the full dip-and-recover is ~1.8s

/**
 * Purely decorative Hero backdrop — pointer-events are disabled throughout so
 * it never intercepts clicks on the Hero content above it.
 *
 * The 9 posters stay in the same fixed 3x3 grid at all times (same
 * dimensions, same tilts, same overlay/scrim/glow) — only *which* poster
 * occupies each cell rotates every ~6s. All 9 images are visible from the
 * first paint, so by the time a rotation happens every image a cell could
 * ever show is already cached; swapping `src` never triggers a network
 * fetch or a loading flash. The whole wall dips to transparent and back
 * (letting the dark scrim show through) rather than each cell fading
 * independently, giving one clean, synchronized cinematic transition
 * instead of a busier staggered swap.
 */
export function HeroBackground() {
  const [step, setStep] = useState(0);
  const [dimmed, setDimmed] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return;

    let fadeTimeout: ReturnType<typeof setTimeout>;
    const cycle = setInterval(() => {
      setDimmed(true);
      fadeTimeout = setTimeout(() => {
        setStep((current) => (current + 3) % posters.length);
        setDimmed(false);
      }, FADE_MS);
    }, CYCLE_MS);

    return () => {
      clearInterval(cycle);
      clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="hero-bg-base absolute inset-0" />

      <div
        className={`absolute inset-0 grid grid-cols-3 gap-1 transition-opacity ease-in-out ${
          dimmed ? "opacity-0" : "opacity-80"
        }`}
        style={{ transitionDuration: `${FADE_MS}ms` }}
      >
        {cellRotations.map((rotate, cellIndex) => (
          <div key={cellIndex} className={`relative overflow-hidden ${rotate}`}>
            <Image
              src={posters[(cellIndex + step) % posters.length]}
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

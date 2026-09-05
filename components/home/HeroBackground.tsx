/**
 * Purely decorative Hero backdrop — pointer-events are disabled throughout so
 * it never intercepts clicks on the Hero content above it. Built entirely from
 * the sitewide atmospheric CSS layers already defined in globals.css
 * (hero-bg-base / hero-poster-scrim / hero-beam / hero-grain / hero-vignette),
 * with no image content — a plain gradient/grain backdrop fits a technical
 * documentation site better than a marketing poster wall.
 */
export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="hero-bg-base absolute inset-0" />
      <div className="hero-poster-scrim absolute inset-0" />
      <div className="hero-beam" />
      <div className="hero-grain absolute inset-0" />
      <div className="hero-vignette absolute inset-0" />
    </div>
  );
}

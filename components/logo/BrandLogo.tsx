type BrandLogoProps = {
  className?: string;
};

// Text-based wordmark — no static image asset. "OSCam" in the foreground
// color, "iCam" in the brand accent color, matching the favicon/OG mark.
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-xl font-extrabold tracking-tight text-foreground sm:text-2xl ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="h-6 w-6 shrink-0 sm:h-7 sm:w-7"
      >
        <circle cx="24" cy="24" r="15" stroke="currentColor" className="text-aqua" strokeWidth="3" />
        <path d="M20 17.5 30.5 24 20 30.5V17.5Z" fill="currentColor" className="text-aqua" />
      </svg>
      OSCam<span className="text-aqua">-iCam</span>
    </span>
  );
}

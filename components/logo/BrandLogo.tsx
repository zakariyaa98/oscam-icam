type BrandLogoProps = {
  className?: string;
  textClassName?: string;
};

// Text-only wordmark — no icon/symbol. "IPTV" in the neutral foreground
// color, "TV" in the brand blue, per the Black + #1A9FFF identity.
export function BrandLogo({ className, textClassName = "text-lg" }: BrandLogoProps) {
  return (
    <span className={`font-display font-bold tracking-tight ${textClassName} ${className ?? ""}`}>
      <span className="text-foreground">IPTV</span> <span className="text-aqua">TV</span>
    </span>
  );
}

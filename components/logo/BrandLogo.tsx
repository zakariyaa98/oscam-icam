type BrandLogoProps = {
  className?: string;
  textClassName?: string;
};

// Text-only wordmark — no icon/symbol. "Deutschland" in the neutral
// foreground color, "IPTV" in the brand green, per the Black + #4BEB1E
// identity.
export function BrandLogo({ className, textClassName = "text-lg" }: BrandLogoProps) {
  return (
    <span className={`font-display font-bold tracking-tight ${textClassName} ${className ?? ""}`}>
      <span className="text-foreground">Deutschland</span> <span className="text-aqua">IPTV</span>
    </span>
  );
}

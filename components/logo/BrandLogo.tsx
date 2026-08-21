type BrandLogoProps = {
  className?: string;
  textClassName?: string;
};

// Text-only wordmark — no icon/symbol. "Sub Zero" in the neutral foreground
// color, "IPTV" in the brand blue, per the Black + #1A9FFF identity.
export function BrandLogo({ className, textClassName = "text-lg" }: BrandLogoProps) {
  return (
    <span className={`font-display font-bold tracking-tight ${textClassName} ${className ?? ""}`}>
      <span className="text-foreground">Sub Zero</span> <span className="text-aqua">IPTV</span>
    </span>
  );
}

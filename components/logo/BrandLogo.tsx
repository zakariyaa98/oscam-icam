import Image from "next/image";

type BrandLogoProps = {
  className?: string;
};

// Official brand logo — fixed image asset, do not recreate/redesign/crop.
// Intrinsic size is 800x200; width/height below preserve that 4:1 ratio
// while `w-auto` lets the height classes drive responsive scaling.
export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Image
      src="/IPTV TV -Ihr IPTV Anbieter für Deutschland-800x200.png"
      alt="IPTV TV – Ihr IPTV Anbieter für Deutschland"
      width={800}
      height={200}
      priority
      className={`h-8 w-auto sm:h-9 ${className ?? ""}`}
    />
  );
}

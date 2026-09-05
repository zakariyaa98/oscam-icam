import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  /** Set on the header instance so the above-the-fold logo is not lazy-loaded. */
  priority?: boolean;
};

// Official OSCam-iCam badge shipped in /public. The PNG is a square 1600x1600
// image with a transparent background, so it sits on any surface unchanged.
const LOGO_SRC = "/images/logo/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-2.png";
const LOGO_ALT = "OSCam-iCam – OSCam und iCam für Enigma2";

export function BrandLogo({ className, priority = false }: BrandLogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt={LOGO_ALT}
      width={1600}
      height={1600}
      priority={priority}
      sizes="(max-width: 640px) 40px, (max-width: 1024px) 44px, 48px"
      className={`h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11 lg:h-12 lg:w-12 ${className ?? ""}`}
    />
  );
}

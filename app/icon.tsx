import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// Same official OSCam-iCam badge the Header/Footer (BrandLogo) render — a square
// 1600x1600 PNG with a transparent background. Inlined as a data URL because the
// satori renderer cannot reach the filesystem or network at request time.
const logoDataUrl = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/images/logo/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-2.png")
).toString("base64")}`;

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- satori render target, not DOM */}
        <img
          src={logoDataUrl}
          width={size.width}
          height={size.height}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}

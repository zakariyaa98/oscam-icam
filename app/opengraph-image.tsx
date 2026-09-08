import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Same official OSCam-iCam badge the Header/Footer (BrandLogo) render — a square
// 1600x1600 PNG with a transparent background. Inlined as a data URL because the
// satori renderer cannot reach the filesystem or network at request time.
const logoDataUrl = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/images/logo/OSCam-iCam-OSCam-und-iCam-fuer-Enigma2-2.png")
).toString("base64")}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(227,6,19,0.3), transparent 45%), radial-gradient(circle at 80% 80%, rgba(227,6,19,0.18), transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 140,
              height: 140,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- satori render target, not DOM */}
            <img
              src={logoDataUrl}
              width={140}
              height={140}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: "#FFFFFF" }}>
            OSCam<span style={{ color: "#E30613" }}>-iCam</span>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#A0A0A0" }}>
          OSCam &amp; iCam für Enigma2 verständlich erklärt
        </div>
      </div>
    ),
    { ...size }
  );
}

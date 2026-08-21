import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

// A square, high-resolution brand logo used as schema.org Organization/Article
// `publisher.logo` (Google's Rich Results guidelines require a real image URL
// of at least 112x112px here — the dynamic favicon in app/icon.tsx is only 32x32).
export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          borderRadius: 64,
        }}
      >
        <svg width="320" height="320" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="15" stroke="#1A9FFF" strokeWidth="2" opacity="0.9" />
          <path d="M20 17.5 30.5 24 20 30.5V17.5Z" fill="#1A9FFF" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

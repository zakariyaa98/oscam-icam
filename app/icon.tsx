import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

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
          background: "#000000",
          borderRadius: 8,
        }}
      >
        <svg width="22" height="22" viewBox="0 0 48 48" fill="none">
          {/* Favicon stays a plain blue ring + play mark — the site's wordmark logo
              carries no icon, so this simple mark is scoped to the favicon/OG only. */}
          <circle cx="24" cy="24" r="15" stroke="#E30613" strokeWidth="3" />
          <path d="M20 17.5 30.5 24 20 30.5V17.5Z" fill="#E30613" />
        </svg>
      </div>
    ),
    { ...size }
  );
}

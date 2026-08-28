import type { NextConfig } from "next";

// Domain canonicalization (www vs. apex) and HTTPS enforcement are handled at the
// Cloudflare/Vercel edge, not here — a redirect added at this level fights with
// those and produces a redirect loop (ERR_TOO_MANY_REDIRECTS).
const nextConfig: NextConfig = {};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Match the existing WordPress URL structure (every URL ends in "/").
  trailingSlash: true,
  images: {
    // 75 = default; 55 = full-bleed home hero (sits under a dark gradient, so artefacts are invisible).
    qualities: [55, 75],
    // AVIF first (smaller), WebP fallback.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Quote form accepts photo uploads (validated to 5 photos / 8 MB total in app/actions/quote.ts).
    serverActions: { bodySizeLimit: "10mb" },
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

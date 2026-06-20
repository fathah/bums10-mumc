import type { NextConfig } from "next";

// GitHub Pages serves this project site under /<repo>/, so production assets
// need that path prefix. Local `next dev` runs at the root for convenience.
const repo = "bums10-mumc";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // Emit a fully static site (HTML/CSS/JS) into `out/` on `next build`.
  output: "export",

  // Static export can't use the on-demand Image Optimization server.
  images: { unoptimized: true },

  // Emit `/path/index.html` so deep links resolve on GitHub Pages.
  trailingSlash: true,

  // Subpath prefix for the GitHub Pages project site (e.g. /bums10-mumc/...).
  basePath: isProd ? `/${repo}` : "",

  // Exposed to client bundles so manual references to /public assets (e.g. the
  // hero background in CSS) can be prefixed — basePath doesn't rewrite those.
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "" },
};

export default nextConfig;

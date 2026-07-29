import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only — no Node server, so no image
  // optimizer and no server-rendered routes.
  output: "export",
  images: { unoptimized: true },
  // Pages serves /about as /about/index.html; trailing slashes keep links working.
  trailingSlash: true,
};

export default nextConfig;

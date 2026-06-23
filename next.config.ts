import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: process.env.NEXT_DEV_DIST_DIR_NAME && process.env.NODE_ENV === "development"
    ? process.env.NEXT_DEV_DIST_DIR_NAME
    : ".next",
};

export default nextConfig;

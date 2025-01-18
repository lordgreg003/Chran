/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    nextScriptWorkers: true,
  } as any,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

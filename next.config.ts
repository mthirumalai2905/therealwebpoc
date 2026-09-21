import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/docs/architecture/synxpass",
        destination: "/docs/architecture/authentication",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

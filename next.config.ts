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
      {
        source: "/docs/specification",
        destination: "/docs/implementation",
        permanent: true,
      },
      {
        source: "/docs/specification/:path*",
        destination: "/docs/implementation",
        permanent: true,
      },
      {
        source: "/docs/introduction/two-webs",
        destination: "/blog/two-webs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

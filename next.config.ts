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
        destination: "/docs/introduction/how-it-works",
        permanent: true,
      },
      {
        source: "/docs/specification/:path*",
        destination: "/docs/introduction/how-it-works",
        permanent: true,
      },
      {
        source: "/docs/implementation",
        destination: "/docs/introduction/how-it-works",
        permanent: true,
      },
      {
        source: "/docs/introduction/two-webs",
        destination: "/blog/two-webs",
        permanent: true,
      },
      {
        source: "/docs/brand",
        destination: "/docs/introduction/tomorrow",
        permanent: true,
      },
      {
        source: "/docs/brand/:path*",
        destination: "/docs/introduction/tomorrow/:path*",
        permanent: true,
      },
      {
        source: "/docs/reference/glossary",
        destination: "/docs/implementation/dictionary",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

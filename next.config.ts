import type { NextConfig } from "next";
const repo = 'spfchoje';

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
};

export default nextConfig;

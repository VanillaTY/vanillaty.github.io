/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  basePath: "/vanillaty.github.io",
  assetPrefix: "/vanillaty.github.io/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

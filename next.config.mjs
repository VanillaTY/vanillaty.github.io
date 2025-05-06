/** @type {import('next').NextConfig} */

const isGithubActions = true;
let assetPrefix = "";
let basePath = "";
if (isGithubActions) {
  const repo = `yitang.github.io`.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

const nextConfig = {
  basePath,
  assetPrefix,
  /* config options here */
  output: "export",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;

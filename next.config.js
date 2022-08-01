/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: "./",
  images: {
   disableStaticImages: true,
  },
}

module.exports = nextConfig

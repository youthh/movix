/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

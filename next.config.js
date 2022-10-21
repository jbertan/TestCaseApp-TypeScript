/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.mallconomy.com", "localhost:3000"],
  },
};

module.exports = nextConfig;

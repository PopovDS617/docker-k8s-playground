const publicRuntimeConfig = {
  baseUrl: process.env.BASE_URL,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig,
};

module.exports = nextConfig;

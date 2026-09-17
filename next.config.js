/** @type {import('next').NextJSConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "www.jasagro.com",
      }
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

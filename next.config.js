/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },

    ],
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;

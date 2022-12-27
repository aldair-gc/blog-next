/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "strapi-project-server.aldairgc.com",
        port: "",
        pathname: "",
      },
    ],
  },
};

module.exports = nextConfig;

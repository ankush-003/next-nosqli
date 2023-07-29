/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination:
        "https://nosqlidetector-1-t9082585.deta.app/api/:path*", // Proxy to Backend
      },
    ];
  },
  experimental: {
        serverActions: true,
    }  
};

module.exports = nextConfig;
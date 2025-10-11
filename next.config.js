/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixelbin.io',
        pathname: '**', // allows all paths under this hostname
      },
    ],
  },
};

module.exports = nextConfig;

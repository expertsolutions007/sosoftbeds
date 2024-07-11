/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  staticPageGenerationTimeout: 100,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.orangecube.art',
        port: '',
        pathname: '/orange-cube-main.png',
      },
    ],
  },
};
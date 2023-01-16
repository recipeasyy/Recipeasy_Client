/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/home',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

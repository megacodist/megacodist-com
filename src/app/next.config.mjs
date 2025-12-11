/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/abali/:path*',
        destination: 'https://abali.pages.dev/:path*',
      },
      {
        source: '/algorithms/:path*',
        destination: 'https://algorithms.pages.dev/:path*',
      },
      {
        source: '/articles/:path*',
        destination: 'https://articles.pages.dev/:path*',
      },
    ];
  },
};

export default nextConfig;
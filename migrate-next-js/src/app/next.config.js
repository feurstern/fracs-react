/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp', 'image/png', 'image/jpeg', 'img/jpg'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ourtoga.com',
        port: '',
        pathname: '/assets/media/logo/**',
      },
    ],
  },
}
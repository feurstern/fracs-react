/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ourtoga.com',
        port: '',
        pathname: '/assets/media/logo/**',
      },
      {
        protocol: 'https',
        hostname: 'rjcons.com',
        port: '',
        pathname: '/public/img/icon/**',
      },
      {
        protocol: 'https',
        hostname: 'media.getmyuni.com',
        port: '',
        pathname: '/assets/images/articles/*'
      }

    ],
    unoptimized: true
  },
  experimental: {
    serverActions: true,
  },
  env: {
    
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
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
            protocol : 'https',
            hostname :'rjcons.com',
            port : '',
            pathname : '/public/img/icon/**',
          },
          
        ],
      },
      experimental: {
        serverActions: true,
      },
}

module.exports = nextConfig

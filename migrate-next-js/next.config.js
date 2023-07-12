/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
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
    'MYSQL_HOST': 'srv104.niagahoster.com',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': 'u1089516_dev',
    'MYSQL_USER': 'u1089516_dev_js',
    'MYSQL_PASSWORD': 'Makochankawaii123!',
  },
}

module.exports = nextConfig

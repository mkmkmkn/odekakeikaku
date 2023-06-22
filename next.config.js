/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // 型エラー時もビルド
    ignoreBuildErrors: true
  },
  images: {
    domains: ['localhost', 'lh3.googleusercontent.com'],
  },
}

// PWA用　ここから
const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
})
// PWA用　ここまで

module.exports = nextConfig

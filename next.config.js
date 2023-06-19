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

module.exports = nextConfig

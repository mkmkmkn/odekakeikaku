/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // 型エラー時もビルド
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig

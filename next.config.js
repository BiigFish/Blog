/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/Blog',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig

// module.exports = {
//   basePath: '/my-nextjs-app',
//   assetPrefix: '/my-nextjs-app',
// }
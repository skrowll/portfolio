/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ['cdn.simpleicons.org'],
  // },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
    ],
  },
  experimental: {
    appDir: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      // use: [{loader: '@svgr/webpack', options: { icon: true }}]
      use: '@svgr/webpack',
    })

    return config
  },
}

module.exports = nextConfig

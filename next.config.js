/** @type {import('next').NextConfig} */

// const withPWA = require('next-pwa');

module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'placekitten.com',
      'fillmurray.com',
      'www.fillmurray.com',
      'picsum.photos',
      'https://images.unsplash.com',
      'images.unsplash.com',
      'unsplash.com',
      'lh3.googleusercontent.com',
      'avatars.dicebear.com',
      'firebasestorage.googleapis.com',
      'https://firebasestorage.googleapis.com',
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
}

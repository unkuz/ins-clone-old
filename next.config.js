/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa');

module.exports = withPWA({
  reactStrictMode: true,
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
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
  },
});

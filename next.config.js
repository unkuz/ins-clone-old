/** @type {import('next').NextConfig} */

module.exports = {
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
    ],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

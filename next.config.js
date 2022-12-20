/** @type {import('next').NextConfig} */

module.exports = {
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
};

// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Disable Next.js Image Optimization for static export
  },
  output: 'export', // If you are using static export
};

module.exports = nextConfig;

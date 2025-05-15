/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "https://images.unsplash.com",
      "s3.us-west-2.amazonaws.com",
      "glow-wedding-card.s3.us-east-2.amazonaws.com",
    ],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;

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
    format: ["image/png", "image/webp", "image/jpeg"],
  },
};

module.exports = nextConfig;

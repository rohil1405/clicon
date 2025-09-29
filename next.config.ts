/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dummyjson.com",
        pathname: "/**",
      },
    ],
  },
  env: {
    CLICON_WEBSITE_URL: process.env.CLICON_WEBSITE_URL,
    CLICON_PRODUCT_WEBSITE_URL: process.env.CLICON_PRODUCT_WEBSITE_URL,
    NEXT_PUBLIC_CLICON_FAVORITES: process.env.NEXT_PUBLIC_CLICON_FAVORITES,
    NEXT_PUBLIC_CLICON_CART: process.env.NEXT_PUBLIC_CLICON_CART,
  },
};

module.exports = nextConfig;

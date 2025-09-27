/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  // Configuração otimizada para DigitalOcean App Platform
  trailingSlash: true,
};

export default nextConfig;

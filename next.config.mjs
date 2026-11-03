/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: "/tsmc", destination: "/tsmc/index.html" },
      { source: "/mlb", destination: "/mlb/index.html" },
    ];
  },
};
export default nextConfig;

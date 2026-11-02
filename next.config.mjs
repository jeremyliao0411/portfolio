/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: "/tsmc", destination: "/tsmc/index.html" }];
  },
};
export default nextConfig;

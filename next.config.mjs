/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/proudcts/:id",
        destination: "/items/:id",
        // response status code
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      // Adjust these hostnames to match the actual image URLs you store in `service.image`
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
      // {
      //   protocol: "https",
      //   hostname: "ibb.co",
      // },
    ],
  },
};

export default nextConfig;

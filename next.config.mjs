// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["gcrgljjodizocfzpwmvs.supabase.co"],
//   },
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gcrgljjodizocfzpwmvs.supabase.co",
      },
    ],
  },
};

export default nextConfig;

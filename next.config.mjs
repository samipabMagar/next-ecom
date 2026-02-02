/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
        
      }
    ]

  }
};

export default nextConfig;

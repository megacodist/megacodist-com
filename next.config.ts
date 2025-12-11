import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  output: 'export', // Tells Next.js to generate HTML files in 'out' folder
  
  images: {
    unoptimized: true, // Required for static export unless using a loader
  },
};

export default nextConfig;

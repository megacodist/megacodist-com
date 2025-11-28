import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  webpack: (config) => {
    // Enable importing SVGs as React components via SVGR
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: { and: [/[\\/]src[\\/]/] },
      use: [
        {
          loader: require.resolve('@svgr/webpack'),
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                { name: 'preset-default', params: { overrides: { removeViewBox: false } } },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

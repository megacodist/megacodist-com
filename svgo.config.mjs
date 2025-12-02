// svgo.config.mjs
const svgoConfig = {
  multipass: true,
  plugins: [
    { name: 'preset-default' },
    {
      name: 'prefixIds',
      params: {
        // prefix with a short, random-ish string per-file to prevent collisions
        prefix: ({ path }) => 'icon-' + Math.random().toString(36).slice(2, 8)
      }
    },
    // keep viewBox so SVG scales correctly
    { name: 'removeViewBox', active: false }
  ],
};

export default svgoConfig;
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' && {
      cssnano: {
        preset: ['default', {
          discardComments: { removeAll: true },
          normalizeWhitespace: true,
          minifySelectors: true,
          minifyParams: true,
          mergeIdents: true,
          reduceIdents: true,
          discardUnused: true,
          autoprefixer: false,
        }],
      },
    }),
  },
}
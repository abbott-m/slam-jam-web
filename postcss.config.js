module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' && {
      '@fullhuman/postcss-purgecss': {
        content: [
          './src/pages/**/*.{js,ts,jsx,tsx}',
          './src/components/**/*.{js,ts,jsx,tsx}',
          './src/app/**/*.{js,ts,jsx,tsx}',
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        safelist: [
          'html',
          'body',
          /^animate-/,
          /^transition-/,
          /^duration-/,
          /^ease-/,
          /^delay-/,
          /^bg-gradient-/,
          /^text-gradient/,
          /^glow/,
          /^pulse/,
          /^hover:/,
          /^focus:/,
          /^active:/,
          /^group-hover:/,
          /^motion-/,
        ],
      },
      cssnano: {
        preset: ['default', {
          discardComments: {
            removeAll: true,
          },
          normalizeWhitespace: true,
          minifySelectors: true,
          minifyParams: true,
          mergeIdents: true,
          reduceIdents: true,
          discardUnused: true,
          autoprefixer: false, // Already handled by autoprefixer plugin
        }],
      },
    }),
  },
}
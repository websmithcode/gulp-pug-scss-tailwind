module.exports = {
  mode: 'jit',
  separator: '_',
  purge: {
    content: [
      './src/**/*.pug',
      './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    options: {
      safelist: [],
      blocklist: [/^debug-/],
      keyframes: false,
      fontFace: true,
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

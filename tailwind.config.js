module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
     '0': '0',
     '24': '24px',
    }
  },
  variants: {
    extend: {
      ringColor: ['hover', 'active'],
      scale: ['hover', 'active'],
    },
  },
  plugins: [],
}

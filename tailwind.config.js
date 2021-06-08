module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        family: ['Ubuntu', 'sans-serif'],
      },
      height: {
        xl: '320px',
       }
    },
  },
  variants: {
    extend: {
      fontWeight: ['hover', 'focus', 'group-hover']
    },
  },
  plugins: [],
}

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        houm:{
          logo: '#ff5000',
          red: '#FF452B',
          salmon: '#ffdbd0',
          beige: '#f7f0f0',
          white: '#f7eff0',
          gayBorder: '#e9e9e9',
          black: '#212121',
        }
      },
    },
    backgroundImage: {
      'bgBubles': "url('/Fondo.svg')",
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

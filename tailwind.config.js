module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
        heading: ['Roboto', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
        
    },
    colors: { 
        blue: {
            50: '#33A7DD',
            100: '#56A3DD',
            400:'#0891b2',
            800: '#2A2B7E',
            900: '#2E2F7B',
          },
          slate: {
            400: '#F1F2F2',
            100: '#FFFFFF'
          },
          Lime: {
            400: '#C0CE2E',
            700: '#4d7c0f'
          }
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/img/rolo.png')"
      }

    },
},
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      sm: '640px',
      md: '909px',
      lg: '1124px',
      xl: '1380px',
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md:  ".2rem",
          lg: '2.5rem',
          xl: '5rem',
        },
      },
      colors: {
        blue: '#3686F7',
        green1:"#EAEEF3",
        green2:"#F0FDF4",
        green3:"#20B15A",
        gray1:"#F8F9FC",
        heading:{
          main:"#1E1F4B",
          second:"#2E3E5C"
        },
        black: '#000000',
        white:"#FFFFFF",
        black2:"#333333"
      },
      backgroundImage: {
        'gradient': 'linear-gradient(180deg, #D7F5DC 0%, #D7F5DC 100%)',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'Poppins', 'sans-serif'],
        avenir: ['Avenir', 'Plus Jakarta Sans', 'Poppins'],
      },
      boxShadow: {
        '3xl': '4px 9px 20px 0px rgba(0, 0, 0, 0.07)',
        '4xl': '0px 4.4px 20px -1px rgba(19, 16, 34, 0.05)',
      },
    },
  },
  plugins: [],
}

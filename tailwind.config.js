/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px'
    // },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bgColor: 'rgb(36,36,36)',
        accentColor: 'rgb(255,239,156)',
        headingColor: 'rgb(107,114,128)',
        navColor: 'rgb(250,250,250)',
        cardBGColor: 'rgb(46,46,46)',
        cardBorderColor: 'rgb(87,83,78)',
        cardHighlightColor: 'rgb(214,211,209)'
      }
    },
  },
  plugins: [],
}

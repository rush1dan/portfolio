/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        ultrathin: '300px',
        thin: '400px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bgColor: 'rgb(36,36,36)',
        accentColor: 'rgb(255,239,156)',
        headingColor: 'rgb(107,114,128)',
        navColor: 'rgb(208,210,216)',
        cardBGColor: 'rgb(46,46,46)',
        cardBorderColor: 'rgb(128,128,128)',
        cardButtonColor: 'rgb(87,83,78)',
        cardHighlightColor: 'rgb(214,211,209)',
        socialIconColor: 'rgb(208,210,216)',
      }
    },
  },
  plugins: [],
}

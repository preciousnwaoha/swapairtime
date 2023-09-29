/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      fontSize: {
        '2xs': "0.625rem",
        '3xs': "0.5rem"
      },
      colors: { 
        'primary': {
          50: '#f0fdf4',
          400: '#4ade80',
          700: '#15803d',
        },
        'secondary': {
          50: '#fffbeb',
          400: '#fbbf24',
          700: '#b45309',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

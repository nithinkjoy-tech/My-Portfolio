/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1440px',
        contentContainer: '1140px',
        containerSmall: '1024px',
        containerxs: '768px',
      },
      screens: {
        xs: '320px',
        sm: '375px',
        sml: '500px',
        md: '667px',
        mdl: '768px',
        lg: '960px',
        lgl: '1024px',
        xl: '1280px',
        'max-lg': { max: '1023px' },
      },
      fontFamily: {
        bodyFont: ['Fira Code', 'monospace'],
        titleFont: ['Encode Sans Expanded', 'sans-serif'],
      },
      boxShadow: {
        navbarShadow: '0 10px 30px -10px rgba(2,12,27,0.7)',
        shadowColor: 'var(--shadowColor)',
      },
      colors: {
        bodyColor: 'var(--body-color)',
        textGreen: 'var(--text-green)',
        textLight: 'var(--text-light)',
        textDark: 'var(--text-dark)',
        hoverColor: 'var(--hover-color)',
        textUnderline: 'var(--text-underline)',
        navBarText: 'var(--nav-text-color)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

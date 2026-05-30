/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Score Sheet outfield green palette
        brand: {
          50:  '#eef7f1',
          100: '#d4eedd',
          200: '#a8ddb9',
          300: '#82c896',  // --am-accent (dark mode CTA)
          400: '#6db584',
          500: '#539669',
          600: '#3d7a52',
          700: '#2a5e3d',
          800: '#1f5a3d',  // --am-accent (light mode)
          900: '#153d2a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

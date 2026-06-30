/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#050816',
          900: '#0a0e1a',
          800: '#0f1629',
          700: '#141d38',
          600: '#1a2547',
        },
        brand: {
          green: '#00d97e',
          'green-light': '#34e89e',
          'green-dark': '#00b368',
          purple: '#7c6bf0',
          'purple-light': '#9d8ff7',
          'purple-dark': '#6354d4',
          violet: '#a78bfa',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse at center, rgba(124,107,240,0.15) 0%, transparent 70%)',
        'green-glow': 'radial-gradient(ellipse at center, rgba(0,217,126,0.1) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}

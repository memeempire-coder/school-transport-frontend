module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f2f6fb',
          100: '#e6eef8',
          500: '#0b4a8b',
          700: '#08365d'
        },
        success: '#16a34a',
        danger: '#dc2626',
        warning: '#f59e0b',
        neutral: {
          50: '#fafafa',
          100: '#f3f4f6',
          500: '#6b7280',
          700: '#374151'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}

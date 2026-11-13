/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        macha: {
          bg: 'var(--color-macha-bg, #0a0a0a)',
          card: 'var(--color-macha-card, #141414)',
          elevated: 'var(--color-macha-elevated, #1c1c1c)',
          border: 'var(--color-macha-border, #27272a)',
          subtle: 'var(--color-macha-subtle, #18181b)',
          orange: 'var(--color-macha-orange, #ff6a00)',
          'orange-hover': 'var(--color-macha-orange-hover, #ff7e1a)',
          'orange-active': 'var(--color-macha-orange-active, #e05e00)',
          'orange-glow': 'rgba(255, 106, 0, 0.25)',
          'orange-subtle': 'rgba(255, 106, 0, 0.12)',
          text: 'var(--color-macha-text, #f4f4f5)',
          muted: 'var(--color-macha-muted, #a1a1aa)',
          dim: 'var(--color-macha-dim, #71717a)',
        }
      },
      boxShadow: {
        'orange-glow': '0 0 20px -3px rgba(255, 106, 0, 0.35)',
        'orange-glow-sm': '0 0 10px -2px rgba(255, 106, 0, 0.3)',
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ]
      }
    },
  },
  plugins: [],
}


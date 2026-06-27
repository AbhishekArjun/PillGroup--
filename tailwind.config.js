import forms from '@tailwindcss/forms';

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f6feb',
        'primary-dark': '#144a9a',
        accent: '#ffb703',
        surface: '#ffffff',
        'surface-alt': '#eef4ff',
        text: '#10233d',
        muted: '#5b697d',
        border: '#dce4f1',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(16, 35, 61, 0.06)',
      },
    },
  },
  plugins: [forms],
};

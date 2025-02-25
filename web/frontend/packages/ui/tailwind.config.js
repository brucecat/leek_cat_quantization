/** @type {import('tailwindcss').Config} */
export default {
  jit: true,
  content: [
    "**/*.{js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  prefix: 'ui-'
}


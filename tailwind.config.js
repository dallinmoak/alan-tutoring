/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-shades": {
          "": "var(--light-shades)",
          lighter: "var(--light-shades-lighter)",
          darker: "var(--light-shades-darker)",
        },
        "light-accent": {
          "": "var(--light-accent)",
          lighter: "var(--light-accent-lighter)",
          darker: "var(--light-accent-darker)",
        },
        "main-brand": {
          "": "var(--main-brand)",
          lighter: "var(--main-brand-lighter)",
          darker: "var(--main-brand-darker)",
        },
        "danger": {
          "": "var(--danger)",
          lighter: "var(--danger-lighter)",
          darker: "var(--danger-darker)"
        },
        "dark-accent": {
          "": "var(--dark-accent)",
          lighter: "var(--dark-accent-lighter)",
          darker: "var(--dark-accent-darker)"
        },
        "dark-shades": {
          "": "var(--dark-shades)",
          lighter: "var(--dark-shades-lighter)",
          darker: "var(--dark-shades-darker)"
        },
        "primary": {
          "": "var(--primary)",
          lighter: "var(--primary-lighter)",
          darker: "var(--primary-darker)"
        },
        "info": {
          "": "var(--info)",
          lighter: "var(--info-lighter)",
          darker: "var(--info-darker)"
        },
        "success": {
          "": "var(--success)",
          lighter: "var(--success-lighter)",
          darker: "var(--success-darker)"
        },
        "warning": {
          "": "var(--warning)",
          lighter: "var(--warning-lighter)",
          darker: "var(--warning-darker)"
        },
        "danger": {
          "": "var(--danger)",
          lighter: "var(--danger-lighter)",
          darker: "var(--danger-darker)"
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
      },
    },
  },
  plugins: [],
};

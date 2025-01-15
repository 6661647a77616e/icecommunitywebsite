module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#121212', // Dark background
        foreground: '#E0E0E0', // Light foreground
        card: {
          DEFAULT: '#1E1E1E', // Dark card background
          foreground: '#E0E0E0', // Light card foreground
        },
        popover: {
          DEFAULT: '#2C2C2C', // Dark popover background
          foreground: '#E0E0E0', // Light popover foreground
        },
        primary: {
          DEFAULT: '#6200EA', // Dark purple primary
          foreground: '#FFFFFF', // White primary foreground
        },
        secondary: {
          DEFAULT: '#03DAC6', // Teal secondary
          foreground: '#000000', // Black secondary foreground
        },
        muted: {
          DEFAULT: '#757575', // Muted gray
          foreground: '#E0E0E0', // Light muted foreground
        },
        accent: {
          DEFAULT: '#BB86FC', // Light purple accent
          foreground: '#000000', // Black accent foreground
        },
        destructive: {
          DEFAULT: '#CF6679', // Red destructive
          foreground: '#FFFFFF', // White destructive foreground
        },
        border: '#333333', // Dark border
        input: '#1E1E1E', // Dark input background
        ring: '#6200EA', // Dark purple ring
        chart: {
          1: '#6200EA', // Dark purple chart 1
          2: '#03DAC6', // Teal chart 2
          3: '#BB86FC', // Light purple chart 3
          4: '#CF6679', // Red chart 4
          5: '#333333', // Dark gray chart 5
        },
        dark: '#121212', // Dark background
        darkPurple: 'linear-gradient(90deg, #1E88E5 0%, #BBDEFB 100%)', // Gradient from blue to light blue
        blue: '#1E88E5', // Blue
        silverWhite: '#C0C0C0', // Silver white for titles
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

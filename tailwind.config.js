const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "1rem",
			screens: {
				"2xl": "1400px",
			},
		},
		screens: {
			xs: "480px",
			...defaultTheme.screens,
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: {
				1: "hsl(var(--gray1))",
				2: "hsl(var(--gray2))",
				3: "hsl(var(--gray3))",
				4: "hsl(var(--gray4))",
				5: "hsl(var(--gray5))",
				6: "hsl(var(--gray6))",
				7: "hsl(var(--gray7))",
				8: "hsl(var(--gray8))",
				9: "hsl(var(--gray9))",
				10: "hsl(var(--gray10))",
				11: "hsl(var(--gray11))",
				12: "hsl(var(--gray12))",
			},
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			muted: {
				DEFAULT: "hsl(var(--muted))",
				foreground: "hsl(var(--muted-foreground))",
			},
			monochrome: {
				DEFAULT: "hsl(var(--monochrome))",
				foreground: "hsl(var(--monochrome-foreground))",
			},
			primary: {
				DEFAULT: "hsl(var(--primary))",
				foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary))",
				foreground: "hsl(var(--secondary-foreground))",
			},
			tertiary: {
				DEFAULT: "hsl(var(--tertiary))",
				foreground: "hsl(var(--tertiary-foreground))",
			},
			destructive: {
				DEFAULT: "hsl(var(--destructive))",
				foreground: "hsl(var(--destructive-foreground))",
			},
			card: {
				DEFAULT: "hsl(var(--card))",
				foreground: "hsl(var(--card-foreground))",
			},
			popover: {
				DEFAULT: "hsl(var(--popover))",
				foreground: "hsl(var(--popover-foreground))",
			},
			accent: {
				DEFAULT: "hsl(var(--accent))",
				foreground: "hsl(var(--accent-foreground))",
			},
			input: "hsl(var(--input))",
			border: "hsl(var(--border))",
			ring: "hsl(var(--ring))",
		},
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 4px)",
				sm: "calc(var(--radius) - 8px)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};

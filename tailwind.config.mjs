/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#CC2936',
				cyan: '#00D9D9',
				dark: '#0B0B0B',
				cream: '#F9F7F4',
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				orbitron: ["Orbitron", "sans-serif"],
				sharetech: ["'Share Tech Mono'", "monospace"],
			},
		},
	},
};

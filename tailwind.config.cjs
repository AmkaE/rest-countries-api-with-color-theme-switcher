/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'dark-blue-dm-el': 'hsl(209, 23%, 22%)' /* Dark Mode Elements */,
				'very-dark-blue-dm-bg': 'hsl(207, 26%, 17%)' /* Dark Mode Background */,
				'very-dark-blue-lm-txt': 'hsl(200, 15%, 8%)' /* Light Mode Text */,
				'dark-gray': 'hsl(0, 0%, 52%)' /* Light Mode Input */,
				'very-light-gray': 'hsl(0, 0%, 98%)' /* Light Mode Background */,
				'white-dm-text':
					'hsl(0, 0%, 100%)' /* Dark Mode Text & Light Mode Elements */,
			},
			maxWidth: {
				'7.5xl': '85rem',
				'8xl': '90rem',
			},
			rotate: {
				225: '225deg',
			},
		},
		screens: {
			'xsm': '375px',
			'sm': '540px',
			'xmd': '680px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'1.5xl': '1360px',
			'2xl': '1440px',
		},
		fontFamily: {
			'nunito-sans': ['Nunito Sans, sans-serif'],
		},
	},
	plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#05053d',
                'secundary': 'rgba(39, 110, 245,200)'
            },
            dropShadow: {
                'landing-logo-shadow': '0px 45px 45px rgba(39, 110, 245,200)'
            },

            fontFamily: {
                TiltNeon: ['Tilt Neon', 'cursive ']

            }
        },
    },
    plugins: [],
}
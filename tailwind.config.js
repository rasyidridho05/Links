/** @type {import('tailwindcss/types').Config} */
const config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: { Sora: ["Sora"] }
        },
    },
    plugins: [],
};

module.exports = config;
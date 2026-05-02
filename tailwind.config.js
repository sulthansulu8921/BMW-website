/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                bmw: {
                    black: '#050a12',
                    charcoal: '#12161b',
                    gunmetal: '#1a2026',
                    silver: '#b1b6ba',
                    gold: '#c4a77d',
                    champagne: '#e5d1b0',
                    'warm-white': '#f5f5f5',
                }
            },
            fontFamily: {
                premium: ['Inter', 'sans-serif'],
            },
            animation: {
                'light-sweep': 'sweep 5s infinite',
            },
            keyframes: {
                sweep: {
                    '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
                    '100%': { transform: 'translateX(200%) skewX(-15deg)' }
                }
            }
        },
    },
    plugins: [],
}

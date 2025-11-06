const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            colors: {
                primary: '#FF1493', // Dark Pink
                secondary: '#90EE90', // Light Green
                background: 'rgba(0, 0, 0, 0.7)', // Transparent Black
                'text-light': '#000000', // Dark Black for text
                'text-dark': '#333333', // Dark gray for text
            },
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};

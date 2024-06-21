const defaultTheme = require('tailwindcss/defaultTheme');
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
        'node_modules/flowbite-react/lib/esm/**/*.js',
        flowbite.content(),
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins:["Poppins","sans-serif"],
                viga:["Viga","sans-serif"]
            },
            colors:{
                primaryColor:"#0E76BC",
                lightWhiteColor:"#EEEEEE",
                smallBlackColor:"#4D4D4D",
                mediumBlackcolor:"#333333",
                mediumYellowColor:"#FFB910",
                whiteSmoke:"#F5F5F5",
                textMediumBlue:"#27393f"
            },
            boxShadow:{
                betSlipButton:"#0E76BC 0px 7px 29px 0px",
                layoutMobileNav:"#0E76BC 0px 1px 2px",
                authButtonLayout:"#0E76BC 0px 2px 8px 0px",
                betslipHeaderLayout:"#0E76BC 0px 2px 4px 0px",
                betslipSelectedGame:"rgb(171, 215, 245) 0px 0px 2px 1px",
                selectedGamesIndicator:"rgba(255,185,16, 0.3) 0px 1px 2px 0px, rgba(255,185,16, 0.15) 0px 2px 6px 2px",
                popup:"rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
                buttonShadow:"#21B208 0px 0px 0px 2px, #21B208 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset"
            }
        },
    },

    plugins: [
        flowbite.plugin(),
        // require('@tailwindcss/forms'),
        // require('daisyui'),
    ],
};

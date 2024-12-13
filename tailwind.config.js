
    /** @type {import('tailwindcss').Config} */
    module.exports = {
        content: [
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}"
        ],
        theme: {
            extend: {
                colors: {
                    // Yumuşak mor tonları
                    'dog-primary': '#8A4FFF',      // Soft Lavender Purple
                    'dog-secondary': '#B084FF',    // Lighter Lavender
                    'dog-background': '#F3E5F5',   // Very Light Lavender
                    
                    // Pastel tonlar
                    'dog-accent-pink': '#FFB6C1',  // Soft Pink
                    'dog-accent-yellow': '#FFE4B5', // Soft Moccasin Yellow
                    
                    // Nötr renkler
                    'dog-text-primary': '#4A4A4A', // Yumuşak Gri
                    'dog-text-secondary': '#6E6E6E' // Açık Gri
                },
                backgroundImage: {
                    'dog-pattern': "linear-gradient(to right, #8A4FFF, #B084FF)"
                },
                boxShadow: {
                    'dog-card': '0 4px 6px rgba(138, 79, 255, 0.1)'
                }
            },
        },
        plugins: [
            require('@tailwindcss/forms'),
            require('@tailwindcss/typography')
        ],
    }
    
module.exports = {
    theme: {
        extend: {
            colors: {
                'primary-blue': 'rgb(0, 123, 255)'
            },
            fontFamily: {
                heading: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
                sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif']
            }
        }
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')]
}

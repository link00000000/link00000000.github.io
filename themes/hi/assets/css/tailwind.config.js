module.exports = {
    theme: {
        extend: {
            colors: {
                'primary-blue': 'rgb(0, 123, 255)'
            },
            fontFamily: {
                heading: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
                sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif']
            },
            typography: {
                /* Disable code block styles and use hugo chroma styles */
                DEFAULT: {
                    css: {
                        'pre': {
                            color: 'unset',
                            backgroundColor: 'unset'
                        },
                        'pre code': {
                            color: 'unset',
                            backgroundColor: 'unset'
                        },
                        'pre code::before': {
                            'padding-left': 'unset'
                        },
                        'pre code::after': {
                            'padding-right': 'unset'
                        },
                        'code': {
                            backgroundColor: 'unset',
                            color: 'unset'
                        },
                        'code::before': {
                            'content': '',
                            'padding-left': 'unset'
                        },
                        'code::after': {
                            'content': '',
                            'padding-right': 'unset'
                        }
                    }
                }
            }
        }
    },
    variants: {},
    plugins: [require('@tailwindcss/typography')]
}

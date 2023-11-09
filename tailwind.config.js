/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './docusaurus.config.js'],
  prefix: 'tw-', // This is important to avoid conflicts with Docusaurus styles.
  theme: {
      screens: {
        xs: '375px',
        md: '834px',
        lg: '1280px',
        'laptop-lg': '1440px',
        xl: '1840px',
      },
      extend: {
        colors: {
          gray: {
            25: '#F0F4F8',
            50: '#D9E2EC',
            100: '#BCCCDC',
            200: '#9FB3C7',
            300: '#829BB1',
            400: '#627D98',
            500: '#486581',
            600: '#324E68',
            700: '#243B53',
            800: '#102A43',
            900: '#092239',
          },
          primary: {
            25: '#E6E6FF',
            50: '#C4C6FF',
            100: '#A2A5FC',
            200: '#8788FC',
            300: '#7069FA',
            400: '#5D55FA',
            500: '#4D3DF7',
            600: '#3525E6',
            700: '#1D0EBE',
            800: '#0C008C',
            900: '#090065',
          },
          error: {
            25: '#FFE3E3',
            50: '#FFBDBD',
            100: '#FF9B9B',
            200: '#F86A6A',
            300: '#EF4E4E',
            400: '#E12D39',
            500: '#CF1124',
            600: '#AB091E',
            700: '#890419',
            800: '#610316',
            900: '#45000E',
          },
          warning: {
            25: '#FFFBEA',
            50: '#FFF3C4',
            100: '#FCE588',
            200: '#FADB5F',
            300: '#F7C948',
            400: '#F0B429',
            500: '#DE911D',
            600: '#CB6E17',
            700: '#B54D12',
            800: '#8D2B0B',
            900: '#721C00',
          },
          success: {
            25: '#EEFCF6',
            50: '#C6F7E2',
            100: '#8EEDC7',
            200: '#65D6AD',
            300: '#3EBD93',
            400: '#27AB83',
            500: '#199473',
            600: '#147D64',
            700: '#0C6B58',
            800: '#014E40',
            900: '#00352B',
          },
          purple: {
            'blog-hero': '#6027CC',
          },
        },
        boxShadow: {
          'product-item': '10px 8px 0 0 black',
          'product-item-circle': '4px 2px 0 0 black',
          xs: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          'xs-focused':
            '0px 0px 0px 4px #F2F4F7, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
          'post-image':
            '0px 3.86479px 3.86479px -1.93239px rgba(16, 24, 40, 0.03), 0px 9.66197px 11.59437px -1.93239px rgba(16, 24, 40, 0.08)',
        },
        borderRadius: {
          '4xl': '50px',
        },
        lineHeight: {
          4.5: '1.125rem',
          11: '2.75rem',
        },
        fontFamily: {
          sans: ['Instrument Sans'],
          'semi-condensed': ['Instrument Sans SemiCondensed'],
          mono: ['JetBrains Mono'],
        },
        animation: {
          'infinite-scroll': 'infinite-scroll 25s linear infinite',
        },
        keyframes: {
          'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
          },
        },
      },
    },

  plugins: [],
}

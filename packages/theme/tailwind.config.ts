// #TODO _05 Check @crearis-imports (is /dist correct?)
// hover over @crearis to see the path: import Typography from '@tailwindcss/typography' would import from /src

import sfTypography from '@crearis/typography';
import { fontFamily } from 'tailwindcss/defaultTheme';
import { tailwindConfig } from '@crearis/vue/tailwind-config';
import type { Config } from 'tailwindcss';

export default {
  presets: [tailwindConfig],
  content: ['./**/*.vue', '../../node_modules/@crearis/vue/**/*.{js,mjs}', './node_modules/@crearis/vue/**/*.{js,mjs}'],
  theme: {
    extend: {
      fontFamily: {
        mona: ['Monaspace', ...fontFamily.serif],
      },
      gridTemplateAreas: {
        'product-page': ['left-top right', 'left-bottom right'],
      },
      gridTemplateColumns: {
        'product-page': 'minmax(56%, 500px) auto',
      },
      gridTemplateRows: {
        'category-sidebar': 'min-content auto min-content',
      },
      screens: {
        '4xl': '1920px',
        '3xl': '1536px',
        '2xl': '1366px',
        xl: '1280px',
        lg: '1024px',
        md: '768px',
        sm: '640px',
        xs: '376px',
        '2xs': '360px',
      },
    },
  },
  plugins: [sfTypography, require('@savvywombat/tailwindcss-grid-areas')],
} as Config;

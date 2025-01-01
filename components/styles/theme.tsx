// styles/theme.js
import { theme as chakraTheme } from '@chakra-ui/react';
import { theme as saasTheme } from '@saas-ui/react';
import { merge } from 'lodash'; // Importar merge desde lodash

const theme = merge({}, chakraTheme, saasTheme, {
  colors: {
    // Añade o modifica los colores según sea necesario
    brand: {
      50: '#f0f8ff',
      100: '#e6f1fe',
      200: '#c0ddfd',
      300: '#99c9fc',
      400: '#72b5fb',
      500: '#4ca1fa',
      600: '#268df9',
      700: '#0078f8',
      800: '#0062cc',
      900: '#004ca3',
    },
    // ... otras personalizaciones
  },
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  // ... otras personalizaciones
});

export default theme;
// pages/_app.tsx
import type { AppProps } from 'next/app';
import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { SaasProvider, theme as saasTheme } from '@saas-ui/react';

// 1. Definir la configuración de colorMode (opcional)
const config: ThemeConfig = {
  initialColorMode: 'light', // Modo de color inicial
  useSystemColorMode: false, // No usar el modo de color del sistema
};

// 2. Extender el tema
const customTheme = extendTheme(
  {
    config,
    // 3. Paleta de colores personalizada
    colors: {
      brand: {
        50: '#f0f8ff',  // AliceBlue
        100: '#e6f1fe',
        200: '#c0ddfd',
        300: '#99c9fc',
        400: '#72b5fb',
        500: '#4ca1fa', // Color principal de la marca
        600: '#268df9',
        700: '#0078f8',
        800: '#0062cc',
        900: '#004ca3',
      },
      secondary: {
        50: '#f2f2f2',
        100: '#e6e6e6',
        200: '#cccccc',
        300: '#b3b3b3',
        400: '#999999',
        500: '#808080', // Gris medio
        600: '#666666',
        700: '#4d4d4d',
        800: '#333333',
        900: '#1a1a1a',
      },
      success: {
        500: '#48bb78', // Verde
      },
      error: {
        500: '#f56565', // Rojo
      },
      warning: {
        500: '#ed8936', // Naranja
      },
      info: {
        500: '#3182ce', // Azul
      },
      myCustomColor: { // Ejemplo de color personalizado
        500: '#bada55',
      },
    },
    // 4. Tipografía
    fonts: {
      body: '"Open Sans", sans-serif',
      heading: 'Georgia, serif',
      mono: 'Menlo, monospace',
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      shorter: 1.25,
      short: 1.375,
      base: 1.5,
      tall: 1.625,
      taller: '2',
      3: '.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    // 5. Espaciado
    space: {
      px: '1px',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
    },
    // 6. Tamaños
    sizes: {
      max: 'max-content',
      min: 'min-content',
      full: '100%',
      '3xs': '14rem',
      '2xs': '16rem',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '7xl': '80rem',
      '8xl': '90rem',
      prose: '60ch',
      container: { // Tamaños de los contenedores
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
      },
    },
    // 7. Sombras
    shadows: {
      soft: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      hard: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      brand: '0px 0px 0px 3px var(--chakra-colors-brand-500)', // Sombra personalizada usando el color de la marca
    },
    // 8. Radios de borde
    radii: {
      none: '0',
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    // 9. Z-indices
    zIndices: {
      hide: -1,
      auto: 'auto',
      base: 0,
      docked: 10,
      dropdown: 1000,
      sticky: 1100,
      banner: 1200,
      overlay: 1300,
      modal: 1400,
      popover: 1500,
      skipLink: 1600,
      toast: 1700,
      tooltip: 1800,
    },
    // 10. Breakpoints (para diseño responsive)
    breakpoints: {
      sm: '30em',
      md: '48em',
      lg: '62em',
      xl: '80em',
      '2xl': '96em',
    },
    // 11. Estilos de componentes
    components: {
      Button: {
        // Estilos base para todos los botones
        baseStyle: {
          fontWeight: 'bold',
          borderRadius: 'xl',
        },
        // Variantes de tamaño
        sizes: {
          xl: {
            h: '56px',
            fontSize: 'lg',
            px: '32px',
          },
        },
        // Variantes de estilo
        variants: {
          outline: {
            border: '2px solid',
            borderColor: 'brand.500',
            color: 'brand.500',
          },
          solid: (props: any) => ({
            bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.500',
            color: 'white',
            _hover: {
              bg: props.colorMode === 'dark' ? 'brand.800' : 'brand.600',
            },
          }),
        },
        defaultProps: {
          size: 'md', // Tamaño por defecto
          variant: 'solid', // Variante por defecto
        },
      },
      Input: {
          variants: {
            outline: {
              field: {
                borderColor: 'gray.300',
                _hover: {
                  borderColor: 'brand.500',
                },
                _focus: {
                  borderColor: 'brand.500',
                  boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
                },
              },
            },
          },
        },
      Heading: {
          baseStyle: {
              fontFamily: 'heading',
              fontWeight: 'bold',
          },
          sizes: {
              '4xl': {
                  fontSize: ['6xl', null, '7xl'],
              },
              '3xl': {
                  fontSize: ['5xl', null, '6xl'],
              },
              '2xl': {
                  fontSize: ['4xl', null, '5xl'],
              },
              xl: {
                  fontSize: ['3xl', null, '4xl'],
              },
          },
      },
      Text: {
          baseStyle: {
              fontFamily: 'body',
          }
      },
      Container: {
          baseStyle: {
              maxWidth: {
                  base: 'container.sm',
                  md: 'container.md',
                  lg: 'container.lg',
                  xl: 'container.xl'
              },
          }
      },
      // ... Personalizaciones para otros componentes
    },
  },
  saasTheme // Aplicar el tema de Saas UI después de tus personalizaciones
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SaasProvider theme={customTheme}>
      <Component {...pageProps} />
    </SaasProvider>
  );
}

export default MyApp;
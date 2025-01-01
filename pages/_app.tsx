// pages/_app.tsx
import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SaasProvider, theme as saasTheme } from '@saas-ui/react';

import customTheme from '../components/styles/theme';

const extendedTheme = extendTheme(customTheme);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
      <SaasProvider theme={saasTheme}>
        <ChakraProvider theme={extendedTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </SaasProvider>
    
  );
}

export default MyApp;
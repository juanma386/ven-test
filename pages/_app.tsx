// pages/_app.tsx
import type { AppProps } from 'next/app';
import { SaasProvider } from '@saas-ui/react';
import customTheme from '../components/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <SaasProvider theme={customTheme}>
          <Component {...pageProps} />
      </SaasProvider>
  );
}

export default MyApp;

// pages/_app.tsx
import type { AppProps } from 'next/app';
import { SaasProvider } from '@saas-ui/react';
import customTheme from '../components/styles/theme';
import useAutoDarkMode from '../components/styles/useAutoDarkMode';
import AuthGuard from '../components/security/AuthGuard'; 

function MyApp({ Component, pageProps }: AppProps) {
  useAutoDarkMode(); // Llama al hook useAutoDarkMode
  AuthGuard();
  return (
      <SaasProvider theme={customTheme}>
          <Component {...pageProps} />
      </SaasProvider>
  );
}

export default MyApp;

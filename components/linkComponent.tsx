import React, { ReactNode } from "react";
import Link, { LinkProps } from 'next/link'
import { SaasProvider } from '@saas-ui/react'

const NextLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link ref={ref} {...props} />
)

function MyApp({ Component, pageProps }) {
  return (
    <SaasProvider linkComponent={NextLink}>
      <Component {...pageProps} />
    </SaasProvider>
  )
}
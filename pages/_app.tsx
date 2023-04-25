import '@/styles/globals.css'
import type { AppProps } from 'next/app'

//コンポーネント間でセッション情報を共有する為に使用
import { SessionProvider } from 'next-auth/react'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

export default function App ({
  Component,
  pageProps:{session, ...pageProps},
}: AppProps) {
  
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
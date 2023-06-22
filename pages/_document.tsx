import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
    <Head>
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      {/* loads the entire Variable Font */}
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0&display=auto" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@400;500;700&family=Kiwi+Maru:wght@300;400;500&display=swap" rel="stylesheet" />
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

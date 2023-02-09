import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no, maximum-scale=1, width=device-width" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png"></link>
        <link rel="apple-touch-startup-image" href="/img/landing.png"></link>
        <link rel="shortcut icon" href="https://recipeasy.co.kr/favicon.ico" type="image/x-icon" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

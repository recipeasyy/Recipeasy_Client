import { Html, Head, Main, NextScript } from 'next/document';
import { Fragment } from 'react';
import { appleDeviceSpecsForLaunchImages } from '../api/pwaApi';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, user-scalable=no, maximum-scale=1, width=device-width" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/img/icon-192x192.png"></link>
        <link rel="shortcut icon" href="https://recipeasy.co.kr/favicon.ico" type="image/x-icon" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {appleDeviceSpecsForLaunchImages.map((spec: any, i: number) => {
          return (
            <Fragment key={i}>
              <link
                key={`apple-splash-${spec.portrait.width}-${spec.portrait.height}`}
                rel="apple-touch-startup-image"
                href={`apple-splash-${spec.portrait.width}-${spec.portrait.height}.png`}
                media={`(device-width: ${spec.portrait.width / spec.scaleFactor}px) and (device-height: ${
                  spec.portrait.height / spec.scaleFactor
                }px) and (-webkit-device-pixel-ratio: ${spec.scaleFactor}) and (orientation: portrait)`}
              />
              <link
                key={`apple-splash-${spec.portrait.width}-${spec.portrait.height}`}
                rel="apple-touch-startup-image"
                href={`apple-splash-${spec.portrait.width}-${spec.portrait.height}.png`}
                media={`(device-width: ${spec.portrait.height / spec.scaleFactor}px) and (device-height: ${
                  spec.portrait.width / spec.scaleFactor
                }px) and (-webkit-device-pixel-ratio: ${spec.scaleFactor}) and (orientation: landscape)`}
              />
            </Fragment>
          );
        })}
        <meta name="mobile-web-app-capable" content="yes"></meta>
        <meta name="apple-mobile-web-app-title" content="recipeasy"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

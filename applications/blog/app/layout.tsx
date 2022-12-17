'use client';
import './globals.css'

import 'reflect-metadata';

import {ReactNode} from 'react';
import {ServiceProvider} from '@model/context';
import {St2rMuiThemeProvider} from '@model/theme';
import {enableStaticRendering} from 'mobx-react-lite';
import Script from 'next/script';

typeof window === 'undefined' && enableStaticRendering(true);

const RootLayout = ({
                      children,
                    }: { children: ReactNode }) => {
  return (
    <html>
    <head>
      <title>Root Layout Title</title>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BT8Y8XQXP0"/>
      <Script id="google-analytics" strategy='afterInteractive' dangerouslySetInnerHTML={{
        __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BT8Y8XQXP0');`
      }}/>
    </head>
    <body>
    <ServiceProvider>
      <St2rMuiThemeProvider>
        {children}
      </St2rMuiThemeProvider>
    </ServiceProvider>
    </body>
    </html>
  )
}

export default RootLayout;

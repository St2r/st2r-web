'use client';
import './globals.css'

import 'reflect-metadata';

import {ReactNode} from 'react';
import {ServiceProvider} from '@model/context';
import {St2rMuiThemeProvider} from '@model/theme';
import {enableStaticRendering} from 'mobx-react-lite';

typeof window === 'undefined' && enableStaticRendering(true);

const RootLayout = ({
                      children,
                    }: { children: ReactNode }) => {
  return (
    <html>
    <head/>
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

'use client';
import './globals.css'

import {ReactNode} from 'react';
import {ServiceProvider, useService} from '@model/context';
import {St2rMuiThemeProvider, ThemeModel} from '@model/theme';
import {enableStaticRendering, observer} from 'mobx-react-lite';
import {AppBar, Button, IconButton, Paper, Toolbar} from '@mui/material';
import {Menu} from '@mui/icons-material';
import St2rAppBar from '../components/app-bar';

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
        <Paper sx={{minHeight: '100vh', minWidth: '100vw'}}>
          <St2rAppBar/>
          {children}
        </Paper>
      </St2rMuiThemeProvider>
    </ServiceProvider>
    </body>
    </html>
  )
};

const InnerLayout = observer(({
                                children,
                              }: { children: ReactNode }) => {

  const themeModel = useService(ThemeModel);
  console.log(themeModel.mode);
  return (
    <>
      <AppBar position='sticky' sx={{background: 'rgba(10, 25, 41, 0.7)', backdropFilter: 'blur(8px)'}}>
        <Toolbar>
          <IconButton>
            <Menu/>
          </IconButton>
        </Toolbar>
      </AppBar>
      {children}
    </>
  )
})

export default RootLayout;

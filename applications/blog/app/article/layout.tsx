'use client';

import {ReactNode} from 'react';
import {Button, IconButton, Paper} from '@mui/material';
import {DarkMode, LightMode} from '@mui/icons-material';
import {useService} from '@model/context';
import {ThemeModel} from '@model/theme';
import {observer} from 'mobx-react-lite';

const RootLayout = ({children}: { children: ReactNode }) => {
  const themeModel = useService(ThemeModel);

  return (
    <div style={{margin: '0 50px'}}>
      <Button>TEST</Button>
      <div>{children}</div>
    </div>
  )
}

export default observer(RootLayout);

'use client';

import {ReactNode} from 'react';
import {IconButton, Paper} from '@mui/material';
import {DarkMode, LightMode} from '@mui/icons-material';
import {useService} from '@model/context';
import {ThemeModel} from '@model/theme';
import {observer} from 'mobx-react-lite';

const RootLayout = ({children}: { children: ReactNode }) => {
  const themeModel = useService(ThemeModel);

  return (
    <Paper style={{width: 1000, margin: '0 auto'}} elevation={0}>
      <IconButton onClick={themeModel.switchDarkMode}>
        {themeModel.mode === 'dark' ? <LightMode/> : <DarkMode/>}
      </IconButton>
      <div>{children}</div>
    </Paper>
  )
}

export default observer(RootLayout);

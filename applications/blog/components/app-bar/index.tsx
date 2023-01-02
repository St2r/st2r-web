'use client';

import {IconButton, Toolbar} from '@mui/material';
import {DarkMode, LightMode, Menu} from '@mui/icons-material';
import {AppBarContainer} from './style';
import {observer} from 'mobx-react-lite';
import {useService} from '@model/context';
import {ThemeModel} from '@model/theme';

const St2rAppBar = observer(() => {
  const themeModel = useService(ThemeModel);

  return (
    <AppBarContainer position='sticky'>
      <Toolbar>
        <IconButton>
          <Menu/>
        </IconButton>
        <IconButton sx={{ml: 'auto'}} onClick={themeModel.switchDarkMode}>
          {themeModel.mode === 'light' ? <LightMode/> : <DarkMode/>}
        </IconButton>
      </Toolbar>
    </AppBarContainer>
  )
});

export default St2rAppBar;
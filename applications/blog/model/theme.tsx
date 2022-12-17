'use client';

import {action, computed, makeObservable, observable, toJS} from 'mobx';
import {createTheme, Theme, ThemeProvider} from '@mui/material';
import {isUsingStaticRendering, observer} from 'mobx-react-lite';
import {useService} from '@model/context';
import {ReactNode, useEffect} from 'react';
import {injectable} from 'inversify';

@injectable()
export class ThemeModel {

  @observable mode: 'light' | 'dark' = 'dark';

  @computed get value(): Theme {
    return createTheme({palette: {mode: this.mode}});
  }

  constructor() {
    makeObservable(this);
  }

  @action.bound
  switchDarkMode() {
    if (this.mode === 'light') {
      this.mode = 'dark';
    } else {
      this.mode = 'light';
    }
  }
}

export const St2rMuiThemeProvider = observer(({children}: { children: ReactNode }) => {
  const themeModel = useService(ThemeModel);

  return (
    <ThemeProvider theme={themeModel.value}>
      {children}
    </ThemeProvider>
  )
})
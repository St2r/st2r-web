import {atom} from "jotai";
import type { Theme as MuiTheme} from "@mui/material";
import {createTheme} from "@mui/material";

export enum Theme {
  DARK,
  LIGHT,
}

export const $Theme = atom<Theme>(Theme.DARK);

export const $MuiTheme = atom<MuiTheme>((get) => {
  const t = get($Theme);

  switch (t) {
    case Theme.DARK:
      return createTheme({
        palette: {
          mode: 'dark'
        }
      });
    case Theme.LIGHT:
      return createTheme({
        palette: {
          mode: 'light'
        }
      });
  }
})
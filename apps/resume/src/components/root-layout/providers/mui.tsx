import type {FC, PropsWithChildren} from 'react';
import {ThemeProvider} from '@mui/material';
import {useAtomValue} from "jotai";
import {$MuiTheme} from "~/atoms/theme";

export const MuiProvider: FC<PropsWithChildren> = ({children}) => {
  const theme = useAtomValue($MuiTheme);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
import {FC, PropsWithChildren, useMemo} from 'react';
import {createTheme, ThemeProvider} from '@mui/material';

export const MuiProvider = ({children}) => {
    const theme = useMemo(() => createTheme({
        palette: {
            mode: 'dark'
        }
    }), [])

    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}
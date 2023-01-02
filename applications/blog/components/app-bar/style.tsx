import {AppBar, styled} from '@mui/material';

export const AppBarContainer: typeof AppBar = styled(AppBar)(({theme}) => {
  const mode = theme.palette.mode;
  if (mode === 'light') {
    return {background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(8px)'};
  } else if (mode === 'dark') {
    return {background: 'rgba(10, 25, 41, 0.7)', backdropFilter: 'blur(8px)'};
  }
});
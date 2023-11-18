import type {FC} from "react";
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import ColorLensIcon from '@mui/icons-material/ColorLens';

export const TopBar: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense" sx={{gap: 2}}>
        <IconButton color="inherit">
          <GitHubIcon/>
        </IconButton>
        <Box sx={{flexGrow: 1}}/>
        <IconButton edge="end" color="inherit">
          <ColorLensIcon/>
        </IconButton>
        <IconButton color="inherit">
          <LanguageIcon/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
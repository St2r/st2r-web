import type {FC, MouseEvent} from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {useAtom} from "jotai";
import {$Theme, Theme} from "~/atoms/theme";
import {useCallback} from "react";

export const ThemeSwitcher: FC = () => {
  const [theme, setTheme] = useAtom($Theme);

  const handleThemeChange = useCallback((_: MouseEvent, value: Theme | null) => {
    if (value === null) {
      return;
    }
    setTheme(value);
  }, [setTheme]);

  return (
    <>
      <ToggleButtonGroup
        value={theme}
        exclusive
        size="small"
        onChange={handleThemeChange}
      >
        <ToggleButton value={Theme.LIGHT}>
          <LightModeIcon/>
        </ToggleButton>
        <ToggleButton value={Theme.DARK}>
          <DarkModeIcon/>
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  )
}
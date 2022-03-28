import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import palette from './palette';

// A custom theme for this app
const theme = (mode, color, dir) => createTheme({
  direction: dir,
  palette: {
    mode,
    primary: palette[color].palette.primary,
    secondary: palette[color].palette.secondary,
    accent: palette[color].palette.accent,
    error: {
      main: red.A400,
    },
  },
  shade: {
    light: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
    dark: '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)'
  },
  rounded: {
    small: '8px',
    medium: '12px',
    big: '20px'
  }
});

export default theme;

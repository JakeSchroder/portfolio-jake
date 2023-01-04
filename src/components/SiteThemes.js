import { createTheme } from '@mui/material/styles';

export const darkBlueTheme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#00140e',
      contrastText: '#def1db',
    },
    secondary: {
      main: '#567c28',
    },
    background: {
      default: 'rgb(51, 67, 62)',
      paper: 'rgb(51, 67, 62)',
    },
    text: {
      primary: '#def1db',
      secondary: '#def1db',
      disabled: '#def1db',
      hint: '#def1db',
    },
    mode: 'dark'
  },
});

export const lightBlueTheme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#003835',
      contrastText: '#fff4f0',
    },
    secondary: {
      main: '#85a655',
    },
    background: {
      default: '#fff4f0',
      paper: '#fff4f0',
    },
    mode: 'light'
  },
});

export const purpleTheme = createTheme ({
  palette: {
    secondary: {
      main: '#a96f8b',
      light: '#db9ebb',
      dark: '#79435e',
    },
    primary: {
      main: '#85ab55',
      light: '#b6dd83',
      dark: '#567c28',
      contrastText: '#000000',
    },
    background: {
      default: '#f4e4f5',
      paper: '#f4e4f5',
    },
    mode: 'light'
  },
});

export const iconFillColor = lightBlueTheme.palette.secondary.light
export const lightIconFillColor = purpleTheme.palette.secondary.light

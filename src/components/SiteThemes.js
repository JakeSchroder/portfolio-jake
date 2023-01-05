export const darkBlueTheme = 
  {
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
  };

export const lightBlueTheme = {
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
};

export const purpleTheme = {     
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
};

// Update the theme only if the mode changes
export const getDesignTokens = (colorMode) => ({ //Need to set type parameter 
  palette:{
    colorMode,
    ...(colorMode === 'light' ?
    purpleTheme : darkBlueTheme)
  }
});
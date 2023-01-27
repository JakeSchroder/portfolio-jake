export const darkTheme = {
  type: "dark",
  primary: {
    main: "#0d1c18",
    contrastText: "#def1db",
  },
  secondary: {
    main: "#85a655",
    contrastText: "#0d1c18",
  },
  background: {
    default: "#32423d",
    paper: "#5d6e68",
  },
  text: {
    primary: "#def1db",
  },
  mode: "dark",
};

export const lightTheme = {
  type: "light",
  primary: {
    main: "#405433",
    contrastText: "#445d33",
  },
  secondary: {
    main: "#85a655",
    contrastText: "#182b0c",
  },
  background: {
    default: "#def1db",
    paper: "#b7d9af",
  },
  text: {
    primary: "#445d33",
  },
  mode: "light",
};

// Update the theme only if the mode changes
export const getDesignTokens = (colorMode) => ({
  //Need to set type parameter
  palette: {
    colorMode,
    ...(colorMode === "light" ? lightTheme : darkTheme),
  },
});

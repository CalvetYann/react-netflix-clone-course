import { createTheme, responsiveFontSizes } from "@mui/material";

const darkBase = createTheme({
  palette: {
    primary: {
      main: '#E50914',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#141414',
      paper: '#525252',
    },
    text: {
        primary: '#FFFFFF',
        secondary: '#000000',
    },
  }
});

export const darkTheme = responsiveFontSizes(darkBase);
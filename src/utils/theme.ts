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
    },
  }
});

export const darkTheme = responsiveFontSizes(darkBase);

const lightBase = createTheme({
  palette: {
    primary: {
      main: '#E50914',
    },
    secondary: {
      main: '#000000',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F0F0F0',
    },
  },
});

export const lightTheme = responsiveFontSizes(lightBase);


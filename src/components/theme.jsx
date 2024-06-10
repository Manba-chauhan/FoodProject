import { createTheme } from '@mui/material';
import React from 'react';

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#af94de",
      main: "#6a4aa1",
      // dark: "#5e35b1",
      // contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#fff",
      dark: "#ba000d",
      contrastText: "#6a4aa1",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Montserrat"',
      '"sans-serif"',
    ].join(","),
  },
  //   components:{
  //     mui
  //   }
});
export default theme;

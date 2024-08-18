import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Lato"].join(),
  },

  palette: {
    primary: {
      main: "#00244d",
    },
    secondary: {
      main: "#ff5470",
    },
  },
});

export default theme;

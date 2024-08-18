import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Noto Sans"].join(),
  },

  palette: {
    primary: {
      main: "#ff5470",
    },
    secondary: {
      main: "#00244d",
    },
  },
});

export default theme;

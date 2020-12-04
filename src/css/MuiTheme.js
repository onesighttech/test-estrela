import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffd0b0",
      main: "#ff9e80",
      dark: "#c96f53",
      contrastText: "#000000",
    },
    secondary: {
      light: "#ff6434",
      main: "#c96f53",
      dark: "#a30000",
      contrastText: "#ffffff",
    },
    youtube: {
      main: "#dd2c00",
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
      fontStyle: "italic",
    },
  },
});

export default theme;

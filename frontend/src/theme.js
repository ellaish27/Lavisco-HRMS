import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    red: { main: "#e53935" },
    green: { main: "#43a047" },
    yellow: { main: "#fbc02d" },
    blue: { main: "#1e88e5" },
    purple: { main: "#8e24aa" },
    gray: { main: "#757575" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          fontWeight: 600,
          textTransform: "none",
        }
      }
    },
  },
});

export default theme;
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#5f5f60 #2b2b2b",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "rgb(61, 61, 63)",
              width: '0.7em'
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: "#6b6b6b",
              minHeight: 24,
              border: "3px solid #2b2b2b",
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
              backgroundColor: "#959595",
            },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
              backgroundColor: "#959595",
            },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#959595",
            },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "#2b2b2b",
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            color: grey[600],
          },
          colorSecondary: {
            '&$checked': {
              color: grey[800],
            },
          },
        }
      },
    },
    breakpoints: {
      values: {
        xs: 425,
        sm: 768,
        md: 1024,
        lg: 1200,
        xl: 1440,
      },
    },
  });


import { createTheme } from "@mui/material/styles";

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
    },
    palette: {
      primary: {//bgcolor
        main: "#0989e3",
        light: "#ffffff",
        dark: "#0b2948",
      },
      secondary: {//color
        main: "#4db6ac",
        light: "#607489",
        dark: "#8ba1b7",
      },
      info: {//header bgcolor
        main: "#4db6ac",
        light: "#051e3932",
        dark: "#031d35d5",
      },
      success: {//header color
        main: "#4db6ac",
        light: "#000f1f32",
        dark: "#8ba1b7",
      }
    },
  });


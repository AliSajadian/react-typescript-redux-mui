import { CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import ReduxToastr from 'react-redux-toastr';
import { theme as globalTheme } from "../styles/GlobalStyle";
import React from "react";
import AppRoutes from "../routes/routes";
import { useColorModeContext } from "../hooks";
import { ColorModeContextType } from "../context";
import { grey } from "@mui/material/colors";

const getDesignTokens = (colorMode: PaletteMode) => ({
  palette: {
    mode: colorMode ? "dark" : "light",
    ...(colorMode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#d5d5d8',
          },
          divider: grey[600],
          background: {
            default: '#e1e1e6', 
            paper: '#eaeaef',
          },
          text: {
            primary: grey[900],
            secondary: grey[700],
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#040821',
          },
          divider: grey[700],
          background: {
            default: '#040821',
            paper: '#010d1b',
          },
          text: {
            primary: 'whitesmoke',
            secondary: grey[500],
          },
        }),
  },
});


export const App = () => {
  const { colorMode } = useColorModeContext() as ColorModeContextType;
  const theme = React.useMemo(() =>createTheme(globalTheme, getDesignTokens(colorMode)), [colorMode]);
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <EmotionThemeProvider theme={theme}>
          <CssBaseline />
          <AppRoutes/>
        </EmotionThemeProvider>
      </MuiThemeProvider>
      <ReduxToastr
        timeOut={5000}
        newestOnTop={true}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </React.Fragment>
  );
}


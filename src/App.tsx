import { CssBaseline, ThemeProvider } from "@mui/material";
// import ReduxToastr from 'react-redux-toastr';
import { theme } from "./styles/GlobalStyle";
import React from "react";
import AppRoutes from "./routes/routes";


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes/>
      </ThemeProvider>
      {/* <ReduxToastr
        timeOut={5000}
        newestOnTop={true}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      /> */}
    </React.Fragment>
  );
}

export default App;

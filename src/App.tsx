import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes/routes";
// import ReduxToastr from 'react-redux-toastr';
import { IRoute } from "./interfaces/RouteType";
import Layout from "./components/Layout";
import { theme } from "./styles/GlobalStyle";
import React from "react";


function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Layout>
            <Routes>
              {appRoutes.map((route: IRoute) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
          </Layout>
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

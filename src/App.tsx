import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes/routes";
import { IRoute } from "./interfaces/RouteType";
import Layout from "./components/Layout";
import { theme } from "./styles/GlobalStyle";


function App() {
  return (
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
  );
}

export default App;

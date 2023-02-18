import { FC }  from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Outlet } from 'react-router-dom';

// import { Box, Grid } from "@mui/material";
import { IRoute } from "../contracts/RouteType";
import { routes as dashboardRoutes, authRoutes } from "./index";
import MainLayout from "../layouts/MainLayout";
// import ChangePasswordLayout from "../layouts/ChangePasswordLayout";
import AuthLayout from "../layouts/AuthLayout";
// import Page404 from "../pages/security/authentication/Page404";
// import Login from "../pages/security/authentication/login";
// import ChangePassword from "../pages/security/authentication/changePassword";
// import AlertModal from "../components/Alert";
// import ScrollToTop from "../components/ScrollToTop";
import { RootState } from '../redux/index';
// import Page404 from "../pages/security/authentication/Page404";
import React from "react";


const ModifiedMainLayout = () => {
    return (
        <MainLayout>
        {/* nested routes render out here */}
        <Outlet />  
        </MainLayout>
    )
    };

const ModifiedAuthLayout = () => {
    return (
        <AuthLayout>
        {/* nested routes render out here */}
        <Outlet />  
        </AuthLayout>
    )
};

const AppRoutes: FC = () => {
    const isAuthenticated: boolean = useSelector(
        (state: RootState) => state.auth.authToken !== ''
    )
    // console.log('isAuthenticated:', isAuthenticated)
    return (
        <>
            {isAuthenticated ? 
                <Routes>
                    <Route element={<ModifiedMainLayout/>}>
                    {dashboardRoutes.map((route: IRoute) => (
                        <Route
                            key={route.key}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                    </Route>
                </Routes>
            :
                <React.Fragment>
                    <Routes>
                        <Route element={<ModifiedAuthLayout/>}>
                        {authRoutes.map((route: IRoute) => (
                            <Route
                                key={route.key}
                                path={route.path}
                                element={<route.component />}
                            />
                        ))}
                        </Route>
                    </Routes>
                </React.Fragment>
            }
        </>
    )
}

export default AppRoutes;
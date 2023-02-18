import { FC, ReactElement, ReactNode } from "react";
import { Box, CssBaseline } from "@mui/material";
import Footer from "../components/Footer";
import Main from "../components/Main";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import { SidebarSelectedMenuTitleProvider } from "../context";


interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <Box
    sx={{
        display: "flex",
        // flexDirection: "row-reverse",
        minHeight: "100vh",
        maxWidth: "100vw",
        flexGrow: 1,
    }}
>
      <CssBaseline />
      <SidebarSelectedMenuTitleProvider>
        <SideBar />
        <Main >
          <Header />
          <Content>
            {children}
          </Content>
          <Footer />
        </Main>
      </SidebarSelectedMenuTitleProvider>
    </Box>
  );
};

export default Layout;
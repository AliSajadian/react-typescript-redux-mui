import { FC, ReactElement, ReactNode } from "react";
import { Box, CssBaseline } from "@mui/material";
import Footer from "./Footer";
import Main from "./Main";
import SideBar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";


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
      <SideBar />
      <Main >
        <Header />
        <Content>
          {children}
        </Content>
        <Footer />
      </Main>
    </Box>
  );
};

export default Layout;
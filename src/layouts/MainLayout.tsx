import { FC, ReactElement, ReactNode } from "react";
import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Main from "../components/Main";
import SideBar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import { useTemplateDirectionContext } from "../hooks";


interface LayoutProps {
  children: ReactNode;
}
const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  const { rtl } = useTemplateDirectionContext()
  const flexDirection: string = rtl ? "row-reverse" : "row"
  return (
    <Box
      sx={{
          display: "flex",
          flexDirection: {flexDirection},
          maxHeight: "100vh",
          maxWidth: "100vw",
          flexGrow: 1,
          color: 'text.secondary'
      }}
    >
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
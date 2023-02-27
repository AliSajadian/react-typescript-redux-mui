import { FC, ReactElement, ReactNode } from "react";
import { Box } from "@mui/material";
import {
  Main,
  SideBar, 
  Header, 
  Content,
  Footer,
} from "../components";
import { useTemplateDirectionContext } from "../hooks";


interface LayoutProps {
  children: ReactNode;
}
export const MainLayout: FC<LayoutProps> = ({ children }): ReactElement => {
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


import { FC, ReactElement } from "react";
import { Container, Grid, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "./Navbar";
import { useTemplateThemeModeContext } from "../hooks";
import { TemplateThemeModeContextType } from "../context";


export const Header: FC = (): ReactElement => {
  var mnuHeaderHeight = document.getElementById("sidebarMnuHeader")?.clientHeight
  const theme = useTheme();
  const { isDark } = useTemplateThemeModeContext() as TemplateThemeModeContextType;
  return (
    <Box
      sx={{
        width: "100%",
        height: mnuHeaderHeight,
        backgroundColor: isDark ? theme.palette.info.dark : theme.palette.info.light,
        boxShadow:15,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="left">
          <Grid item xs={12}>
            <Navbar />
          </Grid>
        </Grid>
      </Container>
    </Box>
    );
  };
  
  export default Header;
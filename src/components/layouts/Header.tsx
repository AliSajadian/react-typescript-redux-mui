import { FC, ReactElement } from "react";
import { Container, Grid, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { Navbar } from "./Navbar";


export const Header: FC = (): ReactElement => {
  const theme = useTheme();
  var mnuHeaderHeight = document.getElementById("sidebarMnuHeader")?.clientHeight
  return (
    <Box
      sx={{
        width: "100%",
        height: mnuHeaderHeight,
        backgroundColor: theme.palette.background.paper,
        boxShadow:3,
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
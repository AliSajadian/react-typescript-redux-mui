import { FC, ReactElement } from "react";
import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "./Navbar";


export const Header: FC = (): ReactElement => {
  var mnuHeaderHeight = document.getElementById("sidebarMnuHeader")?.clientHeight
  return (
    <Box
      sx={{
        width: "100%",
        height: mnuHeaderHeight,
        backgroundColor: "rgb(0, 32, 63, 0.9)",
        boxShadow:15,
      }}
      // 26, 120, 109
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="left">
          <Grid item xs={12}>
            <Navbar  />
          </Grid>
        </Grid>
      </Container>
    </Box>
    );
  };
  
  export default Header;
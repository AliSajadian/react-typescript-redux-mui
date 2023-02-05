import { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "%8",
        backgroundColor: "rgb(0, 32, 63, 0.8)",
        // backgroundColor: "rgb(26, 120, 109, 0.6)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color={"#8ba1b7"} variant="subtitle2">
              {`${new Date().getFullYear()} | React | Typescript | Material UI | React Redux`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

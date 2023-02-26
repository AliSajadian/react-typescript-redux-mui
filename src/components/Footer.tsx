import { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";

export const Footer: FC = (): ReactElement => {
  const theme = useTheme();

  return (
    <Box
      id="footer"
      sx={{
        width: "100%",
        height: "%8",
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography 
            variant="subtitle2">
              {`${new Date().getFullYear()} | React | Typescript | React Redux | Material UI | Responsive Design | Dark Mode | Screen Direction`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

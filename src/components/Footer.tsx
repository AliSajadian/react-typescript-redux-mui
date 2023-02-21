import { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTemplateThemeModeContext } from "../hooks";
import { TemplateThemeModeContextType } from "../context";

export const Footer: FC = (): ReactElement => {
  const { headerColor, headerBgColor } = useTemplateThemeModeContext() as TemplateThemeModeContextType;

  return (
    <Box
      id="footer"
      sx={{
        width: "100%",
        height: "%8",
        backgroundColor: headerBgColor,
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography 
            color={headerColor} 
            variant="subtitle2">
              {`${new Date().getFullYear()} | React | Typescript | Material UI | React Redux`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;

import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";


const Company: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Company</Typography>
    </Box>
  );
};

export default Company;
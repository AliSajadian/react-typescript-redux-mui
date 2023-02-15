import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";


const JobPosition: FC = (): ReactElement => {
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
      <Typography variant="h3">JobPosition</Typography>
    </Box>
  );
};

export default JobPosition;
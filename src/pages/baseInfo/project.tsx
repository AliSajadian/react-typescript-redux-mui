import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";


const Project: FC = (): ReactElement => {
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
      <Typography variant="h3">Project</Typography>
    </Box>
  );
};

export default Project;
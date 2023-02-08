import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";

const Department: FC<any> = (): ReactElement => {
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
      <Typography variant="h3">Department</Typography>
    </Box>
  );
};

export default Department;
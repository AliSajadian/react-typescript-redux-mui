import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";


const Employee: FC = (): ReactElement => {
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
      <Typography variant="h3">Employee</Typography>
    </Box>
  );
};

export default Employee;
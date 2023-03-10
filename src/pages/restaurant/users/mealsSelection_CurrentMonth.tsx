import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";

const MealsSelection_CurrentMonth: FC<any> = (): ReactElement => {
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
      <Typography variant="h3">Current Month Meals Selection </Typography>
    </Box>
  );
};

export default MealsSelection_CurrentMonth;
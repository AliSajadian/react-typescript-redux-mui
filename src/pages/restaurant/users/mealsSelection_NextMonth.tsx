import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";

const MealsSelection_NextMonth: FC<any> = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "whitesmoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">Next Month Meals Selection </Typography>
    </Box>
  );
};

export default MealsSelection_NextMonth;
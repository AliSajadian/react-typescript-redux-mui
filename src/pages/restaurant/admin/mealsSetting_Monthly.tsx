import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";

const MealsSetting_Monthly: FC<any> = (): ReactElement => {
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
      <Typography variant="h3">Meals Setting Monthly </Typography>
    </Box>
  );
};

export default MealsSetting_Monthly;
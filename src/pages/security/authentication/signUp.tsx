import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";


const SignUp: FC = (): ReactElement => {
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
      <Typography variant="h3">Sign Up</Typography>
    </Box>
  );
};

export default SignUp;
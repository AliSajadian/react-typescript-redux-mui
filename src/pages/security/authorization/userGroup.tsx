import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";

const UserGroup: FC<any> = (): ReactElement => {
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
      <Typography variant="h3">User Group</Typography>
    </Box>
  );
};

export default UserGroup;
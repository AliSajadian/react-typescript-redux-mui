import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";

const Group: FC<any> = (): ReactElement => {
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
      <Typography variant="h3">Group</Typography>
    </Box>
  );
};

export default Group;
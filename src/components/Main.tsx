import { FC, ReactElement, ReactNode } from "react";
import { Box } from "@mui/material";

interface MainProps {
    children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }): ReactElement => {
  return (
    <Box
      id="Main"
      sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          overflowY: "auto",
          minHeight: "100vh",
          maxWidth: "100vw",
          flexGrow: 1,
      }}
    >
      {children}
    </Box>
  )
}

export default Main;
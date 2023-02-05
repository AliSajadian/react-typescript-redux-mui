import { FC, ReactElement, ReactNode } from "react";
import { Box } from "@mui/material";

interface MainProps {
    children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }): ReactElement => {
  return (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
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
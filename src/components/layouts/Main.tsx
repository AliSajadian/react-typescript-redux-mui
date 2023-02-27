import { FC, ReactElement, ReactNode } from "react";
import { Box } from "@mui/material";
import { useTemplateDirectionContext } from "../../hooks";

interface MainProps {
    children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }): ReactElement => {
  const { rtl } = useTemplateDirectionContext()
  return (
    <Box
      id="Main"
      dir={rtl ? 'rtl' : 'ltr'}
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
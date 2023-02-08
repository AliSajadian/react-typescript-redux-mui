import { FC, ReactElement, ReactNode } from "react";
import { Box, Card } from "@mui/material";

interface ContentProps {
    children: ReactNode;
}

export const Content: FC<ContentProps> = ({ children }): ReactElement => {
  return (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            minHeight: "100vh",
            maxWidth: "100vw",
            flexGrow: 1,
            backgroundColor: '#dcecfc'
        }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start#",
          mt:'0',
          mb:'1.5rem', 
          mx:'auto', 
          height:'100%', 
          width:'80%', 
          boxShadow:15,
          backgroundColor:'#e8f1fc',
        }}
      >
        {children}
      </Card>
    </Box>
  )
}

export default Content;
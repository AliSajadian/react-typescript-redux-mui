import { FC, ReactElement, ReactNode } from "react";
import { Box, Card } from "@mui/material";

interface ContentProps {
    children: ReactNode;
}

export const Content: FC<ContentProps> = ({ children }): ReactElement => {
  return (
    <Box
        sx={{
            minHeight: "100vh",
            maxWidth: "100vw",
            flexGrow: 1,
            backgroundColor: '#dcecfc'
        }}
    >
      <Card
        sx={{
          mt:'0',
          mb:'1.5rem', 
          mx:'auto', 
          height:'100%', 
          width:{xs:'100%', sm:'90%', md:'80%', lg:'80%', xl:'80%'}, 
          boxShadow:15,
          // "10px 10px 10px #b6d4f9",
          backgroundColor:'#e8f1fc',
        }}
      >
        {children}
      </Card>
    </Box>
  )
}

export default Content;
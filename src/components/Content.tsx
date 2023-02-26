import { FC, ReactElement, ReactNode } from "react";
import { Box, Card } from "@mui/material";

interface ContentProps {
    children: ReactNode;
}

export const Content: FC<ContentProps> = ({ children }): ReactElement => {
  var mnuHeaderHeight = document.getElementById("sidebarMnuHeader")?.clientHeight
  var footerHeight = document.getElementById("footer")?.clientHeight
  const height: string = 
    'calc(100% - ' 
    + (mnuHeaderHeight? mnuHeaderHeight : 0 + (footerHeight? footerHeight : 0)).toString() 
    + ')'
  return (
    <Box
      sx={{
          minHeight: height,
          maxWidth: "100vw",
          mb:2,
          flexGrow: 1,
          backgroundColor: 'inherit'
          // '#dcecfc'
      }}
    >
      <Card
        sx={{
          display:'flex',
          justifyContent:'center',
          mt:2,
          mx:'auto', 
          height:'100%', 
          width:{xs:'95%', sm:'90%', md:'85%', lg:'85%', xl:'80%'}, 
          boxShadow:3,
          // "10px 10px 10px #b6d4f9",
          backgroundColor:'inherit'
          // '#e8f1fc',
        }}
      >
        {children}
      </Card>
    </Box>
  )
}

export default Content;
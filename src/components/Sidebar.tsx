import { FC, ReactElement } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Info from "@mui/icons-material/InfoOutlined";
import Restaurant from "@mui/icons-material/RestaurantMenuOutlined";
import Security from "@mui/icons-material/SecurityOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BookIcon from "@mui/icons-material/Book";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { Typography } from "@mui/material";
import { SidebarFooter } from "./SidebarFooter";
import { Badge } from "./Badge";
import { Box } from "@mui/system";
import { themes } from "../styles/SidebarStyle";
import { hexToRgba, useSidebar } from "../hooks/useSidebar";
import { useNavigate } from 'react-router-dom';


const SideBar: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { collapsed } = useProSidebar();
  const { toggle,
    menuItemStyles,
    theme,
    hasImage
   } = useSidebar();
      
  return(
      <Sidebar 
        rtl={false} 
        breakPoint="sm"
        transitionDuration={800} 
        style={{ minHeight: "100vh" }}
        backgroundColor={hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1)}
        rootStyles={{
          color: themes[theme].sidebar.color,
        }}
      >
        <Menu >
{/* backgroundColor:"rgb(26, 120, 109, 0.8)" */}
        <MenuItem 
          id="sidebarMnuHeader"
          style={{ textAlign: "center", height: "auto", marginTop: 0, backgroundColor: "rgb(0, 32, 63, 1)" }}
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            toggle();
          }}
        >
          {" "}
          <Typography sx={{textAlign: "center", fontWeight: "bold", my: "0.5rem"}} variant="h4">Admin</Typography>
        </MenuItem>
      </Menu>
            {/* <div style={{ flex: 1, marginBottom: '32px' }}> style={{ marginBottom: '24px', marginTop: '16px' }}*/}
            <Box sx={{ p: '0 24px', mb: '8px', mt: '8px' }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                General
              </Typography>
            </Box>
        {/* component="Link" href="/" */}
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItem icon={<HomeOutlinedIcon />} onClick={()=>navigate('/', { replace: true})}>Home</MenuItem>
          <SubMenu icon={<Info />} label="BaseInfo">
            <MenuItem>Company</MenuItem>
            <MenuItem>Department</MenuItem>
            <MenuItem>Employee</MenuItem>
            <MenuItem>JobPosition</MenuItem>
            <MenuItem>Project</MenuItem>
          </SubMenu>
          <SubMenu icon={<Restaurant />} label="Restaurant">
            <MenuItem icon={<Restaurant />} onClick={()=>navigate('/about', { replace: true})}>Meal</MenuItem>
            <MenuItem >Monthly Meals</MenuItem>
            <MenuItem >Select Current Month Meals</MenuItem>
            <MenuItem >Select Next Month Meals</MenuItem>  
          </SubMenu>
          <SubMenu icon={<Security />} label="Security">
            <MenuItem >Users</MenuItem>
            <MenuItem > User Groups</MenuItem>
            <MenuItem >Permissions</MenuItem>
            <MenuItem >User Permission</MenuItem>  
            <MenuItem >User Group Permissions</MenuItem>
            <MenuItem >User and User Group</MenuItem> 
          </SubMenu>
   
          <Box sx={{ py: '0', px:'24px', mb: '8px', mt: '32px' }}>
              <Typography
                variant="body2"
                fontWeight={600}
                style={{ opacity: collapsed ? 0 : 0.7, letterSpacing: '0.5px' }}
              >
                Extra
              </Typography>
            </Box>

            <Menu menuItemStyles={menuItemStyles}>
              <MenuItem icon={<CalendarTodayOutlinedIcon />} suffix={<Badge variant="success">New</Badge>}>
                Calendar
              </MenuItem>
              <SubMenu icon={<BookIcon />} label="Documentation">
                <MenuItem>Documentation1</MenuItem>
                <MenuItem>Documentation2</MenuItem>
                <MenuItem>Documentation3</MenuItem>
              </SubMenu>
              <MenuItem disabled icon={<RoomServiceIcon />}>
                Examples
              </MenuItem>
            </Menu>
        </Menu>
        <SidebarFooter/>
      </Sidebar>
  )
}

export default SideBar;
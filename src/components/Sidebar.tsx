import { FC, ReactElement } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BookIcon from "@mui/icons-material/Book";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import { Typography } from "@mui/material";
import { SidebarFooter } from "./SidebarFooter";
import { Badge } from "./Badge";
import { Box } from "@mui/system";
import { themes } from "../styles/SidebarStyle";
import { hexToRgba, useSidebar } from "../hooks/useSidebar";


const SideBar: FC = (): ReactElement => {
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
        
        <Menu menuItemStyles={menuItemStyles}>
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <SubMenu icon={<PeopleOutlinedIcon />} label="Team">
            <MenuItem>Team1</MenuItem>
            <MenuItem>Team2</MenuItem>
            <MenuItem>Team3</MenuItem>
          </SubMenu>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>     
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
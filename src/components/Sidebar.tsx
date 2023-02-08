import { FC, ReactElement } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Info from "@mui/icons-material/InfoOutlined";
import Restaurant from "@mui/icons-material/RestaurantMenuOutlined";
import Security from "@mui/icons-material/SecurityOutlined";
import FoodBank from "@mui/icons-material/FoodBankOutlined";
import Search from "@mui/icons-material/SearchOutlined";
import Recommend from "@mui/icons-material/RecommendOutlined";
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
          <Typography sx={{textAlign: "center", fontWeight: "bold", my: "1rem"}} variant="h5">Restaurant</Typography>
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
            <MenuItem onClick={()=>navigate('baseinfo/company', { replace: true})}>Company</MenuItem>
            <MenuItem onClick={()=>navigate('baseinfo/department', { replace: true})}>Department</MenuItem>
            <MenuItem onClick={()=>navigate('baseinfo/employee', { replace: true})}>Employee</MenuItem>
            <MenuItem onClick={()=>navigate('baseinfo/jobPosition', { replace: true})}>JobPosition</MenuItem>
            <MenuItem onClick={()=>navigate('baseinfo/project', { replace: true})}>Project</MenuItem>
          </SubMenu>
          <SubMenu icon={<Restaurant />} label="Restaurant">
            <MenuItem onClick={()=>navigate('restaurant/meal', { replace: true})}>Meal</MenuItem>
            <MenuItem onClick={()=>navigate('restaurant/mealssettingmonthly', { replace: true})}>Monthly Meals</MenuItem>
            <MenuItem onClick={()=>navigate('restaurant/mealsselectioncurrentmonth', { replace: true})}>Select Current Month Meals</MenuItem>
            <MenuItem onClick={()=>navigate('restaurant/mealsselectionnextmonth', { replace: true})}>Select Next Month Meals</MenuItem>  
          </SubMenu>
          <SubMenu icon={<Security />} label="Security">
            <MenuItem onClick={()=>navigate('security/user', { replace: true})}>Users</MenuItem>
            <MenuItem onClick={()=>navigate('security/group', { replace: true})}> Groups</MenuItem>
            <MenuItem onClick={()=>navigate('security/permission', { replace: true})}>Permissions</MenuItem>
            <MenuItem onClick={()=>navigate('security/grouppermission', { replace: true})}>Group Permissions</MenuItem>
            <MenuItem onClick={()=>navigate('security/usergroup', { replace: true})}>User and Group</MenuItem> 
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
              <MenuItem icon={<FoodBank />} suffix={<Badge variant="success">New</Badge>}>
                New Courses
              </MenuItem>
              <SubMenu icon={<Search />} label="User Survey">
                <MenuItem>January</MenuItem>
                <MenuItem>February</MenuItem>
                <MenuItem>March</MenuItem>
              </SubMenu>
              <MenuItem disabled icon={<Recommend />}>
                Examples
              </MenuItem>
            </Menu>
        </Menu>
        <SidebarFooter/>
      </Sidebar>
  )
}

export default SideBar;
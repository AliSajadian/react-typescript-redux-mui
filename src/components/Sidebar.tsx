import { 
  FC, 
  ReactElement 
} from "react";
import { useNavigate } from "react-router-dom";
import { 
  Sidebar, 
  Menu, 
  MenuItem, 
  SubMenu, 
  useProSidebar 
} from "react-pro-sidebar";
import {
  MenuOutlined, 
  HomeOutlined, 
  InfoOutlined, 
  RestaurantMenuOutlined, 
  SecurityOutlined, 
  FoodBankOutlined, 
  SearchOutlined,
  RecommendOutlined,
  Settings,
} from "@mui/icons-material";
import { 
  Box, 
  Typography, 
  useTheme
} from "@mui/material";
import { SidebarFooter } from "./SidebarFooter";
import { Badge } from "./Badge";
import { 
  useSidebar, 
  useSidebarSelectedMenuTitleContext,
  useTemplateThemeModeContext, 
} from "../hooks";
import { TemplateThemeModeContextType } from "../context";


const SideBar: FC = (): ReactElement => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { collapsed } = useProSidebar();
  const { 
    toggle,
    menuItemStyles,
  } = useSidebar();
  const { setMenuTitle } = useSidebarSelectedMenuTitleContext();
  const { isDark } = useTemplateThemeModeContext() as TemplateThemeModeContextType;

  const menuItemMouseUpHandler = (mnuTitle: string) => {
    setMenuTitle(mnuTitle)
  }
  return(
      <Sidebar 
        rtl={false} 
        breakPoint="sm"
        transitionDuration={800} 
        style={{ height: "100vh" }}
        backgroundColor={isDark ? theme.palette.primary.dark : theme.palette.primary.light}
        rootStyles={{
          color: isDark ? theme.palette.secondary.dark : theme.palette.secondary.light
          // color: color, isDark ? theme.palette.success.dark : theme.palette.success.light
        }}
      >
        <Menu >
          <MenuItem 
            id="sidebarMnuHeader"
            style={{ 
              textAlign: "center", 
              height: 68, 
              marginTop: 0,
              backgroundColor: isDark ? theme.palette.info.dark : theme.palette.info.light
            }}
            icon={<MenuOutlined sx={{color: isDark ? theme.palette.success.dark : theme.palette.success.light}}/>}
            onClick={() => {
              toggle();
            }}
          >
            {" "}
            <Typography 
              sx={{textAlign:"center", fontWeight:"bold", my:"1rem", 
              color: isDark ? theme.palette.success.dark : theme.palette.success.light
            }} 
              variant="h5"
            >
              Restaurant
            </Typography>
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
          <MenuItem 
            icon={<HomeOutlined />} 
            onClick={() => (navigate('/', { replace: true }))} 
            onMouseUp={() => menuItemMouseUpHandler('Home')}
          >
            Home
          </MenuItem>
          <SubMenu icon={<InfoOutlined />} label="BaseInfo">
            <MenuItem onClick={() => navigate('baseinfo/company', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Company')}>Company</MenuItem>
            <MenuItem onClick={() => navigate('baseinfo/department', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Department')}>Department</MenuItem>
            <MenuItem onClick={() => navigate('baseinfo/employee', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Employee')}>Employee</MenuItem>
            <MenuItem onClick={() => navigate('baseinfo/jobPosition', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('JobPosition')}>JobPosition</MenuItem>
            <MenuItem onClick={() => navigate('baseinfo/Project', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Project')}>Project</MenuItem>
          </SubMenu>
          <SubMenu icon={<RestaurantMenuOutlined />} label="Restaurant">
            <MenuItem onClick={() => navigate('restaurant/meal', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Meal')}>Meal</MenuItem>
            <MenuItem onClick={() => navigate('restaurant/mealssettingmonthly', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Meals Setting Monthly')}>Meals Setting Monthly</MenuItem>
            <MenuItem onClick={() => navigate('restaurant/mealsselectioncurrentmonth', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Select Current Month Meals')}>Select Current Month Meals</MenuItem>
            <MenuItem onClick={() => navigate('restaurant/mealsselectionnextmonth', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Select Next Month Meals')}>Select Next Month Meals</MenuItem>
          </SubMenu>
          <SubMenu icon={<SecurityOutlined />} label="Security">
            <MenuItem onClick={() => navigate('security/user', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Users')}>Users</MenuItem>
            <MenuItem onClick={() => navigate('security/group', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Groups')}>Groups</MenuItem>
            <MenuItem onClick={() => navigate('security/permission', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Permissions')}>Permissions</MenuItem>
            <MenuItem onClick={() => navigate('security/grouppermission', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Group Permissions')}>Group Permissions</MenuItem>
            <MenuItem onClick={() => navigate('security/usergroup', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('User and Group')}>User and Group</MenuItem>
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
              <MenuItem icon={<FoodBankOutlined />} suffix={<Badge variant="success">New</Badge>}>
                New Courses
              </MenuItem>
              <SubMenu icon={<SearchOutlined />} label="User Survey">
                <MenuItem>January</MenuItem>
                <MenuItem>February</MenuItem>
                <MenuItem>March</MenuItem>
              </SubMenu>
              <MenuItem disabled icon={<RecommendOutlined />}>
                Examples
              </MenuItem>
            </Menu>
            <MenuItem 
              icon={<Settings/>}
              onClick={() => navigate('/config', { replace: true })}
              onMouseUp={() => menuItemMouseUpHandler('Template Configuration')}
            >
              Template Config
            </MenuItem>
        </Menu>
        <SidebarFooter collapsed={collapsed}/>
      </Sidebar>
  )
}

export default SideBar;
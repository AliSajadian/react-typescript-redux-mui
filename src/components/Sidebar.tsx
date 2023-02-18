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
  RecommendOutlined
} from "@mui/icons-material";
import { 
  Box, 
  Typography 
} from "@mui/material";
import { themes } from "../styles/SidebarStyle";
import { SidebarFooter } from "./SidebarFooter";
import { Badge } from "./Badge";
import { 
  hexToRgba, 
  useSidebar, 
  useSidebarSelectedMenuTitleContext 
} from "../hooks";


const SideBar: FC = (): ReactElement => {
  const navigate = useNavigate();
  const { collapsed } = useProSidebar();
  const { 
    toggle,
    menuItemStyles,
    theme,
    hasImage
  } = useSidebar();
  const { setMenuTitle } = useSidebarSelectedMenuTitleContext();

  const menuItemMouseUpHandler = (mnuTitle: string) => {
    setMenuTitle(mnuTitle)
  }

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
          icon={<MenuOutlined />}
          onClick={() => {
            toggle();
          }}
        >
          {" "}
          <Typography sx={{textAlign: "center", fontWeight: "bold", my: "1rem"}} variant="h5">RestaurantMenuOutlined</Typography>
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
          {/* navigate('baseinfo/department', { replace: true }) */}
            {/* <MenuItem onClick={() => menuItemClickHandler('Company')}><Link href="baseinfo/company">Company</Link></MenuItem>
            <MenuItem onClick={() => menuItemClickHandler('Department')}><Link href="baseinfo/department">Department</Link></MenuItem>
            <MenuItem onClick={() => menuItemClickHandler('Employee')}><Link href="baseinfo/employee">Employee</Link></MenuItem>
            <MenuItem onClick={() => menuItemClickHandler('JobPosition')}><Link href="baseinfo/jobPosition">JobPosition</Link></MenuItem>
            <MenuItem onClick={() => menuItemClickHandler('Project')}><Link href="baseinfo/jobPosition">Project</Link></MenuItem> */}

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
          <SubMenu icon={<RestaurantMenuOutlined />} label="RestaurantMenuOutlined">
            {/* <MenuItem onClick={() => menuItemClickHandler('Meal')}><Link href="restaurant/meal">Meal</Link></MenuItem>
            <MenuItem onClick={() => menuItemClickHandler('Monthly Meals')}><Link href="restaurant/mealssettingmonthly">Monthly Meals</Link></MenuItem>
            <MenuItem onClick={() => menuItemClickHandler('Select Current Month Meals')}><Link href="restaurant/mealsselectioncurrentmonth">Select Current Month Meals</Link></MenuItem>
            <MenuItem onClick={() => menuItemClickHandler('Select Next Month Meals')}><Link href="restaurant/mealsselectionnextmonth">Select Next Month Meals</Link></MenuItem> */}

            <MenuItem onClick={() => navigate('restaurant/meal', { replace: true })}>Meal</MenuItem>
            <MenuItem onClick={() => navigate('restaurant/mealssettingmonthly', { replace: true })}>Monthly Meals</MenuItem>
            <MenuItem onClick={() => navigate('restaurant/mealsselectioncurrentmonth', { replace: true })}>Select Current Month Meals</MenuItem>
            <MenuItem onClick={() => navigate('restaurant/mealsselectionnextmonth', { replace: true })}>Select Next Month Meals</MenuItem>
          </SubMenu>
          <SubMenu icon={<SecurityOutlined />} label="SecurityOutlined">
            {/* <MenuItem onClick={() => menuItemClickHandler('Users')}><Link href="security/user">Users</Link></MenuItem>
            <MenuItem onClick={() => menuItemClickHandler('Groups')}><Link href="security/group">Groups</Link></MenuItem>
            <MenuItem onClick={() => menuItemClickHandler('Permissions')}><Link href="security/permission">Permissions</Link></MenuItem>
            <MenuItem onClick={() => menuItemClickHandler('Group Permissions')}><Link href="security/grouppermission">Group Permissions</Link></MenuItem>
            <MenuItem onClick={() => menuItemClickHandler('User and Group')}><Link href="security/usergroup">User and Group</Link></MenuItem> */}

            <MenuItem onClick={() => navigate('security/Users', { replace: true })}>Users</MenuItem>
            <MenuItem onClick={() => navigate('security/groups', { replace: true })}>Groups</MenuItem>
            <MenuItem onClick={() => navigate('security/permission', { replace: true })}>Permissions</MenuItem>
            <MenuItem onClick={() => navigate('security/grouppermission', { replace: true })}>Group Permissions</MenuItem>
            <MenuItem onClick={() => navigate('security/usergroup', { replace: true })}>User and Group</MenuItem>
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
        </Menu>
        <SidebarFooter/>
      </Sidebar>
  )
}

export default SideBar;
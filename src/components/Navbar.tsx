import { FC, ReactElement } from "react";
import {
  Container,
  IconButton,
  Toolbar,
  Typography,
  Divider,
  Box,
  Select,
  MenuItem,
  SvgIcon,
  Avatar,
} from "@mui/material";
import { Menu, Search, } from "@mui/icons-material";
import { Bell } from "../assets";
import { useProSidebar } from "react-pro-sidebar";
import { 
  useSidebar, 
  useSidebarSelectedMenuTitleContext 
} from "../hooks";


const Navbar: FC = (): ReactElement => {
  const { broken } = useProSidebar();
  const { toggle } = useSidebar();
  const { menuTitle } = useSidebarSelectedMenuTitleContext();
  var mnuHeaderHeight = document.getElementById("sidebarMnuHeader")?.clientHeight;

  return (
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
            <Typography
              variant="h6"
              color={"#8ba1b7"}
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              {menuTitle}
            </Typography>
            {broken && (
            <IconButton
              onClick={toggle}
              sx={{color:"#8ba1b7", mt:"8px"}}
            >
              <Menu />
            </IconButton>)}
          </Box>
          <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-end', border:1}}>
            <Box sx={{display:'flex', justifyContent:'flex-end', border:1}}>
              <Search sx={{m:'auto', color:'#8ba1b7', width:30, height:30}} style={{border:1}}/>
            </Box>
            <Box sx={{display:'flex', flexDirection:'row', justifyContent:'flex-end', py:0, my:0, border:1}}>
              <Select
                sx={{'.MuiOutlinedInput-notchedOutline': { border: 0 }, maxHeight:'100%', py:0, my:0, border:1}}
                displayEmpty
                renderValue={(value) => {
                  return (
                    <Box sx={{ display: "flex", gap: 1, border:1, py:0, my:0 }}>
                      <>
                        <SvgIcon color="primary" style={{width:30, height:30, border:1, paddingTop:0, paddingBottom:0, marginTop:0, marginBottom:0}}>
                          <Bell style={{border:1}}/>
                        </SvgIcon>
                        {value}
                      </>
                    </Box>
                  );
                }}
              >
                <MenuItem>Notification #1</MenuItem>
                <MenuItem>Notification #2</MenuItem>
                <MenuItem>Notification #3</MenuItem>
                <MenuItem>Notification #4</MenuItem>
              </Select>
              <Divider orientation="vertical" flexItem sx={{py:0, my:0}}/>
              <Select
                sx={{'.MuiOutlinedInput-notchedOutline': { border: 0 }, maxHeight:'100%', border:1, px:0.5, py:0, my:0 }}
                displayEmpty
                renderValue={(value) => {
                  return (
                    <Box sx={{ display:"flex", justifyContent:'flex-end', gap: 1, border:1, py:0, my:0 }}>
                      <>
                        <Typography mx='auto' my={0} py={0} color={"#8ba1b7"} sx={{border:1}}>Ali Sajadian</Typography>
                        <Avatar sx={{ width:35, height:35, m:0, p:0}}
                            src='https://avatars.githubusercontent.com/u/47317870?s=400&u=79da86747deb409779c3575c0da73d90ad65fe81&v=4'
                            alt='avatar'
                        />
                        {value}
                      </>
                    </Box>
                  );
                }}
              >
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
              </Select>
            </Box>
          </Box>
        </Toolbar>
      </Container>
  );
};

export default Navbar;









          //   {/* <Menu
          //     id="menu-appbar"
          //     anchorEl={anchorElNav}
          //     anchorOrigin={{
          //       vertical: "bottom",
          //       horizontal: "left",
          //     }}
          //     keepMounted
          //     transformOrigin={{
          //       vertical: "top",
          //       horizontal: "left",
          //     }}
          //     open={Boolean(anchorElNav)}
          //     onClose={toggle}
          //     sx={{
          //       display: { xs: "block", md: "none" },
          //     }}
          //   >
          //     {routes.map((page) => (
          //       <Link
          //         key={page.key}
          //         component={NavLink}
          //         to={page.path}
          //         color="black"
          //         underline="none"
          //         variant="button"
          //       >
          //         <MenuItem onClick={toggle}>
          //           <Typography textAlign="center">{page.title}</Typography>
          //         </MenuItem>
          //       </Link>
          //     ))}
          //   </Menu> 
          // </Box>*/}
          // {/*<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          //    <Box
          //     sx={{
          //       display: "flex",
          //       flexDirection: "row",
          //       justifyContent: "flex-start",
          //       alignItems: "center",
          //       marginLeft: "1rem",
          //     }}
          //   >
          //     {routes.map((page) => (
          //       <Link
          //         key={page.key}
          //         component={NavLink}
          //         to={page.path}
          //         color="black"
          //         underline="none"
          //         variant="button"
          //         sx={{ fontSize: "large", marginLeft: "2rem" }}
          //       >
          //         {page.title}
          //       </Link>
          //     ))}
          //   </Box> 
          // </Box>*/}

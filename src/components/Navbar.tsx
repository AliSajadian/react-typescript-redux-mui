import { FC, ReactElement } from "react";
import {
  // Box,
  Container,
  IconButton,
  // Link,
  // Menu,
  // MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useProSidebar } from "react-pro-sidebar";
import { useSidebar } from "../hooks/useSidebar";
// import { routes } from "../routes";
// import { NavLink } from "react-router-dom";


const Navbar: FC = (): ReactElement => {
  const { broken } = useProSidebar();
  const { toggle } = useSidebar();

  // const [anchorElNav, setAnchorElNav] = React.useState(null);

  // const handleOpenNavMenu = (event: any) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };
  return (
      <Container maxWidth="xl" sx={{pl: 0}}>
        <Toolbar disableGutters sx={{pl: 0, ml: 0}}>
          <Typography
            variant="h6"
            color={"#8ba1b7"}
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            Nav Bar
          </Typography>
          {/* display: { xs: "flex" }, , sm: "none", md: "none", lg:"none", xl:"none" 
          <Box sx={{ flexGrow: 1, textAlign: "left", pl: -10}}>*/}
            {broken && (<IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggle}
              color="inherit"
              margin-left="0"
            >
              <MenuIcon />
            </IconButton>)}
            {/* <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={toggle}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="black"
                  underline="none"
                  variant="button"
                >
                  <MenuItem onClick={toggle}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu> 
          </Box>*/}
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Nav Bar
          </Typography> */}
          {/*<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
             <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "1rem",
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="black"
                  underline="none"
                  variant="button"
                  sx={{ fontSize: "large", marginLeft: "2rem" }}
                >
                  {page.title}
                </Link>
              ))}
            </Box> 
          </Box>*/}
        </Toolbar>
      </Container>
  );
};

export default Navbar;

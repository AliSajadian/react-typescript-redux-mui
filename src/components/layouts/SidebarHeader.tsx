import React from 'react';
import styled from '@emotion/styled';
import { MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Typography } from '@mui/material';
// useProSidebar
interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  toggle: () => void
}
 
const StyledSidebarHeader = styled.div`
  height: 64px;
  min-height: 64px;
  display: flex;
  align-items: center;
  padding: 0 ;
  margin-top: 0;

  > div {
    width: 100%;
    overflow: hidden;
  }
`;

// const StyledLogo = styled.div<{ rtl?: boolean }>`
//   width: 35px;
//   min-width: 35px;
//   height: 35px;
//   min-height: 35px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 8px;
//   color: white;
//   font-size: 24px;
//   font-weight: 700;
//   background-color: #009fdb;
//   background: linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%);
//   ${({ rtl }) =>
//     rtl
//       ? `
//       margin-left: 10px;
//       margin-right: 4px;
//       `
//       : `
//       margin-right: 10px;
//       margin-left: 4px;
//       `}
// `;

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ children, toggle, ...rest }) => {
//   const { rtl } = useProSidebar();
  return (
    <StyledSidebarHeader {...rest}>
    <MenuItem 
    id="mnuHeader"
    style={{ textAlign: "center", height: "auto", backgroundColor:"rgb(26, 120, 109, 0.8)", marginTop: 0 }}
    icon={<MenuOutlinedIcon />}
    onClick={() => {
        toggle();
    }}
    >
    {" "}
    <Typography sx={{textAlign: "center", fontWeight: "bold", my: "0.5rem"}} variant="h4">Admin</Typography>
  </MenuItem>
  </StyledSidebarHeader>
    // <StyledSidebarHeader {...rest}>
    //   <div style={{ display: 'flex', alignItems: 'center' }}>
    //     {/* <StyledLogo rtl={rtl}>P</StyledLogo> */}
    //     <Typography variant="subtitle1" fontWeight={700} color="#0098e5">
    //       Pro Sidebar
    //     </Typography>
    //   </div>
    // </StyledSidebarHeader>
  );
};

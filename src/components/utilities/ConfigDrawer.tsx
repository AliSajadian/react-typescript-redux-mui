import React, { useState } from "react";
import {
  Brightness3,
  Brightness5,
  ArrowLeft,
  ArrowRight,
  Close,
  Settings,
} from "@mui/icons-material";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Switch,
  Tooltip,
} from "@mui/material";
import {
  SideBarDrawer,
  SideBarPage,
  SideBarTitle,
  TitleContainer,
} from "./ConfigDrawer.Styles";
import { useColorModeContext, useTemplateDirectionContext } from "../../hooks";
import { ColorModeContextType } from "../../context";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

export const ConfigDrawer: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { colorMode, toggleColorMode } = useColorModeContext() as ColorModeContextType;
  const { rtl, setRtl } = useTemplateDirectionContext();
  //const anchor = rtl ? 'left : 'right'
  const _handleSettingsIconClick = () => {
    setIsSidebarOpen(true);
  };
  
  const _handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };
  
  const _onChangeDarkModeHandler = () => {
    toggleColorMode();
  };
  
  const rtlDirectionSwitchChangeHandler = () => {
    setRtl(!rtl);
  }

  return (
    <>
      <Tooltip 
        title={"settings"}
      >
        <IconButton color='inherit' onClick={_handleSettingsIconClick} >
          <Settings />
        </IconButton>
      </Tooltip>         
      <SideBarDrawer
        transitionDuration={800}
        anchor={rtl ? 'left' : 'right'}
        open={isSidebarOpen}
        onClose={_handleSidebarClose}
        dir={rtl ? 'rtl' : 'ltr'}
        >
        <SideBarPage>
          <TitleContainer>
            <SideBarTitle variant='body1' ml={2}>
              {"settings"}
            </SideBarTitle>
            <IconButton onClick={_handleSidebarClose}>
              <Close />
            </IconButton>
          </TitleContainer>
          <Divider />
          <List>
            <ListItem>
              <ListItemIcon>
                {colorMode === 'dark' ? <Brightness3 sx={{color:'text.primary'}} /> : <Brightness5 />}
              </ListItemIcon>
              <ListItemText 
                primary={"Dark Mode"} 
              />
              <AntSwitch 
                value={colorMode === 'dark'} 
                onChange={_onChangeDarkModeHandler} 
                inputProps={{ 'aria-label': 'ant design' }} 
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {rtl ? <ArrowRight sx={{color:'text.primary'}} /> : <ArrowLeft />}
              </ListItemIcon>
              <ListItemText 
                primary={"Screen Direction"} 
              />
              <AntSwitch 
                value={rtl} 
                onChange={rtlDirectionSwitchChangeHandler} 
                inputProps={{ 'aria-label': 'ant design' }} 
              />
            </ListItem>
          </List>
        </SideBarPage>
      </SideBarDrawer>
    </>
  );
};


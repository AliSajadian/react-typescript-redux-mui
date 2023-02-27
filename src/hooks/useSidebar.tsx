import React from "react";
import { useProSidebar } from "react-pro-sidebar";
import { IMenuItemStyles } from "../types/SidebarTypes";
import { themes } from "../styles/CommonStyle";
import { useColorModeContext } from "./useTemplateThemeModeContext";
import { ColorModeContextType } from "../context";

export const useSidebar = () => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken } = useProSidebar();
  const { colorMode } = useColorModeContext() as ColorModeContextType;
  const [hasImage] = React.useState<boolean>(false);

  // // handle on image change event
  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setHasImage(e.target.checked);
  // };

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      collapseSidebar();
    } else {
      if(!(broken && !collapsed)) {
        collapseSidebar();
      }
    }
  };

  const menuItemStyles: IMenuItemStyles = {
    root: {
      fontSize: '13px',
      fontWeight: 400,
    },
    icon: {
      color: themes[colorMode].menu.icon,
      [`&.${'ps-disabled'}`]: {
        color: themes[colorMode].menu.disabled.color,
      },
    },
    SubMenuExpandIcon: {
      color: '#b6b7b9',
    },
    subMenuContent: ({ level }) => ({
      backgroundColor:
        level === 0
          ? hexToRgba(themes[colorMode].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
          : 'transparent',
    }),
    button: {
      [`&.${'ps-disabled'}`]: {
        color: themes[colorMode].menu.disabled.color,
      },
      '&:hover': {
        backgroundColor: hexToRgba(themes[colorMode].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
        color: themes[colorMode].menu.hover.color,
      },
    },
    label: ({ open }) => ({
      fontWeight: open ? 600 : undefined,
    }),
  };

  return{
    toggle,
    menuItemStyles,
    hasImage,
  }
}
  // hex to rgba converter
  export const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
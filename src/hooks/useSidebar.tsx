import React from "react";
import { useProSidebar } from "react-pro-sidebar";
import { menuClasses } from '../utils/utilityClasses';
import { MenuItemStyles } from "../types/SidebarTypes";
import { Theme, themes } from "../styles/SidebarStyle";

export const useSidebar = () => {
    const { collapseSidebar, toggleSidebar, collapsed, toggled, broken } = useProSidebar();
    const [theme] = React.useState<Theme>('dark');
    const [hasImage] = React.useState<boolean>(false);

    // // handle on theme change event
    // const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   setTheme(e.target.checked ? 'dark' : 'light');
    // };
  
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

    const menuItemStyles: MenuItemStyles = {
      root: {
        fontSize: '13px',
        fontWeight: 400,
      },
      icon: {
        color: themes[theme].menu.icon,
        [`&.${menuClasses.disabled}`]: {
          color: themes[theme].menu.disabled.color,
        },
      },
      SubMenuExpandIcon: {
        color: '#b6b7b9',
      },
      subMenuContent: ({ level }) => ({
        backgroundColor:
          level === 0
            ? hexToRgba(themes[theme].menu.menuContent, hasImage && !collapsed ? 0.4 : 1)
            : 'transparent',
      }),
      button: {
        [`&.${menuClasses.disabled}`]: {
          color: themes[theme].menu.disabled.color,
        },
        '&:hover': {
          backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, hasImage ? 0.8 : 1),
          color: themes[theme].menu.hover.color,
        },
      },
      label: ({ open }) => ({
        fontWeight: open ? 600 : undefined,
      }),
    };

    return{
        toggle,
        menuItemStyles,
        theme,
        hasImage
    }
}
  // hex to rgba converter
  export const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
  
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };
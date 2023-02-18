import React, { useState, createContext } from "react";


interface SidebarSelectedMenuTitleProviderProps{
  children: React.ReactNode
}
export const SidebarSelectedMenuTitleContext = createContext({menuTitle: '', setMenuTitle: (mnuTitle: string) => {}});

export const SidebarSelectedMenuTitleProvider = ({ children }: SidebarSelectedMenuTitleProviderProps) => {
  const [menuTitle, setMenuTitle] = useState<string>('Home');
  return (
    <SidebarSelectedMenuTitleContext.Provider value={{ menuTitle, setMenuTitle }}>
      {children}
    </SidebarSelectedMenuTitleContext.Provider>
  );
};
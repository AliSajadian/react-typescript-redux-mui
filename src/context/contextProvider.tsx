import React from "react";
import { useState } from "react";
import { 
    SidebarSelectedMenuTitleContext,  
    TemplateDirectionContext, 
    ColorModeContext
} from "./context";

interface ContextProviderProps{
    children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [colorMode, setColorMode] = useState<'light' | 'dark'>('light');
    const toggleColorMode = () => {
      setColorMode(() => (colorMode === 'light' ? 'dark' : 'light'));
    }

    const [rtl, setRtl] = useState<boolean>(false);

    const [menuTitle, setMenuTitle] = useState<string>('Home');
    return (
        <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
            <TemplateDirectionContext.Provider value={{ rtl, setRtl }}>
                <SidebarSelectedMenuTitleContext.Provider value={{ menuTitle, setMenuTitle }}>
                    {children}
                </SidebarSelectedMenuTitleContext.Provider>
            </TemplateDirectionContext.Provider>
        </ColorModeContext.Provider>
    );
  };
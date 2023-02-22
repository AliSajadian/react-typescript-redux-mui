import { useState } from "react";
import { 
    SidebarSelectedMenuTitleContext,  
    TemplateDirectionContext, 
    TemplateThemeModeContext
} from "./context";


interface ContextProviderProps{
    children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const [isDark, setIsDark] = useState<boolean>(true);
    const toggleThemeMode = () => {
        setIsDark(!isDark)
    }

    const [rtl, setRtl] = useState<boolean>(false);

    const [menuTitle, setMenuTitle] = useState<string>('Home');
    return (
        <TemplateThemeModeContext.Provider value={{ isDark, toggleThemeMode }}>
            <TemplateDirectionContext.Provider value={{ rtl, setRtl }}>
                <SidebarSelectedMenuTitleContext.Provider value={{ menuTitle, setMenuTitle }}>
                    {children}
                </SidebarSelectedMenuTitleContext.Provider>
            </TemplateDirectionContext.Provider>
        </TemplateThemeModeContext.Provider>
    );
  };
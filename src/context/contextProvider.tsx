import { useState } from "react";
import { hexToRgba, useSidebar } from "../hooks";
import { Theme, themes } from "../styles/CommonStyle";
import { 
    SidebarSelectedMenuTitleContext,  
    TemplateDirectionContext, 
    TemplateThemeModeContext
} from "./context";


interface ContextProviderProps{
    children: React.ReactNode
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
    const hasImage = false;
    const [isDark, setIsDark] = useState<boolean>(true);
    const [theme, setTheme] = useState<Theme>(isDark ? 'dark' : 'light')
    const [color, setColor] = useState<string>(hexToRgba(themes[theme].sidebar.color, hasImage ? 0.9 : 1));
    const [bgColor, setBgColor] = useState<string>(hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1));
    const [headerColor, setHeaderColor] = useState<string>(hexToRgba(themes[theme].headerFooterColor.color, hasImage ? 0.9 : 1));
    const [headerBgColor, setHeaderBgColor] = useState<string>(hexToRgba(themes[theme].headerFooterColor.backgroundColor, hasImage ? 0.9 : 1));
    const toggleThemeMode = () => {
        setIsDark(!isDark)
        setTheme(isDark ? 'dark' : 'light')   
        setColor(hexToRgba(themes[theme].sidebar.color, hasImage ? 0.9 : 1)) 
        setBgColor(hexToRgba(themes[theme].sidebar.backgroundColor, hasImage ? 0.9 : 1))
        setHeaderColor(hexToRgba(themes[theme].headerFooterColor.color, hasImage ? 0.9 : 1))
        setHeaderBgColor(hexToRgba(themes[theme].headerFooterColor.backgroundColor, hasImage ? 0.9 : 1))
    }

    const [rtl, setRtl] = useState<boolean>(false);

    const [menuTitle, setMenuTitle] = useState<string>('Home');
    return (
        <TemplateThemeModeContext.Provider value={{ isDark, color, bgColor, headerColor, headerBgColor, theme, toggleThemeMode }}>
            <TemplateDirectionContext.Provider value={{ rtl, setRtl }}>
                <SidebarSelectedMenuTitleContext.Provider value={{ menuTitle, setMenuTitle }}>
                    {children}
                </SidebarSelectedMenuTitleContext.Provider>
            </TemplateDirectionContext.Provider>
        </TemplateThemeModeContext.Provider>
    );
  };
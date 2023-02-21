import { Theme } from '../styles/CommonStyle';
import { 
    SidebarSelectedMenuTitleContext, 
    TemplateDirectionContext,
    TemplateThemeModeContext,
 } from './context';
import { ContextProvider } from './contextProvider';

export interface TemplateThemeModeContextType {
    isDark: boolean;
    theme: Theme;
    bgColor: string;
    color: string;
    headerBgColor: string;
    headerColor: string;
    toggleThemeMode: () => void;
}
export { 
    SidebarSelectedMenuTitleContext, 
    TemplateDirectionContext, 
    TemplateThemeModeContext, 
    ContextProvider 
}
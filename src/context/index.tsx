import { 
    SidebarSelectedMenuTitleContext, 
    TemplateDirectionContext,
    TemplateThemeModeContext,
 } from './context';
import { ContextProvider } from './contextProvider';

export interface TemplateThemeModeContextType {
    isDark: boolean;
    toggleThemeMode: () => void;
}
export { 
    SidebarSelectedMenuTitleContext, 
    TemplateDirectionContext, 
    TemplateThemeModeContext, 
    ContextProvider 
}
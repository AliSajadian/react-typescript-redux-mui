import { 
    SidebarSelectedMenuTitleContext, 
    TemplateDirectionContext,
    ColorModeContext,
 } from './context';
import { ContextProvider } from './contextProvider';

export interface ColorModeContextType {
    colorMode: 'light' | 'dark';
    toggleColorMode: () => void;
}
export { 
    SidebarSelectedMenuTitleContext, 
    TemplateDirectionContext, 
    ColorModeContext, 
    ContextProvider 
}
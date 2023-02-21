import { createContext } from "react";
import { TemplateThemeModeContextType } from ".";

export const SidebarSelectedMenuTitleContext = createContext({menuTitle: '', setMenuTitle: (mnuTitle: string) => {}});

export const TemplateDirectionContext = createContext({rtl: false, setRtl: (rtl: boolean) => {}});

export const TemplateThemeModeContext = createContext<TemplateThemeModeContextType | null>(null);

import { createContext } from "react";
import { ColorModeContextType } from ".";

export const SidebarSelectedMenuTitleContext = createContext({menuTitle: '', setMenuTitle: (mnuTitle: string) => {}});

export const TemplateDirectionContext = createContext({rtl: false, setRtl: (rtl: boolean) => {}});

export const ColorModeContext = createContext<ColorModeContextType | null>(null);

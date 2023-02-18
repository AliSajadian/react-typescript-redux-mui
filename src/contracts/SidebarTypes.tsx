import { CSSObject } from '@emotion/styled';


export interface MenuItemStylesParams {
    level: number;
    disabled: boolean;
    active: boolean;
    isSubmenu: boolean;
    open?: boolean;
  }

export type ElementStyles = CSSObject | ((params: MenuItemStylesParams) => CSSObject | undefined);
  
export interface MenuItemStyles {
    root?: ElementStyles;
    button?: ElementStyles;
    label?: ElementStyles;
    prefix?: ElementStyles;
    suffix?: ElementStyles;
    icon?: ElementStyles;
    subMenuContent?: ElementStyles;
    SubMenuExpandIcon?: ElementStyles;
  }

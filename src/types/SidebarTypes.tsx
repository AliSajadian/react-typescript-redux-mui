import { CSSObject } from '@emotion/styled';


interface IMenuItemStylesParams {
    level: number;
    disabled: boolean;
    active: boolean;
    isSubmenu: boolean;
    open?: boolean;
  }

type ElementStylesType = CSSObject | ((params: IMenuItemStylesParams) => CSSObject | undefined);
  
export interface IMenuItemStyles {
    root?: ElementStylesType;
    button?: ElementStylesType;
    label?: ElementStylesType;
    prefix?: ElementStylesType;
    suffix?: ElementStylesType;
    icon?: ElementStylesType;
    subMenuContent?: ElementStylesType;
    SubMenuExpandIcon?: ElementStylesType;
  }

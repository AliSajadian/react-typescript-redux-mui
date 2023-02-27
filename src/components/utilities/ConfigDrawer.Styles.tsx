import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Box, Drawer, Typography } from "@mui/material";

export const SideBarDrawer = styled(Drawer)(() => css``);

export const SideBarPage = styled(Box)(
  ({ theme }) => css`
    background-color: ${theme.palette.background.default};
    width: 250px;
    height: 100%;
  `
);

export const TitleContainer = styled(Box)(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.spacing(2)};
  `
);

export const SideBarTitle = styled(Typography)(
  ({ theme }) => css`
    font-weight: ${theme.typography.fontWeightMedium};
  `
);
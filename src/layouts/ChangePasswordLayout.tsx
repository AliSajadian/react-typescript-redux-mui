import { FC, ReactNode } from "react";
import { Grid } from "@mui/material";


type ChangePasswordLayoutProps = {
  children: ReactNode;
}
const ChangePasswordLayout: FC<ChangePasswordLayoutProps> = ({ children }) => {
  return (
    <Grid container>
      <Grid item width='30%'/>
      <Grid item width='40%'>
        {children}
      </Grid>
      <Grid item width='30%'/>
    </Grid>
  )
}
export default ChangePasswordLayout;

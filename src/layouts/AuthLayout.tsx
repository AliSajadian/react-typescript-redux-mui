import { FC, ReactNode } from "react";
import { Grid } from '@mui/material';
import { SignIn1 } from '../assets';


type AuthLayoutProps = {
  children: ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Grid 
      container 
      height='100vh'
      width='100%'
      sx={{backgroundImage:`url(${SignIn1})`, backgroundSize:'cover'}}
    >
      <Grid item width='33%' />
      <Grid item width='34%' display='flex' justifyContent='center' >
        {children}
      </Grid>
      <Grid item width='33%' />
    </Grid>
  )
};

export default AuthLayout;

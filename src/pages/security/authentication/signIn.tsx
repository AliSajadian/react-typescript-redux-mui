import React, { ReactElement, FC } from "react";
import { 
    Box, 
    FormControl, 
    FormControlLabel, 
    FormHelperText, 
    IconButton, 
    InputAdornment, 
    InputLabel, 
    OutlinedInput, 
    Link, 
    Typography, 
    Button,
    Divider
} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { 
    Visibility, 
    VisibilityOff,
    Google,
    Twitter,
    Facebook
} from "@mui/icons-material";


const SignIn: FC = (): ReactElement => {
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
    };

  return (
    <Box 
      display='block'
      m='auto'
      px={3}
      pt={3}
      width={400}
      border={1}
      borderRadius={4}
      boxShadow={12}
      sx={{backgroundColor:'#f7d2b9'}}
    >
      {/* f7ddcd f0d6c5 edd0bc f7d5bf */}
      <Box
        flexGrow= {1}
        display= "flex"
        py={2}
        px={3}
        sx={{
          justifyContent:"space-between",
          backgroundColor:"inherit"
        }}
      >
        <Typography variant="h6">Login</Typography>
        <Link href='/auth/signup' sx={{fontSize: {xs:'9pt', sm:'9pt', md:'10pt'}, textDecoration:'none', mt:1}}>Don't have an account?</Link>
      </Box>
      <Box display='block' px={3} mb={3}>
        <FormControl fullWidth variant="outlined" size='small' sx={{fontSize: {xs:'9pt', sm:'9pt', md:'10pt'}}}>
          <InputLabel htmlFor="outlined-input-email" sx={{fontSize:{xs:'9pt', sm:'10pt', md:'11pt'}}}>Email address</InputLabel>
          <OutlinedInput 
            id="outlined-input-email" 
            type='text'
            aria-describedby="my-helper-text" 
          />
          <FormHelperText id="my-helper-text" >We'll never share your email.</FormHelperText>
        </FormControl>

        <FormControl fullWidth variant="outlined" size='small' sx={{fontSize: {xs:'9pt', sm:'9pt', md:'10pt'}}}>
          <InputLabel htmlFor="outlined-adornment-password" sx={{fontSize:{xs:'9pt', sm:'10pt', md:'11pt'}}}>Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box
          display="flex"
          justifyContent="space-around"
          pt={1}
          flexGrow={1}
          sx={{backgroundColor:"inherit"}}
        >
            <FormControlLabel 
                sx={{ '& .MuiFormControlLabel-label': { fontSize: {xs:'9pt', sm:'9pt', md:'10pt' } } }}
                control={<Checkbox size='small'/>} 
                label={'Keep me sign in'} 
            />      
            <Link href='/auth/forgetpassword' sx={{mt:1, fontSize:{xs:'9pt', sm:'9pt', md:'10pt'}, textDecoration:'none', fontColor:'black'}}>Forget Password?</Link>
        </Box>
        <Box display='block' justifyContent='center' py={2} >
          <Button fullWidth variant="contained" color="primary" size='small' sx={{fontSize:{xs:'9pt', sm:'9pt', md:'10pt'}}}>Login</Button>
        </Box>
        <Divider sx={{pb:1, fontSize:{xs:'9pt', sm:'10pt', md:'11pt'}}}>Login with</Divider>
        <Box 
          display='flex'
          justifyContent='center'
        >
          <Button sx={{fontSize:{xs:'8pt', sm:'8pt', md:'9pt'}}} variant="outlined" startIcon={<Google sx={{mr:0}}/>}>Google</Button>
          <Button sx={{mx:1, fontSize:{xs:'8pt', sm:'8pt', md:'9pt'}}} variant="outlined" startIcon={<Twitter sx={{mr:0}}/>}>Twitter</Button>
          <Button sx={{fontSize:{xs:'8pt', sm:'8pt', md:'9pt'}}} variant="outlined" startIcon={<Facebook sx={{mr:0}}/>}>Facebook</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;
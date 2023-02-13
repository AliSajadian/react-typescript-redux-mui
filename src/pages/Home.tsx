import { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode !== 'dark' ? 'whitesmoke' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard: FC = (): ReactElement => {
  return (
    // columns={{ xs: 3, sm: 6, md: 9, lg: 12 }}
    <Box sx={{ flexGrow: 1, border: 1, p: 2}} >
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} >
          <Item sx={{height: 100,}}>xs0</Item>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Item sx={{height: 200,}}>xs1</Item>
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={4}>
          <Item sx={{height: 200,}}>xs2</Item>
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={4}>
          <Item sx={{height: 100,}}>xs3</Item>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Item sx={{height: 100,}}>xs4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
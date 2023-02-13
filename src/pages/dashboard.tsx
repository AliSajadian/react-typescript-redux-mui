import { FC, ReactElement } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from './dashboard/MediaCard';
import meal1 from '../assets/meal1.jpg'
import meal2 from '../assets/meal2.jpg'
import meal3 from '../assets/meal4.jpg'
import meal4 from '../assets/meal5.jpg'
import LineChart from './dashboard/lineChart';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode !== 'dark' ? 'whitesmoke' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard: FC = (): ReactElement => {
  const theme = useTheme();
  return (
    // columns={{ xs: 3, sm: 6, md: 9, lg: 12 }}
    <Box sx={{ flexGrow: 1, p: 2}} >
      <Grid container spacing={2}>
        <Grid item xs={8} sm={8} md={6} lg={3} 
          // sx={{display:'flex', justifyContent:'space-around', flexGrow: 1}}
          sx={{[theme.breakpoints.down('sm')]: {px:'auto'}}}
        >
          <MediaCard title={'meal1'} description={'best dishes of restaurant'} imgUrl={meal1} />
        </Grid>
        <Grid item xs={8} sm={8} md={6} lg={3} 
          // sx={{display:'flex', justifyContent:'space-around', flexGrow: 1}}
        >
          <MediaCard title={'meal2'} description={'best dishes of restaurant'} imgUrl={meal2}/>
        </Grid>
        <Grid item xs={8} sm={8} md={6} lg={3} 
          // sx={{display:'flex', justifyContent:'space-around', flexGrow: 1}}
        >
          <MediaCard title={'meal3'} description={'best dishes of restaurant'} imgUrl={meal3}/>
        </Grid>
        <Grid item xs={8} sm={8} md={6} lg={3} 
          // sx={{display:'flex', justifyContent:'space-around', flexGrow: 1}}
        >
          <MediaCard title={'meal4'} description={'best dishes of restaurant'} imgUrl={meal4}/>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Item sx={{height: 300,  }}>
            <LineChart />
          </Item>
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={4}>

          <Item sx={{height: 300,  }}/>
        </Grid>
        <Grid item xs={8} sm={6} md={4} lg={4}>
          <Item sx={{height: 150,  }}/>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Item sx={{height: 150,  }}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
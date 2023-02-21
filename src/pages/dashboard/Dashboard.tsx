import { FC, ReactElement } from 'react';
import { styled } from '@mui/material/styles';//useTheme
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MediaCard from './MediaCard';
import meal1 from '../../assets/meal1.jpg'
import meal2 from '../../assets/meal2.jpg'
import meal3 from '../../assets/meal4.jpg'
import meal4 from '../../assets/meal5.jpg'
import LineChart from './LineChart';
import MealOrderStatistics from './MealOrderStatistics';
import FavoriteMeals from './FavoriteMeals';
import Suggestions from './Suggestions';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode !== 'dark' ? 'whitesmoke' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Dashboard: FC = (): ReactElement => {
  // const theme = useTheme();
  // sx={{[theme.breakpoints.down('sm')]: {display:'flex', flexDirection:'column', justifyContent:'center'}}}
  return (
    <Box sx={{ flexGrow: 1, p: 2}} >
      <Grid container spacing={2} >
        <Grid item xs={10} sm={6} md={6} lg={3}>
          <MediaCard title={'meal1'} description={'best dishes of restaurant'} imgUrl={meal1} />
        </Grid>
        <Grid item xs={10} sm={6} md={6} lg={3}>
          <MediaCard title={'meal2'} description={'best dishes of restaurant'} imgUrl={meal2}/>
        </Grid>
        <Grid item xs={10} sm={6} md={6} lg={3}>
          <MediaCard title={'meal3'} description={'best dishes of restaurant'} imgUrl={meal3}/>
        </Grid>
        <Grid item xs={10} sm={6} md={6} lg={3}>
          <MediaCard title={'meal4'} description={'best dishes of restaurant'} imgUrl={meal4}/>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Item sx={{height: 300,  }}>
            <LineChart />
          </Item>
        </Grid>
        <Grid item xs={10} sm={10} md={4} lg={4}>
          <Item sx={{height: 300,  }}>
            <MealOrderStatistics/>
          </Item>
        </Grid>
        <Grid item xs={10} sm={10} md={6} lg={6}>
          <FavoriteMeals />
        </Grid>
        <Grid item xs={10} sm={10} md={6} lg={6}>
          <Suggestions/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard;
import { FC, ReactElement } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import FavoriteMeal from "./FavoriteMeal";


const FavoriteMeals: FC = (): ReactElement => {
    return(
        <Card sx={{height:200}}>
            <Box 
                display='flex' 
                justifyContent='space-between' 
                height='20%'
                pt={1} 
                sx={{backgroundColor:'whitesmoke'}}
            >
                <Typography 
                    variant="subtitle1" 
                    ml={2}
                    sx={{fontSize:{xs:'8pt', sm:'8pt', md:'9pt', lg:'10pt', fontWeight:'bold'}}}
                >
                    Favorite Meals
                </Typography>
                <Typography 
                    variant="subtitle2" 
                    color='lightblue' 
                    mr={2}
                    sx={{
                        textDecoration:'underline', 
                        cursor: 'pointer', 
                        fontSize:{xs:'8pt', sm:'8pt', md:'9pt', lg:'10pt', fontWeight:'bold'}
                    }}
                >
                    View More
                </Typography>
            </Box>
            <CardContent 
                sx={{
                    height:'80%', 
                    m:'auto', 
                    p:'auto', 
                    backgroundColor:'whitesmoke'}} 
            >
                <FavoriteMeal mealName={'meal3'} orderNo={1864}/>
                <FavoriteMeal mealName={'meal4'} orderNo={2265}/>
                <FavoriteMeal mealName={'meal5'} orderNo={1123}/>
            </CardContent>
        </Card>
    )
}

export default FavoriteMeals;
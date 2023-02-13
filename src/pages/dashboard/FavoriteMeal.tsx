import { FC, ReactElement } from "react";
import { Box, Typography, Divider } from "@mui/material";
import React from "react";


interface MealOrderStatisticProps {
    mealName: string;
    orderNo: number;
}
const FavoriteMeal: FC<MealOrderStatisticProps> = ({ mealName, orderNo }): ReactElement => {
    return(
        <React.Fragment>
        <Box 
            display='flex' 
            justifyContent='space-between' 
            mx={2}
            // border={0} 
            // borderBottom={1} 
            // borderColor='text.disabled'
        >
            <Typography 
                variant="body2" 
                mt={0.5} 
                mb={1}
                sx={{fontSize:{xs:'8pt', sm:'8pt', md:'9pt', lg:'10pt', fontWeight:'bold'}}}
            >
                {mealName}
            </Typography>
            <Typography 
                variant="body2" 
                color='text.disabled' 
                mt={0.5} 
                mb={1}
                sx={{fontSize:{xs:'8pt', sm:'8pt', md:'9pt', lg:'10pt', fontWeight:'bold'}}}
            >
                {orderNo}
            </Typography>
        </Box>
        <Divider/>
        </React.Fragment>
    )
}

export default FavoriteMeal;
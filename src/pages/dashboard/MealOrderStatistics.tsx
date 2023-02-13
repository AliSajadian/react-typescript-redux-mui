import { FC, ReactElement } from "react";
import { Box } from "@mui/material";
import MealOrderStatistic from "./MealOrderStatistic";


const MealOrderStatistics: FC = (): ReactElement => {
    return(
        <Box m='auto' p='auto' >
            <MealOrderStatistic mealName={'meal1'} orderNo={1045}/>
            <MealOrderStatistic mealName={'meal2'} orderNo={824}/>
            <MealOrderStatistic mealName={'meal3'} orderNo={1864}/>
            <MealOrderStatistic mealName={'meal4'} orderNo={2265}/>
            <MealOrderStatistic mealName={'meal5'} orderNo={1123}/>
        </Box>
    )
}

export default MealOrderStatistics;
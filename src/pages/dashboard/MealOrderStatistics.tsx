import { FC, ReactElement } from "react";
import { Card, CardContent } from "@mui/material";
import MealOrderStatistic from "./MealOrderStatistic";


const MealOrderStatistics: FC = (): ReactElement => {
    return(
        <Card sx={{m:'auto',p:'auto', color:'text.secondary'}}>
            <CardContent>
                <MealOrderStatistic mealName={'meal1'} orderNo={1045}/>
                <MealOrderStatistic mealName={'meal2'} orderNo={824}/>
                <MealOrderStatistic mealName={'meal3'} orderNo={1864}/>
                <MealOrderStatistic mealName={'meal4'} orderNo={2265}/>
                <MealOrderStatistic mealName={'meal5'} orderNo={1123}/>
            </CardContent>
        </Card>
    )
}

export default MealOrderStatistics;
import { FC, ReactElement } from "react";
import { Badge, Box, Card,  Divider, FormControlLabel, Radio, Typography } from "@mui/material";
import Mail from "@mui/icons-material/MailOutline";
import Suggestion from "./Suggestion";
import RadioGroup from "@mui/material/RadioGroup";


const Suggestions: FC = (): ReactElement => {
    return(
        <Card sx={{height:200, backgroundColor:'whitesmoke'}}>
            <Box 
                display='flex' 
                justifyContent='space-between' 
                height='20%'
                py={1} 
                // pb={3}
                sx={{backgroundColor:'whitesmoke'}}
            >
                <Typography 
                    variant="subtitle1" 
                    ml={2}
                    sx={{fontSize:{xs:'8pt', sm:'8pt', md:'9pt', lg:'10pt', fontWeight:'bold'}}}
                >
                    Suggested Meal
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
                    View Detail
                </Typography>
            </Box>
            <RadioGroup 
                defaultValue="Qualified"
                sx={{
                    height:'80%', 
                    my:2,
                    mx:'auto', 
                    py:'auto', 
                    px:4,
                    backgroundColor:'whitesmoke'
                }} 
            >
                <Suggestion label='Great' mailNo={100} color='secondary'/>
                <Suggestion label='Qualified' mailNo={1000} color='success'/>
                <Suggestion label='Not Qualified' mailNo={100} color='secondary'/>
                <Divider/>
            </RadioGroup>
        </Card>
    )
}

export default Suggestions;
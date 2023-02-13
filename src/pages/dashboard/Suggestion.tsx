import { FC, ReactElement } from "react";
import { Box, FormControlLabel, Radio, Divider, Badge } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/MailOutline";


interface SuggestionProps {
    label: string;
    mailNo: number;
    color?: "default" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined;
}

const Suggestion: FC<SuggestionProps> = ({ label, mailNo, color }): ReactElement => {
    return(
        <React.Fragment>
            <Box 
                display='flex' 
                justifyContent='space-between' 
                mx={2}
            >
                <FormControlLabel 
                    sx={{ '& .MuiFormControlLabel-label': { fontSize: {xs:'8pt', sm:'8pt', md:'9pt', lg:'10pt', fontWeight:'bold'} } }}
                    control={<Radio size='small'/>} 
                    value={label}
                    label={label} 
                />
                <Badge color={color} badgeContent={mailNo} max={mailNo-1}>
                    <MailIcon sx={{color:'paper'}}/>
                </Badge>
            </Box>
            <Divider/>
        </React.Fragment>
    )
}

export default Suggestion;
import { ReactElement, FC } from "react";
import { 
    Box, 
    FormGroup, 
    Stack, 
    styled, 
    Switch, 
    Typography, 
} from "@mui/material";
import { 
  useTemplateDirectionContext, 
  useTemplateThemeModeContext 
} from "../hooks";
import { TemplateThemeModeContextType } from "../context";


const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
  
const Config: FC = (): ReactElement => {
  const { rtl, setRtl } = useTemplateDirectionContext();
  const { isDark, toggleThemeMode } = useTemplateThemeModeContext() as TemplateThemeModeContextType;
  
  const rtlDirectionSwitchChangeHandler = () => {
    setRtl(!rtl);
  }
  const themeModeSwitchChangeHandler = () => {
    toggleThemeMode();
  }

  return (
    <Box
      sx={{
          flexGrow: 1,
          backgroundColor: "inherit",
          display: "flex",
          justifyContent: "flex-start",
      }}
    >
      <Box ml={3} mt={5}>
        <FormGroup >
          <Stack direction="row" spacing={1} mt={2} alignItems="center">
            <Typography>rtl</Typography>
            <AntSwitch value={rtl} onChange={rtlDirectionSwitchChangeHandler} inputProps={{ 'aria-label': 'ant design' }} />
            <Typography>ltf</Typography>
          </Stack>
          <Stack direction="row" spacing={1} mt={2} alignItems="center">
            <Typography>light mode</Typography>
            <AntSwitch value={isDark} onChange={themeModeSwitchChangeHandler} defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
            <Typography>dark mode</Typography>
          </Stack>
        </FormGroup>
      </Box>
    </Box>
  );
};

export default Config;
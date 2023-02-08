import { Backdrop, Box, Button, CircularProgress } from "@mui/material";
import React, { FC, ReactElement } from "react";

const Loader: FC = (): ReactElement => {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };
    return(
  <Box sx={{ fluid: "true", display: "flex" }}>
  <Button onClick={handleToggle}>Show backdrop</Button>
  <Backdrop
    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    open={true}
    onClick={handleClose}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  </Box>)
};

export default Loader;

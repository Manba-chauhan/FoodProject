import { AppBar, Box, Drawer, IconButton, Stack, Toolbar, Typography,Button, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ClearIcon from "@mui/icons-material/Clear";
import theme from './theme';

const Header = () => {
    const[open,setOpen]=useState(false)
   const toggledrawer = (newOpen) => () => {
     setOpen(newOpen);
   };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" sx={{ bgcolor: "white", px:{xs:2 ,sm:4,md:8} }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="black"
            sx={{ flexGrow: 1, fontFamily: "revert-layer" }}
          >
            logo
          </Typography>
          <Stack>
            <IconButton
              size="large"
              sx={{ color: "black" }}
              onClick={toggledrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          </Stack>
          {/* <Stack sx={{ width: "400px", bgcolor: "primary.main" }}> */}
          <Drawer
            role="presentation"
            anchor="right"
            open={open}
            onClose={toggledrawer(false)}
            onClick={toggledrawer(false)}
            sx={{ width: "10%", p: 10 }}
          >
            <IconButton
              size="small"
              sx={{ color: "black", pl: 10, color: "primary.main" }}
              onClose={toggledrawer(false)}
            >
              <ClearIcon />
            </IconButton>
            <Button
              size="large"
              sx={{ color: "black", color: "primary.main" }}
              onClose={toggledrawer(false)}
              startIcon={<HomeIcon />}
              //   sx={{ fontSize: "15px" }}
            >
              Home
            </Button>
          </Drawer>
          {/* </Stack> */}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;

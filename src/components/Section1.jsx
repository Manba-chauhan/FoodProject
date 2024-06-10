import { Container, Typography,Box, Button, ThemeProvider } from '@mui/material';
import React from 'react';
import theme from './theme';

const Section1 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        //   maxWidth="sm"
        sx={{
          width: "100%",
          backgroundImage:
            'url("https://images01.nicepage.com/a1389d7bc73adea1e1c1fb7e/f207e54596f652a282899cb3/pexels-photo-5965948.jpeg")',
          backgroundPosition: "center",
          backgroundSize: "cover",

          //   height: "",
        }}
      >
        <Box sx={{ px: { xs: 2, sm: 5, md: 20 }, pb: 25, pt: 2 }}>
          <Box
            sx={{ ml: { xs: 2, sm: 7, md: 20, lg: 70 }, lineClamp: 10, p: 2 }}
          >
            <Typography
              variant="h1"
              color="#fff"
              component="div"
              sx={{ fontWeight: "bold" ,fontSize:{xs:'50px'} }}
            >
              health
            </Typography>
            <Typography
              variant="h5"
              color="#fff"
              component="div"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Time to Get Healthy & Active
            </Typography>
            <Typography variant="p" color="#fff" component="div" sx={{ mt: 2 }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </Typography>
            <Button
              variant="contained"
              sx={{
                mt: 6,
                bgcolor: "secondary.main",
                px: 8,
                py: 2,
                color: "secondary.contrastText",
                fontSize: "18px",
                letterSpacing: 3,
                textWrap:'nowrap'
              }}
            >
              Read More
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Section1;
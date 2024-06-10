import { Box, Button, Container, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import theme from './theme';
import bg3 from '../assets/img/bg3.png'
const Section5 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", mt: 10 }}>
        <Container>
          <Box
            sx={{
              width: { xs: "100%", sm: "82%", md: "56%", lg: "45%" },
              fontFamily: "sans-serif",
              p: 4,
              // ml: { xs: 0, sm: 10, md: 20 },
            }}
          >
            <Typography variant="p" component={Box} sx={{fontSize:{xs:"14px" ,sm:"16px" ,fontFamily:'serif' ,letterSpacing:1}}}>
              Nisl purus in mollis nunc sed id. Aenean vel elit scelerisque
              mauris pellentesque pulvinar pellentesque. Turpis egestas sed
              tempus urna et pharetra. Id aliquet risus feugiat in ante metus
              dictum. Aliquet nec ullamcorper sit amet risus nullam. Lectus
              nulla at volutpat diam ut.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 4, px: 6, py: 2, letterSpacing: 4 }}
            >
              READ MORE
            </Button>
          </Box>
          <Box>
            <Typography
              variant="span"
              component={Box}
              sx={{
                mt: 1,
                width: 150,
                height: 150,
                borderRadius: "50%",
                bgcolor: "primary.light",
                ml: { xs: 15, sm: 30, md: 60, lg: 80 },
              }}
            ></Typography>
          </Box>
          <Box
            sx={{
              mt: { xs: 15, sm: 4, md: 5 },
              width: { xs: 280, sm: 450, md: 650 },
              height: { xs: 280, sm: 450, md: 650 },
              borderRadius: "50%",
              // bgcolor: "primary.light",
              ml: { xs: 2, sm: 5, md: 20 },
              borderRadius: "50%",
              // objectFit: "cover",
              backgroundImage:
                "url('https://images01.nicepage.com/c461c07a441a5d220e8feb1a/20f29f384d265ce0803f90f8/gffg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              // mb:{xs:20}
            }}
          ></Box>
          <Box
            sx={{
              mt: 1,
              width: 80,
              height: 80,
              borderRadius: "50%",
              // bgcolor: "primary.light",
              ml: { xs: 20, sm: 60, md: 110 },
              mt: { xs: -45, sm: -60 },
              borderRadius: "50%",
              // borderColor: " ",
              border: "13px solid  #f36994",
              // objectFit: "cover",
            }}
          ></Box>
          <Box
            sx={{
              ml: { xs: 0, sm: 4, md: 10, lg: 90 },
              mt: { xs:40, sm: 50, md: 54, lg: 30 },
              Width: { xs: "100%", md: "50%" },
              fontWeight: "bold",
              mb:10,
              // px:4
            }}
          >
            <Typography
              variant="h2"
              component={Box}
              sx={{
                fontWeight: "bold",
          
                pl:{xs:4,sm:4},
                fontSize: { xs: "30px", md: "40px" },
              }}
            >
              25 Simple Tips to Make Your Diet Healthier
            </Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Section5;

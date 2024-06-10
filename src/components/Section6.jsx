import { Box, Container, Stack, ThemeProvider, Typography,Button } from '@mui/material';
import React from 'react';
import theme from './theme';

const Section6 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
        //   height: "100%",
          my: 10,
          pt: 10,
          pb:20,
          bgcolor: "#e5e5e5",
        }}
      >
        <Container>
          <Box>
            <Typography
              variant="span"
              component={Box}
              sx={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                bgcolor: "primary.light",
              }}
            ></Typography>
          </Box>
          <Stack
            direction={{ xs: "column", sm: "row", md: "row" }}
            sx={{ bgcolor: "white", maxwidth: "100%", mt: 2 }}
          >
            <Box
              sx={{
                width: { xs: "100%", sm: "50%", md: "50%" },
                p: { xs: 3, sm: 10 },
              }}
            >
              {/* <Box> */}
              <Typography
                variant="h3"
                component={Box}
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "30px", sm: "30px", md: "50px" },
                  letterSpacing: 2,
                  mb: 4,
                }}
              >
                How can I eat more healthily?
              </Typography>
              <Typography
                variant="p"
                component={Box}
                sx={{ fontFamily: "'Open Sans', 'sans-serif'", mb: 2 }}
                color="secondary.text"
              >
                Vitae congue mauris rhoncus aenean vel elit scelerisque.
                Consequat nisl vel pretium lectus quam id leo in vitae. Dictum
                sit amet justo donec enim diam vulputate. Sociis natoque
                penatibus et magnis dis parturient. Molestie ac feugiat sed
                lectus vestibulum mattis.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: "#000",
                  px: 4,
                  py: 1,
                  color: " contrastText",
                  fontSize: "18px",
                  letterSpacing: 3,
                }}
              >
                Read More
              </Button>
              {/* </Box> */}
            </Box>
            <Box
              sx={{
                // flexGrow: 1,
                // flexShrink: 1,
                backgroundImage:
                  "url('https://images01.nicepage.com/c461c07a441a5d220e8feb1a/e5de9371d01f568cb050720b/-min.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                width: { xs: "100%", sm: "50%", md: "50%" },
                // height:600
                height: { xs: 300, sm: "auto" },
              }}
            ></Box>
          </Stack>
          <Box>
            <Typography
              variant="span"
              component={Box}
              sx={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                bgcolor: "#fff",
                border: "14px solid #e0e5eb",
                // ml:"620px"
                mt:'-60px',
                position:"absolute",
                right:{xs:0,sm:"10px" ,md:"60px",lg:'90px'}
              }}
            ></Typography>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Section6;

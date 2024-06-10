import {
  Container,
  Typography,
  Box,
  Button,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import theme from "./theme";

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
            sx={{
              ml: { xs: 2, sm: 7, md: 50, lg:70,xl:100},
              mr: 2,
              // pr:{xs:4,sm:5,xl:10},
              lineClamp: 10,
              py: 2,
              mt: 4,
              letterSpacing: 2,
              maxwidth: "100%",
              textAlign: "justify",
              //  float:"right"
            }}
          >
            <Box
              sx={{
                width: {xs:"100%",sm:"100%", md:"100%",xl:"60%"},

              }}
            >
              <Typography
                variant="h1"
                color="#fff"
                component="div"
                sx={{ fontWeight: "bold", fontSize: { xs: "50px" } }}
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
              <Typography
                variant="p"
                color="#fff"
                component={Box}
                sx={{ mt: 2, width: { xs: "100%", sm: "100%" } }}
              >
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 5,
                  bgcolor: "secondary.main",
                  px: 5,
                  py: 1.5,
                  color: "secondary.contrastText",
                  fontSize: "18px",
                  letterSpacing: 3,
                  textWrap: "nowrap",
                }}
              >
                Read More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Section1;

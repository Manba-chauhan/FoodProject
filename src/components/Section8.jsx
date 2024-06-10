import {
  Container,
  ThemeProvider,
  Box,
  Stack,
  Typography,
  Divider,
  Button
} from "@mui/material";
import React from "react";
import theme from "./theme";

const Section8 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          //   height: "100%",
          my: 10,
          pt: 10,
          pb: 20,
          bgcolor: "#e5e5e5",
        }}
      >
        <Container>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            sx={{ maxWidth: "100%" }}
          >
            <Box
              sx={{
                flexGrow: 1,
                width: { xs: "100%", sm: "100%", md: "50%" },
                p: 4,
              }}
            >
              <Typography
                variant="h3"
                component={Box}
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "20px", sm: "45px", md: "45px" },
                  letterSpacing: 2,
                  mb: 4,
                }}
              >
                Be mindful – take your time and notice what you eat
              </Typography>
              <Divider
                variant="middle"
                sx={{ mb: 4, ml: 0, py: 1, bgcolor: "primary.main" }}
                width="60%"
              />
              <Typography
                variant="p"
                sx={{
                  //   fontWeight: "bold",
                  fontSize: { xs: "13px", sm: "20px" },
                  //   letterSpacing: 2,
                  fontFamily: "Montserrat, sans-serif;",
                  mb: 4,
                  //   py: 2,
                  textAlign: "justify",
                  lineHeight: 2,
                }}
                component={Box}
              >
                Dui ut ornare lectus sit amet est placerat. Diam phasellus
                vestibulum lorem sed risus. Amet commodo nulla facilisi nullam
                vehicula ipsum. Amet consectetur adipiscing elit pellentesque.
                In ante metus dictum at tempor commodo ullamcorper. Sapien eget
                mi proin sed libero enim sed faucibus. Iaculis eu non diam
                phasellus. Elit eget gravida cum sociis natoque. Quis vel eros
                donec ac odio.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: "primary.main",
                  px: 4,
                  py: 1,
                  color: " contrastText",
                  fontSize: "18px",
                  letterSpacing: 3,
                }}
              >
                Read More
              </Button>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                width: { xs: "100%", sm: "100%", md: "50%" },
                bgcolor: "white",
              }}
            >
              <Box>
                <Typography
                  variant="span"
                  component={Box}
                  sx={{
                    mt: 40,
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    bgcolor: "primary.light",
                    ml: 4,
                  }}
                ></Typography>
                <Typography
                  variant="p"
                  component={Box}
                  sx={{
                    textAlign: "justify",
                    p: 6,
                    letterSpacing: 2,
                    // lineClamp: 25,
                    fontSize: { xs: "13px", sm: "16px" },
                    //   letterSpacing: 2,
                    lineHeight: 2,
                    fontFamily: "'Open Sans', sans-serif",
                    mt: 6,
                  }}
                >
                  Orci nulla pellentesque dignissim enim sit amet venenatis. In
                  mollis nunc sed id semper. Adipiscing commodo elit at
                  imperdiet. Fermentum dui faucibus in ornare. Urna et pharetra
                  pharetra massa massa ultricies mi quis.
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section8;

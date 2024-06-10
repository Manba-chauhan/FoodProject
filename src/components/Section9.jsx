import { Container, Typography, Box , ThemeProvider ,Stack,List, ListItem, ListItemButton, IconButton} from '@mui/material';
import React from 'react';
import theme from './theme';
import FacebookIcon from "@mui/icons-material/Facebook";

const Section9 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "100%",
          pb:10,
         
        }}
      >
        <Container>
          <Box>
            <Typography
              variant="h3"
              component={Box}
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                fontFamily: "Montserrat, sans-serif !important",
              }}
            >
              About Us
            </Typography>
          </Box>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row" }}
            sx={{
              maxWidth: "100%",
              // p:2
              mt: 5,
              bgcolor: "#e5e5e5",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,

                width: { xs: "100%", sm: "100%", md: "80%" },
                p: 6,
              }}
            >
              <Typography
                variant="p"
                component={Box}
                sx={{
                  mt: 2,
                  letterSpacing: 2,
                  fontSize: { xs: "15px", sm: "18px" },
                  mb: 6,
                  textAlign: "justify",
                  lineHeight: 2,
                }}
              >
                We help you get smarter with how and what you eat with our top
                10 tips for eating healthily every day. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography
                variant="p"
                component={Box}
                sx={{
                  mt: 2,
                  letterSpacing: 2,
                  fontSize: { xs: "15px", sm: "18px" },
                  fontWeight: 600,
                  textAlign: "justify",
                  lineHeight: 2,
                }}
              >
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </Typography>
            </Box>
            <Box
              sx={{
                flexGrow: 1,

                width: { xs: "100%", sm: "100%", md: "25%" },
                bgcolor: "primary.main",
              }}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{
                  p: 2,
                  mt:{xs:2,sm:5, md:15}
                }}
              >
                <Typography
                  variant="h3"
                  component={Box}
                  sx={{ color: "white" }}
                >
                  <i class="fa-brands fa-facebook-f "></i>
                </Typography>
                <Typography
                  variant="h3"
                  component={Box}
                  sx={{ color: "white" }}
                >
                  <i class="fa-brands fa-twitter"></i>
                </Typography>
                <Typography
                  variant="h3"
                  component={Box}
                  sx={{ color: "white" }}
                >
                  <i class="fa-brands fa-instagram"></i>
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Section9;

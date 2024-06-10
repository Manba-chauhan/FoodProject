import { Container, Typography, Box, ThemeProvider, Grid } from "@mui/material";
import React from "react";
import theme from "./theme";
import f1 from "../assets/img/f1.jpg";
import f2 from "../assets/img/f2.jpg";
import f3 from "../assets/img/f3.jpg";
import f4 from "../assets/img/f4.jpg";
import f5 from "../assets/img/f5.jpg";
import f6 from "../assets/img/f6.jpg";

const Section7 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{mb:10}}>
        <Container>
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h2"
              component={Box}
              sx={{
                color: "primary.main",
                textAlign: "center",
                fontWeight: "bold",
                fontFamily: "Montserrat, sans-serif;",
                fontSize: { xs: "25px", sm: "25px", md: "50px" },
              }}
            >
              Seasona​l Fruits & Veg
            </Typography>
            <Typography
              variant="p"
              component={Box}
              sx={{
                color: "#000",
                textAlign: "center",
                fontWeight: 400,
                fontStyle: "italic",
                // letterSpacing: 1,
                mt: 1,
              }}
            >
              Organic food is food produced by methods that comply with the
              standards of organic farming.
            </Typography>
          </Box>

          <Box>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6} md={4}>
                <img src={f1} width="100%" height="100%" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img src={f2} width="100%" height="100%" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img src={f3} width="100%" height="100%" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img src={f4} width="100%" height="100%" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img src={f5} width="100%" height="100%" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <img src={f6} width="100%" height="100%" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section7;

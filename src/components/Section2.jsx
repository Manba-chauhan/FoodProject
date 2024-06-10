import {
  Container,
  Grid,
  Typography,
  Box,
  Button,
  ThemeProvider,
  IconButton,
} from "@mui/material";
import React from "react";
import theme from "./theme";
import icon1 from "../assets/img/icon1.svg";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Section2 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 14 }}>
        <Grid
          container
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={{xs:0 ,sm:2,md:2}}
          gap={6}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography
                variant="h4"
                component={Box}
                sx={{ fontWeight: "bold" ,fontSize:{xs:'25px' ,sm:"25px",md:"40px"} }}
              >
                Weight Loss Linked To Healthy Eating
              </Typography>
              <Typography
                variant="p"
                sx={{ fontSize: "13px", fontFamily: "Segoe UI" }}
              >
                Participants who ate the most vegetables and consumed the fewest
                processed foods, sugary drinks and unhealthy fats shed the most
                kilograms Over 300 food products
              </Typography>
              <br></br>
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
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={2}
            sx={{ bgcolor: "primary.dark", color: "#fff", pb: 6 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                py: 4,
                px: 2,
              }}
            >
              <IconButton size="large" color="inherit">
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "20px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Over 300 food products
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "500",
                  mt: 1,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                nunc justo sagittis suscipit ultrices.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={2}
            sx={{ bgcolor: "#d01e55", color: "#fff", pb: 6 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                py: 4,
                px: 2,
              }}
            >
              <IconButton size="large" color="inherit">
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "20px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Only natural products
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "500",
                  mt: 1,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                nunc justo sagittis suscipit ultrices.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            md={2}
            sx={{ bgcolor: "#000", color: "#fff", pb: 6 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                py: 4,
                px: 2,
              }}
            >
              <IconButton size="large" color="inherit">
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "20px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Significant weight loss
              </Typography>
              <Typography
                variant="p"
                sx={{
                  fontSize: "10px",
                  textAlign: "center",
                  fontWeight: "500",
                  mt: 1,
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam
                nunc justo sagittis suscipit ultrices.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Section2;

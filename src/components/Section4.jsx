import {
  Container,
  ThemeProvider,
  Grid,
  Box,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import theme from "./theme";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import SetMealIcon from "@mui/icons-material/SetMeal";
import CakeIcon from "@mui/icons-material/Cake";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";



const Section4 = () => {
    const data = [
      {
        icon: <LocalDiningIcon />,
        head: "Base your meals on higher fibre starchy carbohydrates",
        // para:""
      },
      {
        icon:<LunchDiningIcon/>,
        head: "Eat lots of fruit and veg",
        // para:""
      },
      {
        icon: <SetMealIcon/>,
        head: "Eat more fish, including a portion of oily fish",
        // para:""
      },
      {
        icon: <CakeIcon/>,
        head: "Cut down on saturated fat and sugar",
        // para:""
      },
      {
        icon: <LocalCafeIcon />,
        head: "Eat less salt: no more than 6g a day for adults",
        // para:""
      },
      {
        icon: <FavoriteBorderIcon />,
        head: "Get active and be a healthy weight",
        // para:""
      },
    ];
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "primary.dark",
          Width: "100%",
          pt: 6,
        //   mb:4,
          pb:8
        }}
      >
        <Typography
          variant="h3"
          component={Box}
          sx={{
            textAlign: "center",
            color: "secondary.main",
            fontWeight: "bold",
            // fontSize:{xs:"30px",md:"50px"}
          }}
        >
          Top tips from the experts
        </Typography>
        <Container>
          <Grid
            container
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            //   alignItems="center"
            spacing={2}
          >
           {
            data.map((item)=>{
                return (
                  <Grid item xs={12} sm={6} md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        mt:{xs:2 ,sm:4,md:5},
                        px: { xs: 2, sm: 3 },
                      }}
                    >
                      <Stack
                        direction={{ xs: "row", sm: "row" }}
                        alignItems="flex-start"
                      >
                        <IconButton
                          size="large"
                          sx={{ color: "white", fontSize: "40px" }}
                        >
                         {item.icon}
                        </IconButton>
                        <Box
                          sx={{
                            ml: { sm: 2 },
                            // textAlign: { xs: "center", sm: "left" },
                          }}
                        >
                          <Typography
                            variant="h5"
                            component={Box}
                            sx={{
                              color: "#fff",
                              fontWeight: "bold",
                              fontSize: { xs: "20px", sm: "20px" },
                            //   mb: 10,
                            //   pl: 2,
                            //   pr: 6,
                              py: 1,
                            }}
                          >
                            {item.head}
                          </Typography>
                          <Typography
                            variant="body1"
                            component={Box}
                            sx={{
                              width: "100%",
                              color: "#fff",
                              fontFamily: "revert-layer",
                              fontSize: { xs: "12px", sm: "14px" },
                            //   pl: 2,
                              fontFamily: "serif",
                              //   py: 2,
                              mt:1
                            }}
                          >
                            Sample text. Click to select the text box. Click
                            again or double click to start editing the text.
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                );

            })
           }
          
            
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section4;

import {
  Container,
  Typography,
  Box,
  Button,
  ThemeProvider,
  TextField,
} from "@mui/material";
import React from "react";
import theme from "./theme";

const Section3 = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        //   maxWidth="sm"
        sx={{
          width: "100%",
          backgroundImage:
            'url("https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/e156a497638d51df99801936/pexels-photo-4038777.jpeg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
          mt: 10,
          //   height: "",
        }}
      >
     <Container>
         <Box sx={{ 
          // px: { xs:0, sm: 5, md: 10 }, 
          pb: 25, pt: 2 }}>
          <Box sx={{ mt: 20, maxwidth: "500px" }}>
            <Typography
              variant="h4"
              component={Box}
              sx={{ py: 3, fontWeight: "bold" ,fontSize:{xs:'28px',sm:"60px"}}}
            >
              Be healthy!
            </Typography>
            <TextField
              sx={{
                width: { xs: "100%", sm: "80%", md: "50%", lg: "35%" },
                bgcolor: "#fff",
                border: "none",
                borderRadius: "none",
              }}
              placeholder="Enter your  email address"
            />
            <br></br>
            <Button
              variant="contained"
              sx={{
                width: { xs: "100%", sm: "80%", md: "50%", lg: "35%" },
                py: 1,
                fontSize: "16px",
                letterSpacing: 3,
                mt: 4,
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
     </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Section3;

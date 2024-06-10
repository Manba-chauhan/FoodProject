import { Container ,Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        height: 300,
      }}
    >
      <Container>
        <Typography component={Box} variant='p'
          sx={{
            textAlign:"center",
            color:"white",
            pt:5,
            fontStyle:"italic",
            width:{xs:"100%",sm:"50%",md:"40%"},
            mx:"auto"
          }}
        >
          Sample text. Click to select the text box. Click again or double click
          to start editing the text.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

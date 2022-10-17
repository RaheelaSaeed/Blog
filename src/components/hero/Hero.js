import React from 'react';
import { Box, Typography } from '@mui/material';

import HeroImage from "../../static/bag.jpg";


const Hero = () => {
  return (
    <Box>
      <Typography align="center" variant="h3" sx={{ fontWeight: 900 }}>
        Fashion<b style={{ color: "red" }}>Blog</b>
      </Typography>
      <Typography align="center" variant="body2" sx={{ fontWeight: 100 }}>
        We Make You Look The Better Of You!
      </Typography>
      <Box sx={{
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundColor: "black",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: 600,
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }} >
        <Box sx={{
          width: { xs: "100", sm: '50%', md: '40%' },
          padding: { xs: 3, sm: 2, md: 20 },
        }}>

          <Box sx={{ background: 'white', opacity: '0.8 ' }}>
            <Typography variant={"h6"} color='tomato' align="center" pt={8}>
              Trending Styles
            </Typography>
            <Typography variant="h4" align="center">
              Life is Boring without Fashion!
            </Typography>
            <Typography variant="body1" align="center" pb={8}>
              We love to change your Style
            </Typography>

          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero;
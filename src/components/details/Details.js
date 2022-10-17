import { Box, CardMedia, Container, Stack, Typography } from '@mui/material';
import React from 'react'
import detailsImage from "../../static/image5.jpg";
import postImage from "../../static/image7.jpg"
import Rightbar from '../rightbar/Rightbar';
const Detail = () => {
    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${detailsImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "250px",
                }}>
                <Typography
                    align="center"
                    color={"black"}
                    variant="h2"
                    sx={{ fontWeight: 900, padding: 10 }}
                >
                    Click Post Title
                </Typography>
            </Box>
            <Container>
                <hr />
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    spacing={{ xs: 1, sm: 2, md: 8 }}
                    mt={8}
                >
                    <Box flex={3} sx={{ padding: "18px 100px 100px 100px" }}>
                        <Typography
                            m={4}
                            align="center"
                            color={"gray"}
                            variant="body1"
                            sx={{ fontWeight: 900 }}
                        >
                            The earliest form of perfume was incense, which gives off its odor when burned.
                            (The word perfume is derived from the Latin per fumum, meaning “through smoke.”)
                            The first liquid perfumes were prepared as long ago as 3500 bc. Today there are
                            hundreds of perfumes. They are found in nearly all cosmetic and toiletry items.
                        </Typography>
                        <CardMedia
                        component="img"
                        alt="green iguana"
                        height="300px"
                        image={postImage}
                    />
                    <Typography align="center" variant="h4" mt={2}>
                      wait for it
                    </Typography>
                    <Typography
                            m={4}
                            align="center"
                            color={"gray"}
                            variant="body1"
                            sx={{ fontWeight: 900 }}
                        >
                            The earliest form of perfume was incense, which gives off its odor when burned.
                            (The word perfume is derived from the Latin per fumum, meaning “through smoke.”)
                            The first liquid perfumes were prepared as long ago as 3500 bc. Today there are
                            hundreds of perfumes. They are found in nearly all cosmetic and toiletry items.
                        </Typography>
                    </Box>
                    <Box flex={1}>
                        <Rightbar />
                    </Box>
                </Stack>
            </Container>
        </Box >
    );
};

export default Detail;
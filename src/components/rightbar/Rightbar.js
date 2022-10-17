import { Avatar, Box,  Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import postImage2 from '../../static/image2.jpg';
import postImage3 from '../../static/image3.jpg';
import postImage4 from '../../static/image4.jpg';
import postImage5 from '../../static/image5.jpg';
import postImage1 from '../../static/image1.jpg';
import React from 'react';
import Card from '../card/Card';

const Rightbar = () => {
  return (
    <Box>
      <Typography align="center" bgcolor={"black"} color="white">
        Most Popular
      </Typography>
      <List sx={{ width: '100%', height: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar sx={{ height: 80, width: 80 }} variant="square" alt="Remy Sharp" src={postImage2} />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={" — I'll be in your neighborhood doing errands this…"} />
        </ListItem>

        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar sx={{ height: 80, width: 80 }} variant="square" alt="Remy Sharp" src={postImage3} />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={" — I'll be in your neighborhood doing errands this…"} />
        </ListItem>

        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar sx={{ height: 80, width: 80 }} variant="square" alt="Remy Sharp" src={postImage4} />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={" — I'll be in your neighborhood doing errands this…"} />
        </ListItem>

        <ListItem alignItems="flex-end">
          <ListItemAvatar>
            <Avatar sx={{ height: 80, width: 80 }} variant="square" alt="Remy Sharp" src={postImage5} />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={" — I'll be in your neighborhood doing errands this…"} />
        </ListItem>
        <Divider variant="inset" component={'li'} />
         </List>
      <Typography align="center" bgcolor={"black"} color="white">
        About Us 
      </Typography>
      <Card cardImage={postImage1} />
    </Box>

  )
}

export default Rightbar;
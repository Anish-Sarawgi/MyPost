import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      bgcolor="lightgray"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=1"/>
          <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?img=2"/>
          <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=3"/>
          <Avatar alt="Agnes Walker" src="https://i.pravatar.cc/150?img=4"/>
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pravatar.cc/150?img=5"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pravatar.cc/150?img=6"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pravatar.cc/150?img=7"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://i.pravatar.cc/150?img=8"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight="100px" gap={5}>
          <ImageListItem>
            <img src="https://loremflickr.com/320/240?random=1" alt="A" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://loremflickr.com/320/240?random=2" alt="B" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://loremflickr.com/320/240?random=3" alt="C" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://i.pravatar.cc/150?img=9" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://i.pravatar.cc/150?img=10" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://i.pravatar.cc/150?img=11" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;

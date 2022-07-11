import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Mail, Notifications, Pets, SearchRounded } from "@mui/icons-material";
import React from "react";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  display:'flex',
  alignItems:'center',
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up('sm')]:{
    display:'flex'
  }
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up('sm')]:{
    display:'none'
  }
}));

const Navbar = () => {
  const [open,setOpen]= useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          LAMA DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <SearchRounded sx={{color:'black', mr:2}}/>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
            sx={{ width: 30, height: 30 }}
            onClick={e=>setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e=>setOpen(true)}>
          <Avatar
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Typography variant="span">John</Typography>
        </UserBox>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;

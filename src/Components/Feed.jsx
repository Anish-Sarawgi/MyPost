import {Box} from "@mui/material";
import React from "react";
import Posts from "./Posts";

const Feed = () => {
  return (
    <Box bgcolor="skyblue" flex={4} p={2}>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>
    </Box>
  );
};

export default Feed;

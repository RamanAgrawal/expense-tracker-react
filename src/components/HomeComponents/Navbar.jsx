import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Profile from "./Profile";
// import {ReactDOM} from 'react-dom'

const Navbar = () => {
  const [showprofile, setShowProfile] = useState(false);
  const toggleHandler = () => {
    setShowProfile(!showprofile);
  };
  // const portalElement=document.getElementById('profile')
  return (
    <>
      {showprofile && <Profile />}
      <AppBar>
        <Toolbar>
          <Grid container>
            <Grid item xs={2}>
              <Typography variant="h5">Expense Tracker</Typography>
            </Grid>
            <Grid item xs={8} sm={4} md={9}></Grid>
            <Grid item md={1}>
              <AccountCircleIcon onClick={toggleHandler} fontSize="large" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

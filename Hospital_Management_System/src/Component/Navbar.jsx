import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export const Navbar = () => {
  return (
    <div>
      <Card className="navbar">
        <CardContent>
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={1}>
              <Avatar
                alt="Hospital LOGO"
                src="./img/medical.png"
                sx={{ width: 120, height: 56 }}
                variant="square"
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Link to="/">Home</Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/login">Login</Link>
            </Grid>

            <Grid item xs={2}>
              <Link to="/aboutus">AboutUs</Link>
            </Grid>
            <Grid item xs={2}>
              <Link to="/contactus">ContactUs</Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

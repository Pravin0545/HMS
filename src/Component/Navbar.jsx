import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent } from "@mui/material";
import LocalHospitalTwoToneIcon from "@mui/icons-material/LocalHospitalTwoTone";
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
            
              {/* <span className="slogan">We Care For You</span> */}
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              <Link to="/">Home</Link>
              {/* <span className="slogan">We Care For You</span> */}
            </Grid>
            <Grid item xs={2}>
              <Link to="/login">Login</Link>
              {/* <span className="slogan">We Care For You</span> */}
            </Grid>

            <Grid item xs={2}>
              <Link to="/aboutus">AboutUs</Link>
              {/* <span className="slogan">We Care For You</span> */}
            </Grid>
            <Grid item xs={2}>
              <Link to="/contactus">ContactUs</Link>
              {/* <span className="slogan">We Care For You</span> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent } from "@mui/material";
import LocalHospitalTwoToneIcon from "@mui/icons-material/LocalHospitalTwoTone";

export const Navbar = () => {
  return (
    <div>
      <Card className="navbar">
        <CardContent>
          <Grid container>
            <Grid item xs={1}>
              {/* <img src="./img/medical.png" alt="Hospital logo" width={100} height={50} /> */}
              <LocalHospitalTwoToneIcon fontSize="large" />
              {/* <span className="slogan">We Care For You</span> */}
            </Grid>
            <Grid item xs={2}></Grid>
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

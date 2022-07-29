import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationCityIcon from "@mui/icons-material/LocationCity";

export const Footer = () => {
  return (
    <div >
      {/* <h1>Footer</h1> */}
      <Grid container >
        <Grid item xs={4}>
          <Card >
            <CardContent className="footer">
              <h3>Phone</h3>
              <LocalPhoneIcon /> <br />
              <label>Phone NO:- +91 9876543210</label>
              <br />
              <label>Alternate NO:- +91 9876543765</label>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent className="footer">
              <h3>Social Media</h3>
              <Grid container>
                <Grid item xs={6}>
                  <TwitterIcon />
                  <br /> <label>xyz@twitter.com</label>
                </Grid>
                <Grid item xs={6}>
                  <EmailIcon />
                  <br /> <label>xyz@Gmail.com</label>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent className="footer">
              <h3>Address</h3>
              <LocationCityIcon />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ab.</p>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";

export const Contactus = () => {
  return (
    <div>
      <div>
        {/* <h1 className="admin">Contact Us</h1> */}
        <Grid container>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <h3>Phone</h3>
                <LocalPhoneIcon /> <br />
                <label>Phone NO:- +91 9876543210</label>
                <br />
                <label>Alternate NO:- +91 9876543765</label>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <h3>Social Media</h3>
                <Grid container>
                  <Grid item xs={4}>
                    <TwitterIcon />
                    <br /> <label>xyz@twitter.com</label>
                  </Grid>
                  <Grid item xs={4}>
                    <EmailIcon />
                    <br /> <label>xyz@Gmail.com</label>
                  </Grid>
                  <Grid item xs={4}>
                    <FacebookTwoToneIcon />
                    <br /> <label>xyz@facebook.com</label>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <h3>Address</h3>
                <LocationCityIcon />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  ab.
                </p>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

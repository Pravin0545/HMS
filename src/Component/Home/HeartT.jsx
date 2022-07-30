import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

export const HeartT = () => {
  return (
    <div>
      <h1 className="admin">Heart Transplant</h1>

      <h1>Overview</h1>
      <p>
        A heart transplant is an operation in which a failing heart is replaced
        with a healthier donor heart. Heart transplant is a treatment that's
        usually reserved for people whose condition hasn't improved enough with
        medications or other surgeries. While a heart transplant is a major
        operation, your chance of survival is good with appropriate follow-up
        care.
      </p>
      <Grid container>
        <Grid item xs={12}>
          <Card>
            <CardContent className="dcard1">
              <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="./img/Doctor1.webp"
                    sx={{ width: 150, height: 150 }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <h4>Dr.M.K.Gandhi</h4>
                  <h4>MD.DM(Medical Oncology)</h4>
                  <h3>12 Years Experience</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Pariatur similique deserunt est sequi accusantium
                    voluptatibus ut recusandae! Repellendus, voluptatum nemo!
                  </p>
                  <Link to="/heartt/registration">
                    <Button variant="contained">Appointment</Button>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="dcard1">
              <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                  {" "}
                  <Avatar
                    alt="Remy Sharp"
                    src="./img/Doctor1.webp"
                    sx={{ width: 150, height: 150 }}
                  />
                </Grid>
                <Grid item xs={8}>
                  <h4>Dr.M.K.Sinha</h4>
                  <h4>MD.DM(Medical Oncology)</h4>
                  <h3>10 Years Experience</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Pariatur similique deserunt est sequi accusantium
                    voluptatibus ut recusandae! Repellendus, voluptatum nemo!
                  </p>
                  <Link to="/heartt/registration">
                    <Button variant="contained">Appointment</Button>
                  </Link>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

import React from "react";
import { Grid, TextField, Button } from "@mui/material";

export const Payment = () => {
  return (
    <div>
      <h1 className="roomal">Payment</h1>
      <div className="appointmentapplication">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Patient Name:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Patient Name"
              type="text"
              required
            ></TextField>
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={1.5}>
            <h3>Treatment:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Treatment "
              type="text"
              required
            ></TextField>
          </Grid>
          <Grid item xs={1}></Grid>
          <br />
          <br />
          <br />
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Doctor Name:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Doctor Name"
              type="text"
              required
            ></TextField>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1.5}>
            <h3>Room NO:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Room NO"
              type="text"
              required
            ></TextField>
          </Grid>
          <Grid item xs={1}></Grid>
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Total Bill:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Doctor Name"
              type="text"
              required
            ></TextField>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1.5}>
            <h3>Advance Payment:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Room NO"
              type="text"
              required
            ></TextField>
          </Grid>
          <Grid item xs={1}></Grid>
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="success">
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="error">
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

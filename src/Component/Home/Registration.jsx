import React from "react";
import { Grid, TextField, Button } from "@mui/material";

export const Registration = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", color: " #2AAA8A", margin: "20px" }}>
        NewAppointment
      </h2>
      <div className="appointmentapplication">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Enter Full Name:</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Full Name"
              type="text"
              required
            ></TextField>
          </Grid>
          <Grid item xs={1.5}>
            <h3>Enter Number:</h3>
          </Grid>
          <Grid item xs={4.5}>
            <TextField
              variant="outlined"
              label="Enter Number"
              type="number"
              required
            ></TextField>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Enter Email:</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Email"
              type="text"
              required
            ></TextField>
          </Grid>
          <Grid item xs={1.5}>
            <h3>Enter DOB:</h3>
          </Grid>
          <Grid item xs={2.1}>
            <TextField variant="outlined" type="date" fullWidth></TextField>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Enter Address</h3>
          </Grid>
          <Grid item xs={6.1}>
            <TextField
              variant="outlined"
              label="Enter Address"
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <h3>Please descripe the Reason for the Visit:</h3>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={7.6}>
            <TextField fullWidth></TextField>
          </Grid>
        </Grid>
        <br />
        <Grid container>
          <Grid item xs={4.5}></Grid>
          <Grid item xs={2}>
            <Button variant="contained">CANCEL</Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">SUBMIT</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

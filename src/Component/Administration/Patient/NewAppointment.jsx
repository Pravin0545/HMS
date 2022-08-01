import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import { Details } from "./Details";

export const NewAppointment = () => {
  const [appointment, setAppointment] = useState({});
  const [pdetails, setPdetails] = useState([]);
  console.log(pdetails);

  const handleclick = () => {
    setPdetails(appointment);
  };

  return (
    <div>
      <h2 className="admin">NewAppointment</h2>
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
              onChange={(e) =>
                setAppointment({ ...appointment, name: e.target.value })
              }
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
              onChange={(e) =>
                setAppointment({ ...appointment, mobile: e.target.value })
              }
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
              type="email"
              onChange={(e) =>
                setAppointment({ ...appointment, email: e.target.value })
              }
              required
            ></TextField>
          </Grid>
          <Grid item xs={1.5}>
            <h3>Enter DOB:</h3>
          </Grid>
          <Grid item xs={2.1}>
            <TextField
              variant="outlined"
              type="date"
              onChange={(e) =>
                setAppointment({ ...appointment, dob: e.target.value })
              }
              fullWidth
            ></TextField>
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
              onChange={(e) =>
                setAppointment({ ...appointment, address: e.target.value })
              }
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
            <Button variant="contained" onClick={handleclick}>
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </div>
      <Details props={pdetails} />
    </div>
  );
};

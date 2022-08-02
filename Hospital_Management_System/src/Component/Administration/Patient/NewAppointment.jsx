import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

export const NewAppointment = ({ setPdetails }) => {
  const [user, setUser] = useState({});
  // const [data, setData] = useState([]);

  // localStorage.setItem("userdata", JSON.stringify(data));
  // console.log(user);

  const handlesubmit = () => {
    setPdetails([...user, user]);
    // console.log();
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
              // value={user}
              variant="outlined"
              label="Enter Full Name"
              type="text"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
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
              onChange={(e) => setUser({ ...user, number: e.target.value })}
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
              required
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            ></TextField>
          </Grid>
          <Grid item xs={1.5}>
            <h3>Enter DOB:</h3>
          </Grid>
          <Grid item xs={2.1}>
            <TextField
              variant="outlined"
              type="date"
              onChange={(e) => setUser({ ...user, dob: e.target.value })}
              fullWidth
            ></TextField>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Enter Aadhar:</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Aadhar Number"
              type="email"
              required
              onChange={(e) => setUser({ ...user, aadhar: e.target.value })}
            ></TextField>
          </Grid>
          <Grid item xs={1.5}>
            <h3>Appointment  Date:</h3>
          </Grid>
          <Grid item xs={2.1}>
            <TextField
              variant="outlined"
              type="date"
              onChange={(e) => setUser({ ...user, date: e.target.value })}
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
              onChange={(e) => setUser({ ...user, address: e.target.value })}
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
            <Button variant="contained" onClick={() => handlesubmit()}>
              SUBMIT
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import axios from "axios";

export const NewAppointment = () => {
  const [user, setUser] = useState({});
  const [issuccess, setIssuccess] = useState(false);
  const [notsuccess, setNotsuccess] = useState(false);

  const handlesubmit = async () => {
    if (
      user.name.length > 2 &&
      user.aadhar.length == 12 &&
      user.number.length == 10
    ) {
      const url = "http://localhost:4444/api/addregistration";
      const payload = user;

      const result = await axios.post(url, payload);
      if (result.status === 200) {
        setIssuccess(true);
        setNotsuccess(false)
      }
    } else {
      setNotsuccess(true);
    }
  };

  const handlereset = () => {
    setUser(" ");
  };

  return (
    <div>
      <div className="appointmentapplication">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Enter Full Name:</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              value={user.name}
              variant="outlined"
              label="Enter Full Name"
              type="text"
              onChange={(e) =>
                setUser({ ...user, name: e.target.value.toLowerCase() })
              }
              required
            ></TextField>
          </Grid>
          <Grid item xs={1.5}>
            <h3>Enter Number:</h3>
          </Grid>
          <Grid item xs={4.5}>
            <TextField
              value={user.number}
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
              value={user.email}
              variant="outlined"
              label="Enter Email"
              type="email"
              required
              onChange={(e) => setUser({ ...user, email: e.target.value.toLowerCase() })}
            ></TextField>
          </Grid>
          <Grid item xs={1.5}>
            <h3>Enter DOB:</h3>
          </Grid>
          <Grid item xs={2.1}>
            <TextField
              value={user.dob}
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
              value={user.aadhar}
              variant="outlined"
              label="Enter Aadhar Number"
              type="email"
              required
              onChange={(e) => setUser({ ...user, aadhar: e.target.value.toLowerCase() })}
            ></TextField>
          </Grid>
          <Grid item xs={1.5}>
            <h3>Appointment Date:</h3>
          </Grid>
          <Grid item xs={2.1}>
            <TextField
              value={user.date}
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
              value={user.address}
              variant="outlined"
              label="Enter Address"
              required
              onChange={(e) => setUser({ ...user, address: e.target.value.toLowerCase() })}
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
          <Grid item xs={3}></Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={handlesubmit}>
              Register
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" onClick={() => handlereset()}>
              CANCEL
            </Button>
          </Grid>
          <Grid item xs={12}>
            {issuccess && (
              <Alert severity="success">Registration Successfully....!</Alert>
            )}
            {notsuccess && (
              <Alert severity="warning">Enter all details Properly....!</Alert>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

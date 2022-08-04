import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import Alert from "@mui/material/Alert";

export const Registration = () => {
  const [user, setUser] = useState({});
  const [userreg, setUserreg] = useState([]);

  const result = [userreg];

  localStorage.setItem("userreg", JSON.stringify(userreg));

  const handleregsubmit = () => {
    setUserreg(user);
  };
  console.log(userreg);
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
            <h3>Appointment Date:</h3>
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
            <Button variant="contained" onClick={() => handleregsubmit()}>
              Register
            </Button>
          </Grid>
        </Grid>
      </div>
      <div>
        <table className="table">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Mobile NO</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Aadhar No</th>
            <th>Date Of Appointment</th>
          </tr>
          {result.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
                <td>{item.dob}</td>
                <td>{item.address}</td>
                <td>{item.aadhar}</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

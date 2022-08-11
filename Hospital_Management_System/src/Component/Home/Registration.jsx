import React, { useState } from "react";
import { Grid, TextField, Button, Alert } from "@mui/material";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

export const Registration = () => {
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [issuccess, setIssuccess] = useState(false);

  const handlesubmit = async () => {
    const url = "http://localhost:4444/api/addregistration";
    const payload = user;

    const result = await axios.post(url, payload);
    if (result.status === 200) {
      setIssuccess(true);
    }

    setData([user]);
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
          <Grid item xs={3}></Grid>
          <Grid item xs={2}>
            <Button variant="contained" onClick={handlesubmit}>
              Register
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Link to="/">
              {" "}
              <Button variant="contained">CANCEL</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            {issuccess && (
              <Alert severity="success">Registration Successfully....!</Alert>
            )}
          </Grid>
        </Grid>
      </div>
      <TableContainer component={Paper} style={{ marginTop: 10 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Mobile</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">DOB</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Aadhar</TableCell>
              <TableCell align="center">Date Of Appointment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow>
                <TableCell align="center">{index + 1}</TableCell>
                <TableCell align="center">{item.name}</TableCell>
                <TableCell align="center">{item.number}</TableCell>
                <TableCell align="center">{item.email}</TableCell>
                <TableCell align="center">{item.dob}</TableCell>
                <TableCell align="center">{item.address}</TableCell>
                <TableCell align="center">{item.aadhar}</TableCell>
                <TableCell align="center">{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

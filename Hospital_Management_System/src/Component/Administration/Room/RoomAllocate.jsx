import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

export const RoomAllocate = ({handlesubmit}) => {
  const [user,setUser]=useState({})
  return (
    <div>
      <h1 className="roomal">RoomAllocate</h1>
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
              onChange={(e) => setUser({ ...user, name: e.target.value })}
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
              
              onChange={(e) => setUser({ ...user, treatment: e.target.value })}
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
              
              onChange={(e) => setUser({ ...user, doctorname: e.target.value })}
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
              
              onChange={(e) => setUser({ ...user, roomno: e.target.value })}
            ></TextField>
          </Grid>
          <Grid item xs={1}></Grid>
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="success" onClick={() => handlesubmit(user)}>
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="error">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

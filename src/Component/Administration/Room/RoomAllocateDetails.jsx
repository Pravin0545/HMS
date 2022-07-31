import React from "react";
import { Card, CardContent, Grid } from "@mui/material";

export const RoomAllocateDetails = () => {
  return (
    <div>
      <h1 className="roomal">RoomAllocateDetails</h1>
      {/* <h2 style={{textAlign:"center",color:"blue",margin:"20px"}}>Details</h2> */}
      <Card className="patientdetails1">
        <CardContent className="patientdetails">
          <Grid container>
            <Grid item xs={3}>
              <h4>Pravin Chittoji</h4>
            </Grid>
            <Grid item xs={3}>
              <h4>Bone and Joint</h4>
            </Grid>
            <Grid item xs={3}>
              <h4>DR.M.K.Gandhi</h4>
            </Grid>
            <Grid item xs={3}>
              <h4>Room.NO 103</h4>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

import React from "react";
import { Card,CardContent,Grid } from "@mui/material";

export const Details = () => {
  return (
    <div>
      <h2 style={{textAlign:"center",color:"blue"}}>Details</h2>
      <Card className="patientdetails1">
        <CardContent className="patientdetails">
          <Grid container>
            <Grid item xs={2}>
              <h4>Bhimendra M Nerli</h4>
            </Grid>
            <Grid item xs={2}>
              <h4>8310474929</h4>
            </Grid>
            <Grid item xs={2}>
              <h4>xyz@gmail.com</h4>
            </Grid>
            <Grid item xs={2}>
              <h4>22-09-1998</h4>
            </Grid>
            <Grid item xs={2}>
              <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
            </Grid>
            <Grid item xs={2}>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </div>
  );
};

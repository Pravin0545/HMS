import React from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const DoctorData = ({ item }) => {
  console.log(item);
  return (
    <div>
      <Card>
        <CardContent className="dcard1">
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={2}>
              {" "}
              <Avatar
                alt="Remy Sharp"
                src="./img/Doctor1.webp"
                sx={{ width: 150, height: 150 }}
              />
            </Grid>
            <Grid item xs={8}>
              <h4>{item.name}</h4>
              <br />
              <h4>{item.edu}</h4>
              <br />
              <h3>{item.exp}</h3>
              <br />
              <p>{item.details}</p>
              <br />
              <br />
              <Link to="/doctordata/registration">
                <Button variant="contained" color="secondary">
                  Registration
                </Button>
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

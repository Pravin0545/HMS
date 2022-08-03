import React, { useState } from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { heartdata, Overviewheart } from "./HearttData";

export const HeartT = () => {
  const [data, setData] = useState(heartdata);
  const [overview, setOverview] = useState(Overviewheart);

  return (
    <div>
      <h1 className="admin">Heart Transplant</h1>

      <h1>Overview</h1>
      <br />
      <br />
      <p>{overview}</p>
      <br />
      <br />
      <br />
      <Grid container>
        <Grid item xs={12}>
          {data.map((item) => {
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
                        <h4>{item.edu}</h4>
                        <h3>{item.exp}</h3>
                        <p>{item.details}</p>
                        <Link to="/bone/newappointment">
                          <Button variant="contained">Appointment</Button>
                        </Link>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

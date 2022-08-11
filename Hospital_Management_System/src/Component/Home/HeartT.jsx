import React, { useState } from "react";
import { Grid } from "@mui/material";
import { DoctorData } from "./DoctorData";

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
                <DoctorData item={item} />
              </div>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
};

import React, { useState } from "react";
import { Grid } from "@mui/material";

import { DoctorData } from "./DoctorData";

import { cancerdata, Overviewcancer } from "./CancerData";

export const Cancer = () => {
  const [data, setData] = useState(cancerdata);
  const [overview, setOverview] = useState(Overviewcancer);

  return (
    <div>
      <h1 className="admin">Cancer</h1>

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

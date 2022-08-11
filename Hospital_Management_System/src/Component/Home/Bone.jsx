import React, { useState } from "react";
import { Grid } from "@mui/material";

import { DoctorData } from "./DoctorData";

import { bonedata, Overviewbone } from "./BoneData";

export const Bone = () => {
  const [data, setData] = useState(bonedata);
  const [overview, setOverview] = useState(Overviewbone);
  return (
    <div>
      <h1 className="admin">Bone and Joints</h1>
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

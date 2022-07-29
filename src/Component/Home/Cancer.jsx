import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export const Cancer = () => {
  return (
    <div>
      <h1>Cancer</h1>
      <h1>OverView</h1>
      <p>
        Cancer is a generic term for a large group of diseases that can affect
        any part of the body. Other terms used are malignant tumours and
        neoplasms. One defining feature of cancer is the rapid creation of
        abnormal cells that grow beyond their usual boundaries, and which can
        then invade adjoining parts of the body and spread to other organs; the
        latter process is referred to as metastasis. Widespread metastases are
        the primary cause of death from cancer.
      </p>
      <Grid container>
        <Grid item xs={12}>
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
                  <h4>Dr.M.K.Gandhi</h4>
                  <h4>MD.DM(Medical Cancer)</h4>
                  <h3>12 Years Experience</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Pariatur similique deserunt est sequi accusantium
                    voluptatibus ut recusandae! Repellendus, voluptatum nemo!
                  </p>
                  <Button variant="contained">Appointment</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
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
                  <h4>Dr.M.K.Sinha</h4>
                  <h4>MD.DM(Medical Cancer)</h4>
                  <h3>10 Years Experience</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Pariatur similique deserunt est sequi accusantium
                    voluptatibus ut recusandae! Repellendus, voluptatum nemo!
                  </p>
                  <Button variant="contained">Appointment</Button>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

import React from "react";
import { Grid, Card, CardContent, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export const Bone = () => {
  return (
    <div>
      <h1>Bone</h1>
      <h1>Overview</h1>
      <p>
        Bones provide support for our bodies and help form our shape. Although
        they're very light, bones are strong enough to support our entire
        weight. Bones also protect the body's organs. The skull protects the
        brain and forms the shape of the face. The spinal cord, a pathway for
        messages between the brain and the body, is protected by the backbone,
        or spinal column. The ribs form a cage that shelters the heart and
        lungs, and the pelvis helps protect the bladder, part of the intestines,
        and in women, the reproductive organs.
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
                  <h4>MD.DM(Medical Bone and Joints)</h4>
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
                  <h4>MD.DM(Medical Bone and Joints)</h4>
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

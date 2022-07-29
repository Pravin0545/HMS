import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { Footer } from "./Footer";

export const Home = () => {
  return (
    <div>
      <div>
        <img src="./img/doctor.jpg" alt="" className="doctorimg" />
        <div className="homecontent">
          <h1>Your Most Trusted</h1>
          <h1>Health Partner</h1>
          <br />
          <h3>The Best Match Services For You</h3>
          <br />
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Est,
            incidunt at ipsam hic vitae perspiciatis earum dolorum facilis{" "}
            <br />
            quibusdam placeat quaerat doloremque assumenda quia asperiores.
          </p>
        </div>
        <br />
        <br />
        <br />
      </div>

      <div className="homecard">
        <h1 className="admin">CENTERS OF EXCELLENCE</h1>

        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={4}>
                    <img src="./img/hearttransplant.jpg" alt="" width={170} />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={6}>
                    <h2>HEART TRANSPLANT</h2>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <h4>
                      The best team of Heart Specialists and Surgeons available
                      24X7
                    </h4>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={4}>
                    <img
                      src="./img/cancer.png"
                      alt=""
                      width={170}
                      height={140}
                    />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={6}>
                    <h2>CANCER</h2>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <h4>World Leaders in Oncology Care.</h4>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Grid container>
                  <Grid item xs={4}>
                    <img
                      src="./img/bonesandjoint.jpg"
                      alt=""
                      width={170}
                      height={120}
                    />
                  </Grid>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={6}>
                    <h2>BONES & JOINTS</h2>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <h4>
                      World renowned Ortho Specialists performing the latest
                      procedures
                    </h4>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
};

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, TextField, Button } from "@mui/material";
import { Footer } from "./Footer";

export const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handelreset = () => {
    setPassword("");
    setUsername("");
  };
  return (
    <div>
      <div>
        <h1 className="admin">Login</h1>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <h3>Enter UserName</h3>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Enter UserName"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <h3>Enter Password</h3>
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Enter Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={4}>
            {username === "abcd" && password === "1234" ? (
              <Link to="/login/administration">
                <Button variant="contained">Login</Button>
              </Link>
            ) : null}
          </Grid>
          <Grid item xs={1}>
            <Button variant="contained" onClick={() => handelreset()}>
              RESET
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Link to="/">
              <Button variant="contained">CANCEL</Button>
            </Link>
          </Grid>
        </Grid>
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

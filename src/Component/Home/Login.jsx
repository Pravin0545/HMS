import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid,TextField,Button } from "@mui/material"
import { Footer } from "./Footer";

export const Login = () => {
  const [username,setUsername]=useState()
  const [password,setPassword]=useState()
  const[isvalid,setIsvalid]=useState(true)
console.log(username)
console.log(password)
  return (
    <div>
      <div>
        <h1 className="admin">Login</h1>
        <Grid container spacing={2}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={2}>
                <h3>Enter UserName</h3>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Enter UserName" variant="outlined" onChange={(e)=>setUsername(e.target.value)}></TextField>
                </Grid>
            </Grid><br />
            <Grid container spacing={2}>
                <Grid item xs={4}>
                </Grid>
                <Grid item xs={2}>
                <h3>Enter Password</h3>
                </Grid>
                <Grid item xs={6}>
                    <TextField label="Enter Password" variant="outlined" onChange={(e)=>setPassword(e.target.value)}></TextField>
                </Grid>
            </Grid><br />
            <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                  {
              (username==="abcd" && password==="1234")? 
              <Link to="/login/administration"><Button variant="contained">Login</Button></Link>:null
                  }
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained">Cancel</Button>
                </Grid>
                <Grid item xs={4}>
                   <Button variant="contained">Sign-Up</Button>
                </Grid>
            </Grid>
            <br />
            <br />
           
      </div>
      <Footer />

    </div>
  );
};

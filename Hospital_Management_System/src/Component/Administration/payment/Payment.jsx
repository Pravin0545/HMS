import React, { useState } from "react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
} from "@mui/material";

export const Payment = ({ handlepayment }) => {
  const [paymentdata, setData] = useState([]);
  const paydata = JSON.parse(localStorage.getItem("userroom"));

  // console.log(data);
  return (
    <div>
      <div className="appointmentapplication">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Patient Name:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <FormControl fullWidth>
              <InputLabel>Patient Name</InputLabel>
              <Select
                value={paydata.paitentname}
                label="Paitent Name"
                onChange={(e) =>
                  setData({ ...paymentdata, pname: e.target.value })
                }
              >
                {paydata.map((item) => {
                  return (
                    <MenuItem value={item.paitentname}>
                      {item.paitentname}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={1.5}>
            <h3>Treatment:-</h3>
            <br />
          </Grid>
          <Grid item xs={2.5}>
            <FormControl fullWidth>
              <InputLabel>Treatment</InputLabel>
              <Select
                onChange={(e) =>
                  setData({ ...paymentdata, treat: e.target.value })
                }
                value={paydata.treat}
                label="Paitent Name"
              >
                {paydata.map((item) => {
                  return <MenuItem value={item.treat}>{item.treat}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>
          <br />
          <br />
          <br />
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Doctor Name:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <FormControl fullWidth>
              <InputLabel>Doctor Name</InputLabel>
              <Select
                value={paydata.drname}
                label="Paitent Name"
                onChange={(e) =>
                  setData({ ...paymentdata, drname: e.target.value })
                }
              >
                {paydata.map((item) => {
                  return <MenuItem value={item.drname}>{item.drname}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1.5}>
            <h3>Room NO:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <FormControl fullWidth>
              <InputLabel>Room No</InputLabel>
              <Select
                value={paydata.roomno}
                label="Room No"
                onChange={(e) =>
                  setData({ ...paymentdata, roomno: e.target.value })
                }
              >
                {paydata.map((item) => {
                  return <MenuItem value={item.roomno}>{item.roomno}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Total Bill:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Tool Amount"
              type="text"
              onChange={(e) =>
                setData({ ...paymentdata, tamount: e.target.value })
              }
              required
            ></TextField>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1.5}>
            <h3>Advance Payment:-</h3>
            <br />
            <br />
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Advance Amount"
              type="text"
              onChange={(e) =>
                setData({ ...paymentdata, aamount: e.target.value })
              }
              required
            ></TextField>
          </Grid>

          <Grid item xs={1}></Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Remaining Bill:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <TextField
              variant="outlined"
              label="Enter Remaining Amount"
              type="text"
              onChange={(e) =>
                setData({ ...paymentdata, ramount: e.target.value })
              }
              required
            ></TextField>
          </Grid>
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={6}></Grid>
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="success"
              onClick={() => handlepayment(paymentdata)}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="error">
              Reset
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

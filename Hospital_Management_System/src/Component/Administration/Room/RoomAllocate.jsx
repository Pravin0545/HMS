import React, { useEffect, useState } from "react";
import { Grid, TextField, Button } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { heartdata } from "../../Home/HearttData";
import { bonedata } from "../../Home/BoneData";
import { cancerdata } from "../../Home/CancerData";

export const RoomAllocate = ({ data }) => {
  const [user, setUser] = useState([]);
  const [tre, setTre] = useState([]);
  const treatment = ["Cancer", "Heart Transplant", "Bones and Joints"];
  const room = [101, 102, 103, 104];

  const [roomdetails, setRoomDetails] = useState({});

  useEffect(() => {
    setUser(data);
  }, []);

  const handleSubmit = () => {};
  const handletreatment = (e) => {
    if (e.target.value === "Cancer") {
      setTre(cancerdata);
    } else if (e.target.value === "Heart Transplant") {
      setTre(heartdata);
    } else {
      setTre(bonedata);
    }
    
  };

  console.log(heartdata);
  return (
    <div>
      <h1 className="roomal">RoomAllocate</h1>
      <div className="appointmentapplication">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Patient Name:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <Select
              value={user.name}
              label="Paitent Name"
              onChange={(e, value) =>
                setRoomDetails({ ...roomdetails, Paitentname: e.target.value })
              }
            >
              {user.map((item) => {
                return <MenuItem value={item.name}>{item.name}</MenuItem>;
              })}
            </Select>
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={1.5}>
            <h3>Treatment:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <Select
              label="Treatment"
              onChange={handletreatment}
              // onChange={(e, value) =>
              //   setRoomDetails({ ...roomdetails, Paitentname: e.target.value })
              // }
            >
              {treatment.map((item) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
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
            <Select value={user.doctorname} label="Doctor Name">
              {tre.map((item) => {
                return <MenuItem value={item.name}>{item.name}</MenuItem>;
              })}
            </Select>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1.5}>
            <h3>Room NO:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <Select value={user.roomno} label="Doctor Name">
              {room.map((item) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
          </Grid>
          <Grid item xs={1}></Grid>
          <br />
          <br />
          <br />
          <br />
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleSubmit()}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="error">
              Cancel
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { heartdata } from "../../Home/HearttData";
import { bonedata } from "../../Home/BoneData";
import { cancerdata } from "../../Home/CancerData";

export const RoomAllocate = ({ data, treatment, handleSubmitroom }) => {
  const [user, setUser] = useState([]);
  const [drname, setDrname] = useState([]);
  const [ptreatment, setPtreatment] = useState([]);

  const [roomdetails, setRoomDetails] = useState({});

  // console.log(roomdetails);
  useEffect(() => {
    setUser(data);
    setPtreatment(treatment);
  }, []);

  const handletreatment = (e) => {
    setRoomDetails({ ...roomdetails, treat: e.target.value });

    if (e.target.value === "Cancer") {
      setDrname(cancerdata);
    } else if (e.target.value === "Heart Transplant") {
      setDrname(heartdata);
    } else {
      setDrname(bonedata);
    }
  };

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
              onChange={(e) =>
                setRoomDetails({ ...roomdetails, paitentname: e.target.value })
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
            <Select label="Treatment" onChange={handletreatment}>
              {ptreatment.map((item) => {
                return (
                  <MenuItem value={item.treatment}>{item.treatment}</MenuItem>
                );
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
            <Select
              label="Doctor Name"
              value={drname.name}
              onChange={(e) =>
                setRoomDetails({ ...roomdetails, drname: e.target.value })
              }
            >
              {drname.map((item) => {
                return <MenuItem value={item.name}>{item.name}</MenuItem>;
              })}
            </Select>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={1.5}>
            <h3>Room NO:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <Select
              label="Doctor Name"
              value={ptreatment.roomno}
              onChange={(e) =>
                setRoomDetails({ ...roomdetails, roomno: e.target.value })
              }
            >
              {ptreatment.map((item) => {
                return <MenuItem value={item.roomno}>{item.roomno}</MenuItem>;
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
              onClick={() => handleSubmitroom(roomdetails)}
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

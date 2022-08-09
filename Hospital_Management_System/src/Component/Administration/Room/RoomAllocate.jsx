import React, { useEffect, useState } from "react";
import { Grid, Button, FormControl, InputLabel ,Alert} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { heartdata } from "../../Home/HearttData";
import { bonedata } from "../../Home/BoneData";
import { cancerdata } from "../../Home/CancerData";
import axios from "axios"

export const RoomAllocate = ({ treatment }) => {
  const [user, setUser] = useState([]);
  const [drname, setDrname] = useState([]);
  const [ptreatment, setPtreatment] = useState([]);
  const [roomdetails, setRoomDetails] = useState({});
  
  const [issuccess,setIssuccess]=useState(false)

  const getdata=async()=>{
    const result=await axios.get("http://localhost:4444/registration")
    setUser(result.data);
  }

  useEffect(() => {
    getdata()
    setPtreatment(treatment);
  }, []);

  const handlesubmit=async()=>{
    const url="http://localhost:4444/api/addroomdata"
    const payload=roomdetails
    
    const result=await axios.post(url,payload)
    if(result.status===200)
        {setIssuccess(true)
        }
  }

  

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
      <div className="appointmentapplication">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={1.5}>
            <h3>Patient Name:-</h3>
          </Grid>
          <Grid item xs={2.5}>
            <FormControl fullWidth>
              <InputLabel>Paitent Name</InputLabel>
              <Select
                value={user.name}
                label="Paitent Name"
                onChange={(e) =>
                  setRoomDetails({
                    ...roomdetails,
                    paitentname: e.target.value,
                  })
                }
              >
                {user.map((item) => {
                  return <MenuItem value={item.name}>{item.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={1}></Grid>

          <Grid item xs={1.5}>
            <h3>Treatment:-</h3>
          </Grid>
          <Grid item xs={2.5}>
          <FormControl fullWidth>
              <InputLabel>Treatment</InputLabel>
            <Select label="Treatment" onChange={handletreatment}>
              {ptreatment.map((item) => {
                return (
                  <MenuItem value={item.treatment}>{item.treatment}</MenuItem>
                );
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
              label="Room No"
              value={ptreatment.roomno}
              onChange={(e) =>
                setRoomDetails({ ...roomdetails, roomno: e.target.value })
              }
            >
              {ptreatment.map((item) => {
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
          <Grid item xs={5}></Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="success"
              onClick={handlesubmit}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="error">
              Cancel
            </Button>
          </Grid>
          <Grid item xs={12}>
                {issuccess && <Alert severity="success">Registration Successfully....!</Alert>}
            </Grid>
        </Grid>
      </div>
    </div>
  );
};

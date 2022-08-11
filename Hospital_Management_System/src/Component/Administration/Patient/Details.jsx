import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button,TextField,Alert } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Details = () => {
  const [userdata, setUserdata] = useState([]);
  const [update,setUpdate]=useState({})
  const [issuccess, setIssuccess] = useState(false);


  const getdata = async () => {
    const result = await axios.get("http://localhost:4444/registration");
    setUserdata(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  const handledelete = async(id) => {
    // const result=await fetch(`http://localhost:4444/api/deleteregistration/${id}`,{
    //   method:"Delete"
    // })
    // result=await result.json()
    // if(result){
    //   alert("record is deleted")
    // }
    const result=await axios.delete(`http://localhost:4444/api/deleteregistration/${id}`)
    result=await result.json()
    if(result){
      getdata();
    }
  };

  const handlesubmit=async()=>{
    const url = `http://localhost:4444/api/updateregistration/${update.aadhar}`;
    const payload = update;

    const result = await axios.put(url, payload);
    if (result.status === 200) {
      setIssuccess(true);
    }
   
  }

  return (
    <div>
      
      <TextField label="Enter Name" onChange={(e) => setUpdate({ ...update, name: e.target.value })}></TextField>
      <TextField label="Enter Aadhar" onChange={(e) => setUpdate({ ...update, aadhar: e.target.value })}></TextField>
      <TextField type="date" onChange={(e) => setUpdate({ ...update, date: e.target.value })}></TextField>
      <TextField type="text" label="Enter Email" onChange={(e) => setUpdate({ ...update, email: e.target.value })}></TextField>
      <TextField type="number" label="Enter Number" onChange={(e) => setUpdate({ ...update, number: e.target.value })}></TextField>
      <TextField type="date" onChange={(e) => setUpdate({ ...update, dob: e.target.value })}></TextField>
      <TextField type="text" label="Enter Address" onChange={(e) => setUpdate({ ...update, address: e.target.value })}></TextField>
      <Button variant="contained" onClick={()=>handlesubmit()}>SUBMIT</Button>
      {issuccess && (
              <Alert severity="success">Registration Successfully....!</Alert>
            )}
      
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Mobile</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">DOB</TableCell>
                <TableCell align="center">Address</TableCell>
                <TableCell align="center">Aadhar</TableCell>
                <TableCell align="center">Date Of Appointment</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userdata.map((item, index) => (
                <TableRow key={item._id}>
                  <TableCell align="center">{index + 101}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.number}</TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">{item.dob}</TableCell>
                  <TableCell align="center">{item.address}</TableCell>
                  <TableCell align="center">{item.aadhar}</TableCell>
                  <TableCell align="center">{item.date}</TableCell>
                  <Button onClick={() => handledelete(item._id)}>DELETE</Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

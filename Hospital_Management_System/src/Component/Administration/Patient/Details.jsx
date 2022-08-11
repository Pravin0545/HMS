import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Details = () => {
  const [userdata, setUserdata] = useState([]);

  const getdata = async () => {
    const result = await axios.get("http://localhost:4444/registration");
    setUserdata(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  const handledelete = (index) => {
    const filter = userdata.filter((elem, ind) => ind !== index);
    setUserdata(filter);
  };

  return (
    <div>
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
                <TableRow>
                  <TableCell align="center">{index + 101}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.number}</TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">{item.dob}</TableCell>
                  <TableCell align="center">{item.address}</TableCell>
                  <TableCell align="center">{item.aadhar}</TableCell>
                  <TableCell align="center">{item.date}</TableCell>
                  <Button onClick={() => handledelete(index)}>DELETE</Button>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

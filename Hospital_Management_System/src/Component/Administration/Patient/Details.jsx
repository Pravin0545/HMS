import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Details = () => {
  const result = JSON.parse(localStorage.getItem("userdata"));
  const result1 = JSON.parse(localStorage.getItem("userreg"));

  const result2 = [result1];
  console.log(result);

  return (
    <div>
      <div >
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
              </TableRow>
            </TableHead>
            <TableBody>
              {result.map((item, index) => (
                <TableRow>
                  <TableCell align="center">{index + 101}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.number}</TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">{item.dob}</TableCell>
                  <TableCell align="center">{item.address}</TableCell>
                  <TableCell align="center">{item.aadhar}</TableCell>
                  <TableCell align="center">{item.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableBody>
              {result2.map((item, index) => (
                <TableRow>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{item.name}</TableCell>
                  <TableCell align="center">{item.number}</TableCell>
                  <TableCell align="center">{item.email}</TableCell>
                  <TableCell align="center">{item.dob}</TableCell>
                  <TableCell align="center">{item.address}</TableCell>
                  <TableCell align="center">{item.aadhar}</TableCell>
                  <TableCell align="center">{item.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

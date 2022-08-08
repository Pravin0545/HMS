import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export const Paymentdetails = () => {
  const result = JSON.parse(localStorage.getItem("userpayment"));

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">SR.NO</TableCell>
              <TableCell align="center">Patient Name</TableCell>
              <TableCell align="center">Treatment</TableCell>
              <TableCell align="center">Doctor Name</TableCell>
              <TableCell align="center">Room No</TableCell>
              <TableCell align="center">Total Bill</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {result.map((item, index) => (
              <TableRow>
                <TableCell align="center">{index + 101}</TableCell>
                <TableCell align="center">{item.pname}</TableCell>
                <TableCell align="center">{item.treat}</TableCell>
                <TableCell align="center">{item.drname}</TableCell>
                <TableCell align="center">{item.roomno}</TableCell>
                <TableCell align="center">{item.tamount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

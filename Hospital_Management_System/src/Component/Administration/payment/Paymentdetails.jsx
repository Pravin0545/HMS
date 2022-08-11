import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

export const Paymentdetails = () => {
  const [paymentdata, setPaymentdata] = useState([]);

  const getdata = async () => {
    const result = await axios.get("http://localhost:4444/paymentdata");
    setPaymentdata(result.data);
    console.log(result.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  const handledelete = (index) => {
    const filter = paymentdata.filter((elem, ind) => ind !== index);
    setPaymentdata(filter);
  };

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
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentdata.map((item, index) => (
              <TableRow>
                <TableCell align="center">{index + 101}</TableCell>
                <TableCell align="center">{item.pname}</TableCell>
                <TableCell align="center">{item.treat}</TableCell>
                <TableCell align="center">{item.drname}</TableCell>
                <TableCell align="center">{item.roomno}</TableCell>
                <TableCell align="center">{item.tamount}</TableCell>
                <Button onClick={() => handledelete(index)}>DELETE</Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

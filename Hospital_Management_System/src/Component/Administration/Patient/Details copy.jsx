import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, TextField, Alert, TableFooter } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

export const Details = () => {
  const [userdata, setUserdata] = useState([]);
  const [userdatacopy, setUserdatacopy] = useState([]);
  const [update, setUpdate] = useState({});
  const [issuccess, setIssuccess] = useState(false);
  const [search, setSearch] = useState("");
  const [edit, setEdit] = useState({});
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  console.log(edit);

  const getdata = async () => {
    const result = await axios.get("http://localhost:4444/registration");
    setUserdata(result.data);
    setUserdatacopy(result.data);
  };

  useEffect(() => {
    getdata();
  }, []);

  const handledelete = async (aadhar) => {
    const result = await axios.delete(
      `http://localhost:4444/api/deleteregistration/${aadhar}`
    );
    result = await result.json();
    if (result.status === 200) {
      // alert("deleted");
      getdata();
    }
  };

  const handlesubmit = async () => {
    const url = `http://localhost:4444/api/updateregistration/${update.aadhar}`;
    const payload = update;

    const result = await axios.put(url, payload);
    if (result.status === 200) {
      setIssuccess(true);
    }
  };

  const handleedit = (item) => {
    setUpdate(item);
    console.log(item);
  };

  useEffect(() => {
    const filtered = userdatacopy.filter((item) =>
      item.name.includes(search.toLowerCase())
    );
    setUserdata(filtered);
  }, [search]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <TextField
        value={update.name}
        onChange={(e) => setUpdate({ ...update, name: e.target.value })}
      ></TextField>
      <TextField
        value={update.aadhar}
        onChange={(e) => setUpdate({ ...update, aadhar: e.target.value })}
      ></TextField>
      <TextField
        value={update.date}
        type="date"
        onChange={(e) => setUpdate({ ...update, date: e.target.value })}
      ></TextField>

      <Button variant="contained" onClick={() => handlesubmit()}>
        SUBMIT
      </Button>
      {issuccess && (
        <Alert severity="success">Registration Successfully....!</Alert>
      )}
      <br />
      <br />
      <TextField
        className="searchfield"
        label="Search"
        variant="filled"
        onChange={(e) => setSearch(e.target.value)}
      ></TextField>

      <div>
        <TableContainer component={Paper} className="detailtable">
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
              {userdata
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <TableRow key={item}>
                    <TableCell align="center">{index + 101}</TableCell>
                    <TableCell align="center">{item.name}</TableCell>
                    <TableCell align="center">{item.number}</TableCell>
                    <TableCell align="center">{item.email}</TableCell>
                    <TableCell align="center">{item.dob}</TableCell>
                    <TableCell align="center">{item.address}</TableCell>
                    <TableCell align="center">{item.aadhar}</TableCell>
                    <TableCell align="center">{item.date}</TableCell>
                    <TableCell align="center">
                      <Button onClick={() => handledelete(item.aadhar)}>
                        DELETE
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button onClick={() => handleedit(item)}>Edit</Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={userdata.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

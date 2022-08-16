import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Alert } from "@mui/material";

export const PatientEdit = ({ edit }) => {
  const [update, setUpdate] = useState({ edit });
  //   const [newdetails, setNewdetails] = useState();
  const [issuccess, setIssuccess] = useState(false);

  const handlesubmit = async () => {
    const url = `http://localhost:4444/api/updateregistration/${update.aadhar}`;
    const payload = update;

    const result = await axios.put(url, payload);
    if (result.status === 200) {
      setIssuccess(true);
    }
  };

  console.log(update);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdate({ ...update, [name]: value });
  };

  return (
    <div>
      <h1>Patient Edit</h1>

      <TextField
        value={update.name}
        // label="Enter Name"
        onChange={handleInputChange}
      ></TextField>
      <TextField
        value={update.aadhar}
        // label="Enter Aadhar"
        onChange={handleInputChange}
      ></TextField>
      <TextField
        value={update.date}
        type="date"
        onChange={handleInputChange}
      ></TextField>
      <Button variant="contained" onClick={() => handlesubmit()}>
        SUBMIT
      </Button>
      {issuccess && (
        <Alert severity="success">Registration Successfully....!</Alert>
      )}
    </div>
  );
};

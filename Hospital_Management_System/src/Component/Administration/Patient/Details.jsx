// import React, { useEffect, useState } from "react";
// import { Card, CardContent, Grid } from "@mui/material";

export const Details = () => {
  const result = JSON.parse(localStorage.getItem("userdata"));
  console.log(result);
  console.log(result);

  return (
    <div>
      <h2 className="admin">Details</h2>
      <div className="detailst">
        <table className="table">
          <tr>
            <th>Name</th>
            <th>Mobile NO</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Aadhar No</th>
            <th>Date Of Appointment</th>
          </tr>
          {result.map((item) => {
            return (
              <tr>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.email}</td>
                <td>{item.dob}</td>
                <td>{item.address}</td>
                <td>{item.aadhar}</td>
                <td>{item.date}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

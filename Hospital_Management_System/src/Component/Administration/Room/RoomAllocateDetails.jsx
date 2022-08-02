import React from "react";
import { Card, CardContent, Grid } from "@mui/material";

export const RoomAllocateDetails = () => {
  const result = JSON.parse(localStorage.getItem("roomdata"));
  return (
    <div>
      <h1 className="roomal">RoomAllocateDetails</h1>
      <table className="table">
        <tr>
          <th>Name</th>
          <th>Treatment</th>
          <th>Doctor</th>
          <th>Room No</th>
         
        </tr>
        {result.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.treatment}</td>
              <td>{item.doctorname}</td>
              <td>{item.roomno}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

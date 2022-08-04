import React from "react";
import { Card, CardContent, Grid } from "@mui/material";

export const RoomAllocateDetails = () => {
  const result = JSON.parse(localStorage.getItem("userroom"));
  return (
    <div>
      {/* <h1 className="roomal">RoomAllocateDetails</h1> */}
      <table className="table">
        <tr>
          <th>SR.No</th>
          <th>Name</th>
          <th>Treatment</th>
          <th>Doctor</th>
          <th>Room No</th>
        </tr>
        {result.map((item, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{item.paitentname}</td>
              <td>{item.treat}</td>
              <td>{item.drname}</td>
              <td>{item.roomno}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

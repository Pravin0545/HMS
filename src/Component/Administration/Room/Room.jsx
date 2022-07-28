import React from "react";
import { Link } from "react-router-dom";

export const Room = () => {
  return (
    <div>
      <h1>Room</h1>
      <Link to="/administration/room/roomallocatiom">Room Allocatiom</Link>
      <Link to="/administration/room/roomallocatiomdetails">
        Room Allocatiom Details
      </Link>
    </div>
  );
};

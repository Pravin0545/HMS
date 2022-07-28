import React from "react";
import { Link } from "react-router-dom";

export const Administration = () => {
  return (
    <div>
      <div>
        <h1>Administration</h1>

        <Link to="/administration/patientdetails">PatientDetails</Link>
        <Link to="/administration/room">Room</Link>
        <Link to="/administration/payment">Payment</Link>
      </div>
    </div>
  );
};

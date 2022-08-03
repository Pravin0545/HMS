import React from "react";
import { Link } from "react-router-dom";

export const Administration = () => {
  return (
    <div className="administration">
      <h1 className="admin">Administration</h1>

      <Link to="/administration/patientdetails">PatientDetails</Link>
      <Link to="/administration/room">Hospitalization</Link>
      <Link to="/administration/payment">Payment</Link>
    </div>
  );
};

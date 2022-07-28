import React from "react";
import { Link } from "react-router-dom";

export const PatientsDetails = () => {
  return (
    <div>
      <h1>PatientsDetails</h1>

      <Link to="/administration/patientdetails/newappointment">
        New Appointment
      </Link>
      <Link to="/administration/patientdetails/todaysappointment">
        Today's Appointment
      </Link>
      <Link to="/administration/patientdetails/details">Details</Link>
    </div>
  );
};

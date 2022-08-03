import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { Payment } from "./payment/Payment";
import { PatientsDetails } from "./Patient/PatientsDetails";
import { Room } from "./Room/Room";
export const Administration = () => {
  const [val, setVal] = useState("PatientDetails");

  const [data, setData] = useState([]);

  localStorage.setItem("userdata", JSON.stringify(data));

  const handlesubmit = (user) => {
    setData([...data, user]);
  };
  return (
    <div className="administration">
      <h1 className="admin">Administration</h1>

      {/* 
      <Link to="/administration/patientdetails">PatientDetails</Link>
      <Link to="/administration/room">Hospitalization</Link>
      <Link to="/administration/payment">Payment</Link> */}
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="PatientDetails" label="PatientDetails" />
        <Tab value="hospitalization" label="Hospitalization" />
        <Tab value="payment" label="Payment" />
      </Tabs>

      {val === "PatientDetails" && (
        <PatientsDetails handlesubmit={handlesubmit} />
      )}
      {val === "hospitalization" && <Room data={data} />}
      {val === "payment" && <Payment data={data} />}
    </div>
  );
};

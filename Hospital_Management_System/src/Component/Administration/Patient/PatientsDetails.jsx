import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";
import { NewAppointment } from "./NewAppointment";
import { Details } from "./Details";

export const PatientsDetails = () => {
  const [pdata, setPdata] = useState();
  localStorage.setItem("userdata", JSON.stringify(pdata));

  const [val, setVal] = useState("newappointment");
  return (
    <div>
      <h1 className="admin">PatientsDetails</h1>
      <div>
        <Tabs value={val} onChange={(e, value) => setVal(value)}>
          <Tab value="newappointment" label="New Appointment" />
          <Tab value="details" label="Details" />
        </Tabs>

        {val === "newappointment" && <NewAppointment setPdata={setPdata} />}
        {val === "details" && <Details />}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { NewAppointment } from "./NewAppointment";
import { Details } from "./Details";

export const PatientsDetails = ({ handlesubmit }) => {
  const [val, setVal] = useState("newappointment");
  return (
    <div>
      <div>
        <Tabs value={val} onChange={(e, value) => setVal(value)}>
          <Tab value="newappointment" label="Registration" />
          <Tab value="details" label="Details" />
        </Tabs>

        {val === "newappointment" && (
          <NewAppointment handlesubmit={handlesubmit} />
        )}
        {val === "details" && <Details />}
      </div>
    </div>
  );
};

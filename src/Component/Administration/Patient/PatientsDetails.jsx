import React from "react";
import { NewAppointment } from "./Patient/NewAppointment";
import { TodaysAppointment } from "./Patient/TodaysAppointment";
import { Details } from "./Patient/Details";

export const PatientsDetails = () => {
  return (
    <div>
      PatientsDetails
      <NewAppointment />
      <TodaysAppointment />
      <Details />
    </div>
  );
};

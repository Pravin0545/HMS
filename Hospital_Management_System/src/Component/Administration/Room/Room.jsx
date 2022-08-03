import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { Tabs, Tab } from "@mui/material";

import { RoomAllocate } from "./RoomAllocate";
import { RoomAllocateDetails } from "./RoomAllocateDetails";

export const Room = ({ data }) => {
  const [val, setVal] = useState("roomallocation");

  return (
    <div>
      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="roomallocation" label="Room Allocation" />
        <Tab value="roomallocatiomdetails" label="Room Allocation Details" />
      </Tabs>

      {val === "roomallocation" && <RoomAllocate data={data} />}
      {val === "roomallocatiomdetails" && <RoomAllocateDetails data={data} />}
    </div>
  );
};

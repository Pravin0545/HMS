import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Tabs,Tab } from "@mui/material"

import { RoomAllocate } from "./RoomAllocate";
import { RoomAllocateDetails } from "./RoomAllocateDetails";

export const Room = () => {
  
  const [val,setVal]=useState("roomallocation")
  return (
    <div>
      <h1 className="admin">Room</h1>
      
      <Tabs  value={val} onChange={(e,value)=>setVal(value)}>
          <Tab value="roomallocation" label="Room Allocation"/>
          <Tab value="roomallocatiomdetails" label="Room Allocatiom Details"/>
        </Tabs>
        
        {val==="roomallocation" && <RoomAllocate/>}
            {val==="roomallocatiomdetails" && <RoomAllocateDetails/>}
    </div>
  );
};

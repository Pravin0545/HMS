import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { PatientsDetails } from "./Patient/PatientsDetails";
import { Room } from "./Room/Room";
import { PaymentParent } from "./payment/PaymentParent";

export const Administration = () => {
  const [val, setVal] = useState("PatientDetails");
  const [data, setData] = useState([]);
  const [roomdata, setRoomData] = useState([]);
  const [paydetails,setPaydetails]=useState([])

  localStorage.setItem("userdata", JSON.stringify(data));
  localStorage.setItem("userroom", JSON.stringify(roomdata));
  localStorage.setItem("userpayment", JSON.stringify(paydetails));

  // console.log(roomdata);

  const treatment = [
    { treatment: "Cancer", roomno: "101" },
    { treatment: "Heart Transplant", roomno: "102" },
    { treatment: "Bones and Joints", roomno: "103" },
  ];

  const handleSubmitroom = (roomdetails) => {
    setRoomData([...roomdata, roomdetails]);
  };

  const handlesubmit = (user) => {
    setData([...data, user]);
    
  };

  const handlepayment=(paymentdata)=>{
    setPaydetails([...paydetails,paymentdata])
  }
console.log(paydetails)
  return (
    <div className="administration">
      <h1 className="admin">Administration</h1>

      <Tabs value={val} onChange={(e, value) => setVal(value)}>
        <Tab value="PatientDetails" label="PatientDetails" />
        <Tab value="hospitalization" label="Hospitalization" />
        <Tab value="payment" label="Payment" />
      </Tabs>

      {val === "PatientDetails" && (
        <PatientsDetails handlesubmit={handlesubmit} />
      )}
      {val === "hospitalization" && (
        <Room
          data={data}
          treatment={treatment}
          handleSubmitroom={handleSubmitroom}
        />
      )}
      {val === "payment" && <PaymentParent handlepayment={handlepayment} data={data} />}
    </div>
  );
};

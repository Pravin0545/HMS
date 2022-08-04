import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Administration } from "./Component/Administration/Administration";
import { NewAppointment } from "./Component/Administration/Patient/NewAppointment";
import { Details } from "./Component/Administration/Patient/Details";
import { PatientsDetails } from "./Component/Administration/Patient/PatientsDetails";
import { Room } from "./Component/Administration/Room/Room";
import "./Component/Common.css";
import { Home } from "./Component/Home/Home";
import { RoomAllocate } from "./Component/Administration/Room/RoomAllocate";
import { RoomAllocateDetails } from "./Component/Administration/Room/RoomAllocateDetails";
import { Aboutus } from "./Component/Home/Aboutus";
import { Login } from "./Component/Home/Login";
import { Contactus } from "./Component/Home/Contactus";
import { Navbar } from "./Component/Navbar";
import { HeartT } from "./Component/Home/HeartT";
import { Cancer } from "./Component/Home/Cancer";
import { Bone } from "./Component/Home/Bone";
import { PaymentParent } from "./Component/Administration/payment/PaymentParent";
import { Registration } from "./Component/Home/Registration";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/heartt" element={<HeartT />} />
          <Route path="/heartt/registration" element={<Registration />} />
          <Route path="/cancer" element={<Cancer />} />
          <Route path="/cancer/registration" element={<Registration />} />
          <Route path="/bone" element={<Bone />} />
          <Route path="/bone/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login/administration" element={<Administration />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route
            path="/administration/patientdetails"
            element={<PatientsDetails />}
          />
          <Route
            path="/administration/patientdetails/newappointment"
            element={<NewAppointment />}
          />
          <Route
            path="/administration/patientdetails/details"
            element={<Details />}
          />
          <Route path="/administration/room" element={<Room />} />
          <Route
            path="/administration/room/roomallocatiom"
            element={<RoomAllocate />}
          />
          <Route
            path="/administration/room/roomallocatiomdetails"
            element={<RoomAllocateDetails />}
          />
          <Route
            path="/administration/paymentparent"
            element={<PaymentParent />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

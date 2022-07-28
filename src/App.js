// import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Administration } from "./Component/Administration/Administration";
import { NewAppointment } from "./Component/Administration/Patient/NewAppointment";
import { TodaysAppointment } from "./Component/Administration/Patient/TodaysAppointment";
import { Details } from "./Component/Administration/Patient/Details";
import { PatientsDetails } from "./Component/Administration/Patient/PatientsDetails";
import { Payment } from "./Component/Administration/payment/Payment";
import { Room } from "./Component/Administration/Room/Room";

// import "./App.css";
import { Home } from "./Component/Home/Home";
import { RoomAllocate } from "./Component/Administration/Room/RoomAllocate";
import { RoomAllocateDetails } from "./Component/Administration/Room/RoomAllocateDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/administration" element={<Administration />} />
          <Route
            path="/administration/patientdetails"
            element={<PatientsDetails />}
          />
          <Route
            path="/administration/patientdetails/newappointment"
            element={<NewAppointment />}
          />
          <Route
            path="/administration/patientdetails/todaysappointment"
            element={<TodaysAppointment />}
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
          <Route path="/administration/room/roomallocatiom" element={<RoomAllocate />} />
          <Route path="/administration/room/roomallocatiomdetails" element={<RoomAllocateDetails />} />
          <Route path="/administration/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

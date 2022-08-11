const express = require("express");
const cors = require("cors");
const app = express();
const ConnectDB = require("./ConnectDB");
const RegistrationModel = require("./Model/RegistrationModel");
const RoomModel = require("./Model/RoomModel");
const PaymentModel = require("./Model/PaymentModel");

app.use(express.json());
app.use(cors());

app.get("/registration", async (req, res) => {
  try {
    ConnectDB();
    const result = await RegistrationModel.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/addregistration", (req, res) => {
  try {
    ConnectDB();
    const newRegistration = new RegistrationModel(req.body);
    newRegistration.save();
    res.send("New Register added successfully!!");
  } catch (err) {
    console.log(err);
  }
});

app.put("/api/updateregistration/:aadhar", async (req, res) => {
  try {
    ConnectDB();
    const currentRegistration = await RegistrationModel.findOneAndUpdate({
      aadhar: req.params.aadhar},req.body);
    const newRegistration = {
      name: req.body.name,
      number: req.body.number,
      email: req.body.email,
      dob: req.body.dob,
      aadhar: req.body.aadhar,
      date: req.body.date,
      address: req.body.address,
    };
    currentRegistration.overwrite(newRegistration);
    currentRegistration.save();
    res.send("Update Successfully");
  } catch (err) {
    console.log(err);
  }
});


app.delete("/api/deleteregistration/:aadhar", async (req, res) => {
  try {
    ConnectDB();
    const currentRegistration = await RegistrationModel.findOneAndDelete({
      aadhar: req.params.aadhar},req);
    currentRegistration.save();
    res.send("Deleted Successfully");
  } catch (err) {
    console.log(err);
  }
});

app.get("/roomdata", async (req, res) => {
  try {
    ConnectDB();
    const result = await RoomModel.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/addroomdata", (req, res) => {
  try {
    ConnectDB();
    const newroomdata = new RoomModel(req.body);
    newroomdata.save();
    res.send("New Roomdata added successfully!!");
  } catch (err) {
    console.log(err);
  }
});

app.get("/paymentdata", async (req, res) => {
  try {
    ConnectDB();
    const result = await PaymentModel.find({});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/addpaymentdata", (req, res) => {
  try {
    ConnectDB();
    const newpaymentdata = new PaymentModel(req.body);
    newpaymentdata.save();
    res.send("New Paymentdata added successfully!!");
  } catch (err) {
    console.log(err);
  }
});

app.listen(4444, () => {
  console.log(`Connected to server : 4444`);
});

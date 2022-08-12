const mongoose = require("mongoose");

const RegistrationModel = mongoose.model("registrations", {
  name: { type: String, lowercase: true },
  number: { type: Number },
  email: { type: String },
  dob: { type: String },
  aadhar: { type: Number },
  date: { type: String },
  address: { type: String },
});
module.exports = RegistrationModel;

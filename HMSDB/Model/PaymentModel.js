const mongoose = require("mongoose");

const PaymentModel = mongoose.model("paymentdatas", {
  pname: { type: String },
  treat: { type: String },
  drname: { type: String },
  roomno: { type: Number },
  tamount: { type: Number },
  aamount: { type: Number },
  ramount: { type: Number },
});
module.exports = PaymentModel;

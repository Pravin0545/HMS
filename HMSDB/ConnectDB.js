const mongoose = required("mongoose");

const ConnectDB = () => {
  const db = "mongodb://localhost/empdb";

  mongoose
    .connect(db)
    .then(() => console.log(`Connected to ${db}`))
    .catch((err) => console.log(err));
};
module.exports = ConnectDB;


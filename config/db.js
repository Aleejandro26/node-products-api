const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const DBConnect = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("Connected to the database"))
      .catch((err) => console.error("Error connecting", err));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = DBConnect;

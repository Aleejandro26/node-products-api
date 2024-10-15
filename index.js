const express = require("express");
const DBConnect = require("./config/db");

const app = express();

DBConnect();

app.use(express.json());

app.use("/api/products", require("./routes/product"));

app.listen(4000, () => {
  console.log("Server is running on port: http://localhost:4000");
});

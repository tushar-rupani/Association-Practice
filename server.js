const express = require("express");
const associationRouter = require("./routes/swiggy.routes");
const cors = require("cors");
const app = express();
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", associationRouter);
app.listen(process.env.PORT, (req, res) => {
  console.log(`App is Running On Port ${process.env.PORT}`);
});

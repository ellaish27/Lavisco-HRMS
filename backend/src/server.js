require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = require("./app");

const PORT = process.env.PORT || 5000;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Lavisco HRMS backend running at http://localhost:${PORT}`);
});

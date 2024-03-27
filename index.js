require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello Backend API");
});

app.get("/twitter", (req, res) => {
  res.send("g.nishi9525");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});

app.listen(port, () => {
  console.log(`Hello Backend , you port is ${port}`);
});

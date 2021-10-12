const express = require("express");

const app = express();
app.get("/", function (req, res) {
  res.send("Welcome to the first output");
});
app.get("/about", function (req, res) {
  res.send("Welcome to the about page");
});
app.get("/home", function (req, res) {
  res.send("Welcome to the home page");
});

app.get("/htmlfile", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.listen(9000, function (req, res) {
  console.log("server is running successfully");
});

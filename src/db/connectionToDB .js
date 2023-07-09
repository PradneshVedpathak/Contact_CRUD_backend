const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/contacts")
  .then(() => {
    console.log("Connection successful");
  })
  .catch(() => {
    console.log("No connection");
  });

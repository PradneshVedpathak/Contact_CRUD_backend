const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vedpathakpradnesh:Vedpathak9614@contacts.fvj3brg.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection successful");
  })
  .catch(() => {
    console.log("No connection");
  });

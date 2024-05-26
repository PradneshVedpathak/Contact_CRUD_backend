const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vedpathakpradnesh:d31HWeWdlPVdX8dy@contacts.fvj3brg.mongodb.net/?retryWrites=true&w=majority&appName=Contacts"
  )
  .then(() => {
    console.log("Connection successful");
  })
  .catch(() => {
    console.log("No connection");
  });

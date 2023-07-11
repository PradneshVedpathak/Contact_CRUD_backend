const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://pradneshvedpathak:wcOLifhfSth4tM2t@cluster0.apyjfws.mongodb.net/ContactCRUD?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connection successful");
  })
  .catch(() => {
    console.log("No connection");
  });

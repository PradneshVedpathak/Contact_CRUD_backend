const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  phoneNumber: {
    type: Number,
    minlength: 10,
    maxlength: 10,
    unique: true,
  },
});

const contactsModel = new mongoose.model("contacts", contactSchema);
module.exports = contactsModel;

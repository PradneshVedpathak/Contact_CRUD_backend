const express = require("express");
const router = new express.Router();
const contactsModel = require("../models/contactSchema");

router.get("/", async (req, res) => {
  try {
    res.send(res.status(200).json({ msg: "Working.............." }));
  } catch (e) {
    return res.status(401).json({ error: "Something Went Wrong!!!" });
  }
});

//-----------------------------------------------------------------------------
//                          Get All Contacts
//-----------------------------------------------------------------------------
router.get("/allContacts", async (req, res) => {
  try {
    const getAllContacts = await contactsModel.find({});
    res.send(res.status(200).json(getAllContacts));
  } catch (e) {
    return res.status(401).json({ error: "Something Went Wrong!!!" });
  }
});

//-----------------------------------------------------------------------------
//                          Get Specific Contact
//-----------------------------------------------------------------------------
router.get("/contact/:id", async (req, res) => {
  try {
    const getSingleContact = await contactsModel.findById({
      _id: req.params.id,
    });
    res.send(res.status(200).json(getSingleContact));
  } catch (error) {
    res.status(401).json({ error: "Something Went Wrong!!!" });
  }
});

//-----------------------------------------------------------------------------
//                          Add Contact
//-----------------------------------------------------------------------------
router.post("/addContact", async (req, res) => {
  const phoneNumberExist = await contactsModel.findOne({
    phoneNumber: req.body.phoneNumber,
  });

  if (phoneNumberExist) {
    return res.status(401).json({ msg: "Phone Number is already exists." });
  }

  try {
    const addContact = new contactsModel(req.body);
    addContact
      .save()
      .send(
        res
          .status(200)
          .json({ msg: "Contact Added successfully!!", addContact })
      );
  } catch (error) {
    return res.status(401).json({ error: "Something Went Wrong!!!" });
  }
});

//-----------------------------------------------------------------------------
//                          Update Contact
//-----------------------------------------------------------------------------
router.patch("/updateContact/:id", async (req, res) => {
  try {
    // if (phoneNumber.length > 10 || phoneNumber.length < 10) {
    //   res.send(res.json({ msg: "Please enter a valid phone number!!" }));
    // } else {
    const updateContact = await contactsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.send(
      res.status(200).json({
        msg: "Conatct has been updated successfully!!",
        updateContact,
      })
    );
    // }
  } catch (error) {
    res.status(500).json({ error: "Something Went Wrong!!" });
  }
});

//-----------------------------------------------------------------------------
//                          Delete Contact
//-----------------------------------------------------------------------------
router.delete("/removeContact/:id", async (req, res) => {
  try {
    const removeContact = await contactsModel.findByIdAndDelete(req.params.id);
    if (removeContact) {
      res.send(
        res.status(200).json({ msg: "Conatct has been deleted successfully!!" })
      );
    }
  } catch (e) {
    res.status(401).json({ error: "Something Went Wrong!!" });
  }
});

module.exports = router;

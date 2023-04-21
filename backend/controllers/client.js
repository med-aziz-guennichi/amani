const express = require("express");
const path = require("path");
const Client = require("../models/client");
const router = express.Router();
const { upload } = require("../multer");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/ErrorHandler");

router.post("/create-client", upload.single("file"), async (req, res, next) => {
  try {
    const {
      nom,
      prenom,
      email,
      adresse,
      cin,
      numeroTel,
      dateNaissance,
      motDePasse,
      NomRepresentant,
      DomaineDactivite,
      nomEntreprise,
      codePostale,
    } = req.body;
    const clientEmail = await Client.findOne({ email });
    if (clientEmail) {
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting file" });
        }
      });
      return next(new ErrorHandler("User already exists", 400));
    }
    const filename = req.file.filename;
    const fileUrl = path.join(filename);

    const client = new Client({
      nom: nom,
      prenom: prenom,
      email: email,
      adresse: adresse,
      cin: cin,
      numeroTel: numeroTel,
      dateNaissance: dateNaissance,
      motDePasse: motDePasse,
      NomRepresentant: NomRepresentant,
      avatar: fileUrl,
      DomaineDactivite: DomaineDactivite,
      nomEntreprise: nomEntreprise,
      codePostale: codePostale,
    });
    const savedClient = await client.save();
    res.status(201).json(savedClient);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

router.get(
  "/getAllClients",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const clients = await Client.find();
      res.json(clients);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;

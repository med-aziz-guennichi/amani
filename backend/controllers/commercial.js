const express = require("express");
const path = require("path");
const Commercial = require("../models/commercial");
const router = express.Router();
const { upload } = require("../multer");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/ErrorHandler");

router.post(
  "/create-commercial",
  upload.single("file"),
  async (req, res, next) => {
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
        matricule,
        nb_leads_affectees,
      } = req.body;
      const commercialEmail = await Commercial.findOne({ email });
      if (commercialEmail) {
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

      const commercial = new Commercial({
        nom: nom,
        prenom: prenom,
        email: email,
        adresse: adresse,
        cin: cin,
        numeroTel: numeroTel,
        dateNaissance: dateNaissance,
        motDePasse: motDePasse,
        avatar: fileUrl,
        matricule: matricule,
        nb_leads_affectees: nb_leads_affectees,
      });
      const commercialSave = await commercial.save();
      res.status(201).json(commercialSave);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

router.get(
  "/getAllCommercial",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const commercials = await Commercial.find();
      res.json(commercials);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;

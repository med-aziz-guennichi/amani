const express = require("express");
const path = require("path");
const Admin = require("../models/admin");
const router = express.Router();
const { upload } = require("../multer");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/ErrorHandler");

router.post("/create-admin", upload.single("file"), async (req, res, next) => {
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
    } = req.body;
    const adminEmail = await Admin.findOne({ email });
    if (adminEmail) {
      //   const filename = req.file.filename;
      //   const filePath = `uploads/${filename}`;
      //   fs.unlink(filePath, (err) => {
      //     if (err) {
      //       console.log(err);
      //       res.status(500).json({ message: "Error deleting file" });
      //     }
      //   });
      return next(new ErrorHandler("User already exists", 400));
    }
    // const filename = req.file.filename;
    // const fileUrl = path.join(filename);

    const admin = new Admin({
      nom: nom,
      prenom: prenom,
      email: email,
      adresse: adresse,
      cin: cin,
      numeroTel: numeroTel,
      dateNaissance: dateNaissance,
      motDePasse: motDePasse,
      matricule: matricule,
      //   avatar: fileUrl,
    });
    const savedAdmin = await admin.save();
    res.status(201).json(savedAdmin);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

// login-admin

router.post(
  "/login-admin",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, motDePasse } = req.body;

      if (!email || !motDePasse) {
        return next(new ErrorHandler("Please provide the all fields", 400));
      }
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return next(new ErrorHandler("Admin is not exist", 400));
      }
      const isPasswordValid = await admin.comparePassword(motDePasse);
      if (!isPasswordValid) {
        return next(new ErrorHandler("Invalid Password", 400));
      }
      sendToken(admin, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// update profile

router.put(
  "/update_profile/:id",
  catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;
    try {
      const updateProfile = await Admin.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );
      sendToken(updateProfile, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

module.exports = router;

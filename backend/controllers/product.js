const Product = require("../models/product");
const express = require("express");
const ErrorHandler = require("../utils/ErrorHandler");
const { upload } = require("../multer");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.post(
  "/create_product",
  upload.single("file"),
  async (req, res, next) => {
    try {
      const { title, type, description, prix } = req.body;

      const filename = req.file.filename;
      const fileUrl = path.join(filename);

      const product = new Product({
        title: title,
        type: type,
        description: description,
        prix: prix,
        image: fileUrl,
      });
      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

router.get(
  "/get_products",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find({});
      products && res.status(200).json(products);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

router.post(
  "/update_prod/:id",
  upload.single("file"),
  async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ message: "Invalid ID" });
      }

      if (req.file) {
        const filename = req.file.filename;
        const fileUrl = path.join(filename);
        product.image = fileUrl;
      }

      product.title = req.body.title || product.title;
      product.type = req.body.type || product.type;
      product.description = req.body.description || product.description;

      if (req.body.prix !== undefined) {
        product.prix = req.body.prix;
      }

      const savedProduct = await product.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
);

router.put(
  "/update_product/:id",
  upload.single("file"),
  catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;
    try {
      const filename = req.file.filename;
      const fileUrl = path.join(filename);
      const updateProduct = await Product.findByIdAndUpdate(
        id,
        {
          $set: req.body,
          image: fileUrl,
        },
        { new: true }
      );
      res.status(201).json(updateProduct);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

router.delete(
  "/delete_product/:id",
  catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;
    try {
      await Product.findByIdAndDelete(id);
      res.status(200).json({
        success: true,
        message: "Product Deleted Successfully",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get one Product

router.get(
  "/one_product/:id",
  catchAsyncErrors(async (req, res, next) => {
    const id = req.params.id;
    try {
      const product = await Product.findById(id);
      product && res.status(200).json(product);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
module.exports = router;

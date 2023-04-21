const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is Required"],
    },
    type: {
      type: String,
      required: [true, "Type is Required"],
    },
    description: {
      type: String,
      required: [true, "Description is Required"],
    },
    prix: {
      type: Number,
      required: [true, "Price is Required"],
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const productModel = mongoose.model("product", productSchema);
module.exports = productModel;

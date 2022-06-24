// this file contains schemas
const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: "string",
      required: [true, "Title is required!"],
      minLength: [4, "Title must be at least 4 characters"],
    },
    price: {
      type: "number",
      required: [true, "Price is required"],
      min: [1, "Price must be at least $1"],
    },
    description: {
      type: "string",
      required: [true, "Description is required"],
      minLength: [10, "Description must be at least 10 characters"],
      maxLength: [40, "Description cannot be more than 40 characters"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product",ProductSchema);
module.exports = Product;
// All CRUD operations 

const Product = require("../models/product.model");

module.exports = {
  getProduct: (req, res) => {
    Product.find({})
      .then((products) => {
        res.status(201).json(products);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in findAll", error: err });
      });
  },
  createProduct: (req, res) => {
    Product.create(req.body)
      .then((newProduct) => {
        res.status(201).json(newProduct);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in create", error: err });
      });
  },
  getProductById: (req, res) => {
    Product.findOne({ _id: req.params.id })
      .then((product) => {
        res.status(201).json(product);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in findById", error: err });
      });
  },
  deleteProduct: (req, res) => {
    Product.deleteOne({ _id: req.params.id })
      .then((product) => {
        res.status(201).json(product);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in deleteProduct", error: err });
      });
  },
  updateProduct: (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((product) => {
        res.status(201).json(product);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in updateProduct", error: err });
      });
  },
};

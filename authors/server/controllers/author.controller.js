const Author = require("../models/author.model");

module.exports = {
  getAuthor: (req, res) => {
    // authors sorted alphabetically
    Author
      .find({})
      .sort('name')
      .then((authors) => {
        res.json(authors);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in findAll", error: err });
      });
  },

  createAuthor: (req, res) => {
    Author.create(req.body)
      .then((newAuthor) => {
        res.status(201).json(newAuthor);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in create", error: err });
      });
  },

  getAuthorById: (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then((author) => {
        res.status(201).json(author);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in findById", error: err });
      });
  },

  deleteAuthor: (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then((author) => {
        res.status(201).json(author);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in deleteAuthor", error: err });
      });
  },
  updateAuthor: (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((author) => {
        res.status(201).json(author);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in updateAuthor", error: err });
      });
  },
};

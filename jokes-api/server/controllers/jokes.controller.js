const Joke = require("../models/jokes.model");

// Export a function to get all jokes
const getJokes = (req, res) => {
  Joke.find({})
    .then((jokes) => {
      res.status(201).json(jokes);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// Export a function to get a single joke
const getOneJoke = (req, res) => {
  Joke.findById(req.params.id)
    .then((joke) => {
      res.status(201).json(joke);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

//  Export a function to create a joke
const createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => {
      res.status(201).json(newJoke);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// Export a function to update a joke
const updateJoke = (req, res) => {
  Joke.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((joke) => {
      res.status(201).json(joke);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

// Export a function to delete a joke
const deleteJoke = (req, res) => {
  Joke.findByIdAndDelete(req.params.id)
    .then((joke) => {
      res.status(201).json(joke);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

module.exports = {
  getJokes,
  getOneJoke,
  createJoke,
  updateJoke,
  deleteJoke,
};

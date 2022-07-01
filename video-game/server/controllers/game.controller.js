const Game = require("../models/game.model");

// model connects to the collection and find all documents for games collection
module.exports = {
  findAllGames: (req, res) => {
    Game.find({})
      .sort('name')
      .then((findAllGames) => {
        console.log("All games", findAllGames);
        res.json(findAllGames); // this will be the result given to the client
      })
      .catch((err) => {
        res.status(400).json({ message: "error in findAll", error: err });
      });
  },
  createGame: (req, res) => {
    Game.create(req.body)
      .then((newGame) => {
        res.status(201).json(newGame);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in create", error: err });
      });
  },

  getGameById: (req, res) => {
    Game.findOne({ _id: req.params.id })
      .then((oneGame) => {
        res.status(201).json(oneGame);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in findById", error: err });
      });
  },

  updateGame: (req, res) => {
    Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateOneGameById) => {
        res.status(201).json(updateOneGameById);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in update Game", error: err });
      });
  },

  deleteGame: (req, res) => {
    Game.deleteOne({ _id: req.params.id })
      .then((deleteOneGameById) => {
        res.status(201).json(deleteOneGameById);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in delete game", error: err });
      });
  },
};

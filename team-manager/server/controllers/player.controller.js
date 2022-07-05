const Player = require("../models/player.model");

module.exports = {
  findAllPlayers: (req, res) => {
    Player.find({})
      .sort("playerName")
      .then((findAllPlayers) => {
        console.log("All players", findAllPlayers);
        res.status(201).json(findAllPlayers);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in findAll", error: err });
      });
  },

  createPlayer: (req, res) => {
    Player.create(req.body)
      .then((newPlayer) => {
        res.status(201).json(newPlayer);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in create", error: err });
      });
  },

  getPlayerById: (req, res) => {
    Player.findOne({ _id: req.params.id })
      .then((onePlayer) => {
        res.status(201).json(onePlayer);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in findById", error: err });
      });
  },

  updatePlayer: (req, res) => {
    Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })
      .then((updateOnePlayerById) => {
        res.status(201).json(updateOnePlayerById);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in update Player", error: err });
      });
  },

  deletePlayer: (req, res) => {
    Player.deleteOne({ _id: req.params.id })
      .then((deleteOnePlayerById) => {
        res.status(201).json(deleteOnePlayerById);
      })
      .catch((err) => {
        res.status(400).json({ message: "error in delete player", error: err });
      });
  },
};

const mongoose = require("mongoose");

const PlayerSchema = mongoose.Schema(
  {
    playerName: {
      type: String,
      required: [true, "Player name is required"],
      minlength: [2, "Name cannot be less than 2 characters"],
    },
    preferredPosition: {
      type: String,
    },
  },
  { timestamps: true }
);


// mongoose model provides an interface to the db for creating,querying,updating and deleting records.
const Player = mongoose.model("Player", PlayerSchema);

//model is exported to be imported and used in our controller
module.exports = Player;
const mongoose = require("mongoose");

const GameSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Game name is required"],
      minlength: [3, "Name cannot be less than 3 characters"],
    },
    yearRelease: {
      type: Number,
      required: [true, "Release year is required"],
      min: [
        1950,
        "No video game was made before the year 1950, pick a higher year",
      ],
      max: [
        2022,
        "No video games were made after the year 2022, pick a low year",
      ],
    },
    genre: {
      type: String,
      required: [true, "Game genre is required"],
      enum: [
        "****Pick a genre****",
        "Action",
        "Survival",
        "RPG",
        "FPS",
        "RTS",
        "MMO",
        "Puzzle",
        "Sports",
        "Adventure",
        "Children's",
      ],
    },
    image: {
      type: String,
      required: [true, "We need a picture"],
    },
    rating: {
      type: String,
      required: [true, "we need the rating"],
      enum: ["T", "E", "MA", "AO", "E10", "Y"],
    },

    company: {
      type: String,
    },
  },
  { timestamps: true }
);


// mongoose model provides an interface to the db for creating,querying,updating and deleting records.
const Game = mongoose.model("Game", GameSchema);

//model is exported to be imported and used in our controller
module.exports = Game;
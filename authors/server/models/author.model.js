const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: [true, "Author's name is required!"],
      minLength: [3, "Author's name must be at least 3 characters!'"],
    },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", AuthorSchema);
module.exports = Author;
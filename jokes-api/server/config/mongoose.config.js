const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/jokes-api";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log("error connecting to MongoDB", err);
  });

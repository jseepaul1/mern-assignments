const mongoose = require("mongoose");
const authorDB = 'authorDB';



mongoose
  .connect(`mongodb://localhost/${authorDB}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Successfully connected to ${authorDB}`);
  })
  .catch((err) => {
    console.log("There was an error connecting to MongoDB", err);
  });
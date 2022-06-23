const mongoose = require("mongoose");
const productDB = 'productDB';



mongoose
  .connect(`mongodb://localhost/${productDB}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Successfully connected to ${productDB}`);
  })
  .catch((err) => {
    console.log("There was an error connecting to MongoDB", err);
  });
const mongoose = require("mongoose");
const dbName = 'gamesDB';



mongoose
// if db does not exists, then it will create it
  .connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Successfully connected to database ${dbName}`);
  })
  .catch((err) => {
    console.log("There was an error connecting to MongoDB", err);
  });
const express = require("express");
const app = express();
const cors = require("cors"); //cross origin and resource sharing
require("./config/mongoose.config");
const PORT = 8000;

//middleware(allows post and put requests)
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // port the client is running on
  })
);

require("./routes/player.routes")(app);

app.listen(PORT, () => {
  console.log(`You are connected to port ${PORT}`);
});

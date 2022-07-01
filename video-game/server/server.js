const express = require("express");
const app = express();
const cors = require("cors"); //cross origin and resource sharing
require("./config/mongoose.config");
const PORT = 8000;

// app.use(cors()); accept all origins (anyone can request our server)
// cors(error) means the browser considers the two servers to be different origins
// react is running on port 3000 and node/express api server is running on port 8000

//middleware(allows post and put requests)
app.use(express.json()); // this parses incoming requests with JSON payloads. (request object as JSON object)
// this parses incoming requests with JSON payloads of strings or arrays.(request object as a string or array)
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000", // port the client is running on
  })
);

// all routes need to exist before starting this
require("./routes/game.routes")(app);

app.listen(PORT, () => {
  console.log(`You are connected to port ${PORT}`);
});
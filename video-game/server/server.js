const express = require("express");
const app = express();
const cors = require("cors"); //cross origin and resource sharing
require("./config/mongoose.config");
const PORT = 8000;
const socket = require("socket.io"); // creating an instance of socket.io


//middleware(allows post and put requests)
app.use(express.json()); // this parses incoming requests with JSON payloads. (request object as JSON object)
// this parses incoming requests with JSON payloads of strings or arrays.(request object as a string or array)
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./routes/game.routes")(app);

// node server is returned(socket.io)
const server = app.listen(PORT, () => {
  console.log(`You are connected to port ${PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["*"], // this allows everything
  },
}); // associating the socket with our server
// on is the same as listening
// Connection is mandatory for client to connect with the server
io.on("connection", (socket) => {
  // connection allows the client to connect to server over socket
  console.log("Server Side socket id:" + socket.id); // this message shows when the client is connected
  // after connection is established,the server needs to know what events to listen for

  socket.on("new_game_added", (data) => {
    console.log("new_game_added");
    console.log(data);
    socket.broadcast.emit("added_song", data); // this sends the message to all clients listening
  });
});

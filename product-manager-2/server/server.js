const express = require("express");
const app = express();
const cors = require("cors"); //cross origin and resource sharing
require("./config/mongoose.config");
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
require("./routes/product.routes")(app);

app.listen(PORT, () => {
  console.log(`server up on ${PORT}`);
});
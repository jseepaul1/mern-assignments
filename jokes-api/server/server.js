const express = require("express"); 
const app = express(); 
const PORT = 8000;

require('./config/mongoose.config');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


require('./routes/jokes.routes') (app);

app.listen(PORT, () => {
  console.log(`server up on ${PORT}`);
});
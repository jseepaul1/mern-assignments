const JokeController = require("../controllers/jokes.controller");
module.exports = (app) => {
  app.get("/api/jokes", JokeController.getJokes);
  app.get("/api/jokes/:id", JokeController.getOneJoke);
  app.put("/api/jokes/:id", JokeController.updateJoke);
  app.post("/api/jokes", JokeController.createJoke);
  app.delete("/api/jokes/:id", JokeController.deleteJoke);
};

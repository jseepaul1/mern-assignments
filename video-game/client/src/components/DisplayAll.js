import { useEffect, useState } from "react"; // need to create a useState to hold all the games
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
const DisplayAll = () => {
  const [games, setGames] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/games") // this is our backend
      .then((response) => {
        setGames(response.data);
      })
      .catch((err) => console.log("ERROR IN GET ALL", err));
  }, []);

  const handleDelete = (deletedId) => {
    // handleDelete already has access to id in DeleteButton.js
    setGames(games.filter((game) => game._id !== deletedId));// this will return a new array when the delete button is clicked
  };

  return (
    <Container className ="display-container">
    <div>
      <h2 className="h2">Go Ahead and Create your Very Own Video Game 🎮 👾</h2>
      <div className = "all-games">
        {games.map(
          (
            game // when using map use round brackets not curly
          ) => (
            <div className = "card-wrapper" key={game._id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={game.image} alt="" />
                <Card.Title>{game.name}</Card.Title>
                <Card.Body variant="success">
                  <Link to={`/game/${game._id}`}>Details</Link>
                  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                  <Link to={`/game/edit/${game._id}`} state={game}>
                    Edit
                  </Link>
                  <br />
                  <DeleteButton id={game._id} handleDelete={handleDelete} />
                </Card.Body>
              </Card>
            </div>
          )
        )}
      </div>
    </div>
    </Container>
  );
};

export default DisplayAll;

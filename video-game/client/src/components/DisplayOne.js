import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

const DisplayOne = () => {
  const [game, setGame] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    // useEffect will run when the component is mounted. (axios request)
    axios
      .get(`http://localhost:8000/api/games/${id}`)
      .then((res) => {
        //params is the id
        console.log(res);
        setGame(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <Container>
      <div className= "one-card">
        <Card style={{ width: "22rem" }}>
          <Card.Img variant="top" src={game.image} alt="" />
          {/* mapping each value from model */}
          <Card.Body>
              <h2><Card.Title>Name: {game.name}</Card.Title></h2>
              <p className="display-one">Genre: {game.genre}</p>
              <p className="display-one">Rating: {game.rating}</p>
              <p className="display-one">Release Year: {game.yearRelease}</p>
              <p className="display-one">Company: {game.company}</p>
            <DeleteButton id={game._id} handleDelete={() => navigate("/")} />
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default DisplayOne;

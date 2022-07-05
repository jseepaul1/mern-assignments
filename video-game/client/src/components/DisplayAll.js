import { useEffect, useState } from "react"; // need to create a useState to hold all the games
import axios from "axios";
import { Link } from "react-router-dom";
import { DeleteButton } from "./DeleteButton";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import io from "socket.io-client";

const DisplayAll = () => {
  // this state will never use the setter method, it is set with the initial value
  const [socket] = useState(() => io(":8000")); // call back function that makes a connection on port 8000;

  const [games, setGames] = useState([]);
  // this useEffect is for socket io so that it runs nly once when the component loads
  useEffect(() => {
    console.log("inside useEffect for sockets");
    // console.log(socket);
    // connect is a reserved/ expected type of event
    socket.on("connect", () => {
      console.log("Connected socket id - ", socket.id); // if connected a unique id will be printed
    });
    
    // listen for event about newly added games
    socket.on("added_game", (data) => {
      console.log("new song added");

      setGames((currentValue) => [data, ...currentValue]);
      
    })

    // clean up our socket resources- "hang up the socket conversation"
    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    }; // run does not run in useEffect until the component is shutting down(eg. creating a new game)
  }, [socket]);

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
    setGames(games.filter((game) => game._id !== deletedId)); // this will return a new array when the delete button is clicked
  };

  return (
    <Container className="display-container">
      <div>
        <h2 className="h2">
          Go Ahead and Create your Very Own Video Game 🎮 👾
        </h2>
        <div className="all-games">
          {games.map(
            (
              game // when using map use round brackets not curly
            ) => (
              <div className="card-wrapper" key={game._id}>
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

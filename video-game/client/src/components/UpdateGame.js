import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Form from "./Form";
import Button from "react-bootstrap/Button";

const UpdateGame = () => {
  const [currentGame, setCurrentGame] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  const handleUnrecognizedId = () => {
    navigate("/new");
  };

  useEffect(() => {
    if (!state) {
      console.log("Fetching rom API", state);
      // check if you have a game from previous component, if not fetch the game
      // useEffect will run when the component is mounted. (axios request)
      axios
        .get(`http://localhost:8000/api/games/${id}`)
        .then((res) => {
          //params is the idF
          console.log(res);
          setCurrentGame(res.data); // and set it here
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCurrentGame(state); // else set old game
      console.log("coming from state", state);
    }
  }, [id, state]);

  const submitHandler = (game, setErrors) => {
    // new game and set errors will be received here
    axios
      .put(`http://localhost:8000/api/games/${id}`, game)
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        // console.log("error", err);
        // console.log("error response", err.response);
        // console.log("error response data", err.response.data);
        console.log("error response data errors", err.response.data.errors);
        setErrors(err.response.data.error.errors);
      });
  };
  return !!currentGame._id ? (
    <>
      <h1>Update Game!</h1>
      <Form
        submitHandler={submitHandler}
        buttonText={"Update Game"}
        currentGame={currentGame}
      />
    </>
  ) : (
    <>
      <p>
        We're sorry, but we could not find the game you are looking for. Would
        you like to add a new game to our database?
      </p>
      <Button onClick={handleUnrecognizedId}>Add a new game</Button>
    </>
  );
};

export default UpdateGame;

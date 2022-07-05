import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import io from "socket.io-client";
import {useState} from "react"

const CreateGame = () => {
  const [socket] = useState(() => io(":8000"))
  const navigate = useNavigate();
  const submitHandler = (game, setErrors) => {
    // new game and set errors will be received here
    axios
      .post("http://localhost:8000/api/games", game)
      .then((response) => {

        //notify the server about a new game
        // the server will notify everyone that is listening
        socket.emit("new_game_added", response.data)
        navigate("/"); 

        socket.disconnect();
      })
      .catch((err) => {
        // console.log("error", err);
        // console.log("error response", err.response);
        // console.log("error response data", err.response.data);
        console.log("error response data errors", err.response.data.errors);
        setErrors(err.response.data.error.errors);
      });
  };
  return (
    <div>
    <h2>Add a New Game!</h2>
      <Form submitHandler={submitHandler} buttonText={"Add new game"} />
    </div>
  ); // we are showing the form in this component
};

export default CreateGame;

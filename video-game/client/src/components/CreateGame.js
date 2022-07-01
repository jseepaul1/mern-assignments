import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

const CreateGame = () => {
  const navigate = useNavigate();
  const submitHandler = (game, setErrors) => {
    // new game and set errors will be received here
    axios
      .post("http://localhost:8000/api/games", game)
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
  return (
    <div>
    <h2>Add a New Game!</h2>
      <Form submitHandler={submitHandler} buttonText={"Add new game"} />
    </div>
  ); // we are showing the form in this component
};

export default CreateGame;

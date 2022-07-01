import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";

import React from "react";

const CreatePlayer = () => {
  const navigate = useNavigate();
  const submitHandler = (player, setErrors) => {
    // new player and set errors will be received here
    axios
      .post("http://localhost:8000/api/players", player)
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
  return <div>
  <h2>Add Player</h2>
    <Form submitHandler={submitHandler} buttonText={"ADD"} />
  </div>
};

export default CreatePlayer;

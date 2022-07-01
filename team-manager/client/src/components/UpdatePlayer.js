import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Form from "./Form";


const UpdatePlayer = () => {
  const [currentPlayer, setCurrentPlayer] = useState(); // this causes a control error don't put {}
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      console.log("Fetching rom API", state);
      axios
        .get(`http://localhost:8000/api/players/${id}`)
        .then((res) => {
          console.log(res);
          setCurrentPlayer(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCurrentPlayer(state);
      console.log("coming from state", state);
    }
  }, [id, state]);

  const submitHandler = (player, setErrors) => {
    axios
      .put(`http://localhost:8000/api/players/${id}`, player)
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
  return currentPlayer ? (
    <Form
      submitHandler={submitHandler}
      buttonText={"UPDATE"}
      currentPlayer={currentPlayer}
    />
  ) : null;
};

export default UpdatePlayer;

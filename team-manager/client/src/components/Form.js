import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Form = (props) => {
  const [player, setPlayer] = useState(
    props.currentPlayer || {
      // this state represents the player with the other states
      playerName: "",
      preferredPosition: "",
    }
  );

  useEffect(() => {
    console.log("test", props.currentPlayer);
    if (props.currentPlayer) {
      setPlayer(props.currentPlayer);
    }
  }, [props.currentPlayer]);

  const [errors, setErrors] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(player, setErrors);
  };

  const handleChange = (e) => {
    setPlayer({ ...player, [e.target.name]: e.target.value });
  };

  return (
    <Container className="form-container">
      <form onSubmit={submitHandler}>
        <br />
        <div className="form">
          <label>Player Name:</label>
          <input
            type="text"
            value={player.playerName}
            onChange={handleChange}
            name="playerName"
          />
          <br />
          {errors.playerName && <p>{errors.playerName.message}</p>}
          <label>Preferred Position:</label>
          <input
            type="text"
            value={player.preferredPosition}
            onChange={handleChange}
            name="preferredPosition"
          />
          <br />
          <Button className= "input" type="submit" value={props.buttonText}>Update Player</Button>
        </div>
      </form>
    </Container>
  );
};

export default Form;

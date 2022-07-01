// create a new game

import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"

const Form = (props) => {
  const navigate = useNavigate();
  const handleCancel = () => {
    navigate("/");
  };
  const [game, setGame] = useState(
    props.currentGame || {
      // this state represents the game with the other states
      name: "",
      yearRelease: 0,
      genre: "",
      image: "",
      rating: "",
      company: "",
    }
  );

  useEffect(() => {
    console.log("test", props.currentGame);
    if (props.currentGame) {
      setGame(props.currentGame);
    }
  }, [props.currentGame]);

  const [errors, setErrors] = useState({}); //whenever user submit form we will send game and errors to (NewMovie)
  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(game, setErrors);
  };

  const handleChange = (e) => {
    //   console.log('Name', e.target.name);
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  return (
    <Container className ="form-container">
    <form onSubmit={submitHandler}>
      <br /> 
      <div className = "form">
      <label>Name:</label>
      <input
        type="text"
        value={game.name}
        onChange={handleChange}
        name="name"
      />
      <br /> 
      {errors.name && <p>{errors.name.message}</p>}
      {/* THESE ARE FROM MODELS GENRE PROPERTY */}
      <label>Rating:</label>
      <select onChange={handleChange} name="rating" value={game.rating}>
        <option>SELECT A RATING</option>
        <option value="T">T</option>
        <option value="E">E</option>
        <option value="MA">MA</option>
        <option value="AO">AO</option>
        <option value="Y">Y</option>
      </select>
      {errors.rating && <p>{errors.rating.message}</p>}
      <br /> 
      <label>Image:</label>
      <input
        type="text"
        value={game.image}
        onChange={handleChange}
        name="image"
      />
      {errors.image && <p>{errors.image.message}</p>}
      <br /> 
      <label>Company:</label>
      <input
        type="text"
        value={game.company}
        onChange={handleChange}
        name="company"
      />
      {errors.company && <p>{errors.company.message}</p>}
      <br /> 
      {/*  THESE ARE FROM MODELS RATING PROPERTY */}
      <label>Genre:</label>
      <select onChange={handleChange} name="genre" value={game.genre}>
        <option>SELECT A GENRE</option>
        <option value="Action">Action</option>
        <option value="Survival">Survival</option>
        <option value="RPG">RPG</option>
        <option value="FPS">FPS</option>
        <option value="RTS">RTS</option>
        <option value="MMO">MMO</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Sports">Sports</option>
        <option value="Adventure">Adventure</option>
        <option value="Children's">Children's</option>
      </select>
      {errors.genre && <p>{errors.genre.message}</p>}
      <br /> 
      <label>Release Year:</label>
      <input
        type="number"
        value={game.yearRelease}
        onChange={handleChange}
        name="yearRelease"
      />
      {errors.yearRelease && <p>{errors.yearRelease.message}</p>}
      <br /> 
      <input className= "input" type="submit" value={props.buttonText}/>
      <Button variant = "primary" onClick={handleCancel}>Cancel</Button>
      </div>
    </form>
    </Container>
  );
};

export default Form;

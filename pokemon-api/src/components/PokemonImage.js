import React, { useState, useEffect } from "react";

// added the image for each pokemon as an additional bonus

const PokemonImage = ({ pokemonUrl }) => {
  const [pokemonImageUrl, setPokemonImageUrl] = useState([]);

  useEffect(() => {
    //   this url is a key within the results object, passed in as a prop in PokemonApi.js 
    fetch(pokemonUrl)
      .then((response) => response.json())
      .then((response) => {
        // console.log("image response-", response);
        setPokemonImageUrl(response.sprites.front_default);
      });
  }, [setPokemonImageUrl, pokemonUrl]);
  return (
    <div>
      <img className = "image-size" src={pokemonImageUrl} alt="not found" />
    </div>
  );
};

export default PokemonImage;

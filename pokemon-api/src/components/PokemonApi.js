import React, { useState, useEffect } from "react";
import PokemonImage from "./PokemonImage";

const PokemonApi = ({ setCount }) => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // this api gives a list of all the pokemon
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1200")
      .then((response) => response.json())
      .then((response) => {
        // console.log("api res-", response);
        setPokemon(response.results);
        // count is a key in the response object
        setCount(response.count);
      });
  }, [setPokemon, setCount]);

  return (
    <div>
      {pokemon.length > 0 &&
        pokemon.map((poke, index) => {
          return (
            <div className ="pokemon-image" key={index}>
              <PokemonImage pokemonUrl={poke.url} />
              {poke.name}
            </div>
          );
        })}
    </div>
  );
};

export default PokemonApi;

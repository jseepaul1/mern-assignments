import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosPokemonApi = ({ setCount }) => {
  const [axiosPokemon, setAxiosPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=1200")
      .then((response) => {
        // console.log("response-", response);
        setAxiosPokemon(response.data.results);
        setCount(response.data.count);
      });
  }, [setAxiosPokemon, setCount]);

  return (
    <div>
      {axiosPokemon.length > 0 &&
        axiosPokemon.map((p, index) => {
          return (
            <div className="pokemon" key={index}>
              {p.name}
            </div>
          );
        })}
    </div>
  );
};

export default AxiosPokemonApi;

import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const NumberOrWord = (props) => {
  const { param, color, backGroundColor } = useParams();
  return isNaN(param) ? (
    <>
      <h1
        style={
          color ? { color: color, backgroundColor: backGroundColor } : null
        }
      >
        The Word is: {param}
      </h1>
      <Link to="/Home">Go to HomePage</Link>
    </>
  ) : (
    <>
      <h1>The Number is: {param}</h1>
      <Link to="/Home">Go to HomePage</Link>
    </>
  );
};

export default NumberOrWord;

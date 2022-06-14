import React from "react";
import { useParams } from "react-router";

const NumberOrWord = (props) => {
  const { param, color, backGroundColor } = useParams();
  return isNaN(param) ? (
    <h1
      style={color ? { color: color, backgroundColor: backGroundColor } : null}
    >
      The Word is: {param}
    </h1>
  ) : (
    <h1>The Number is: {param}</h1>
  );
};

export default NumberOrWord;

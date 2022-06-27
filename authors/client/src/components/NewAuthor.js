import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import Button from 'react-bootstrap/Button';
import React from "react";

const NewAuthor = () => {
  const handleCancel = () => {
    navigate("/");
  };
  const navigate = useNavigate();
  const submitHandler = (author, setErrors) => {
    // new author and set errors will be received here
    axios
      .post("http://localhost:8000/api/authors", author)
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
    <div className = "form">
      <Form submitHandler={submitHandler} buttonText={"Submit"} />
      <Button variant = "success" onClick={handleCancel}>Cancel</Button>
    </div>
  );
};

export default NewAuthor;

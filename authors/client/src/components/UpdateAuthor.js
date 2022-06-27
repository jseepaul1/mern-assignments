import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Form from "./Form";
import Button from 'react-bootstrap/Button';

const UpdateAuthor = () => {
  const [currentAuthor, setCurrentAuthor] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  const handleUnrecognizedId = () => {
    navigate("/new");
  };
  useEffect(() => {
    if (!state) {
      //   console.log("Fetching rom API", state);
      axios
        .get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
          //   console.log(res);
          setCurrentAuthor(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setCurrentAuthor(state);
      //   console.log("coming from state", state);
    }
  }, [id, state]);

  const submitHandler = (author, setErrors) => {
    // new author and set errors will be received here
    axios
      .put(`http://localhost:8000/api/authors/${id}`, author)
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

  return currentAuthor ? (
    <Form
      submitHandler={submitHandler}
      buttonText={"Submit"}
      prevAuthor={currentAuthor}
    />
  ) : (
    <div>
      <p>
        We're sorry, but we could not find the author you are looking for. Would
        you like to add an author to our database?
      </p>
      <Button onClick = {handleUnrecognizedId}>Add a new author</Button>
    </div>
  );
};

export default UpdateAuthor;

import { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

const Form = (props) => {
  const [author, setAuthor] = useState(
    props.prevAuthor || {
      name: "",
    }
  );
  useEffect(() => {
    // console.log("Previous Author", props.prevAuthor);
    if (props.prevAuthor) {
      setAuthor(props.prevAuthor);
    }
  }, [props.prevAuthor]);

  const [errors, setErrors] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    props.submitHandler(author, setErrors);
  };

  const handleChange = (e) => {
    //   console.log('Name', e.target.name);
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };

  return (
      <form className="form-container" onSubmit={submitHandler}>
        <h3>Title:</h3>
        <input className= "input"
          type="text"
          value={author.name}
          onChange={handleChange}
          name="name"
        />{" "}
        <br /> <br />
        {errors.name && <p>{errors.name.message}</p>}
        <Button type="submit" value={props.buttonText}>Submit</Button>
      </form>
  );
};

export default Form;

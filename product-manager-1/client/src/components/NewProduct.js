import { useState } from "react"; // useState will be use to store all the products
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [price, setPrice] = useState(0);
  const [priceError, setPriceError] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        setTitle("");
        setPrice(0);
        setDescription("");
        console.log(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
    if (e.target.value.length < 4) {
      setTitleError("Title must be at least 4 characters!");
    } else {
      setTitleError("");
    }
    if (e.target.value.length === 0) {
      setTitleError("");
    }
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
    if (e.target.value.length < 1) {
      setPriceError("Price must be at least 1 dollar");
    } else {
      setPriceError("");
    }
    if (e.target.value.length === 0) {
      // this will not show the error message if condition is true
      setPriceError("");
    }
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
    if (e.target.value.length < 10) {
      setDescriptionError("Description must be at least 10 characters!");
    } else {
      setDescriptionError("");
    }
    if (e.target.value.length === 0) {
      setDescriptionError("");
    }
  };
  return (
    <div className="container">
      <h1>Product Manager</h1>
      <Form className="form" onSubmit={submitHandler}>
        {" "}
        <br />
        <label>Title:</label>
        <input
          className="mb-3"
          type="text"
          value={title}
          onChange={handleTitle}
        />
        {titleError}
        <br /> <br />
        <label>Price:</label>
        <input type="number" value={price} onChange={handlePrice} />
        {priceError}
        <br /> <br />
        <label>Description:</label>
        <textarea value={description} onChange={handleDescription} />
        {descriptionError}
        <br /> <br />
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default NewProduct;

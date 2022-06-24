import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";

const UpdateProduct = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/products/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log("error", err);
        setErrors(err.response.data.error.errors);
      });
  };

  return (
    <div className="container">
      <div>
        <Form className="form" onSubmit={submitHandler}>
          <br />
          <label>Title:</label>
          <input
            className="mb-3"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p>{errors.title.message}</p>}
          <br />
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price && <p>{errors.price.message}</p>}
          <br />
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <p>{errors.description.message}</p>}
          <br />
          <Button variant="primary" type="submit">
          Update Product
        </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProduct;

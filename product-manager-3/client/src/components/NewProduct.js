import { useState, useEffect } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NewProduct = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log("ERROR IN GET ALL", err));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleDelete = (productId) => {
    axios
      .delete(`http://localhost:8000/api/products/${productId}`)
      .then((response) => {
        console.log(response);
        setProducts(products.filter((product) => product._id !== productId));
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };

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
        getAllProducts();
        console.log(res.data);
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
            Create
          </Button>
        </Form>
      </div>
      <div className="products">
        <h1>All Products:</h1>
        {products.map(
          (
            product 
          ) => (
            <div className = "link-and-button" key={product._id}>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
              <Button variant="danger" onClick={() => handleDelete(product._id)}>Delete</Button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default NewProduct;

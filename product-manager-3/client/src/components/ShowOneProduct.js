import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ShowOneProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`http://localhost:8000/api/products/${id}`)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  };
  return (
    <div className="show-one-product">
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
        <NavLink to={`/product/edit/${product._id}`}>Edit</NavLink>
        <Button className="delete" variant="danger" onClick={() => handleDelete(product._id)}>
          Delete
        </Button>
      </div>
  );
};

export default ShowOneProduct;

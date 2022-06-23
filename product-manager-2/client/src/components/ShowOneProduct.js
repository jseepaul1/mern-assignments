import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShowOneProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    // useEffect will run when the component is mounted. (axios request)
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
  return <div className ="show-one-product">
      <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
  </div>;
};

export default ShowOneProduct;

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Product = () => {
  const [data, setData] = useState([]);
  const param = useParams();
  console.log(param);
  useEffect(() => {
    fetch(`http://localhost:8000/products/${param.product_id}`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  console.log(data);
  return (
    <div>
      <p> Product Name: {data.name}</p>
      <p>Product Price : {data.price}</p>
      <Link to="/products">Go Back</Link>
    </div>
  );
};

export default Product;

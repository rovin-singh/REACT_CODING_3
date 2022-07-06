import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      name: "SmartPhone",
      price: 30,
      id: 0
    },
    {
      name: "Watch",
      price: 20,
      id: 1
    },
    {
      name: "Shirt",
      price: 50,
      id: 2
    },
    {
      name: "Pants",
      price: 100,
      id: 3
    }
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <table style={{ border: "1px solid red", padding: "10px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Know More</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>Price: {item.price}</td>
              <td>
                <Link to={`/products/${item.id}`}>Know More</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;

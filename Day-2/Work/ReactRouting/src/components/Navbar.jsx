import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const navlink = [
    {
      title: "Home",
      to: "/"
    },
    {
      title: "Products",
      to: "/products"
    }
  ];

  const activeStyle = {
    color: "red",
    textDecoration: "none"
  };
  const baseStyle = {
    color: "black",
    textDecoration: "none"
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      {navlink.map((item) => (
        <NavLink
          to={item.to}
          style={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          key={item.to}
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;

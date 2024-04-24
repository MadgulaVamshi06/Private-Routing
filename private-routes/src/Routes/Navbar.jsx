import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        background: "lightgray",
        padding: "10px",
      }}
    >
      <NavLink
        to=""
        style={(e) => (e.isActive ? { color: "blue" } : { color: "white" })}
      >
        Home
      </NavLink>
      <br />
      <NavLink
        to="/about"
        style={(e) => (e.isActive ? { color: "blue" } : { color: "white" })}
      >
        About
      </NavLink>{" "}
      <br />
      <NavLink
        to="/contact"
        style={(e) => (e.isActive ? { color: "blue" } : { color: "white" })}
      >
        Contact
      </NavLink>{" "}
      <br />
      <NavLink
        to="/product"
        style={(e) => (e.isActive ? { color: "blue" } : { color: "white" })}
      >
        Product
      </NavLink>{" "}
      <br />
      <NavLink
        to="/login"
        style={(e) => (e.isActive ? { color: "blue" } : { color: "white" })}
      >
        Login
      </NavLink>{" "}
      <br />
    </div>
  );
};

export default Navbar;

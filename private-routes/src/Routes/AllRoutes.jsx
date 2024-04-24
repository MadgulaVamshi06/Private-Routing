
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Product from "../Pages/Product";
import PrivateRoute from "./PrivateRoute";
import Login from "../Pages/Login";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={
        <PrivateRoute>
          <Product />
        </PrivateRoute>
      } />
      <Route path="/*" element={<>You are Lost</>} />
    </Routes>
  );
};

export default AllRoutes;

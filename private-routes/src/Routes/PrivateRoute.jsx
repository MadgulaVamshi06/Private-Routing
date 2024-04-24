// PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check if the user is authenticated (based on the token)
  const isAuthenticated = !!localStorage.getItem('authToken'); // Assuming you store the token in local storage

  return isAuthenticated ? children : <Navigate to="/login" />;
};



export default PrivateRoute;

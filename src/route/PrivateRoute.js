import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ authonticate }) => {
  return authonticate ? <ProductDetail /> : <Navigate to="/login" />;
};
export default PrivateRoute;

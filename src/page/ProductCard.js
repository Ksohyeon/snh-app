import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item?.id}`);
  };
  return (
    <div className="card" onClick={showDetail}>
      <img className="product-img" src={item?.img} />
      <div className="product-info">
        <div>{item?.choice ? "Conscious choice" : " "}</div>
        <div>{item?.title}</div>
        <div>\{item?.price}</div>
        <div>{item?.new ? "신제품" : " "}</div>
      </div>
    </div>
  );
};

export default ProductCard;

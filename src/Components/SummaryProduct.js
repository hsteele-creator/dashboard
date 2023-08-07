import React from "react";
import "./SummaryProduct.css";

const SummaryProduct = ({ name, image, orders, sales }) => {
  return (
    <>
      <div className="summary-product-container">
        <img className="summary-product-img" src={image} />
        <h3>{name}</h3>
        <p>Orders :{orders}</p>
        <p>Sales : {sales}K</p>
      </div>
    </>
  );
};

export default SummaryProduct;

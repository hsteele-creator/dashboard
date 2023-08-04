import React from "react";
import "./Product.css";

const Product = ({ name, image, orders, sales }) => {
  return (
    <>
      <div className="product-container">
        <img className="product-img" src={image} />
        <h1>{name}</h1>
        <p>
          <span>Orders</span> : {orders}
        </p>
        <p>
          <span>Total Sales</span> : {sales}
        </p>
      </div>
    </>
  );
};

export default Product;

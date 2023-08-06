import React from "react";
import "./Order.css";

const Order = ({ orderNumber, product, date, delivered }) => {
  return (
    <>
      <div className="order-container">
        <p className="order-number">#{orderNumber}</p>
        <p className="order-product">{product}</p>
        <p className="order-date">{date}</p>
        <p>{delivered === true ? <p className="red">Delivered</p> : <p className="green">Not Delivered</p>}</p>
      </div>
    </>
  );
};

export default Order;

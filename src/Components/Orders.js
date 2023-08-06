import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import Order from "./Order";
import "./Orders.css";
import { useState } from "react";

const Orders = () => {
  const orders = useSelector((state) => state.Orders);
  const [search, setSearch] = useState("")
  return (
    <>
      <div id="main-orders-container">
        <Sidebar />

        <div id="orders-container">
          <div id="input-container">
            <input type="text"></input>
            <button>Search</button>
          </div>
          {orders.map((order) => {
            return (
              <Order
                orderNumber={order.orderNumber}
                product={order.product}
                date={order.date}
                delivered={order.delivered}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Orders;

import React from "react";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import Order from "./Order";
import "./Orders.css";
import { useState } from "react";

const Orders = () => {
  const orders = useSelector((state) => state.Orders);
  const [search, setSearch] = useState("");

  return (
    <>
      <div id="main-orders-container">
        <Sidebar />

        <div id="orders-container">
          <div id="input-container">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search By Name"
            ></input>
            <button onClick={() => setSearch("")}>Reset</button>
          </div>
          <div id="orders-container">
          {orders
            .filter((name) => {
              return search.toLowerCase() === ""
                ? name
                : name.product.toLowerCase().includes(search.toLowerCase());
            })
            .map((order) => {
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
      </div>
    </>
  );
};

export default Orders;

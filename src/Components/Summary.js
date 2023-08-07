import React from "react";
import Sidebar from "./Sidebar";
import "./Summary.css";
import { useSelector } from "react-redux";
import BarChart from "./BarChart";
import Order from "./Order";
import { NavLink } from "react-router-dom";
import SummaryProduct from "./SummaryProduct";

const Summary = () => {
  const products = useSelector((state) => state.Products).slice(0, 4);
  const orders = useSelector((state) => state.Orders).slice(0, 3);
  const barChartData = {
    labels: products.map((item) => item.name),
    datasets: [
      {
        label: "Sales By Item",
        data: products.map((item) => item.sales),
        backgroundColor: [
          "#155263",
          "#ff6f3c",
          "#ff9a3c",
          "#ffc93c",
          "#00bbf0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  return (
    <>
      <div id="summary-main">
        <Sidebar />

        <div id="summary-container">
          <div id="summary-other">
            <div id="bar-chart-container">
            <div id="summary-statistics-title">
              <h1>Statistics</h1>

              <NavLink to="/statistics">
                <button className="btn">View All Statistics</button>
              </NavLink>
            </div>
              <BarChart chartData={barChartData} />
            </div>

            <div id="orders-container">
              <div id="summary-orders-title">
                <h1>Orders</h1>

                <NavLink to="/products">
                  <button className="btn">View All Orders</button>
                </NavLink>
              </div>
              {orders.map((order) => {
                return (
                  <>
                    <Order
                      orderNumber={order.orderNumber}
                      product={order.product}
                      date={order.date}
                      delivered={order.delivered}
                    />
                  </>
                );
              })}
            </div>
          </div>

          <div id="summary-products">
            <div id="summary-products-title">
              <h1>Products</h1>

              <NavLink to="/products">
                <button className="btn">View All Products</button>
              </NavLink>
            </div>
            {products.map((product) => {
              return (
                <>
                  <SummaryProduct
                    name={product.name}
                    image={product.image}
                    orders={product.orders}
                    sales={product.sales}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;

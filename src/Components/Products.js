import React from "react";
import Sidebar from "./Sidebar";
import "./Products.css";
import Data from "./Data";
import Product from "./Product";
const products = Data.Products;

const Products = () => {
  return (
    <>
      <div id="main-products-container">
        <Sidebar />

        <div id="products-container">
          {products.map((product, i) => {
            return (
              <Product
                name={product.name}
                image={product.image}
                orders={product.orders}
                sales={product.sales}
                key={i}
              />
            );
          })}

        </div>
      </div>
    </>
  );
};

export default Products;

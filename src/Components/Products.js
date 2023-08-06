import React from "react";
import Sidebar from "./Sidebar";
import "./Products.css";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";

const Products = () => {
  const products = useSelector((store) => store.Products);
  const dispatch = useDispatch();

  const handleFilter = (e) => {
    dispatch({type : "FILTER_PRODUCTS", payload : {state : e.target.value}})
  }

  return (
    <>
      <div id="main-products-container">
        <Sidebar />

        <div id="products-container">
          <div id="filter-container" onChange={(e) => handleFilter(e)}>
            <label for="filter-select">Filter By :</label>
            <select id="filter-select">
              <option></option>
              <option>Orders (Lowest to Highest)</option>
              <option>Orders (Highest to Lowest)</option>
              <option>Sales (Lowest to Highest)</option>
              <option>Orders (Highest to Lowest)</option>
            </select>
          </div>

          <div id="products">
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
      </div>
    </>
  );
};

export default Products;

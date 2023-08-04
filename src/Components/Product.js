import React from "react";
import "./Product.css"

const Product = ({name, image, orders, sales}) => {
    return (
        <>
        <div className="product-container">
            <img className="product-img" src={image} />
            <h1>{name}</h1>
            <p>Orders : {orders}</p>
            <p>Total Sales : {sales}</p>
        </div>
        </>
    )
}

export default Product
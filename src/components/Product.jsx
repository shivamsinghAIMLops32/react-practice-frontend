import React from "react";

const Product = ({ product }) => {
  return (
    <div>
      <h2>Product name is {product.productName}</h2>
      <p>Price is {product.price}</p>
    </div>
  );
};

export default Product;

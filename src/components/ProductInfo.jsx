import React from "react";

const ProductInfo = () => {
  const product = {
    name: "laptop",
    price: 1200,
    availability: "in stock",
  };
  return (
    <div>
      <h1>product : {product.name}</h1>
      <h1>price: ${product.price}</h1>
      <h1>availability : {product.availability}</h1>
    </div>
  );
};

export default ProductInfo;

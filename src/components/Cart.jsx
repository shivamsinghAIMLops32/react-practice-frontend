import React from "react";

const Cart = () => {
  const items = ["buds", "iphone", "ssd", "monitor"];

  return (
    <div>
      {items.length > 0 ? (
        <div>
          <h2>Your Cart Items:</h2>
          <ul>
            {items.map((value, index) => (
              <li key={index} style={{ listStyle: "none" }}>
                <h3>
                  Item {index + 1}: {value}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <h2>No items in cart.</h2>
      )}
    </div>
  );
};

export default Cart;

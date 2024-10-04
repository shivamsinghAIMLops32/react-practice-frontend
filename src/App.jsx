import React from "react";
import Person from "./components/Person";
import Product from './components/Product';

const App = () => {
  const name = "shivam";
  const age = 18;

  const products = [
    { pid: 1, productName: "lenovo", price: 17000 },
    { pid: 2, productName: "asus", price: 29000 }
  ];

  return (
    <div>
      <Person name={name} age={age} />
      {products.map((prod) => (
        <Product key={prod.pid} product={prod} />
      ))}
    </div>
  );
};

export default App;

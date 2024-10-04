import React from "react";
import Cart from "./components/Cart";

const Validpassword = () => {
  return <div>Password is valid!</div>;
};

const Invalidpassword = () => {
  return <div>Password is invalid!</div>;
};


const Password = ({ isValid }) => {
  return isValid ? <Validpassword /> : <Invalidpassword />;
};

const App = () => {
  return (
    <div>
      <Password isValid={false} />
      <Cart />
    </div>
  );
};

export default App;

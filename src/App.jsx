import React, { useState } from "react";
import UserList from "./components/UserList";
import ProductList from "./components/ProductList";

const App = () => {
  const data = [
    { username: "shiva", email: "shiav@doe.com", location: "india" },
    { username: "rosch", email: "brock@doe.com", location: "usa" },
    { username: "jazy", email: "roman@doe.com", location: "greece" },
  ];
  return (
    <div>
      <UserList />
      <ProductList/>
    </div>
  );
};

export default App;

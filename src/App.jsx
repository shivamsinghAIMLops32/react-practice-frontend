import React, { useState } from 'react';
import Greeting from './components/Greeting';
import ProductInfo from './components/ProductInfo';

const App = () => {
  const [name, setName] = useState("");
  
  const [date,setDate]= useState("");
  const handleInputChange = (e) => {
    setName(e.target.value); // Update state with input value
    setDate(new Date().toLocaleString())
  };

  
  return (
    <div>
      <input
        type="text"
        required
        placeholder="name"
        value={name}
        onChange={handleInputChange}
      />
      <Greeting name={name} date={date} />
      <ProductInfo/>
    </div>
  );
};

export default App;

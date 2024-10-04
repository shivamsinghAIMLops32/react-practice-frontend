import React, { useState } from "react";


const App = () => {
  
  const number = [1, 2, 3, 7, ,9,4];
  return (
    <div>
      <main>
        <ul>
          {number.map((num) => {
            const randomColor = `#${Math.floor(
              Math.random() * 16777215
            ).toString(16)}`;
            return (
              <li key={num} style={{ color: randomColor }}>
                {num}
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default App;

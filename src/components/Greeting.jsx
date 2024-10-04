import React from "react";

const Greeting = (props) => {
  
  return (
    <div>
      <h1>hello {props.name}</h1>
      <p>{props.date}</p>
    </div>
  );
};

export default Greeting;

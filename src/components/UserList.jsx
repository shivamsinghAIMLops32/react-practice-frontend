import React from "react";

const UserList = () => {

  const users = [{ id: 1, name: "shiva", age: 25 },{ id: 2, name: "raj", age: 30 }];

  return <div>{users.map(({id,name,age})=>(
    <ul key={id}>
        <li>Name : {name}</li>
        <li>Age : {age}</li>
    </ul>
  ))}</div>;
};

export default UserList;

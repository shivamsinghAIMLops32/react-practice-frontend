import React from 'react'

const ProductList = () => {
    const product =[{id:1,name:"shivam",price:"$200"},{id:2,name:"josh",price:"$1200"},{id:3,name:"roxy",price:"$1300"}]
  return (
    <div>{product.map((prod)=>(
        <ul key={prod.id}>
        <li>{prod.name}</li>
        <li>{prod.price}</li>
        </ul>
    ))}</div>
  )
}

export default ProductList
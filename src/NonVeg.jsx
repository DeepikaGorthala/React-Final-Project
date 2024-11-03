
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Store';

function NonVeg() {

  const nonVegProducts=useSelector(state=>state.products.nonVeg)
  const dispatch=useDispatch()
  const items=nonVegProducts.map( (product,index)=>
    <li key ={index}>
      {product.name}-${product.price.toFixed(2)}
      <button onClick ={()=>dispatch(addToCart(product))}>Add to cart</button>
      </li>
  );
  return (
    <>
    <h1 style={{color:"red"}}>non-veg items</h1>
    <ul>{items}</ul>
    </>
  )
}


export default NonVeg;
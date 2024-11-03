import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { addToCart } from "./store";

function Veg() {
    
    const vegProducts = useSelector(state => state.products.veg) 
    const dispatch=useDispatch()

    const items = vegProducts.map((product, index) =>
        <li key={index}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={()=>dispatch (addToCart(product))}>Add to cart</button>
        </li>
    );

      return (
         <>
            <h1 style={{ color: "red" }}>Veg items</h1>
            <ul>
                {items}
            </ul>
        </>
    );
}

export default Veg;

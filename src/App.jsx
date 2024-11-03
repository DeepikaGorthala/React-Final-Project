 import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
 import Home from "./Home";
 import NonVeg from "./NonVeg";
 import Veg from "./Veg";
 import CartPage from "./Cart"; // Renamed to avoid conflict with cart state
 import "./App.css";
 import ContactUs from "./ContactUs";
 import AboutUs from "./AboutUs";
 import PurchaseHistory from "./PurchaseHistory";
 import { useSelector } from "react-redux";


 function App() {
   const cartItems = useSelector((state) => state.cart || []); // Renamed variable to avoid conflict
   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

   return (
     <>
       <BrowserRouter>
         <nav>
           <Link to="/home">Home</Link>
           <Link to="/veg">Veg</Link>
           <Link to="/nonveg">NonVeg</Link>
           <Link to="/cart">Cart ({totalItems})</Link> {/* Display total items in cart */}
           <Link to="/purchasehistory">Purchase History</Link>
           <Link to="/aboutus">About Us</Link>
           <Link to="/contactus">Contact Us</Link>
         </nav>

        <Routes>
          <Route path="/home" element={<Home />} />
           <Route path="/veg" element={<Veg />} />
           <Route path="/nonveg" element={<NonVeg />} />
           <Route path="/cart" element={<CartPage />} /> {/* Used CartPage here */}
           <Route path="/purchasehistory" element={<PurchaseHistory />} />
           <Route path="/aboutus" element={<AboutUs />} />
           <Route path="/contactus" element={<ContactUs />} />
         </Routes>
       </BrowserRouter>
     </>
   );
 }

 export default App;
// import React, { useRef } from "react";


// function App() {
//   const num1Ref = useRef(null);
//   const num2Ref = useRef(null);
//   const resultRef = useRef(null);

//   const handleAddition = () => {
//     const num1 = parseFloat(num1Ref.current.value);
//     const num2 = parseFloat(num2Ref.current.value);
//     const sum = num1 + num2;
//     resultRef.current.value = sum;
//   };

//   return (
//     <>
//       <h1>Addition of Two Numbers</h1>
//       <input ref={num1Ref} type="number" placeholder="Enter first number" /><br></br>
//       <input ref={num2Ref} type="number" placeholder="Enter second number" /><br></br>
//       <button onClick={handleAddition}>Add</button><br></br>
//       <input ref={resultRef} type="text" placeholder="Result" readOnly />
//     </>
//   );
// }

// export default App;

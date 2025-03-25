import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Nav from "./nav";
import Items from "./itemlist";
import Cart from "./cart";
import { CartProvider } from "react-use-cart";

function App() {
  const [showCart, setShowCart] = useState(false); 

  return (
    <CartProvider>
      <div className="container">
        <Nav setShowCart={setShowCart} />
        <h2 className="text-center my-4">🛒 All Items</h2>
        {showCart ? <Cart /> : <Items />} 
      </div>
    </CartProvider>
  );
}

export default App;
